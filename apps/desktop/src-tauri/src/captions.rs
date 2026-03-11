use ffmpeg::{
    ChannelLayout, codec as avcodec,
    format::{self as avformat},
    software::resampling,
};
use futures::StreamExt;
use orbit_audio::AudioData;
use serde::{Deserialize, Serialize};
use specta::Type;
use std::fs::File;
use std::io::Read;
use std::path::PathBuf;
use std::sync::Arc;
use tauri::{AppHandle, Manager};
use tauri_specta::Event;
use tempfile::tempdir;
use tokio::io::AsyncWriteExt;
use tokio::sync::Mutex;
use tracing::instrument;
use whisper_rs::{FullParams, SamplingStrategy, WhisperContext, WhisperContextParameters};

pub use orbit_project::{CaptionSegment, CaptionSettings, CaptionWord};

use crate::http_client;

#[derive(Debug, Serialize, Deserialize, Type, Clone)]
pub struct CaptionData {
    pub segments: Vec<CaptionSegment>,
    pub settings: Option<CaptionSettings>,
}

impl Default for CaptionData {
    fn default() -> Self {
        Self {
            segments: Vec::new(),
            settings: Some(CaptionSettings::default()),
        }
    }
}

lazy_static::lazy_static! {
    static ref WHISPER_CONTEXT: Arc<Mutex<Option<Arc<WhisperContext>>>> = Arc::new(Mutex::new(None));
}

const WHISPER_SAMPLE_RATE: u32 = 16000;

#[tauri::command]
#[specta::specta]
#[instrument]
pub async fn create_dir(path: String, _recursive: bool) -> Result<(), String> {
    std::fs::create_dir_all(path).map_err(|e| format!("Failed to create directory: {e}"))
}

#[tauri::command]
#[specta::specta]
#[instrument]
pub async fn save_model_file(path: String, data: Vec<u8>) -> Result<(), String> {
    std::fs::write(&path, &data).map_err(|e| format!("Failed to write model file: {e}"))
}

async fn extract_audio_from_video(video_path: &str, output_path: &PathBuf) -> Result<(), String> {
    if video_path.ends_with(".orbit") {
        let meta_path = std::path::Path::new(video_path).join("recording-meta.json");
        let meta_content = std::fs::read_to_string(&meta_path)
            .map_err(|e| format!("Failed to read recording metadata: {e}"))?;

        let meta: serde_json::Value = serde_json::from_str(&meta_content)
            .map_err(|e| format!("Failed to parse recording metadata: {e}"))?;

        let base_path = std::path::Path::new(video_path);

        struct SegmentAudio {
            sources: Vec<PathBuf>,
        }

        let mut segment_audios: Vec<SegmentAudio> = Vec::new();

        if let Some(segments) = meta["segments"].as_array() {
            for segment in segments {
                let mut sources = Vec::new();
                let mut push_source = |path: Option<&str>| {
                    if let Some(path) = path {
                        let full_path = base_path.join(path);
                        if full_path.exists() && !sources.contains(&full_path) {
                            sources.push(full_path);
                        }
                    }
                };

                push_source(segment["system_audio"]["path"].as_str());
                push_source(segment["mic"]["path"].as_str());
                push_source(segment["audio"]["path"].as_str());

                if !sources.is_empty() {
                    segment_audios.push(SegmentAudio { sources });
                }
            }
        }

        if segment_audios.is_empty() {
            return Err("No audio sources found in the recording metadata".to_string());
        }

        let mut final_samples: Vec<f32> = Vec::new();

        for segment_audio in &segment_audios {
            let mut segment_samples: Vec<f32> = Vec::new();

            for source in &segment_audio.sources {
                match AudioData::from_file(source) {
                    Ok(audio) => {
                        let mono_samples = if audio.channels() > 1 {
                            convert_to_mono(audio.samples(), audio.channels() as usize)
                        } else {
                            audio.samples().to_vec()
                        };

                        if segment_samples.is_empty() {
                            segment_samples = mono_samples;
                        } else {
                            mix_samples(&mut segment_samples, &mono_samples);
                        }
                    }
                    Err(e) => {
                        log::warn!("Failed to process audio source {source:?}: {e}");
                        continue;
                    }
                }
            }

            if !segment_samples.is_empty() {
                final_samples.extend(segment_samples);
            }
        }

        let mixed_samples = final_samples;
        let channel_count = 1_usize;

        if mixed_samples.is_empty() {
            log::error!("No audio samples after processing all sources");
            return Err("Failed to process any audio sources".to_string());
        }

        let mut output = avformat::output(&output_path)
            .map_err(|e| format!("Failed to create output file: {e}"))?;

        let codec = avcodec::encoder::find_by_name("pcm_s16le")
            .ok_or_else(|| "PCM encoder not found".to_string())?;

        let mut encoder = avcodec::Context::new()
            .encoder()
            .audio()
            .map_err(|e| format!("Failed to create encoder: {e}"))?;

        encoder.set_rate(WHISPER_SAMPLE_RATE as i32);
        let channel_layout = ChannelLayout::MONO;
        encoder.set_channel_layout(channel_layout);
        encoder.set_format(avformat::Sample::I16(avformat::sample::Type::Packed));

        let mut encoder = encoder
            .open_as(codec)
            .map_err(|e| format!("Failed to open encoder: {e}"))?;

        let mut stream = output
            .add_stream(codec)
            .map_err(|e| format!("Failed to add stream: {e}"))?;
        stream.set_parameters(&encoder);

        output
            .write_header()
            .map_err(|e| format!("Failed to write header: {e}"))?;

        let mut resampler = resampling::Context::get(
            avformat::Sample::F32(avformat::sample::Type::Packed),
            channel_layout,
            AudioData::SAMPLE_RATE,
            avformat::Sample::I16(avformat::sample::Type::Packed),
            channel_layout,
            WHISPER_SAMPLE_RATE,
        )
        .map_err(|e| format!("Failed to create resampler: {e}"))?;

        let frame_size = encoder.frame_size() as usize;
        let frame_size = if frame_size == 0 { 1024 } else { frame_size };

        let mut frame = ffmpeg::frame::Audio::new(
            avformat::Sample::I16(avformat::sample::Type::Packed),
            frame_size,
            ChannelLayout::MONO,
        );
        frame.set_rate(WHISPER_SAMPLE_RATE);

        if !mixed_samples.is_empty() && frame_size * channel_count > 0 {
            for chunk in mixed_samples.chunks(frame_size * channel_count) {
                let mut input_frame = ffmpeg::frame::Audio::new(
                    avformat::Sample::F32(avformat::sample::Type::Packed),
                    chunk.len() / channel_count,
                    channel_layout,
                );
                input_frame.set_rate(AudioData::SAMPLE_RATE);

                let bytes = unsafe {
                    std::slice::from_raw_parts(
                        chunk.as_ptr() as *const u8,
                        std::mem::size_of_val(chunk),
                    )
                };
                input_frame.data_mut(0)[0..bytes.len()].copy_from_slice(bytes);

                let mut output_frame = ffmpeg::frame::Audio::new(
                    avformat::Sample::I16(avformat::sample::Type::Packed),
                    frame_size,
                    ChannelLayout::MONO,
                );
                output_frame.set_rate(WHISPER_SAMPLE_RATE);

                match resampler.run(&input_frame, &mut output_frame) {
                    Ok(_) => {}
                    Err(e) => {
                        log::error!("Failed to resample audio chunk: {e}");
                        continue;
                    }
                }

                if let Err(e) = encoder.send_frame(&output_frame) {
                    log::error!("Failed to send frame to encoder: {e}");
                    continue;
                }

                loop {
                    let mut packet = ffmpeg::Packet::empty();
                    match encoder.receive_packet(&mut packet) {
                        Ok(_) => {
                            if let Err(e) = packet.write_interleaved(&mut output) {
                                log::error!("Failed to write packet: {e}");
                            }
                        }
                        Err(_) => break,
                    }
                }
            }
        }

        encoder
            .send_eof()
            .map_err(|e| format!("Failed to send EOF: {e}"))?;

        loop {
            let mut packet = ffmpeg::Packet::empty();
            let received = encoder.receive_packet(&mut packet);

            if received.is_err() {
                break;
            }

            {
                if let Err(e) = packet.write_interleaved(&mut output) {
                    return Err(format!("Failed to write final packet: {e}"));
                }
            }
        }

        output
            .write_trailer()
            .map_err(|e| format!("Failed to write trailer: {e}"))?;

        Ok(())
    } else {
        let mut input =
            avformat::input(&video_path).map_err(|e| format!("Failed to open video file: {e}"))?;

        let stream = input
            .streams()
            .best(ffmpeg::media::Type::Audio)
            .ok_or_else(|| "No audio stream found".to_string())?;

        let codec_params = stream.parameters();

        let decoder_ctx = avcodec::Context::from_parameters(codec_params.clone())
            .map_err(|e| format!("Failed to create decoder context: {e}"))?;

        let mut decoder = decoder_ctx
            .decoder()
            .audio()
            .map_err(|e| format!("Failed to create decoder: {e}"))?;

        let decoder_format = decoder.format();
        let decoder_channel_layout = decoder.channel_layout();
        let decoder_rate = decoder.rate();

        let channel_layout = ChannelLayout::MONO;

        let mut encoder_ctx = avcodec::Context::new()
            .encoder()
            .audio()
            .map_err(|e| format!("Failed to create encoder: {e}"))?;

        encoder_ctx.set_rate(WHISPER_SAMPLE_RATE as i32);
        encoder_ctx.set_channel_layout(channel_layout);
        encoder_ctx.set_format(avformat::Sample::I16(avformat::sample::Type::Packed));

        let codec = avcodec::encoder::find_by_name("pcm_s16le")
            .ok_or_else(|| "PCM encoder not found".to_string())?;

        let mut encoder = encoder_ctx
            .open_as(codec)
            .map_err(|e| format!("Failed to open encoder: {e}"))?;

        let mut output = avformat::output(&output_path)
            .map_err(|e| format!("Failed to create output file: {e}"))?;

        let stream_params = {
            let mut output_stream = output
                .add_stream(codec)
                .map_err(|e| format!("Failed to add stream: {e}"))?;

            output_stream.set_parameters(&encoder);

            (output_stream.index(), output_stream.id())
        };

        output
            .write_header()
            .map_err(|e| format!("Failed to write header: {e}"))?;

        let mut resampler = resampling::Context::get(
            decoder_format,
            decoder_channel_layout,
            decoder_rate,
            avformat::Sample::I16(avformat::sample::Type::Packed),
            channel_layout,
            WHISPER_SAMPLE_RATE,
        )
        .map_err(|e| format!("Failed to create resampler: {e}"))?;

        let mut decoded_frame = ffmpeg::frame::Audio::empty();
        let mut resampled_frame = ffmpeg::frame::Audio::new(
            avformat::Sample::I16(avformat::sample::Type::Packed),
            encoder.frame_size() as usize,
            channel_layout,
        );

        let input_stream_index = stream.index();

        let mut packet_queue = Vec::new();

        {
            for (stream_idx, packet) in input.packets() {
                if stream_idx.index() == input_stream_index
                    && let Some(data) = packet.data()
                {
                    let mut cloned_packet = ffmpeg::Packet::copy(data);
                    if let Some(pts) = packet.pts() {
                        cloned_packet.set_pts(Some(pts));
                    }
                    if let Some(dts) = packet.dts() {
                        cloned_packet.set_dts(Some(dts));
                    }
                    packet_queue.push(cloned_packet);
                }
            }
        }

        for packet_res in packet_queue {
            if let Err(e) = decoder.send_packet(&packet_res) {
                log::warn!("Failed to send packet to decoder: {e}");
                continue;
            }

            while decoder.receive_frame(&mut decoded_frame).is_ok() {
                if let Err(e) = resampler.run(&decoded_frame, &mut resampled_frame) {
                    log::warn!("Failed to resample audio: {e}");
                    continue;
                }

                if let Err(e) = encoder.send_frame(&resampled_frame) {
                    log::warn!("Failed to send frame to encoder: {e}");
                    continue;
                }

                loop {
                    let mut packet = ffmpeg::Packet::empty();
                    match encoder.receive_packet(&mut packet) {
                        Ok(_) => {
                            packet.set_stream(stream_params.0);

                            if let Err(e) = packet.write_interleaved(&mut output) {
                                log::error!("Failed to write packet: {e}");
                            }
                        }
                        Err(_) => break,
                    }
                }
            }
        }

        decoder
            .send_eof()
            .map_err(|e| format!("Failed to send EOF to decoder: {e}"))?;

        while decoder.receive_frame(&mut decoded_frame).is_ok() {
            resampler
                .run(&decoded_frame, &mut resampled_frame)
                .map_err(|e| format!("Failed to resample final audio: {e}"))?;

            encoder
                .send_frame(&resampled_frame)
                .map_err(|e| format!("Failed to send final frame: {e}"))?;

            loop {
                let mut packet = ffmpeg::Packet::empty();
                let received = encoder.receive_packet(&mut packet);

                if received.is_err() {
                    break;
                }

                packet
                    .write_interleaved(&mut output)
                    .map_err(|e| format!("Failed to write final packet: {e}"))?;
            }
        }

        output
            .write_trailer()
            .map_err(|e| format!("Failed to write trailer: {e}"))?;

        Ok(())
    }
}

async fn get_whisper_context(model_path: &str) -> Result<Arc<WhisperContext>, String> {
    let mut context_guard = WHISPER_CONTEXT.lock().await;

    if let Some(ref existing) = *context_guard {
        return Ok(existing.clone());
    }

    let ctx = WhisperContext::new_with_params(model_path, WhisperContextParameters::default())
        .map_err(|e| format!("Failed to load Whisper model: {e}"))?;

    let ctx_arc = Arc::new(ctx);
    *context_guard = Some(ctx_arc.clone());

    Ok(ctx_arc)
}

fn is_special_token(token_text: &str) -> bool {
    let trimmed = token_text.trim();
    if trimmed.is_empty() {
        return true;
    }

    trimmed.contains('[')
        || trimmed.contains(']')
        || trimmed.contains("_TT_")
        || trimmed.contains("_BEG_")
        || trimmed.contains("<|")
}

fn process_with_whisper(
    audio_path: &PathBuf,
    context: Arc<WhisperContext>,
    language: &str,
) -> Result<CaptionData, String> {
    let mut params = FullParams::new(SamplingStrategy::Greedy { best_of: 1 });

    params.set_translate(false);
    params.set_print_special(false);
    params.set_print_progress(false);
    params.set_print_realtime(false);
    params.set_token_timestamps(true);
    params.set_language(Some(if language == "auto" { "auto" } else { language }));
    params.set_max_len(i32::MAX);

    let mut audio_file = File::open(audio_path)
        .map_err(|e| format!("Failed to open audio file: {e} at path: {audio_path:?}"))?;
    let mut audio_data = Vec::new();
    audio_file
        .read_to_end(&mut audio_data)
        .map_err(|e| format!("Failed to read audio file: {e}"))?;

    let mut audio_data_f32 = Vec::new();
    for i in (0..audio_data.len()).step_by(2) {
        if i + 1 < audio_data.len() {
            let sample = i16::from_le_bytes([audio_data[i], audio_data[i + 1]]) as f32 / 32768.0;
            audio_data_f32.push(sample);
        }
    }

    let mut state = context
        .create_state()
        .map_err(|e| format!("Failed to create Whisper state: {e}"))?;

    state
        .full(params, &audio_data_f32[..])
        .map_err(|e| format!("Failed to run Whisper transcription: {e}"))?;

    let num_segments = state
        .full_n_segments()
        .map_err(|e| format!("Failed to get number of segments: {e}"))?;

    let mut segments = Vec::new();

    for i in 0..num_segments {
        let start_i64 = state
            .full_get_segment_t0(i)
            .map_err(|e| format!("Failed to get segment start time: {e}"))?;
        let end_i64 = state
            .full_get_segment_t1(i)
            .map_err(|e| format!("Failed to get segment end time: {e}"))?;

        let start_time = (start_i64 as f32) / 100.0;
        let end_time = (end_i64 as f32) / 100.0;

        let mut words = Vec::new();
        let num_tokens = state
            .full_n_tokens(i)
            .map_err(|e| format!("Failed to get token count: {e}"))?;

        let mut current_word = String::new();
        let mut word_start: Option<f32> = None;
        let mut word_end: f32 = start_time;

        for t in 0..num_tokens {
            let token_text = state.full_get_token_text(i, t).unwrap_or_default();

            if is_special_token(&token_text) {
                continue;
            }

            let token_data = state.full_get_token_data(i, t).ok();

            if let Some(data) = token_data {
                let token_start = (data.t0 as f32) / 100.0;
                let token_end = (data.t1 as f32) / 100.0;

                if token_text.starts_with(' ') || token_text.starts_with('\n') {
                    if !current_word.is_empty()
                        && let Some(ws) = word_start
                    {
                        words.push(CaptionWord {
                            text: current_word.trim().to_string(),
                            start: ws,
                            end: word_end,
                        });
                    }
                    current_word = token_text.trim().to_string();
                    word_start = Some(token_start);
                } else {
                    if word_start.is_none() {
                        word_start = Some(token_start);
                    }
                    current_word.push_str(&token_text);
                }
                word_end = token_end;
            }
        }

        if !current_word.trim().is_empty()
            && let Some(ws) = word_start
        {
            words.push(CaptionWord {
                text: current_word.trim().to_string(),
                start: ws,
                end: word_end,
            });
        }

        if words.is_empty() {
            continue;
        }

        const MAX_WORDS_PER_SEGMENT: usize = 6;

        let word_chunks: Vec<Vec<CaptionWord>> = words
            .chunks(MAX_WORDS_PER_SEGMENT)
            .map(|chunk| chunk.to_vec())
            .collect();

        for (chunk_idx, chunk_words) in word_chunks.into_iter().enumerate() {
            let segment_text = chunk_words
                .iter()
                .map(|word| word.text.clone())
                .collect::<Vec<_>>()
                .join(" ");

            let segment_start = chunk_words
                .first()
                .map(|word| word.start)
                .unwrap_or(start_time);
            let segment_end = chunk_words.last().map(|word| word.end).unwrap_or(end_time);

            segments.push(CaptionSegment {
                id: format!("segment-{i}-{chunk_idx}"),
                start: segment_start,
                end: segment_end,
                text: segment_text,
                words: chunk_words,
            });
        }
    }

    Ok(CaptionData {
        segments,
        settings: Some(orbit_project::CaptionSettings::default()),
    })
}

#[tauri::command]
#[specta::specta]
#[instrument]
pub async fn transcribe_audio(
    video_path: String,
    model_path: String,
    language: String,
) -> Result<CaptionData, String> {
    if !std::path::Path::new(&video_path).exists() {
        return Err(format!("Video file not found at path: {video_path}"));
    }

    if !std::path::Path::new(&model_path).exists() {
        return Err(format!("Model file not found at path: {model_path}"));
    }

    let temp_dir = tempdir().map_err(|e| format!("Failed to create temporary directory: {e}"))?;
    let audio_path = temp_dir.path().join("audio.wav");

    extract_audio_from_video(&video_path, &audio_path)
        .await
        .map_err(|e| format!("Failed to extract audio from video: {e}"))?;

    if !audio_path.exists() {
        return Err("Failed to create audio file for transcription".to_string());
    }

    let context = get_whisper_context(&model_path)
        .await
        .map_err(|e| format!("Failed to initialize transcription model: {e}"))?;

    let whisper_result =
        tokio::task::spawn_blocking(move || process_with_whisper(&audio_path, context, &language))
            .await
            .map_err(|e| format!("Whisper task panicked: {e}"))?;

    match whisper_result {
        Ok(captions) => {
            if captions.segments.is_empty() {
                return Err("No speech detected in the audio".to_string());
            }
            Ok(captions)
        }
        Err(e) => Err(format!("Failed to transcribe audio: {e}")),
    }
}

#[tauri::command]
#[specta::specta]
#[instrument(skip(app))]
pub async fn save_captions(
    app: AppHandle,
    video_id: String,
    captions: CaptionData,
) -> Result<(), String> {
    let captions_dir = app_captions_dir(&app, &video_id)?;

    std::fs::create_dir_all(&captions_dir)
        .map_err(|e| format!("Failed to create captions directory: {e}"))?;

    let captions_path = captions_dir.join("captions.json");

    let settings = captions.settings.unwrap_or_default();

    let mut json_obj = serde_json::Map::new();

    let segments_array = serde_json::to_value(
        captions
            .segments
            .iter()
            .map(|seg| {
                let mut segment = serde_json::Map::new();
                segment.insert("id".to_string(), serde_json::Value::String(seg.id.clone()));
                segment.insert(
                    "start".to_string(),
                    serde_json::Value::Number(
                        serde_json::Number::from_f64(seg.start as f64).unwrap(),
                    ),
                );
                segment.insert(
                    "end".to_string(),
                    serde_json::Value::Number(
                        serde_json::Number::from_f64(seg.end as f64).unwrap(),
                    ),
                );
                segment.insert(
                    "text".to_string(),
                    serde_json::Value::String(seg.text.clone()),
                );
                let words_array: Vec<serde_json::Value> = seg
                    .words
                    .iter()
                    .map(|w| {
                        serde_json::json!({
                            "text": w.text,
                            "start": w.start,
                            "end": w.end
                        })
                    })
                    .collect();
                segment.insert("words".to_string(), serde_json::Value::Array(words_array));
                segment
            })
            .collect::<Vec<_>>(),
    )
    .map_err(|e| {
        tracing::error!("Failed to serialize captions segments: {}", e);
        format!("Failed to serialize captions: {e}")
    })?;

    json_obj.insert("segments".to_string(), segments_array);

    let mut settings_obj = serde_json::Map::new();
    settings_obj.insert(
        "enabled".to_string(),
        serde_json::Value::Bool(settings.enabled),
    );
    settings_obj.insert(
        "font".to_string(),
        serde_json::Value::String(settings.font.clone()),
    );
    settings_obj.insert(
        "size".to_string(),
        serde_json::Value::Number(serde_json::Number::from(settings.size)),
    );
    settings_obj.insert(
        "color".to_string(),
        serde_json::Value::String(settings.color.clone()),
    );
    settings_obj.insert(
        "backgroundColor".to_string(),
        serde_json::Value::String(settings.background_color.clone()),
    );
    settings_obj.insert(
        "backgroundOpacity".to_string(),
        serde_json::Value::Number(serde_json::Number::from(settings.background_opacity)),
    );
    settings_obj.insert(
        "position".to_string(),
        serde_json::Value::String(settings.position.clone()),
    );
    settings_obj.insert(
        "italic".to_string(),
        serde_json::Value::Bool(settings.italic),
    );
    settings_obj.insert(
        "fontWeight".to_string(),
        serde_json::Value::Number(serde_json::Number::from(settings.font_weight)),
    );
    settings_obj.insert(
        "outline".to_string(),
        serde_json::Value::Bool(settings.outline),
    );
    settings_obj.insert(
        "outlineColor".to_string(),
        serde_json::Value::String(settings.outline_color.clone()),
    );
    settings_obj.insert(
        "exportWithSubtitles".to_string(),
        serde_json::Value::Bool(settings.export_with_subtitles),
    );
    settings_obj.insert(
        "highlightColor".to_string(),
        serde_json::Value::String(settings.highlight_color.clone()),
    );
    settings_obj.insert(
        "fadeDuration".to_string(),
        serde_json::Value::Number(
            serde_json::Number::from_f64(settings.fade_duration as f64).unwrap(),
        ),
    );
    settings_obj.insert(
        "lingerDuration".to_string(),
        serde_json::Value::Number(
            serde_json::Number::from_f64(settings.linger_duration as f64).unwrap(),
        ),
    );
    settings_obj.insert(
        "wordTransitionDuration".to_string(),
        serde_json::Value::Number(
            serde_json::Number::from_f64(settings.word_transition_duration as f64).unwrap(),
        ),
    );
    settings_obj.insert(
        "activeWordHighlight".to_string(),
        serde_json::Value::Bool(settings.active_word_highlight),
    );

    json_obj.insert(
        "settings".to_string(),
        serde_json::Value::Object(settings_obj),
    );

    let json = serde_json::to_string_pretty(&json_obj).map_err(|e| {
        tracing::error!("Failed to serialize captions: {}", e);
        format!("Failed to serialize captions: {e}")
    })?;

    std::fs::write(captions_path, json).map_err(|e| {
        tracing::error!("Failed to write captions file: {}", e);
        format!("Failed to write captions file: {e}")
    })?;

    tracing::info!("Successfully saved captions");
    tracing::info!("=== SAVE CAPTIONS END ===");
    Ok(())
}

pub fn parse_captions_json(json: &str) -> Result<orbit_project::CaptionsData, String> {
    match serde_json::from_str::<serde_json::Value>(json) {
        Ok(json_value) => {
            if let Some(segments_array) = json_value.get("segments").and_then(|v| v.as_array()) {
                let mut segments = Vec::new();

                for segment in segments_array {
                    if let (Some(id), Some(start), Some(end), Some(text)) = (
                        segment.get("id").and_then(|v| v.as_str()),
                        segment.get("start").and_then(|v| v.as_f64()),
                        segment.get("end").and_then(|v| v.as_f64()),
                        segment.get("text").and_then(|v| v.as_str()),
                    ) {
                        let mut words = Vec::new();
                        if let Some(words_array) = segment.get("words").and_then(|v| v.as_array()) {
                            for word in words_array {
                                if let (Some(w_text), Some(w_start), Some(w_end)) = (
                                    word.get("text").and_then(|v| v.as_str()),
                                    word.get("start").and_then(|v| v.as_f64()),
                                    word.get("end").and_then(|v| v.as_f64()),
                                ) {
                                    words.push(orbit_project::CaptionWord {
                                        text: w_text.to_string(),
                                        start: w_start as f32,
                                        end: w_end as f32,
                                    });
                                }
                            }
                        }
                        segments.push(orbit_project::CaptionSegment {
                            id: id.to_string(),
                            start: start as f32,
                            end: end as f32,
                            text: text.to_string(),
                            words,
                        });
                    }
                }

                let settings = if let Some(settings_obj) = json_value.get("settings") {
                    let enabled = settings_obj
                        .get("enabled")
                        .and_then(|v| v.as_bool())
                        .unwrap_or_default();
                    let font = settings_obj
                        .get("font")
                        .and_then(|v| v.as_str())
                        .unwrap_or("System Sans-Serif")
                        .to_string();
                    let size = settings_obj
                        .get("size")
                        .and_then(|v| v.as_u64())
                        .unwrap_or(24) as u32;
                    let color = settings_obj
                        .get("color")
                        .and_then(|v| v.as_str())
                        .unwrap_or("#A0A0A0")
                        .to_string();

                    let background_color = settings_obj
                        .get("backgroundColor")
                        .or_else(|| settings_obj.get("background_color"))
                        .and_then(|v| v.as_str())
                        .unwrap_or("#000000")
                        .to_string();

                    let background_opacity = settings_obj
                        .get("backgroundOpacity")
                        .or_else(|| settings_obj.get("background_opacity"))
                        .and_then(|v| v.as_u64())
                        .unwrap_or(80) as u32;

                    let position = settings_obj
                        .get("position")
                        .and_then(|v| v.as_str())
                        .unwrap_or("bottom")
                        .to_string();
                    let italic = settings_obj
                        .get("italic")
                        .and_then(|v| v.as_bool())
                        .unwrap_or(false);
                    let font_weight = settings_obj
                        .get("fontWeight")
                        .or_else(|| settings_obj.get("font_weight"))
                        .and_then(|v| v.as_u64())
                        .unwrap_or(700) as u32;
                    let outline = settings_obj
                        .get("outline")
                        .and_then(|v| v.as_bool())
                        .unwrap_or(false);

                    let outline_color = settings_obj
                        .get("outlineColor")
                        .or_else(|| settings_obj.get("outline_color"))
                        .and_then(|v| v.as_str())
                        .unwrap_or("#000000")
                        .to_string();

                    let export_with_subtitles = settings_obj
                        .get("exportWithSubtitles")
                        .or_else(|| settings_obj.get("export_with_subtitles"))
                        .and_then(|v| v.as_bool())
                        .unwrap_or(false);

                    let highlight_color = settings_obj
                        .get("highlightColor")
                        .or_else(|| settings_obj.get("highlight_color"))
                        .and_then(|v| v.as_str())
                        .unwrap_or("#FFFFFF")
                        .to_string();

                    let fade_duration = settings_obj
                        .get("fadeDuration")
                        .or_else(|| settings_obj.get("fade_duration"))
                        .and_then(|v| v.as_f64())
                        .unwrap_or(0.15) as f32;

                    let linger_duration = settings_obj
                        .get("lingerDuration")
                        .or_else(|| settings_obj.get("linger_duration"))
                        .and_then(|v| v.as_f64())
                        .unwrap_or(0.4) as f32;

                    let word_transition_duration = settings_obj
                        .get("wordTransitionDuration")
                        .or_else(|| settings_obj.get("word_transition_duration"))
                        .and_then(|v| v.as_f64())
                        .unwrap_or(0.25) as f32;

                    let active_word_highlight = settings_obj
                        .get("activeWordHighlight")
                        .or_else(|| settings_obj.get("active_word_highlight"))
                        .and_then(|v| v.as_bool())
                        .unwrap_or(false);

                    orbit_project::CaptionSettings {
                        enabled,
                        font,
                        size,
                        color,
                        background_color,
                        background_opacity,
                        position,
                        italic,
                        font_weight,
                        outline,
                        outline_color,
                        export_with_subtitles,
                        highlight_color,
                        fade_duration,
                        linger_duration,
                        word_transition_duration,
                        active_word_highlight,
                    }
                } else {
                    orbit_project::CaptionSettings::default()
                };

                Ok(orbit_project::CaptionsData { segments, settings })
            } else {
                Err("Missing or invalid segments array in captions file".to_string())
            }
        }
        Err(e) => Err(format!("Failed to parse captions JSON: {e}")),
    }
}

#[tauri::command]
#[specta::specta]
#[instrument(skip(app))]
pub async fn load_captions(
    app: AppHandle,
    video_id: String,
) -> Result<Option<CaptionData>, String> {
    let captions_dir = app_captions_dir(&app, &video_id)?;
    let captions_path = captions_dir.join("captions.json");

    if !captions_path.exists() {
        return Ok(None);
    }

    let json = std::fs::read_to_string(&captions_path)
        .map_err(|e| format!("Failed to read captions file: {e}"))?;

    match parse_captions_json(&json) {
        Ok(project_captions) => {
            let tauri_captions = CaptionData {
                segments: project_captions.segments,
                settings: Some(project_captions.settings),
            };
            Ok(Some(tauri_captions))
        }
        Err(e) => Err(format!("Failed to parse captions: {e}")),
    }
}

fn app_captions_dir(_app: &AppHandle, video_id: &str) -> Result<PathBuf, String> {
    Ok(PathBuf::from(video_id))
}

#[derive(Debug, Serialize, Type, tauri_specta::Event, Clone)]
pub struct DownloadProgress {
    pub progress: f64,
    pub message: String,
}

#[tauri::command]
#[specta::specta]
#[instrument(skip(app))]
pub async fn download_whisper_model(
    app: AppHandle,
    model_name: String,
    output_path: String,
) -> Result<(), String> {
    let model_url = match model_name.as_str() {
        "tiny" => "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin",
        "base" => "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-base.bin",
        "small" => "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-small.bin",
        "medium" => "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-medium.bin",
        "large" => "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3.bin",
        "large-v3" => "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-large-v3.bin",
        _ => "https://huggingface.co/ggerganov/whisper.cpp/resolve/main/ggml-tiny.bin",
    };

    let response = app
        .state::<http_client::HttpClient>()
        .get(model_url)
        .send()
        .await
        .map_err(|e| format!("Failed to download model: {e}"))?;

    if !response.status().is_success() {
        return Err(format!(
            "Failed to download model: HTTP {}",
            response.status()
        ));
    }

    let total_size = response.content_length().unwrap_or(0);

    if let Some(parent) = std::path::Path::new(&output_path).parent() {
        std::fs::create_dir_all(parent)
            .map_err(|e| format!("Failed to create parent directories: {e}"))?;
    }
    let mut file = tokio::fs::File::create(&output_path)
        .await
        .map_err(|e| format!("Failed to create file: {e}"))?;

    let mut downloaded: u64 = 0;
    let mut stream = response.bytes_stream();

    while let Some(chunk_result) = stream.next().await {
        let chunk = chunk_result.map_err(|e| format!("Error while downloading: {e}"))?;

        file.write_all(&chunk)
            .await
            .map_err(|e| format!("Error while writing to file: {e}"))?;

        downloaded += chunk.len() as u64;

        let progress = if total_size > 0 {
            (downloaded as f64 / total_size as f64) * 100.0
        } else {
            0.0
        };

        DownloadProgress {
            progress,
            message: format!("Downloading model: {progress:.1}%"),
        }
        .emit(&app)
        .ok();
    }

    file.flush()
        .await
        .map_err(|e| format!("Failed to flush file: {e}"))?;

    Ok(())
}

#[tauri::command]
#[specta::specta]
#[instrument]
pub async fn check_model_exists(model_path: String) -> Result<bool, String> {
    Ok(std::path::Path::new(&model_path).exists())
}

#[tauri::command]
#[specta::specta]
#[instrument]
pub async fn delete_whisper_model(model_path: String) -> Result<(), String> {
    if !std::path::Path::new(&model_path).exists() {
        return Err(format!("Model file not found: {model_path}"));
    }

    tokio::fs::remove_file(&model_path)
        .await
        .map_err(|e| format!("Failed to delete model file: {e}"))?;

    Ok(())
}

fn captions_to_srt(captions: &CaptionData) -> String {
    let mut srt = String::new();
    for (i, segment) in captions.segments.iter().enumerate() {
        let start_time = format_srt_time(f64::from(segment.start));
        let end_time = format_srt_time(f64::from(segment.end));

        srt.push_str(&format!(
            "{}\n{} --> {}\n{}\n\n",
            i + 1,
            start_time,
            end_time,
            segment.text.trim()
        ));
    }
    srt
}

fn format_srt_time(seconds: f64) -> String {
    let hours = (seconds / 3600.0) as i32;
    let minutes = ((seconds % 3600.0) / 60.0) as i32;
    let secs = (seconds % 60.0) as i32;
    let millis = ((seconds % 1.0) * 1000.0) as i32;
    format!("{hours:02}:{minutes:02}:{secs:02},{millis:03}")
}

#[tauri::command]
#[specta::specta]
#[instrument(skip(app))]
pub async fn export_captions_srt(
    app: AppHandle,
    video_id: String,
) -> Result<Option<PathBuf>, String> {
    tracing::info!("Starting SRT export for video_id: {}", video_id);

    let captions = match load_captions(app.clone(), video_id.clone()).await? {
        Some(c) => {
            tracing::info!("Found {} caption segments to export", c.segments.len());
            c
        }
        None => {
            tracing::info!("No captions found for video_id: {}", video_id);
            return Ok(None);
        }
    };

    let captions_with_settings = CaptionData {
        segments: captions.segments,
        settings: captions
            .settings
            .or_else(|| Some(CaptionSettings::default())),
    };

    tracing::info!("Converting captions to SRT format");
    let srt_content = captions_to_srt(&captions_with_settings);

    let captions_dir = app_captions_dir(&app, &video_id)?;
    let srt_path = captions_dir.join("captions.srt");
    tracing::info!("Will write SRT file to: {:?}", srt_path);

    match std::fs::write(&srt_path, srt_content) {
        Ok(_) => {
            tracing::info!("Successfully wrote SRT file to: {:?}", srt_path);
            Ok(Some(srt_path))
        }
        Err(e) => {
            tracing::error!("Failed to write SRT file: {}", e);
            Err(format!("Failed to write SRT file: {e}"))
        }
    }
}

fn convert_to_mono(samples: &[f32], channels: usize) -> Vec<f32> {
    if channels == 1 {
        return samples.to_vec();
    }

    let sample_count = samples.len() / channels;
    let mut mono_samples = Vec::with_capacity(sample_count);

    for i in 0..sample_count {
        let mut sample_sum = 0.0;
        for c in 0..channels {
            sample_sum += samples[i * channels + c];
        }
        mono_samples.push(sample_sum / channels as f32);
    }

    mono_samples
}

fn mix_samples(dest: &mut [f32], source: &[f32]) -> usize {
    let length = dest.len().min(source.len());
    for i in 0..length {
        dest[i] = (dest[i] + source[i]) * 0.5;
    }
    length
}
