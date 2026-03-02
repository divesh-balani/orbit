2026-03-02T03:12:01.998007Z TRACE orbit_recording::feeds::camera: CameraFeed.InputConnected
2026-03-02T03:12:01.998032Z TRACE orbit_recording::feeds::camera: Attaching new camera
2026-03-02T03:12:01.998087Z  INFO orbit_recording::feeds::camera: Camera capture thread: waiting for done signal for ModelID(ModelID { vid: "D288", pid: "CE50" })
2026-03-02T03:12:02.035060Z  INFO set_camera_input{id=Some(ModelID(ModelID { vid: "D288", pid: "CE50" })) skip_camera_window=None}: orbit_desktop_lib::panel_manager: Panel Camera: marked ready (op_id=0)
2026-03-02T03:12:02.038720Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new sender
2026-03-02T03:12:02.039965Z TRACE set_camera_input{id=Some(ModelID(ModelID { vid: "D288", pid: "CE50" })) skip_camera_window=None}: orbit_desktop_lib::camera: CameraPreview/resize_window
2026-03-02T03:12:02.073620Z TRACE set_camera_input{id=Some(ModelID(ModelID { vid: "D288", pid: "CE50" })) skip_camera_window=None}: orbit_desktop_lib::camera: CameraPreview/resize_window
2026-03-02T03:12:02.078444Z TRACE orbit_desktop_lib::camera: CameraPreview/resize_window
2026-03-02T03:12:02.207699Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.InputConnected
2026-03-02T03:12:02.378184Z TRACE orbit_desktop_lib::camera: CameraPreview/ReconfigureEvent.State(CameraPreviewState { size: 230.0, shape: Round, mirrored: false })
2026-03-02T03:12:02.378571Z TRACE orbit_desktop_lib::camera: CameraPreview/resize_window
2026-03-02T03:12:02.403990Z  INFO orbit_recording::feeds::microphone: 🎤 First audio callback - data size: 1920 bytes, format: F32
2026-03-02T03:12:03.450868Z  INFO orbit_recording::recovery: Found 1 recoverable segments in "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.09 AM.orbit" with estimated duration 0ns
2026-03-02T03:12:05.546435Z  INFO orbit_desktop_lib::recovery: Discarded incomplete recording: /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.09 AM.orbit
2026-03-02T03:12:08.811909Z DEBUG recording: orbit_desktop_lib::windows: InProgressRecording window: cursor_monitor=(0, 0, 1800, 1169), pos=(740, 899)
2026-03-02T03:12:08.852721Z DEBUG recording: orbit_desktop_lib::windows: InProgressRecording window created: label=in-progress-recording, inner_size=Ok(PhysicalSize { width: 640, height: 300 }), outer_position=Ok(PhysicalPosition { x: 1480, y: 548 })
2026-03-02T03:12:11.859328Z DEBUG recording: orbit_desktop_lib::recording: spawning start_recording actor
2026-03-02T03:12:11.859512Z TRACE orbit_recording::feeds::camera: CameraFeed.Lock
2026-03-02T03:12:11.868404Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.Lock
2026-03-02T03:12:11.869950Z TRACE recording:studio_recording: orbit_recording::studio_recording: creating recording actor
2026-03-02T03:12:11.870233Z DEBUG recording:studio_recording: orbit_recording::studio_recording: camera device info: CameraInfo {
    device_id: "1FD4B3A2-236E-492B-8CE5-255DD288CE50",
    model_id: Some(
        ModelID {
            vid: "D288",
            pid: "CE50",
        },
    ),
    display_name: "FaceTime HD Camera",
}
2026-03-02T03:12:11.870284Z DEBUG recording:studio_recording: orbit_recording::studio_recording: camera video info: VideoInfo {
    pixel_format: NV12,
    width: 1920,
    height: 1080,
    time_base: Rational(1/1000000),
    frame_rate: Rational(30/1),
}
2026-03-02T03:12:11.870328Z DEBUG recording:studio_recording: orbit_recording::studio_recording: mic audio info: AudioInfo {
    sample_format: F32(
        Planar,
    ),
    sample_rate: 24000,
    channels: 1,
    time_base: Rational(1/1000000),
    buffer_size: 1920,
    is_wireless_transport: true,
}
2026-03-02T03:12:11.870823Z TRACE recording:studio_recording:segment{index=0}: orbit_recording::studio_recording: preparing segment pipeline 0
2026-03-02T03:12:11.870952Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Screen capture buffer size buffer_size=15
2026-03-02T03:12:11.871938Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: SCK content filter: Retained(ContentFilter(<SCContentFilter: 0x443695430>))
2026-03-02T03:12:11.871999Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: size: PhysicalSize { width: 3600.0, height: 2338.0 }
2026-03-02T03:12:11.872048Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Screen capture queue depth queue_depth=8 max_queue_depth=8
2026-03-02T03:12:11.872169Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Pixel buffer pool initialized min_count=20 width=3600 height=2338
2026-03-02T03:12:11.872838Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: orbit_recording::output_pipeline::core: Task started
2026-03-02T03:12:11.873031Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-02T03:12:11.873042Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-02T03:12:11.873098Z  INFO recording:studio_recording:segment{index=0}:screen-out: orbit_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display
2026-03-02T03:12:11.873317Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new native sender
2026-03-02T03:12:11.873610Z  INFO recording:studio_recording:segment{index=0}:camera-out: orbit_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera
2026-03-02T03:12:11.873620Z DEBUG orbit_recording::sources::native_camera: Native camera source task started
2026-03-02T03:12:11.873635Z TRACE recording:studio_recording:segment{index=0}:camera-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-02T03:12:11.873759Z TRACE recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-02T03:12:11.874899Z  INFO recording:studio_recording:segment{index=0}:mic-out: orbit_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/audio-input.m4a
2026-03-02T03:12:11.875226Z TRACE recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Task started
2026-03-02T03:12:11.875230Z TRACE recording:studio_recording:segment{index=0}:system-audio-out:{task="system-audio"}: orbit_recording::output_pipeline::core: Task started
2026-03-02T03:12:11.875485Z  INFO recording:studio_recording:segment{index=0}:system-audio-out: orbit_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/system_audio.m4a
2026-03-02T03:12:11.875494Z TRACE recording:studio_recording:segment{index=0}:system-audio-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Task started
2026-03-02T03:12:11.875925Z  INFO recording:studio_recording:segment{index=0}: orbit_recording::studio_recording: pipeline playing
2026-03-02T03:12:11.875991Z TRACE recording:studio_recording: orbit_recording::studio_recording: spawning recording actor
2026-03-02T03:12:11.882420Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Minor backward timestamp detected, using last valid stream="video" backward_secs=0.031008083
2026-03-02T03:12:11.882510Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: M4S camera muxer encoder channel buffer size buffer_size=60
2026-03-02T03:12:11.883053Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Encoder pixel format configuration encoder=h264_videotoolbox input_format=NV12 output_format=NV12 needs_pixel_conversion=false external_conversion=false
2026-03-02T03:12:11.883100Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: No pixel format conversion needed (zero-copy path) encoder=h264_videotoolbox
2026-03-02T03:12:11.931698Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 0 image to: "cursor_0.png"
2026-03-02T03:12:11.972915Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: M4S muxer encoder channel buffer size buffer_size=60
2026-03-02T03:12:11.973549Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Target FPS exceeds VideoToolbox capability, using software encoder width=3600 height=2338 target_fps=60.0 hw_max_fps=55.0
2026-03-02T03:12:11.973891Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Encoder pixel format configuration encoder=libx264 input_format=NV12 output_format=NV12 needs_pixel_conversion=false external_conversion=false
2026-03-02T03:12:11.974268Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: No pixel format conversion needed (zero-copy path) encoder=libx264
[libx264 @ 0x42cd17fc0] using cpu capabilities: ARMv8 NEON
[libx264 @ 0x42cd17fc0] profile Constrained Baseline, level 6.1, 4:2:0, 8-bit
2026-03-02T03:12:11.982579Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Target FPS exceeds VideoToolbox capability, using software encoder width=3600 height=2338 target_fps=60.0 hw_max_fps=55.0
2026-03-02T03:12:11.982673Z  WARN recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Using SOFTWARE encoder for high throughput (hardware cannot keep up at this resolution/fps) encoder=libx264 width=3600 height=2338 fps=60.0 preset=Ultrafast
[dash @ 0x4436a4180] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/init.mp4' for writing
2026-03-02T03:12:11.983220Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: FFmpeg DASH muxer state after write_header() manifest_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/dash_manifest.mpd manifest_exists=true init_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/init.mp4 init_exists=true
2026-03-02T03:12:11.983270Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: Initialized segmented video encoder with FFmpeg DASH muxer (init.mp4 + m4s segments). CRITICAL: init.mp4 is required for segment playback/recovery. path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display segment_duration_secs=3 width=3600 height=2338
2026-03-02T03:12:12.007997Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: Started M4S fragmented video encoder path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display
[dash @ 0x4436a4180] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/segment_001.m4s.tmp' for writing
2026-03-02T03:12:12.026866Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=14 count=1
2026-03-02T03:12:12.039196Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=9 count=2
2026-03-02T03:12:12.039469Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Selected hardware H264 encoder encoder=h264_videotoolbox width=1920 height=1080 fps=30.0
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/init.mp4' for writing
2026-03-02T03:12:12.040003Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: FFmpeg DASH muxer state after write_header() manifest_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/dash_manifest.mpd manifest_exists=true init_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/init.mp4 init_exists=true
2026-03-02T03:12:12.040063Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: Initialized segmented video encoder with FFmpeg DASH muxer (init.mp4 + m4s segments). CRITICAL: init.mp4 is required for segment playback/recovery. path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera segment_duration_secs=3 width=1920 height=1080
2026-03-02T03:12:12.050612Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: Started M4S fragmented camera encoder path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera
2026-03-02T03:12:12.050719Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Timestamp anomaly burst resolved - valid timestamps resumed stream="video" burst_length=1 total_anomalies=1 resync_count=0
2026-03-02T03:12:12.053899Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=11 count=3
2026-03-02T03:12:12.066207Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=9 count=4
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/segment_001.m4s.tmp' for writing
2026-03-02T03:12:12.075930Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: Camera encoder.queue_frame exceeded 5ms threshold elapsed_ms=24 count=1
2026-03-02T03:12:12.077729Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=8 count=5
2026-03-02T03:12:12.459307Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-02T03:12:12.459360Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-02T03:12:12.459384Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-02T03:12:13.460523Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-02T03:12:13.460572Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-02T03:12:13.460595Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-02T03:12:13.635492Z DEBUG orbit_recording::sources::native_camera: Native camera source: sent 30 frames, dropped 0 in 1.761813875s
2026-03-02T03:12:13.941350Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Capturing video baseline offset after warmup wall_clock_secs=2.070524833 camera_secs=2.00685 baseline_offset_secs=-0.06367483299999988
2026-03-02T03:12:13.968531Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Capturing video baseline offset after warmup wall_clock_secs=2.0977665 camera_secs=2.012508875 baseline_offset_secs=-0.08525762500000011
2026-03-02T03:12:14.462509Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-02T03:12:14.462555Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-02T03:12:14.462576Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-02T03:12:14.891005Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=1 duration_secs=3.013553333 frames=135
2026-03-02T03:12:14.913303Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=1 duration_secs=3.041688583 frames=51
2026-03-02T03:12:15.461487Z DEBUG orbit_recording::sources::native_camera: Native camera source: sent 60 frames, dropped 0 in 3.587670166s
2026-03-02T03:12:15.467087Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-02T03:12:15.467484Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-02T03:12:15.467542Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/dash_manifest.mpd.tmp' for writing
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/media_0.m3u8.tmp' for writing
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/master.m3u8.tmp' for writing
[mp4 @ 0x10e63e470] Packet duration: -257 / dts: 328528 is out of range
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/segment_002.m4s.tmp' for writing
[dash @ 0x4436a4180] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x4436a4180] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x4436a4180] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/master.m3u8.tmp' for writing
[dash @ 0x4436a4180] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/segment_002.m4s.tmp' for writing
2026-03-02T03:12:16.469569Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-02T03:12:16.469630Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-02T03:12:16.469656Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-02T03:12:16.819483Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=6 count=100
2026-03-02T03:12:16.878757Z DEBUG orbit_recording::sources::microphone: Microphone audio frames forwarded captured=250
2026-03-02T03:12:16.878782Z DEBUG recording:studio_recording:segment{index=0}:system-audio-out: orbit_recording::sources::screen_capture::macos: System audio frames captured captured=242
2026-03-02T03:12:17.029016Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=236 drops=0 drop_rate_pct="0.0%" total_frames=236
2026-03-02T03:12:17.285058Z DEBUG orbit_recording::sources::native_camera: Native camera source: sent 90 frames, dropped 0 in 5.411401791s
2026-03-02T03:12:17.474064Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-02T03:12:17.474110Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-02T03:12:17.474130Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-02T03:12:17.925614Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=2 duration_secs=3.034071459 frames=144
2026-03-02T03:12:17.958830Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=2 duration_secs=3.044487875 frames=50
2026-03-02T03:12:18.334666Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Video drift correction status frame_count=300 wall_clock_secs=6.46392325 camera_secs=6.379195 corrected_secs=6.46392325 drift_ratio=1.0132819658279766 baseline_offset=-0.08525762500000011 total_pause_ms=0
2026-03-02T03:12:18.476647Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-02T03:12:18.476691Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-02T03:12:18.476715Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
[dash @ 0x4436a0cd0] Segment durations differ too much, enable use_timeline and use_template, or keep a stricter keyframe interval
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/dash_manifest.mpd.tmp' for writing
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/media_0.m3u8.tmp' for writing
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/segment_003.m4s.tmp' for writing
2026-03-02T03:12:19.110675Z DEBUG orbit_recording::sources::native_camera: Native camera source: sent 120 frames, dropped 0 in 7.237040041s
2026-03-02T03:12:19.479913Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-02T03:12:19.479960Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-02T03:12:19.479982Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
[dash @ 0x4436a4180] Segment durations differ too much, enable use_timeline and use_template, or keep a stricter keyframe interval
[dash @ 0x4436a4180] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x4436a4180] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[mp4 @ 0x443d9f6e0] Packet duration: -1324 / dts: 757113 is out of range
[dash @ 0x4436a4180] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/segment_003.m4s.tmp' for writing
2026-03-02T03:12:20.481276Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-02T03:12:20.481325Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-02T03:12:20.481350Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-02T03:12:20.926531Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=3 duration_secs=3.001617 frames=108
2026-03-02T03:12:20.933142Z DEBUG orbit_recording::sources::native_camera: Native camera source: sent 150 frames, dropped 0 in 9.059544916s
2026-03-02T03:12:20.995145Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=3 duration_secs=3.037257875 frames=50
2026-03-02T03:12:21.483229Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-02T03:12:21.483277Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-02T03:12:21.483298Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
[dash @ 0x4436a0cd0] Segment durations differ too much, enable use_timeline and use_template, or keep a stricter keyframe interval
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/dash_manifest.mpd.tmp' for writing
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/media_0.m3u8.tmp' for writing
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/segment_004.m4s.tmp' for writing
2026-03-02T03:12:21.864169Z DEBUG recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Audio timestamp status frame_count=500 sample_based_secs=9.98 corrected_secs=9.98 total_samples=240000 total_pause_ms=0 silence_insertions=0 total_silence_ms=0
2026-03-02T03:12:21.879423Z DEBUG orbit_recording::sources::microphone: Microphone audio frames forwarded captured=500
2026-03-02T03:12:21.879444Z DEBUG recording:studio_recording:segment{index=0}:system-audio-out: orbit_recording::sources::screen_capture::macos: System audio frames captured captured=493
2026-03-02T03:12:22.026454Z DEBUG recording:studio_recording:segment{index=0}:system-audio-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Audio timestamp status frame_count=500 sample_based_secs=9.98 corrected_secs=9.98 total_samples=480000 total_pause_ms=0 silence_insertions=0 total_silence_ms=0
2026-03-02T03:12:22.030604Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=201 drops=0 drop_rate_pct="0.0%" total_frames=437
2026-03-02T03:12:22.485170Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-02T03:12:22.485256Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-02T03:12:22.485332Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-02T03:12:22.757273Z DEBUG orbit_recording::sources::native_camera: Native camera source: sent 180 frames, dropped 0 in 10.883660833s
2026-03-02T03:12:22.936824Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 1 image to: "cursor_1.png"
2026-03-02T03:12:23.486623Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-02T03:12:23.486669Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-02T03:12:23.486693Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-02T03:12:23.936046Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=4 duration_secs=3.010175708 frames=135
2026-03-02T03:12:23.938066Z  INFO orbit_recording::studio_recording: pipeline shuting down
2026-03-02T03:12:23.938151Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video cancelled, draining remaining frames from channel
2026-03-02T03:12:23.938160Z  INFO recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-02T03:12:23.938231Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Capturer stopping after creating 522 video frames
2026-03-02T03:12:23.938248Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="capture-video"}: orbit_recording::sources::native_camera: Native camera source: stopping
2026-03-02T03:12:23.938272Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-02T03:12:23.938297Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video cancelled, draining remaining frames from channel
2026-03-02T03:12:23.938342Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-02T03:12:23.938388Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-02T03:12:23.938465Z DEBUG orbit_recording::sources::native_camera: Native camera source: received stop signal
2026-03-02T03:12:23.938486Z  INFO orbit_recording::sources::native_camera: Native camera source finished: 199 received, 199 sent, 0 dropped in 12.064921375s
2026-03-02T03:12:23.938535Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Timestamp anomaly statistics stream="video" anomaly_count=1 wall_clock_confirmed_jumps=0 total_backward_skew_secs="0.031" max_backward_skew_secs="0.031" total_forward_skew_secs="0.000" max_forward_skew_secs="0.000" resync_count=0 accumulated_compensation_secs="0.000"
2026-03-02T03:12:23.938586Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: M4S camera encoder timing summary total_frames=199 slow_converts=0 slow_encodes=1 slow_convert_pct="0.0%" slow_encode_pct="0.5%"
2026-03-02T03:12:23.938585Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video finished after cancellation, total 199 frames
2026-03-02T03:12:23.938630Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-02T03:12:23.938707Z TRACE orbit_recording::output_pipeline::macos_fragmented_m4s: M4S camera encoder channel already closed during finish: sending on a closed channel
2026-03-02T03:12:23.940594Z  WARN orbit_recording::output_pipeline::core: Muxer streams had failure: Unknown error: -67
[aac @ 0x11ae0c4c0] Qavg: 64498.098
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/dash_manifest.mpd.tmp' for writing
[dash @ 0x4436a0cd0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/media_0.m3u8.tmp' for writing
2026-03-02T03:12:23.946611Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video finished after cancellation, total 522 frames
2026-03-02T03:12:23.946614Z  INFO orbit_enc_ffmpeg::mux::segmented_stream: Recovered orphaned segment /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera/segment_004.m4s with 4927980 bytes, estimated duration 2.944632459s
2026-03-02T03:12:23.946634Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: M4S encoder timing summary (using SegmentedVideoEncoder) total_frames=522 slow_converts=0 slow_encodes=184 slow_convert_pct="0.0%" slow_encode_pct="35.2%"
2026-03-02T03:12:23.946617Z  INFO recording:studio_recording:segment{index=0}:system-audio-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-02T03:12:23.946663Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-02T03:12:23.947228Z TRACE orbit_recording::output_pipeline::macos_fragmented_m4s: M4S encoder channel already closed during finish: sending on a closed channel
2026-03-02T03:12:23.947246Z  INFO recording:studio_recording:segment{index=0}:system-audio-out:{task="system-audio"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-02T03:12:23.948506Z  WARN orbit_recording::output_pipeline::core: Muxer streams had failure: Unknown error: -67
[aac @ 0x10e62f430] Qavg: 63252.750
[dash @ 0x4436a4180] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x4436a4180] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[libx264 @ 0x42cd17fc0] frame I:3     Avg QP: 7.67  size:1699403
[libx264 @ 0x42cd17fc0] frame P:519   Avg QP: 1.35  size: 79436
[libx264 @ 0x42cd17fc0] mb I  I16..4: 100.0%  0.0%  0.0%
[libx264 @ 0x42cd17fc0] mb P  I16..4:  0.8%  0.0%  0.0%  P16..4: 20.7%  0.0%  0.0%  0.0%  0.0%    skip:78.4%
[libx264 @ 0x42cd17fc0] final ratefactor: -1.45
[libx264 @ 0x42cd17fc0] coded y,uvDC,uvAC intra: 56.1% 42.3% 41.1% inter: 8.6% 2.7% 2.6%
[libx264 @ 0x42cd17fc0] i16 v,h,dc,p: 52% 32% 12%  4%
[libx264 @ 0x42cd17fc0] i8c dc,h,v,p: 65% 21% 13%  1%
[libx264 @ 0x42cd17fc0] kb/s:42597.93
2026-03-02T03:12:23.964144Z  INFO orbit_recording::studio_recording: pipeline shutdown
2026-03-02T03:12:23.964165Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: cursor recorder done
2026-03-02T03:12:23.965498Z  INFO recording: orbit_desktop_lib::recording: recording wait actor done: Ok(())
2026-03-02T03:12:23.965529Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.Unlock
2026-03-02T03:12:23.966090Z  INFO stop_recording: orbit_desktop_lib::recording: Recording has fragments that need remuxing - opening editor immediately
2026-03-02T03:12:23.966361Z TRACE orbit_recording::feeds::camera: CameraFeed.Unlock
2026-03-02T03:12:23.966792Z  WARN orbit_desktop_lib: Camera window CloseRequested event received!
2026-03-02T03:12:23.967082Z  INFO orbit_desktop_lib::frame_ws: WebSocket server listening on port 57117
2026-03-02T03:12:23.967125Z  INFO orbit_desktop_lib: Recording is being finalized, waiting for completion...
2026-03-02T03:12:23.973897Z  WARN orbit_recording::feeds::camera: Native camera sender 0 disconnected at frame 366, will be removed
2026-03-02T03:12:23.973980Z DEBUG orbit_recording::feeds::camera: Removing 1 disconnected native camera senders
2026-03-02T03:12:24.020818Z  INFO orbit_desktop_lib::recording: Starting background finalization for recording
2026-03-02T03:12:24.022214Z TRACE orbit_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-02T03:12:24.022348Z  WARN orbit_recording::feeds::camera: Camera capture thread: done signal received for ModelID(ModelID { vid: "D288", pid: "CE50" }), result=Ok(())
2026-03-02T03:12:24.023973Z  INFO orbit_recording::recovery: Found 1 recoverable segments in "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" with estimated duration 0ns
2026-03-02T03:12:24.024089Z  INFO orbit_recording::recovery: Concatenating 3 M4S display segments with init to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display.mp4"
2026-03-02T03:12:24.137036Z  INFO orbit_recording::recovery: Concatenating 4 M4S camera segments with init to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera.mp4"
2026-03-02T03:12:24.165914Z  INFO orbit_recording::recovery: Transcoding single mic fragment to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/audio-input.ogg"
2026-03-02T03:12:24.204528Z  INFO orbit_recording::recovery: Transcoding single system audio fragment to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/system_audio.ogg"
2026-03-02T03:12:24.240109Z  INFO orbit_recording::recovery: Validating recovered display video: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display.mp4"
2026-03-02T03:12:24.257451Z  WARN orbit_recording::feeds::camera: Camera capture thread: stopped capture of ModelID(ModelID { vid: "D288", pid: "CE50" })
2026-03-02T03:12:24.370861Z  INFO orbit_recording::recovery: Display video validation passed
2026-03-02T03:12:24.370944Z  INFO orbit_recording::recovery: Validating recovered camera video: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera.mp4"
2026-03-02T03:12:24.379064Z  INFO orbit_recording::recovery: Camera video validation passed
2026-03-02T03:12:24.493790Z  INFO orbit_recording::recovery: Created project configuration with timeline for recovered recording
2026-03-02T03:12:24.493850Z  INFO orbit_recording::recovery: Successfully recovered recording at "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit"
2026-03-02T03:12:24.493975Z  INFO orbit_desktop_lib::recording: Successfully remuxed fragmented recording
2026-03-02T03:12:24.561791Z  INFO orbit_desktop_lib::recording: Background finalization completed for recording
2026-03-02T03:12:24.561966Z  INFO orbit_desktop_lib: Recording finalization completed
2026-03-02T03:12:24.562413Z DEBUG orbit_project::meta: Checking for captions at: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/captions.json"
2026-03-02T03:12:24.562450Z DEBUG orbit_project::meta: No captions.json found
[swscaler @ 0x121f40000] No accelerated colorspace conversion found from yuv420p to rgb24.
2026-03-02T03:12:24.779620Z  INFO orbit_video_decode::avassetreader: Built keyframe index path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/display.mp4 keyframe_count=3 fps=43.225915675421035 duration_secs=12.076088888888888 build_ms=120
2026-03-02T03:12:24.779983Z  INFO orbit_rendering::decoder::multi_position: Configured decoder pool for video duration duration_secs=12.076088888888888 optimal_pool_size=5 reposition_threshold=5.0
2026-03-02T03:12:25.009511Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=3.8549888134002686 decoder_index=1
2026-03-02T03:12:25.079333Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=8.427078247070313 decoder_index=2
2026-03-02T03:12:25.079434Z  INFO orbit_rendering::decoder::avassetreader: Initialized multi-position decoder pool decoder_count=3 optimal_pool_size=5 reposition_threshold=5.0 fps=43 duration_secs=12.076088888888888 total_frames_estimate=520
2026-03-02T03:12:25.079603Z  INFO orbit_rendering::decoder: Video 'screen' using AVAssetReader (hardware) decoder (3600x2338)
2026-03-02T03:12:25.097669Z  INFO orbit_video_decode::avassetreader: Built keyframe index path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/camera.mp4 keyframe_count=17 fps=16.44119312939889 duration_secs=12.103744444444445 build_ms=17
2026-03-02T03:12:25.097857Z  INFO orbit_rendering::decoder::multi_position: Configured decoder pool for video duration duration_secs=12.103744444444445 optimal_pool_size=5 reposition_threshold=5.0
2026-03-02T03:12:25.118823Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=2.921877861022949 decoder_index=1
2026-03-02T03:12:25.127085Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=5.840966701507568 decoder_index=2
2026-03-02T03:12:25.134429Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=8.759088516235352 decoder_index=3
2026-03-02T03:12:25.149406Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=11.681455612182617 decoder_index=4
2026-03-02T03:12:25.149452Z  INFO orbit_rendering::decoder::avassetreader: Initialized multi-position decoder pool decoder_count=5 optimal_pool_size=5 reposition_threshold=5.0 fps=16 duration_secs=12.103744444444445 total_frames_estimate=194
2026-03-02T03:12:25.149539Z  INFO orbit_rendering::decoder: Video 'camera' using AVAssetReader (hardware) decoder (1920x1080)
2026-03-02T03:12:25.149667Z  INFO orbit_rendering::yuv_converter: Creating shared YUV converter pipelines (shader compilation)
2026-03-02T03:12:25.155169Z  INFO orbit_rendering::yuv_converter: Shared YUV converter pipelines created successfully
2026-03-02T03:12:25.179206Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-02T03:12:25.184519Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-02T03:12:25.184850Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
[BABEL] Note: The code generator has deoptimised the styling of /Users/dives/Desktop/Projects/orbit/apps/desktop/node_modules/.vinxi/client/deps/effect.js as it exceeds the max of 500KB.
Pretty name: Orbit 2026-03-02 at 04.12.11
2026-03-02T03:12:26.770098Z  INFO orbit_desktop_lib::frame_ws: Socket connection established
2026-03-02T03:12:26.801896Z  INFO orbit_rendering::yuv_converter: Reallocating YUV converter textures for larger video old_width=1920 old_height=1080 new_width=3648 new_height=2368
2026-03-02T03:12:26.878244Z  INFO orbit_rendering::yuv_converter: Reallocating YUV converter textures for larger video old_width=1920 old_height=1080 new_width=1920 new_height=1088
2026-03-02T03:12:26.880939Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=603 dropped=147 silence_frames=0 drop_pct="19.6%" is_wireless=true send_timeout_ms=50
2026-03-02T03:12:26.916167Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=0 mb_per_sec="0.6" avg_kb="1110.6" dims="1080x702" format="NV12"
2026-03-02T03:12:26.938139Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit"}: orbit_desktop_lib::captions: === LOAD CAPTIONS START ===
2026-03-02T03:12:26.938200Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit"}: orbit_desktop_lib::captions: Loading captions for video_id: /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit
2026-03-02T03:12:26.938231Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit"}: orbit_desktop_lib::captions: Getting captions directory for video_id: /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit
2026-03-02T03:12:26.938267Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit"}: orbit_desktop_lib::captions: Captions directory path: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM"
2026-03-02T03:12:26.938501Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit"}: orbit_desktop_lib::captions: No captions file found at: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM/captions.json"
2026-03-02T03:12:26.938523Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit"}: orbit_desktop_lib::captions: === LOAD CAPTIONS END (no file) ===
2026-03-02T03:12:28.453916Z  INFO orbit_rendering::frame_pipeline: Resizing render session textures old_width=1080 old_height=702 new_width=1664 new_height=1080
2026-03-02T03:12:30.971895Z  INFO orbit_editor::playback: Creating pre-rendered audio stream duration_secs=12.123833 start_playhead=0.0 sample_rate=24000
2026-03-02T03:12:30.972122Z  INFO orbit_editor::audio: Pre-rendering audio for playback duration_secs=12.123833 sample_rate=24000 channels=2
2026-03-02T03:12:30.972281Z  INFO orbit_editor::audio: Audio resampler created with high-quality settings (filter_size=128) input_rate=48000 output_rate=24000 output_format=F32(Packed)
2026-03-02T03:12:31.025611Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=1 mb_per_sec="3.3" avg_kb="2125.2" dims="1664x1080" format="NV12"
2026-03-02T03:12:31.085935Z  INFO orbit_editor::audio: Audio pre-rendering complete total_samples=582656 memory_mb=2
2026-03-02T03:12:31.099934Z  INFO orbit_editor::playback: Pre-rendered audio stream created successfully
2026-03-02T03:12:31.882475Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=603 dropped=397 silence_frames=0 drop_pct="39.7%" is_wireless=true send_timeout_ms=50
2026-03-02T03:12:32.977151Z  INFO orbit_editor::playback: Playback stats effective_fps="60.4" total_rendered=120 total_skipped=0 cache_hits=0 prefetch_hits=120 sync_decodes=0 prefetch_buffer=74
2026-03-02T03:12:33.042690Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=58 mb_per_sec="156.4" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:12:34.977320Z  INFO orbit_editor::playback: Playback stats effective_fps="60.2" total_rendered=240 total_skipped=0 cache_hits=0 prefetch_hits=240 sync_decodes=0 prefetch_buffer=63
2026-03-02T03:12:35.055876Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=58 mb_per_sec="156.4" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:12:35.211806Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: === TRANSCRIBE AUDIO COMMAND START ===
2026-03-02T03:12:35.211922Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Video path: /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit
2026-03-02T03:12:35.212059Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Model path: /Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin
2026-03-02T03:12:35.212139Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Language: auto
2026-03-02T03:12:35.212803Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Temp audio path: "/var/folders/_n/s2y4q39123gdcbdf0b9n08940000gp/T/.tmp23K5lw/audio.wav"
2026-03-02T03:12:35.213108Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: === EXTRACT AUDIO START ===
2026-03-02T03:12:35.213194Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Attempting to extract audio from: /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit
2026-03-02T03:12:35.213283Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Output path: "/var/folders/_n/s2y4q39123gdcbdf0b9n08940000gp/T/.tmp23K5lw/audio.wav"
2026-03-02T03:12:35.213561Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Detected .orbit project directory
2026-03-02T03:12:35.214766Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Found 1 segments with audio sources
2026-03-02T03:12:35.214797Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Processing segment 0 with 2 audio sources
2026-03-02T03:12:35.232072Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Processing audio source "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/system_audio.ogg": 2 channels, 572416 samples
2026-03-02T03:12:35.281191Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Processing audio source "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit/content/segments/segment-0/audio-input.ogg": 1 channels, 581632 samples
2026-03-02T03:12:35.290469Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Segment 0 produced 572416 samples, appending to final audio
2026-03-02T03:12:35.290950Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Final mixed audio: 572416 samples
2026-03-02T03:12:35.296751Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Mixed audio RMS: 0.0063
2026-03-02T03:12:35.297747Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Using frame size: 1024, total samples: 572416, channel count: 1
2026-03-02T03:12:35.297782Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Processing chunk 0, size: 1024
2026-03-02T03:12:35.297812Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Successfully resampled chunk 0, output samples: 325
[wav @ 0x155b38880] Timestamps are unset in a packet for stream 0. This is deprecated and will stop working in the future. Fix your code to set the timestamps properly
[wav @ 0x155b38880] Encoder did not produce proper pts, making some up.
2026-03-02T03:12:35.298663Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Processing chunk 100, size: 1024
2026-03-02T03:12:35.298690Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Successfully resampled chunk 100, output samples: 341
2026-03-02T03:12:35.299325Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Processing chunk 200, size: 1024
2026-03-02T03:12:35.299455Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Successfully resampled chunk 200, output samples: 342
2026-03-02T03:12:35.300182Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Processing chunk 300, size: 1024
2026-03-02T03:12:35.300218Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Successfully resampled chunk 300, output samples: 341
2026-03-02T03:12:35.300927Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Processing chunk 400, size: 1024
2026-03-02T03:12:35.300961Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Successfully resampled chunk 400, output samples: 341
2026-03-02T03:12:35.301574Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Processing chunk 500, size: 1024
2026-03-02T03:12:35.301599Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Successfully resampled chunk 500, output samples: 342
2026-03-02T03:12:35.302187Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: === EXTRACT AUDIO END (from .orbit) ===
2026-03-02T03:12:35.302326Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Successfully extracted audio to "/var/folders/_n/s2y4q39123gdcbdf0b9n08940000gp/T/.tmp23K5lw/audio.wav"
2026-03-02T03:12:35.302949Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Audio file created at: "/var/folders/_n/s2y4q39123gdcbdf0b9n08940000gp/T/.tmp23K5lw/audio.wav", size: 381656 bytes
2026-03-02T03:12:35.303020Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Initializing Whisper context with model: /Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin
whisper_init_from_file_with_params_no_state: loading model from '/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin'
whisper_model_load: loading model
whisper_model_load: n_vocab       = 51865
whisper_model_load: n_audio_ctx   = 1500
whisper_model_load: n_audio_state = 768
whisper_model_load: n_audio_head  = 12
whisper_model_load: n_audio_layer = 12
whisper_model_load: n_text_ctx    = 448
whisper_model_load: n_text_state  = 768
whisper_model_load: n_text_head   = 12
whisper_model_load: n_text_layer  = 12
whisper_model_load: n_mels        = 80
whisper_model_load: ftype         = 1
whisper_model_load: qntvr         = 0
whisper_model_load: type          = 3 (small)
whisper_model_load: adding 1608 extra tokens
whisper_model_load: n_langs       = 99
whisper_model_load:      CPU buffer size =   487.20 MB
whisper_model_load: model size    =  487.01 MB
2026-03-02T03:12:35.756243Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Whisper context ready
2026-03-02T03:12:35.756300Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Starting Whisper transcription in blocking task...
2026-03-02T03:12:35.757657Z  INFO orbit_desktop_lib::captions: === WHISPER TRANSCRIPTION START ===
2026-03-02T03:12:35.757687Z  INFO orbit_desktop_lib::captions: Processing audio file: "/var/folders/_n/s2y4q39123gdcbdf0b9n08940000gp/T/.tmp23K5lw/audio.wav"
2026-03-02T03:12:35.757700Z  INFO orbit_desktop_lib::captions: Language setting: auto
2026-03-02T03:12:35.757715Z  INFO orbit_desktop_lib::captions: Whisper params - translate: false, token_timestamps: true, max_len: MAX
2026-03-02T03:12:35.758189Z  INFO orbit_desktop_lib::captions: Processing audio file of size: 381656 bytes
2026-03-02T03:12:35.770115Z  INFO orbit_desktop_lib::captions: Converted 190828 samples to f32 format (duration: 11.93s at 16000Hz)
2026-03-02T03:12:35.774668Z  INFO orbit_desktop_lib::captions: Audio samples - min: -0.3552, max: 0.9766, avg: 0.000065, RMS: 0.0093
2026-03-02T03:12:35.774709Z  INFO orbit_desktop_lib::captions: First 20 audio samples:
2026-03-02T03:12:35.775553Z  INFO orbit_desktop_lib::captions:   Sample[0] = 0.572815
2026-03-02T03:12:35.775578Z  INFO orbit_desktop_lib::captions:   Sample[1] = 0.549011
2026-03-02T03:12:35.775586Z  INFO orbit_desktop_lib::captions:   Sample[2] = -0.353027
2026-03-02T03:12:35.775592Z  INFO orbit_desktop_lib::captions:   Sample[3] = 0.000153
2026-03-02T03:12:35.775598Z  INFO orbit_desktop_lib::captions:   Sample[4] = 0.510468
2026-03-02T03:12:35.775604Z  INFO orbit_desktop_lib::captions:   Sample[5] = 0.541687
2026-03-02T03:12:35.775609Z  INFO orbit_desktop_lib::captions:   Sample[6] = 0.854675
2026-03-02T03:12:35.775615Z  INFO orbit_desktop_lib::captions:   Sample[7] = 0.253540
2026-03-02T03:12:35.775620Z  INFO orbit_desktop_lib::captions:   Sample[8] = 0.000488
2026-03-02T03:12:35.775626Z  INFO orbit_desktop_lib::captions:   Sample[9] = 0.000000
2026-03-02T03:12:35.775632Z  INFO orbit_desktop_lib::captions:   Sample[10] = 0.000031
2026-03-02T03:12:35.775825Z  INFO orbit_desktop_lib::captions:   Sample[11] = 0.000031
2026-03-02T03:12:35.775835Z  INFO orbit_desktop_lib::captions:   Sample[12] = 0.488281
2026-03-02T03:12:35.775898Z  INFO orbit_desktop_lib::captions:   Sample[13] = 0.000000
2026-03-02T03:12:35.775908Z  INFO orbit_desktop_lib::captions:   Sample[14] = 0.976562
2026-03-02T03:12:35.775915Z  INFO orbit_desktop_lib::captions:   Sample[15] = 0.000000
2026-03-02T03:12:35.775921Z  INFO orbit_desktop_lib::captions:   Sample[16] = 0.000061
2026-03-02T03:12:35.775926Z  INFO orbit_desktop_lib::captions:   Sample[17] = 0.000488
2026-03-02T03:12:35.775932Z  INFO orbit_desktop_lib::captions:   Sample[18] = 0.572632
2026-03-02T03:12:35.775937Z  INFO orbit_desktop_lib::captions:   Sample[19] = 0.658783
whisper_init_state: kv self size  =   49.55 MB
whisper_init_state: kv cross size =   55.30 MB
whisper_init_state: compute buffer (conv)   =   20.23 MB
whisper_init_state: compute buffer (encode) =  128.14 MB
whisper_init_state: compute buffer (cross)  =    6.31 MB
whisper_init_state: compute buffer (decode) =   97.40 MB
2026-03-02T03:12:36.883419Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=603 dropped=647 silence_frames=0 drop_pct="51.8%" is_wireless=true send_timeout_ms=50
2026-03-02T03:12:36.978073Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=360 total_skipped=0 cache_hits=0 prefetch_hits=360 sync_decodes=0 prefetch_buffer=67
2026-03-02T03:12:37.068708Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=55 mb_per_sec="149.6" avg_kb="2632.5" dims="1664x1080" format="NV12"
whisper_full_with_state: auto-detected language: en (p = 0.981928)
2026-03-02T03:12:38.979323Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=480 total_skipped=0 cache_hits=0 prefetch_hits=480 sync_decodes=0 prefetch_buffer=52
2026-03-02T03:12:39.076902Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=58 mb_per_sec="156.4" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:12:40.274210Z  INFO orbit_desktop_lib::captions: Found 5 segments
2026-03-02T03:12:40.274667Z  INFO orbit_desktop_lib::captions: === Segment 0: start=0.00s, end=0.50s, raw_text='*phone beeps*'
2026-03-02T03:12:40.274690Z  INFO orbit_desktop_lib::captions:   Segment 0 has 6 tokens
2026-03-02T03:12:40.274709Z DEBUG orbit_desktop_lib::captions: Filtering special token: "[_BEG_]"
2026-03-02T03:12:40.274719Z DEBUG orbit_desktop_lib::captions:   Token[0]: id=50364, text="[_BEG_]" -> SKIPPED (special)
2026-03-02T03:12:40.274731Z  INFO orbit_desktop_lib::captions:   Token[1]: id=1853, text=" *", t0=0.00s, t1=0.00s, prob=0.1944
2026-03-02T03:12:40.274743Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: '*' at 0.00s
2026-03-02T03:12:40.274753Z  INFO orbit_desktop_lib::captions:   Token[2]: id=4977, text="phone", t0=0.23s, t1=0.24s, prob=0.0341
2026-03-02T03:12:40.274918Z DEBUG orbit_desktop_lib::captions:     -> Appending to word: '*phone'
2026-03-02T03:12:40.274931Z  INFO orbit_desktop_lib::captions:   Token[3]: id=27722, text=" beeps", t0=0.24s, t1=0.41s, prob=0.1276
2026-03-02T03:12:40.274942Z  INFO orbit_desktop_lib::captions:     -> Completing word: '*phone' (0.00s - 0.24s)
2026-03-02T03:12:40.274952Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'beeps' at 0.24s
2026-03-02T03:12:40.274961Z  INFO orbit_desktop_lib::captions:   Token[4]: id=9, text="*", t0=0.48s, t1=0.50s, prob=0.8971
2026-03-02T03:12:40.274972Z DEBUG orbit_desktop_lib::captions:     -> Appending to word: 'beeps*'
2026-03-02T03:12:40.274981Z DEBUG orbit_desktop_lib::captions: Filtering special token: "[_TT_25]"
2026-03-02T03:12:40.274988Z DEBUG orbit_desktop_lib::captions:   Token[5]: id=50389, text="[_TT_25]" -> SKIPPED (special)
2026-03-02T03:12:40.274999Z  INFO orbit_desktop_lib::captions:     -> Final word: 'beeps*' (0.24s - 0.50s)
2026-03-02T03:12:40.275011Z  INFO orbit_desktop_lib::captions:   Segment 0 produced 2 words
2026-03-02T03:12:40.275020Z  INFO orbit_desktop_lib::captions:     Word[0]: '*phone' (0.00s - 0.24s)
2026-03-02T03:12:40.275029Z  INFO orbit_desktop_lib::captions:     Word[1]: 'beeps*' (0.24s - 0.50s)
2026-03-02T03:12:40.275056Z  INFO orbit_desktop_lib::captions: === Segment 1: start=0.50s, end=3.50s, raw_text='Okay now I'm recording with everything.'
2026-03-02T03:12:40.275067Z  INFO orbit_desktop_lib::captions:   Segment 1 has 9 tokens
2026-03-02T03:12:40.275074Z  INFO orbit_desktop_lib::captions:   Token[0]: id=1033, text=" Okay", t0=0.50s, t1=0.62s, prob=0.3333
2026-03-02T03:12:40.275084Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'Okay' at 0.50s
2026-03-02T03:12:40.275095Z  INFO orbit_desktop_lib::captions:   Token[1]: id=586, text=" now", t0=1.31s, t1=1.31s, prob=0.5365
2026-03-02T03:12:40.275104Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'Okay' (0.50s - 0.62s)
2026-03-02T03:12:40.275112Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'now' at 1.31s
2026-03-02T03:12:40.275120Z  INFO orbit_desktop_lib::captions:   Token[2]: id=286, text=" I", t0=1.37s, t1=1.42s, prob=0.7695
2026-03-02T03:12:40.275130Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'now' (1.31s - 1.31s)
2026-03-02T03:12:40.275139Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'I' at 1.37s
2026-03-02T03:12:40.275149Z  INFO orbit_desktop_lib::captions:   Token[3]: id=478, text="'m", t0=1.44s, t1=1.65s, prob=0.9145
2026-03-02T03:12:40.275159Z DEBUG orbit_desktop_lib::captions:     -> Appending to word: 'I'm'
2026-03-02T03:12:40.275167Z  INFO orbit_desktop_lib::captions:   Token[4]: id=6613, text=" recording", t0=1.65s, t1=2.72s, prob=0.9675
2026-03-02T03:12:40.275179Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'I'm' (1.37s - 1.65s)
2026-03-02T03:12:40.275188Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'recording' at 1.65s
2026-03-02T03:12:40.275197Z  INFO orbit_desktop_lib::captions:   Token[5]: id=365, text=" with", t0=2.72s, t1=2.91s, prob=0.9308
2026-03-02T03:12:40.275207Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'recording' (1.65s - 2.72s)
2026-03-02T03:12:40.275216Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'with' at 2.72s
2026-03-02T03:12:40.275223Z  INFO orbit_desktop_lib::captions:   Token[6]: id=1203, text=" everything", t0=2.98s, t1=3.50s, prob=0.9848
2026-03-02T03:12:40.275232Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'with' (2.72s - 2.91s)
2026-03-02T03:12:40.275241Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'everything' at 2.98s
2026-03-02T03:12:40.275250Z  INFO orbit_desktop_lib::captions:   Token[7]: id=13, text=".", t0=3.50s, t1=3.50s, prob=0.4240
2026-03-02T03:12:40.275260Z DEBUG orbit_desktop_lib::captions:     -> Appending to word: 'everything.'
2026-03-02T03:12:40.275268Z DEBUG orbit_desktop_lib::captions: Filtering special token: "[_TT_175]"
2026-03-02T03:12:40.275275Z DEBUG orbit_desktop_lib::captions:   Token[8]: id=50539, text="[_TT_175]" -> SKIPPED (special)
2026-03-02T03:12:40.275284Z  INFO orbit_desktop_lib::captions:     -> Final word: 'everything.' (2.98s - 3.50s)
2026-03-02T03:12:40.275294Z  INFO orbit_desktop_lib::captions:   Segment 1 produced 6 words
2026-03-02T03:12:40.275300Z  INFO orbit_desktop_lib::captions:     Word[0]: 'Okay' (0.50s - 0.62s)
2026-03-02T03:12:40.275308Z  INFO orbit_desktop_lib::captions:     Word[1]: 'now' (1.31s - 1.31s)
2026-03-02T03:12:40.275316Z  INFO orbit_desktop_lib::captions:     Word[2]: 'I'm' (1.37s - 1.65s)
2026-03-02T03:12:40.275323Z  INFO orbit_desktop_lib::captions:     Word[3]: 'recording' (1.65s - 2.72s)
2026-03-02T03:12:40.275331Z  INFO orbit_desktop_lib::captions:     Word[4]: 'with' (2.72s - 2.91s)
2026-03-02T03:12:40.275339Z  INFO orbit_desktop_lib::captions:     Word[5]: 'everything.' (2.98s - 3.50s)
2026-03-02T03:12:40.275353Z  INFO orbit_desktop_lib::captions: === Segment 2: start=3.50s, end=6.50s, raw_text='I think now everything will work.'
2026-03-02T03:12:40.275366Z  INFO orbit_desktop_lib::captions:   Segment 2 has 8 tokens
2026-03-02T03:12:40.275374Z  INFO orbit_desktop_lib::captions:   Token[0]: id=286, text=" I", t0=3.50s, t1=3.62s, prob=0.9781
2026-03-02T03:12:40.275384Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'I' at 3.50s
2026-03-02T03:12:40.275391Z  INFO orbit_desktop_lib::captions:   Token[1]: id=519, text=" think", t0=4.71s, t1=4.82s, prob=0.9961
2026-03-02T03:12:40.275398Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'I' (3.50s - 3.62s)
2026-03-02T03:12:40.275407Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'think' at 4.71s
2026-03-02T03:12:40.275415Z  INFO orbit_desktop_lib::captions:   Token[2]: id=586, text=" now", t0=4.86s, t1=5.35s, prob=0.9882
2026-03-02T03:12:40.275424Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'think' (4.71s - 4.82s)
2026-03-02T03:12:40.275433Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'now' at 4.86s
2026-03-02T03:12:40.275440Z  INFO orbit_desktop_lib::captions:   Token[3]: id=1203, text=" everything", t0=5.66s, t1=6.05s, prob=0.8458
2026-03-02T03:12:40.275448Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'now' (4.86s - 5.35s)
2026-03-02T03:12:40.275458Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'everything' at 5.66s
2026-03-02T03:12:40.275465Z  INFO orbit_desktop_lib::captions:   Token[4]: id=486, text=" will", t0=6.05s, t1=6.27s, prob=0.9432
2026-03-02T03:12:40.275474Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'everything' (5.66s - 6.05s)
2026-03-02T03:12:40.275481Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'will' at 6.05s
2026-03-02T03:12:40.275488Z  INFO orbit_desktop_lib::captions:   Token[5]: id=589, text=" work", t0=6.27s, t1=6.48s, prob=0.9966
2026-03-02T03:12:40.275497Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'will' (6.05s - 6.27s)
2026-03-02T03:12:40.275504Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'work' at 6.27s
2026-03-02T03:12:40.275514Z  INFO orbit_desktop_lib::captions:   Token[6]: id=13, text=".", t0=6.50s, t1=6.50s, prob=0.7425
2026-03-02T03:12:40.275522Z DEBUG orbit_desktop_lib::captions:     -> Appending to word: 'work.'
2026-03-02T03:12:40.275528Z DEBUG orbit_desktop_lib::captions: Filtering special token: "[_TT_325]"
2026-03-02T03:12:40.275534Z DEBUG orbit_desktop_lib::captions:   Token[7]: id=50689, text="[_TT_325]" -> SKIPPED (special)
2026-03-02T03:12:40.275541Z  INFO orbit_desktop_lib::captions:     -> Final word: 'work.' (6.27s - 6.50s)
2026-03-02T03:12:40.275549Z  INFO orbit_desktop_lib::captions:   Segment 2 produced 6 words
2026-03-02T03:12:40.275555Z  INFO orbit_desktop_lib::captions:     Word[0]: 'I' (3.50s - 3.62s)
2026-03-02T03:12:40.275561Z  INFO orbit_desktop_lib::captions:     Word[1]: 'think' (4.71s - 4.82s)
2026-03-02T03:12:40.275568Z  INFO orbit_desktop_lib::captions:     Word[2]: 'now' (4.86s - 5.35s)
2026-03-02T03:12:40.275575Z  INFO orbit_desktop_lib::captions:     Word[3]: 'everything' (5.66s - 6.05s)
2026-03-02T03:12:40.275581Z  INFO orbit_desktop_lib::captions:     Word[4]: 'will' (6.05s - 6.27s)
2026-03-02T03:12:40.275588Z  INFO orbit_desktop_lib::captions:     Word[5]: 'work.' (6.27s - 6.50s)
2026-03-02T03:12:40.275598Z  INFO orbit_desktop_lib::captions: === Segment 3: start=6.50s, end=10.50s, raw_text='So, yes let's make it work.'
2026-03-02T03:12:40.275608Z  INFO orbit_desktop_lib::captions:   Segment 3 has 10 tokens
2026-03-02T03:12:40.275615Z  INFO orbit_desktop_lib::captions:   Token[0]: id=407, text=" So", t0=6.50s, t1=8.98s, prob=0.9707
2026-03-02T03:12:40.275627Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'So' at 6.50s
2026-03-02T03:12:40.275636Z  INFO orbit_desktop_lib::captions:   Token[1]: id=11, text=",", t0=9.14s, t1=9.14s, prob=0.4527
2026-03-02T03:12:40.275646Z DEBUG orbit_desktop_lib::captions:     -> Appending to word: 'So,'
2026-03-02T03:12:40.275654Z  INFO orbit_desktop_lib::captions:   Token[2]: id=2086, text=" yes", t0=9.14s, t1=9.36s, prob=0.7792
2026-03-02T03:12:40.275664Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'So,' (6.50s - 9.14s)
2026-03-02T03:12:40.275673Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'yes' at 9.14s
2026-03-02T03:12:40.275681Z  INFO orbit_desktop_lib::captions:   Token[3]: id=718, text=" let", t0=9.52s, t1=9.58s, prob=0.4181
2026-03-02T03:12:40.275690Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'yes' (9.14s - 9.36s)
2026-03-02T03:12:40.275698Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'let' at 9.52s
2026-03-02T03:12:40.275705Z  INFO orbit_desktop_lib::captions:   Token[4]: id=311, text="'s", t0=9.58s, t1=9.72s, prob=0.9959
2026-03-02T03:12:40.275715Z DEBUG orbit_desktop_lib::captions:     -> Appending to word: 'let's'
2026-03-02T03:12:40.275724Z  INFO orbit_desktop_lib::captions:   Token[5]: id=652, text=" make", t0=9.72s, t1=10.02s, prob=0.9953
2026-03-02T03:12:40.275734Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'let's' (9.52s - 9.72s)
2026-03-02T03:12:40.275743Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'make' at 9.72s
2026-03-02T03:12:40.275753Z  INFO orbit_desktop_lib::captions:   Token[6]: id=309, text=" it", t0=10.02s, t1=10.16s, prob=0.9957
2026-03-02T03:12:40.275763Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'make' (9.72s - 10.02s)
2026-03-02T03:12:40.275772Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'it' at 10.02s
2026-03-02T03:12:40.275780Z  INFO orbit_desktop_lib::captions:   Token[7]: id=589, text=" work", t0=10.16s, t1=10.50s, prob=0.9983
2026-03-02T03:12:40.275789Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'it' (10.02s - 10.16s)
2026-03-02T03:12:40.275798Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'work' at 10.16s
2026-03-02T03:12:40.275806Z  INFO orbit_desktop_lib::captions:   Token[8]: id=13, text=".", t0=10.50s, t1=10.50s, prob=0.3951
2026-03-02T03:12:40.275817Z DEBUG orbit_desktop_lib::captions:     -> Appending to word: 'work.'
2026-03-02T03:12:40.275826Z DEBUG orbit_desktop_lib::captions: Filtering special token: "[_TT_525]"
2026-03-02T03:12:40.275834Z DEBUG orbit_desktop_lib::captions:   Token[9]: id=50889, text="[_TT_525]" -> SKIPPED (special)
2026-03-02T03:12:40.275843Z  INFO orbit_desktop_lib::captions:     -> Final word: 'work.' (10.16s - 10.50s)
2026-03-02T03:12:40.275852Z  INFO orbit_desktop_lib::captions:   Segment 3 produced 6 words
2026-03-02T03:12:40.275859Z  INFO orbit_desktop_lib::captions:     Word[0]: 'So,' (6.50s - 9.14s)
2026-03-02T03:12:40.275868Z  INFO orbit_desktop_lib::captions:     Word[1]: 'yes' (9.14s - 9.36s)
2026-03-02T03:12:40.275875Z  INFO orbit_desktop_lib::captions:     Word[2]: 'let's' (9.52s - 9.72s)
2026-03-02T03:12:40.275884Z  INFO orbit_desktop_lib::captions:     Word[3]: 'make' (9.72s - 10.02s)
2026-03-02T03:12:40.275892Z  INFO orbit_desktop_lib::captions:     Word[4]: 'it' (10.02s - 10.16s)
2026-03-02T03:12:40.275901Z  INFO orbit_desktop_lib::captions:     Word[5]: 'work.' (10.16s - 10.50s)
2026-03-02T03:12:40.275913Z  INFO orbit_desktop_lib::captions: === Segment 4: start=10.50s, end=12.50s, raw_text='I guess.'
2026-03-02T03:12:40.275924Z  INFO orbit_desktop_lib::captions:   Segment 4 has 4 tokens
2026-03-02T03:12:40.275932Z  INFO orbit_desktop_lib::captions:   Token[0]: id=286, text=" I", t0=10.50s, t1=10.58s, prob=0.9670
2026-03-02T03:12:40.275943Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'I' at 10.50s
2026-03-02T03:12:40.275952Z  INFO orbit_desktop_lib::captions:   Token[1]: id=2041, text=" guess", t0=10.74s, t1=11.31s, prob=0.9902
2026-03-02T03:12:40.275962Z  INFO orbit_desktop_lib::captions:     -> Completing word: 'I' (10.50s - 10.58s)
2026-03-02T03:12:40.275970Z DEBUG orbit_desktop_lib::captions:     -> Starting new word: 'guess' at 10.74s
2026-03-02T03:12:40.275979Z  INFO orbit_desktop_lib::captions:   Token[2]: id=13, text=".", t0=11.31s, t1=11.92s, prob=0.8085
2026-03-02T03:12:40.275990Z DEBUG orbit_desktop_lib::captions:     -> Appending to word: 'guess.'
2026-03-02T03:12:40.275998Z DEBUG orbit_desktop_lib::captions: Filtering special token: "[_TT_625]"
2026-03-02T03:12:40.276005Z DEBUG orbit_desktop_lib::captions:   Token[3]: id=50989, text="[_TT_625]" -> SKIPPED (special)
2026-03-02T03:12:40.276014Z  INFO orbit_desktop_lib::captions:     -> Final word: 'guess.' (10.74s - 11.92s)
2026-03-02T03:12:40.276024Z  INFO orbit_desktop_lib::captions:   Segment 4 produced 2 words
2026-03-02T03:12:40.276030Z  INFO orbit_desktop_lib::captions:     Word[0]: 'I' (10.50s - 10.58s)
2026-03-02T03:12:40.276038Z  INFO orbit_desktop_lib::captions:     Word[1]: 'guess.' (10.74s - 11.92s)
2026-03-02T03:12:40.276049Z  INFO orbit_desktop_lib::captions: === WHISPER TRANSCRIPTION COMPLETE ===
2026-03-02T03:12:40.276057Z  INFO orbit_desktop_lib::captions: Total segments: 5
2026-03-02T03:12:40.276064Z  INFO orbit_desktop_lib::captions: Total words: 22
2026-03-02T03:12:40.276069Z  INFO orbit_desktop_lib::captions: === FINAL TRANSCRIPTION SUMMARY ===
2026-03-02T03:12:40.276075Z  INFO orbit_desktop_lib::captions: Segment 'segment-0-0' (0.00s - 0.50s): *phone beeps*
2026-03-02T03:12:40.276085Z  INFO orbit_desktop_lib::captions: Segment 'segment-1-0' (0.50s - 3.50s): Okay now I'm recording with everything.
2026-03-02T03:12:40.276095Z  INFO orbit_desktop_lib::captions: Segment 'segment-2-0' (3.50s - 6.50s): I think now everything will work.
2026-03-02T03:12:40.276104Z  INFO orbit_desktop_lib::captions: Segment 'segment-3-0' (6.50s - 10.50s): So, yes let's make it work.
2026-03-02T03:12:40.276113Z  INFO orbit_desktop_lib::captions: Segment 'segment-4-0' (10.50s - 11.92s): I guess.
2026-03-02T03:12:40.276121Z  INFO orbit_desktop_lib::captions: === END SUMMARY ===
2026-03-02T03:12:40.290612Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: === TRANSCRIBE AUDIO RESULT ===
2026-03-02T03:12:40.290671Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: Transcription produced 5 segments
2026-03-02T03:12:40.290692Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions:   Result Segment[0]: '*phone beeps*' (2 words)
2026-03-02T03:12:40.290707Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions:   Result Segment[1]: 'Okay now I'm recording with everything.' (6 words)
2026-03-02T03:12:40.290748Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions:   Result Segment[2]: 'I think now everything will work.' (6 words)
2026-03-02T03:12:40.290763Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions:   Result Segment[3]: 'So, yes let's make it work.' (6 words)
2026-03-02T03:12:40.290796Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions:   Result Segment[4]: 'I guess.' (2 words)
2026-03-02T03:12:40.290916Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-02 04.12 AM.orbit" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: orbit_desktop_lib::captions: === TRANSCRIBE AUDIO COMMAND END (success) ===
2026-03-02T03:12:40.992221Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=601 total_skipped=0 cache_hits=0 prefetch_hits=601 sync_decodes=0 prefetch_buffer=76
2026-03-02T03:12:41.084454Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=55 mb_per_sec="148.3" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:12:41.794931Z  WARN orbit_rendering::decoder::avassetreader: No frames decoded from video - decoder iterator returned no frames decoder_idx=0 requested_frame=362 requested_time=12.066666603088379 was_reset=false cache_size=90 consecutive_empty=1 near_end=true
2026-03-02T03:12:41.798810Z  WARN orbit_rendering::decoder::avassetreader: No frames decoded from video - decoder iterator returned no frames decoder_idx=0 requested_frame=363 requested_time=12.100000381469727 was_reset=false cache_size=90 consecutive_empty=2 near_end=true
2026-03-02T03:12:41.804355Z  WARN orbit_rendering::decoder::avassetreader: No frames decoded from video - decoder iterator returned no frames decoder_idx=2 requested_frame=520 requested_time=12.093023300170898 was_reset=false cache_size=88 consecutive_empty=1 near_end=true
2026-03-02T03:12:41.883977Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=603 dropped=897 silence_frames=0 drop_pct="59.8%" is_wireless=true send_timeout_ms=50
2026-03-02T03:12:42.993658Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=721 total_skipped=0 cache_hits=0 prefetch_hits=721 sync_decodes=0 prefetch_buffer=7
2026-03-02T03:12:43.037981Z  INFO orbit_editor::playback: Audio playback thread finished.
2026-03-02T03:12:44.531480Z  INFO orbit_editor::playback: Creating pre-rendered audio stream duration_secs=12.123833 start_playhead=0.0 sample_rate=24000
2026-03-02T03:12:44.531588Z  INFO orbit_editor::audio: Pre-rendering audio for playback duration_secs=12.123833 sample_rate=24000 channels=2
2026-03-02T03:12:44.531675Z  INFO orbit_editor::audio: Audio resampler created with high-quality settings (filter_size=128) input_rate=48000 output_rate=24000 output_format=F32(Packed)
2026-03-02T03:12:44.622928Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=59 mb_per_sec="159.0" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:12:44.642604Z  INFO orbit_editor::audio: Audio pre-rendering complete total_samples=582656 memory_mb=2
2026-03-02T03:12:44.651247Z  INFO orbit_editor::playback: Pre-rendered audio stream created successfully
2026-03-02T03:12:46.542915Z  INFO orbit_editor::playback: Playback stats effective_fps="60.5" total_rendered=117 total_skipped=0 cache_hits=0 prefetch_hits=117 sync_decodes=0 prefetch_buffer=77
2026-03-02T03:12:46.625331Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=58 mb_per_sec="156.4" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:12:46.885831Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=603 dropped=1148 silence_frames=0 drop_pct="65.6%" is_wireless=true send_timeout_ms=50
2026-03-02T03:12:48.543759Z  INFO orbit_editor::playback: Playback stats effective_fps="60.2" total_rendered=237 total_skipped=0 cache_hits=0 prefetch_hits=237 sync_decodes=0 prefetch_buffer=46
2026-03-02T03:12:48.640076Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=58 mb_per_sec="157.7" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:12:50.562128Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=358 total_skipped=0 cache_hits=0 prefetch_hits=358 sync_decodes=0 prefetch_buffer=43
2026-03-02T03:12:50.644639Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=52 mb_per_sec="141.5" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:12:51.887279Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=603 dropped=1398 silence_frames=0 drop_pct="69.9%" is_wireless=true send_timeout_ms=50
2026-03-02T03:12:52.766291Z  INFO orbit_editor::playback: Playback stats effective_fps="54.9" total_rendered=448 total_skipped=43 cache_hits=0 prefetch_hits=447 sync_decodes=0 prefetch_buffer=0
2026-03-02T03:12:52.787615Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=43 mb_per_sec="115.9" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:12:54.801868Z  INFO orbit_editor::playback: Playback stats effective_fps="44.0" total_rendered=449 total_skipped=161 cache_hits=0 prefetch_hits=447 sync_decodes=0 prefetch_buffer=0
2026-03-02T03:12:54.828029Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=0 mb_per_sec="1.3" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:12:56.772449Z  INFO orbit_editor::playback: Audio playback thread finished.
2026-03-02T03:12:56.888573Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=603 dropped=1648 silence_frames=0 drop_pct="73.2%" is_wireless=true send_timeout_ms=50
2026-03-02T03:12:59.032456Z  INFO orbit_editor::playback: Creating pre-rendered audio stream duration_secs=12.123833 start_playhead=11.2 sample_rate=24000
2026-03-02T03:12:59.032584Z  INFO orbit_editor::audio: Pre-rendering audio for playback duration_secs=12.123833 sample_rate=24000 channels=2
2026-03-02T03:12:59.032659Z  INFO orbit_editor::audio: Audio resampler created with high-quality settings (filter_size=128) input_rate=48000 output_rate=24000 output_format=F32(Packed)
2026-03-02T03:12:59.140416Z  INFO orbit_editor::audio: Audio pre-rendering complete total_samples=582656 memory_mb=2
2026-03-02T03:12:59.148608Z  INFO orbit_editor::playback: Pre-rendered audio stream created successfully
2026-03-02T03:13:00.043927Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=3 mb_per_sec="8.1" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:13:00.754205Z  INFO orbit_rendering::decoder::avassetreader: Decoder reached EOF - will use cached frames for remaining requests decoder_idx=0 requested_frame=362 total_frames=194 cache_max=361
2026-03-02T03:13:00.758283Z  WARN orbit_rendering::decoder::avassetreader: No frames decoded from video - decoder iterator returned no frames decoder_idx=0 requested_frame=520 requested_time=12.093023300170898 was_reset=false cache_size=90 consecutive_empty=1 near_end=true
2026-03-02T03:13:00.758321Z  WARN orbit_rendering::decoder::avassetreader: No frames decoded from video - decoder iterator returned no frames decoder_idx=0 requested_frame=521 requested_time=12.116278648376465 was_reset=false cache_size=90 consecutive_empty=2 near_end=true
2026-03-02T03:13:00.871437Z  INFO orbit_editor::playback: Audio playback thread finished.
2026-03-02T03:13:01.751761Z  INFO orbit_editor::playback: Creating pre-rendered audio stream duration_secs=12.123833 start_playhead=0.0 sample_rate=24000
2026-03-02T03:13:01.751857Z  INFO orbit_editor::audio: Pre-rendering audio for playback duration_secs=12.123833 sample_rate=24000 channels=2
2026-03-02T03:13:01.751989Z  INFO orbit_editor::audio: Audio resampler created with high-quality settings (filter_size=128) input_rate=48000 output_rate=24000 output_format=F32(Packed)
2026-03-02T03:13:01.856441Z  INFO orbit_editor::audio: Audio pre-rendering complete total_samples=582656 memory_mb=2
2026-03-02T03:13:01.863659Z  INFO orbit_editor::playback: Pre-rendered audio stream created successfully
2026-03-02T03:13:01.889310Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=603 dropped=1898 silence_frames=0 drop_pct="75.9%" is_wireless=true send_timeout_ms=50
2026-03-02T03:13:02.050687Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=26 mb_per_sec="70.1" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:13:03.756031Z  INFO orbit_editor::playback: Playback stats effective_fps="60.5" total_rendered=117 total_skipped=0 cache_hits=0 prefetch_hits=117 sync_decodes=0 prefetch_buffer=77
2026-03-02T03:13:04.053300Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=54 mb_per_sec="145.6" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:13:05.758311Z  INFO orbit_editor::playback: Playback stats effective_fps="60.2" total_rendered=237 total_skipped=0 cache_hits=0 prefetch_hits=237 sync_decodes=0 prefetch_buffer=68
2026-03-02T03:13:06.068119Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=56 mb_per_sec="152.3" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:13:06.890256Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=603 dropped=2148 silence_frames=0 drop_pct="78.1%" is_wireless=true send_timeout_ms=50
2026-03-02T03:13:07.773221Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=358 total_skipped=0 cache_hits=0 prefetch_hits=358 sync_decodes=0 prefetch_buffer=49
2026-03-02T03:13:08.073097Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="163.1" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:13:11.424239Z  INFO orbit_editor::playback: Playback stats effective_fps="47.4" total_rendered=455 total_skipped=122 cache_hits=0 prefetch_hits=453 sync_decodes=0 prefetch_buffer=0
2026-03-02T03:13:11.449405Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=40 mb_per_sec="107.8" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:13:11.891534Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=603 dropped=2398 silence_frames=0 drop_pct="79.9%" is_wireless=true send_timeout_ms=50
2026-03-02T03:13:13.512172Z  INFO orbit_editor::playback: Audio playback thread finished.
2026-03-02T03:13:16.893722Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=603 dropped=2648 silence_frames=0 drop_pct="81.5%" is_wireless=true send_timeout_ms=50
2026-03-02T03:13:16.995603Z  WARN orbit_editor::editor_instance: preview task abort await failed: task 387 was cancelled
2026-03-02T03:13:17.022253Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=4 mb_per_sec="12.1" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-02T03:13:17.102392Z ERROR orbit_desktop_lib::frame_ws: Failed to send frame to socket: Error { inner: Io(Os { code: 32, kind: BrokenPipe, message: "Broken pipe" }) }
2026-03-02T03:13:17.104750Z  INFO orbit_desktop_lib::frame_ws: Websocket closing after 50.33s
2026-03-02T03:13:17.105859Z  WARN orbit_desktop_lib: Camera window CloseRequested event received!


so there is a small bug you need to fix. When deleting the recording or going back to record again when the app was already on    
   and the user goes to record again, the small window with the stop recording and stuff does not appear and everything freezes      
   and stops responding. Can you fix this?      