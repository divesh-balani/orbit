use crate::{
    SegmentMedia,
    audio::{AudioSegment, AudioSegmentTrack},
};

pub fn get_audio_segments(segments: &[SegmentMedia]) -> Vec<AudioSegment> {
    segments
        .iter()
        .map(|s| AudioSegment {
            tracks: [
                s.audio.clone().map(|a| {
                    AudioSegmentTrack::new(
                        a,
                        |c| c.mic_volume_db,
                        |c| match c.mic_stereo_mode {
                            orbit_project::StereoMode::Stereo => orbit_audio::StereoMode::Stereo,
                            orbit_project::StereoMode::MonoL => orbit_audio::StereoMode::MonoL,
                            orbit_project::StereoMode::MonoR => orbit_audio::StereoMode::MonoR,
                        },
                        |o| o.mic,
                    )
                }),
                s.system_audio.clone().map(|a| -> AudioSegmentTrack {
                    AudioSegmentTrack::new(
                        a,
                        |c| c.system_volume_db,
                        |_| orbit_audio::StereoMode::Stereo,
                        |o| o.system_audio,
                    )
                }),
            ]
            .into_iter()
            .flatten()
            .collect::<Vec<_>>(),
        })
        .collect::<Vec<_>>()
}
