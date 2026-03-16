dives@MacBook-Pro orbit % pnpm run dev:desktop

> orbit@ dev:desktop /Users/dives/Desktop/Projects/orbit
> pnpm run --filter=@orbit/desktop dev


> @orbit/desktop@ dev /Users/dives/Desktop/Projects/orbit/apps/desktop
> pnpm -w orbit-setup && dotenv -e ../../.env -- pnpm run preparescript && dotenv -e ../../.env -- pnpm tauri dev


> orbit@ orbit-setup /Users/dives/Desktop/Projects/orbit
> dotenv -e .env -- node scripts/setup.js

Using cached native-deps-aarch64-darwin-apple.tar.xz
Using cached native-deps
Trimmed .framework
Signing .framework libraries
Signed .framework libraries
Copied ffmpeg dylibs to target/debug

> @orbit/desktop@ preparescript /Users/dives/Desktop/Projects/orbit/apps/desktop
> node scripts/prepare.js

--- Preparing sidecars and configs...
Updating Platform (darwin) Tauri config...
--- Preparation finished

> @orbit/desktop@ tauri /Users/dives/Desktop/Projects/orbit/apps/desktop
> tauri dev

     Running BeforeDevCommand (`pnpm localdev`)

> @orbit/desktop@ localdev /Users/dives/Desktop/Projects/orbit/apps/desktop
> dotenv -e ../../.env -- vinxi dev --port 3002

vinxi v0.5.6
vinxi starting dev server

  ➜ Local:    http://localhost:3002/
  ➜ Network:  use --host to expose

     Running DevCommand (`cargo  run --no-default-features --color always --`)
        Info Watching /Users/dives/Desktop/Projects/orbit/apps/desktop/src-tauri for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/apps/desktop/src-tauri for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/.DS_Store for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/api for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/audio for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/camera for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/camera-avfoundation for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/camera-directshow for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/camera-ffmpeg for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/camera-mediafoundation for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/camera-windows for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/cpal-ffmpeg for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/cursor-capture for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/cursor-info for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/editor for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/enc-avfoundation for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/enc-ffmpeg for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/enc-gif for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/enc-mediafoundation for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/export for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/fail for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/ffmpeg-hw-device for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/flags for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/frame-converter for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/gpu-converters for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/media for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/media-info for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/mediafoundation-ffmpeg for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/mediafoundation-utils for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/orbit-test for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/project for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/recording for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/rendering for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/rendering-skia for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/sorbit-cpal for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/sorbit-direct3d for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/sorbit-ffmpeg for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/sorbit-screencapturekit for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/sorbit-targets for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/timestamp for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/utils for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/video-decode for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/workspace-hack for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/workspace-hack for changes...
warning: methods `set_badge_count` and `set_badge_label` are never used
   --> vendor/tao/src/platform_impl/macos/event_loop.rs:127:10
    |
 86 | impl<T: 'static> EventLoopWindowTarget<T> {
    | ----------------------------------------- methods in this implementation
...
127 |   pub fn set_badge_count(&self, count: Option<i64>, _desktop_filename: Option<String>) {
    |          ^^^^^^^^^^^^^^^
...
132 |   pub fn set_badge_label(&self, label: Option<String>) {
    |          ^^^^^^^^^^^^^^^
    |
    = note: `#[warn(dead_code)]` (part of `#[warn(unused)]`) on by default

warning: field `0` is never read
 --> vendor/tao/src/platform_impl/macos/icon.rs:8:25
  |
8 | pub struct PlatformIcon(RgbaIcon);
  |            ------------ ^^^^^^^^
  |            |
  |            field in this struct
  |
  = help: consider removing this field
  = note: `PlatformIcon` has derived impls for the traits `Clone` and `Debug`, but these are intentionally ignored during dead code analysis

warning: function `yes` is never used
   --> vendor/tao/src/platform_impl/macos/util/mod.rs:126:19
    |
126 | pub extern "C" fn yes(_: &Object, _: Sel) -> BOOL {
    |                   ^^^

warning: field `saved_desktop_display_mode` is never read
   --> vendor/tao/src/platform_impl/macos/window.rs:474:7
    |
454 | pub struct SharedState {
    |            ----------- field in this struct
...
474 |   pub saved_desktop_display_mode: Option<(CGDisplay, CGDisplayMode)>,
    |       ^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: field `inner_rect` is never read
   --> vendor/tao/src/platform_impl/macos/window.rs:511:7
    |
503 | pub struct UnownedWindow {
    |            ------------- field in this struct
...
511 |   pub inner_rect: Option<PhysicalSize<u32>>,
    |       ^^^^^^^^^^

warning: function `hit_test` is never used
    --> vendor/tao/src/window.rs:1665:15
     |
1665 | pub(crate) fn hit_test(
     |               ^^^^^^^^

warning: `tao` (lib) generated 6 warnings
warning: unused variable: `app`
    --> apps/desktop/src-tauri/src/windows.rs:1122:29
     |
1122 |                         let app = app.clone();
     |                             ^^^ help: if this is intentional, prefix it with an underscore: `_app`
     |
     = note: `#[warn(unused_variables)]` (part of `#[warn(unused)]`) on by default

warning: `orbit-desktop` (lib) generated 1 warning (run `cargo fix --lib -p orbit-desktop` to apply 1 suggestion)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 1.47s
     Running `/Users/dives/Desktop/Projects/orbit/target/debug/orbit-desktop`
2026-03-16T12:25:12.922629Z  INFO orbit_desktop_lib::frame_ws: WebSocket server listening on port 56660
2026-03-16T12:25:12.924094Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new sender
Initializing GeneralSettingsStore
GeneralSettingsState managed
Checking startup completion and permissions...
Notification permission already granted
2026-03-16T12:25:13.073565Z  INFO orbit_desktop_lib::gpu_context: Using hardware GPU adapter for shared context adapter_name="Apple M3 Pro" adapter_backend=Metal
Permissions check result: OSPermissionsCheck { screen_recording: Granted, microphone: Granted, camera: Granted, accessibility: Granted }
Permissions granted, showing main window
2026-03-16T12:25:13.194176Z TRACE orbit_desktop_lib::platform::macos::sc_shareable_content: ScreenCaptureKit cache warmed elapsed_ms=53.879
[baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
Browserslist: browsers data (caniuse-lite) is 11 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
2026-03-16T12:25:16.149067Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new sender
2026-03-16T12:25:16.149094Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.SetInput('MacBook Pro Microphone')
2026-03-16T12:25:16.149144Z TRACE orbit_recording::feeds::camera: CameraFeed.SetInput('ModelID(ModelID { vid: "D288", pid: "CE50" })')
2026-03-16T12:25:16.393244Z  INFO orbit_recording::feeds::microphone: Device 'MacBook Pro Microphone' available configs:
2026-03-16T12:25:16.479810Z  INFO orbit_recording::feeds::microphone:   Format: F32, Min rate: 44100, Max rate: 44100, Sample size: 4
2026-03-16T12:25:16.479860Z  INFO orbit_recording::feeds::microphone:   Format: F32, Min rate: 48000, Max rate: 48000, Sample size: 4
2026-03-16T12:25:16.479868Z  INFO orbit_recording::feeds::microphone:   Format: F32, Min rate: 88200, Max rate: 88200, Sample size: 4
2026-03-16T12:25:16.479874Z  INFO orbit_recording::feeds::microphone:   Format: F32, Min rate: 96000, Max rate: 96000, Sample size: 4
2026-03-16T12:25:16.479888Z  INFO orbit_recording::feeds::microphone: 🎤 Building stream (id 0, label 'MacBook Pro Microphone') for 'Some("MacBook Pro Microphone")' with config: rate=48000, channels=1, format=F32, buffer_size=1680 frames (~35.0ms)
2026-03-16T12:25:16.609662Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.InputConnected
2026-03-16T12:25:16.652762Z  INFO orbit_recording::feeds::microphone: 🎤 First audio callback - data size: 6720 bytes, format: F32
2026-03-16T12:25:16.708681Z DEBUG set_camera_input{id=Some(ModelID(ModelID { vid: "D288", pid: "CE50" })) skip_camera_window=None}: orbit_desktop_lib::panel_manager: Panel Camera: beginning create operation (op_id=0)
2026-03-16T12:25:16.708904Z TRACE orbit_recording::feeds::camera: CameraFeed.InputConnected
2026-03-16T12:25:16.708929Z TRACE orbit_recording::feeds::camera: Attaching new camera
2026-03-16T12:25:16.708982Z  INFO orbit_recording::feeds::camera: Camera capture thread: waiting for done signal for ModelID(ModelID { vid: "D288", pid: "CE50" })
2026-03-16T12:25:16.718130Z  INFO set_camera_input{id=Some(ModelID(ModelID { vid: "D288", pid: "CE50" })) skip_camera_window=None}: orbit_desktop_lib::panel_manager: Panel Camera: marked ready (op_id=0)
2026-03-16T12:25:16.720441Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new sender
2026-03-16T12:25:16.720776Z TRACE set_camera_input{id=Some(ModelID(ModelID { vid: "D288", pid: "CE50" })) skip_camera_window=None}: orbit_desktop_lib::camera: CameraPreview/resize_window
2026-03-16T12:25:16.736336Z TRACE set_camera_input{id=Some(ModelID(ModelID { vid: "D288", pid: "CE50" })) skip_camera_window=None}: orbit_desktop_lib::camera: CameraPreview/resize_window
2026-03-16T12:25:16.741423Z TRACE orbit_desktop_lib::camera: CameraPreview/resize_window
2026-03-16T12:25:16.930819Z TRACE orbit_desktop_lib::camera: CameraPreview/ReconfigureEvent.State(CameraPreviewState { size: 230.0, shape: Round, mirrored: true })
2026-03-16T12:25:16.931132Z TRACE orbit_desktop_lib::camera: CameraPreview/resize_window
2026-03-16T12:27:58.961457Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 4590, dropping frame
2026-03-16T12:28:03.204903Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 4710, dropping frame
2026-03-16T12:28:07.449206Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 4830, dropping frame
2026-03-16T12:28:08.506951Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 4860, dropping frame
2026-03-16T12:28:09.571229Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 4890, dropping frame
2026-03-16T12:28:10.635240Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 4920, dropping frame
2026-03-16T12:28:12.822597Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 4950, dropping frame
2026-03-16T12:28:12.824636Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 4950, dropping frame
2026-03-16T12:28:12.827463Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 4950, dropping frame
2026-03-16T12:28:13.939099Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 4980, dropping frame
2026-03-16T12:28:14.979827Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5010, dropping frame
2026-03-16T12:28:17.124168Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5070, dropping frame
2026-03-16T12:28:18.188158Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5100, dropping frame
2026-03-16T12:28:19.255690Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5130, dropping frame
2026-03-16T12:28:20.309897Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5160, dropping frame
2026-03-16T12:28:21.379469Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5190, dropping frame
2026-03-16T12:28:23.482931Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5250, dropping frame
2026-03-16T12:28:24.693552Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5280, dropping frame
2026-03-16T12:28:25.828468Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5310, dropping frame
2026-03-16T12:28:25.839513Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5310, dropping frame
2026-03-16T12:28:25.847783Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5310, dropping frame
2026-03-16T12:28:26.856940Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5340, dropping frame
2026-03-16T12:28:26.859098Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5340, dropping frame
2026-03-16T12:28:27.922813Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5370, dropping frame
2026-03-16T12:28:27.924882Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5370, dropping frame
2026-03-16T12:28:29.034688Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5400, dropping frame
2026-03-16T12:28:30.042997Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5430, dropping frame
2026-03-16T12:28:30.045681Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5430, dropping frame
2026-03-16T12:28:30.047901Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5430, dropping frame
2026-03-16T12:28:31.396356Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5460, dropping frame
2026-03-16T12:28:32.685249Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5490, dropping frame
2026-03-16T12:28:33.745173Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5520, dropping frame
2026-03-16T12:28:33.752790Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5520, dropping frame
2026-03-16T12:28:35.329849Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5550, dropping frame
2026-03-16T12:28:35.331874Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5550, dropping frame
2026-03-16T12:28:35.351147Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5550, dropping frame
2026-03-16T12:28:36.541198Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5580, dropping frame
2026-03-16T12:28:36.543559Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5580, dropping frame
2026-03-16T12:28:37.325019Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5610, dropping frame
2026-03-16T12:28:37.328208Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5610, dropping frame
2026-03-16T12:28:37.329711Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5610, dropping frame
2026-03-16T12:28:38.390019Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5640, dropping frame
2026-03-16T12:28:39.840283Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5670, dropping frame
2026-03-16T12:28:39.842776Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5670, dropping frame
2026-03-16T12:28:41.262866Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5700, dropping frame
2026-03-16T12:28:41.265096Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5700, dropping frame
2026-03-16T12:28:41.276002Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5700, dropping frame
2026-03-16T12:28:42.165644Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5730, dropping frame
2026-03-16T12:28:42.171780Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5730, dropping frame
2026-03-16T12:28:42.174663Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5730, dropping frame
2026-03-16T12:28:42.656871Z DEBUG recording: orbit_desktop_lib::windows: InProgressRecording window: cursor_monitor=(0, 0, 1800, 1169), pos=(740, 899)
2026-03-16T12:28:42.717872Z DEBUG recording: orbit_desktop_lib::windows: InProgressRecording window created: label=in-progress-recording, inner_size=Ok(PhysicalSize { width: 640, height: 300 }), outer_position=Ok(PhysicalPosition { x: 1480, y: 1798 })
2026-03-16T12:28:43.200002Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5760, dropping frame
2026-03-16T12:28:44.425587Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5790, dropping frame
2026-03-16T12:28:45.518905Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5820, dropping frame
2026-03-16T12:28:45.522387Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5820, dropping frame
2026-03-16T12:28:45.816537Z DEBUG recording: orbit_desktop_lib::recording: spawning start_recording actor
2026-03-16T12:28:45.822843Z TRACE orbit_recording::feeds::camera: CameraFeed.Lock
2026-03-16T12:28:46.679360Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.Lock
2026-03-16T12:28:46.688297Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5850, dropping frame
2026-03-16T12:28:46.690658Z TRACE recording:studio_recording: orbit_recording::studio_recording: creating recording actor
2026-03-16T12:28:46.694793Z DEBUG recording:studio_recording: orbit_recording::studio_recording: camera device info: CameraInfo {
    device_id: "1FD4B3A2-236E-492B-8CE5-255DD288CE50",
    model_id: Some(
        ModelID {
            vid: "D288",
            pid: "CE50",
        },
    ),
    display_name: "FaceTime HD Camera",
}
2026-03-16T12:28:46.695425Z DEBUG recording:studio_recording: orbit_recording::studio_recording: camera video info: VideoInfo {
    pixel_format: NV12,
    width: 1920,
    height: 1080,
    time_base: Rational(1/1000000),
    frame_rate: Rational(30/1),
}
2026-03-16T12:28:46.695814Z DEBUG recording:studio_recording: orbit_recording::studio_recording: mic audio info: AudioInfo {
    sample_format: F32(
        Planar,
    ),
    sample_rate: 48000,
    channels: 1,
    time_base: Rational(1/1000000),
    buffer_size: 1680,
    is_wireless_transport: false,
}
2026-03-16T12:28:46.702010Z TRACE recording:studio_recording:segment{index=0}: orbit_recording::studio_recording: preparing segment pipeline 0
2026-03-16T12:28:46.702748Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Screen capture buffer size buffer_size=15
2026-03-16T12:28:46.723875Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: SCK content filter: Retained(ContentFilter(<SCContentFilter: 0x1123417a0>))
2026-03-16T12:28:46.733738Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: size: PhysicalSize { width: 3600.0, height: 2338.0 }
2026-03-16T12:28:46.734308Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Screen capture queue depth queue_depth=8 max_queue_depth=8
2026-03-16T12:28:46.735441Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Pixel buffer pool initialized min_count=20 width=3600 height=2338
2026-03-16T12:28:46.763409Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: orbit_recording::output_pipeline::core: Task started
2026-03-16T12:28:46.767966Z  INFO recording:studio_recording:segment{index=0}:screen-out: orbit_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display
2026-03-16T12:28:46.770189Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-16T12:28:46.770308Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new native sender
2026-03-16T12:28:46.770868Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-16T12:28:46.772984Z  INFO recording:studio_recording:segment{index=0}:camera-out: orbit_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera
2026-03-16T12:28:46.773395Z TRACE recording:studio_recording:segment{index=0}:camera-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-16T12:28:46.781338Z DEBUG orbit_recording::sources::native_camera: Native camera source task started
2026-03-16T12:28:46.783652Z TRACE recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-16T12:28:46.802991Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: M4S camera muxer encoder channel buffer size buffer_size=60
2026-03-16T12:28:46.806753Z  INFO recording:studio_recording:segment{index=0}:mic-out: orbit_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/audio-input.m4a
2026-03-16T12:28:46.808249Z  INFO recording:studio_recording:segment{index=0}: orbit_recording::studio_recording: pipeline playing
2026-03-16T12:28:46.821983Z TRACE recording:studio_recording: orbit_recording::studio_recording: spawning recording actor
2026-03-16T12:28:46.814178Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Encoder pixel format configuration encoder=h264_videotoolbox input_format=NV12 output_format=NV12 needs_pixel_conversion=false external_conversion=false
2026-03-16T12:28:46.820952Z TRACE recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Task started
2026-03-16T12:28:46.831567Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: No pixel format conversion needed (zero-copy path) encoder=h264_videotoolbox
2026-03-16T12:28:46.843169Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:28:46.843439Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:28:46.843679Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:28:47.351921Z  WARN recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Audio gap detected, inserting silence gap_ms=154 total_silence_ms=154 insertion_count=1 threshold_ms=70
2026-03-16T12:28:47.861648Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:28:47.861919Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:28:47.862104Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:28:48.546340Z  WARN orbit_recording::feeds::camera: Native camera sender 0 channel full at frame 5880, dropping frame
2026-03-16T12:28:48.563780Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5880, dropping frame
2026-03-16T12:28:48.567425Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5880, dropping frame
2026-03-16T12:28:48.575348Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5880, dropping frame
2026-03-16T12:28:48.887401Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:28:48.888008Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:28:48.889283Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:28:49.155406Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: M4S muxer encoder channel buffer size buffer_size=60
2026-03-16T12:28:49.157778Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Encoder pixel format configuration encoder=h264_videotoolbox input_format=NV12 output_format=NV12 needs_pixel_conversion=false external_conversion=false
2026-03-16T12:28:49.158218Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: No pixel format conversion needed (zero-copy path) encoder=h264_videotoolbox
2026-03-16T12:28:50.199489Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:28:50.200079Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:28:50.200373Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:28:50.380864Z  WARN orbit_recording::feeds::camera: Native camera sender 0 channel full at frame 5910, dropping frame
2026-03-16T12:28:50.398404Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5910, dropping frame
2026-03-16T12:28:50.401061Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5910, dropping frame
2026-03-16T12:28:50.549589Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 0 image to: "cursor_0.png"
2026-03-16T12:28:50.584392Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5910, dropping frame
2026-03-16T12:28:51.560391Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:28:51.560995Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:28:51.570306Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:28:51.826665Z DEBUG orbit_recording::sources::microphone: Microphone audio frames forwarded captured=143
2026-03-16T12:28:52.792184Z  WARN orbit_recording::sources::microphone: Microphone data timeout, generating silence is_wireless=false timeout_ms=100
2026-03-16T12:28:52.792938Z  INFO orbit_recording::sources::microphone: Microphone data resumed after silence period
2026-03-16T12:28:53.291067Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:28:53.291461Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:28:53.291687Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:28:53.845619Z  WARN orbit_recording::feeds::camera: Native camera sender 0 channel full at frame 5940, dropping frame
2026-03-16T12:28:53.848490Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5940, dropping frame
2026-03-16T12:28:53.850926Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5940, dropping frame
2026-03-16T12:28:53.857869Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5940, dropping frame
2026-03-16T12:28:54.294892Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:28:54.295161Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:28:54.295362Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:28:54.454608Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=57 drops=0 drop_rate_pct="0.0%" total_frames=57
2026-03-16T12:28:55.115311Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Selected hardware H264 encoder encoder=h264_videotoolbox width=3600 height=2338 fps=60.0
2026-03-16T12:28:55.119071Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Selected hardware H264 encoder encoder=h264_videotoolbox width=1920 height=1080 fps=30.0
2026-03-16T12:28:55.125656Z DEBUG recording:studio_recording:segment{index=0}[dash @ 0x112639d00] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera/init.mp4' for writing
[dash @ 0x11224b330] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display/init.mp4' for writing
:camera-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: FFmpeg DASH muxer state after write_header() manifest_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera/dash_manifest.mpd manifest_exists=true init_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera/init.mp4 init_exists=true
2026-03-16T12:28:55.267124Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: Initialized segmented video encoder with FFmpeg DASH muxer (init.mp4 + m4s segments). CRITICAL: init.mp4 is required for segment playback/recovery. path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera segment_duration_secs=3 width=1920 height=1080
2026-03-16T12:28:55.147357Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: FFmpeg DASH muxer state after write_header() manifest_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd manifest_exists=true init_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display/init.mp4 init_exists=true
2026-03-16T12:28:55.286825Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: Initialized segmented video encoder with FFmpeg DASH muxer (init.mp4 + m4s segments). CRITICAL: init.mp4 is required for segment playback/recovery. path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display segment_duration_secs=3 width=3600 height=2338
2026-03-16T12:28:55.317502Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:28:55.317828Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:28:55.318053Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:28:55.318748Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: Started M4S fragmented camera encoder path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera
2026-03-16T12:28:55.345791Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Capturing video baseline offset after warmup wall_clock_secs=8.634744958 camera_secs=2.01477 baseline_offset_secs=-6.619974958
2026-03-16T12:28:55.353165Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: Started M4S fragmented video encoder path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display
2026-03-16T12:28:55.354191Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Capturing video baseline offset after warmup wall_clock_secs=8.653500042 camera_secs=2.1666715 baseline_offset_secs=-6.486828542
2026-03-16T12:28:55.354684Z  WARN recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Extreme video clock drift detected after baseline correction, clamping drift_ratio=0.9471606288940471 wall_clock_secs=8.654047583 adjusted_camera_secs=9.136832042 baseline=-6.486828542
2026-03-16T12:28:55.452383Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: fill_frame_from_sample_buf exceeded 50ms threshold elapsed_ms=94 count=1
[dash @ 0x112639d00] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera/segment_001.m4s.tmp' for writing
2026-03-16T12:28:56.063421Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: Camera encoder.queue_frame exceeded 50ms threshold elapsed_ms=716 count=1
[dash @ 0x11224b330] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display/segment_001.m4s.tmp' for writing
2026-03-16T12:28:56.313520Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: Camera encoder.queue_frame exceeded 50ms threshold elapsed_ms=247 count=2
2026-03-16T12:28:56.320585Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:28:56.321145Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:28:56.321897Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:28:56.379851Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 50ms threshold elapsed_ms=858 count=1
2026-03-16T12:28:56.504726Z ERROR recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Audio gap exceeded 1s orbit, something may be seriously wrong gap_ms=1000
2026-03-16T12:28:56.505509Z  WARN recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Audio gap detected, inserting silence gap_ms=1000 total_silence_ms=1937 insertion_count=6 threshold_ms=70
2026-03-16T12:28:56.510457Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: Camera encoder.queue_frame exceeded 50ms threshold elapsed_ms=72 count=3
2026-03-16T12:28:56.697391Z  WARN orbit_recording::feeds::camera: Native camera sender 0 channel full at frame 5970, dropping frame
2026-03-16T12:28:56.700780Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 5970, dropping frame
2026-03-16T12:28:56.705523Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 5970, dropping frame
2026-03-16T12:28:56.708753Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 5970, dropping frame
2026-03-16T12:28:56.836915Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=257 dropped=2 silence_frames=1 drop_pct="0.8%" is_wireless=false send_timeout_ms=200
2026-03-16T12:28:56.616641Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: fill_frame_from_sample_buf exceeded 50ms threshold elapsed_ms=233 count=2
2026-03-16T12:28:56.916038Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: Camera encoder.queue_frame exceeded 50ms threshold elapsed_ms=162 count=4
2026-03-16T12:28:56.974981Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: Camera encoder.queue_frame exceeded 50ms threshold elapsed_ms=55 count=5
2026-03-16T12:28:57.339712Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:28:57.339970Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:28:57.340294Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:28:57.390093Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: fill_frame_from_sample_buf exceeded 50ms threshold elapsed_ms=491 count=3
2026-03-16T12:28:57.498989Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=1 duration_secs=8.634744958 frames=14
2026-03-16T12:28:57.554276Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 50ms threshold elapsed_ms=163 count=2
2026-03-16T12:28:57.642250Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: fill_frame_from_sample_buf exceeded 50ms threshold elapsed_ms=53 count=4
2026-03-16T12:28:58.355717Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:28:58.356403Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:28:58.356726Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:28:58.472482Z  WARN orbit_recording::feeds::camera: Native camera sender 0 channel full at frame 6000, dropping frame
2026-03-16T12:28:58.487567Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 6000, dropping frame
2026-03-16T12:28:58.489290Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6000, dropping frame
2026-03-16T12:28:58.490457Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 6000, dropping frame
2026-03-16T12:28:58.502081Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: fill_frame_from_sample_buf exceeded 50ms threshold elapsed_ms=853 count=5
2026-03-16T12:28:59.283117Z DEBUG orbit_recording::sources::native_camera: Native camera source: sent 30 frames, dropped 0 in 12.4925915s
2026-03-16T12:28:59.283737Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Wall-clock-confirmed forward jump (system sleep/wake), accepting new baseline stream="video" forward_secs=3.91153 wall_clock_gap_secs="3.679" last_valid_ms=2651 current_ms=6562 resync_count=1 confirmed_jumps=1
2026-03-16T12:28:59.284375Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Timeline resync detected, re-baselining drift tracker raw_duration_ms=2684
2026-03-16T12:28:59.296809Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Capturing video baseline offset after warmup wall_clock_secs=12.59595675 camera_secs=2.684353333 baseline_offset_secs=-9.911603416999998
2026-03-16T12:28:59.337816Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=2 duration_secs=3.961211792 frames=11
2026-03-16T12:28:59.370734Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:28:59.371054Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:28:59.371484Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:28:59.398661Z ERROR recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Audio gap exceeded 1s orbit, something may be seriously wrong gap_ms=1000
2026-03-16T12:28:59.462392Z ERROR recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Audio gap exceeded 1s orbit, something may be seriously wrong gap_ms=1000
[dash @ 0x112639d00] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera/dash_manifest.mpd.tmp' for writing
[dash @ 0x112639d00] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera/media_0.m3u8.tmp' for writing
2026-03-16T12:28:59.475842Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=100 drops=0 drop_rate_pct="0.0%" total_frames=157
[dash @ 0x112639d00] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera/master.m3u8.tmp' for writing
[dash @ 0x112639d00] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera/segment_002.m4s.tmp' for writing
2026-03-16T12:28:59.500678Z ERROR recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Audio gap exceeded 1s orbit, something may be seriously wrong gap_ms=1000
2026-03-16T12:28:59.587108Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 6030, dropping frame
2026-03-16T12:28:59.591877Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6030, dropping frame
2026-03-16T12:28:59.837062Z ERROR recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Audio gap exceeded 1s orbit, something may be seriously wrong gap_ms=1000
2026-03-16T12:28:59.919365Z ERROR recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Audio gap exceeded 1s orbit, something may be seriously wrong gap_ms=1000
2026-03-16T12:28:59.965222Z ERROR recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Audio gap exceeded 1s orbit, something may be seriously wrong gap_ms=1000
2026-03-16T12:29:00.104863Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 50ms threshold elapsed_ms=54 count=3
2026-03-16T12:29:00.365333Z  WARN recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: M4S muxer frame drop rate exceeds 5% threshold frames=76 drops=110 drop_rate_pct="59.1%" total_frames=77 total_drops=110
2026-03-16T12:29:00.385644Z DEBUG orbit_desktop_lib: is_camera_available: looking for ModelID(ModelID { vid: "D288", pid: "CE50" }) in 1 cameras
2026-03-16T12:29:00.385883Z DEBUG orbit_desktop_lib:   - device_id=1FD4B3A2-236E-492B-8CE5-255DD288CE50, model_id=Some(ModelID { vid: "D288", pid: "CE50" }), name=FaceTime HD Camera
2026-03-16T12:29:00.386076Z DEBUG orbit_desktop_lib: Camera watcher: checking availability for ModelID(ModelID { vid: "D288", pid: "CE50" }), available=true, is_marked=false
2026-03-16T12:29:00.464011Z  WARN orbit_recording::feeds::camera: Native camera sender 0 channel full at frame 6060, dropping frame
2026-03-16T12:29:00.495100Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 6060, dropping frame
2026-03-16T12:29:00.501730Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6060, dropping frame
2026-03-16T12:29:00.503809Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 6060, dropping frame
2026-03-16T12:29:01.359463Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 1 image to: "cursor_1.png"
2026-03-16T12:29:01.400354Z  INFO orbit_recording::studio_recording: pipeline shuting down
2026-03-16T12:29:01.402266Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Capturer stopping after creating 221 video frames
2026-03-16T12:29:01.401877Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video cancelled, draining remaining frames from channel
2026-03-16T12:29:01.403910Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video cancelled, draining remaining frames from channel
2026-03-16T12:29:01.404296Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Timestamp anomaly statistics stream="video" anomaly_count=0 wall_clock_confirmed_jumps=1 total_backward_skew_secs="0.000" max_backward_skew_secs="0.000" total_forward_skew_secs="3.912" max_forward_skew_secs="3.912" resync_count=1 accumulated_compensation_secs="-3.878"
2026-03-16T12:29:01.405024Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video finished after cancellation, total 32 frames
2026-03-16T12:29:01.408888Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-16T12:29:01.405404Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Video frames capped to wall clock + tolerance capped_frames=185
2026-03-16T12:29:01.406036Z DEBUG recording:studio_recording:segment{index=0}:camera-out:{task="capture-video"}: orbit_recording::sources::native_camera: Native camera source: stopping
2026-03-16T12:29:01.411450Z  INFO recording:studio_recording:segment{index=0}:camera-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-16T12:29:01.411285Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video finished after cancellation, total 221 frames
2026-03-16T12:29:01.417844Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-16T12:29:01.407898Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: M4S camera encoder timing summary total_frames=32 slow_converts=0 slow_encodes=11 slow_convert_pct="0.0%" slow_encode_pct="34.4%"
2026-03-16T12:29:01.458297Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-16T12:29:01.499165Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: orbit_recording::output_pipeline::core: Task finished successfully
[dash @ 0x112639d00] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera/dash_manifest.mpd.tmp' for writing
[dash @ 0x112639d00] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera/media_0.m3u8.tmp' for writing
2026-03-16T12:29:01.524020Z DEBUG orbit_recording::sources::native_camera: Native camera source: received stop signal
2026-03-16T12:29:01.524303Z  INFO orbit_recording::sources::native_camera: Native camera source finished: 32 received, 32 sent, 0 dropped in 14.734731042s
2026-03-16T12:29:01.532492Z  WARN orbit_recording::feeds::camera: Native camera sender 0 disconnected at frame 6088, will be removed
2026-03-16T12:29:01.533413Z DEBUG orbit_recording::feeds::camera: Removing 1 disconnected native camera senders
2026-03-16T12:29:01.596462Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 6090, dropping frame
2026-03-16T12:29:01.792144Z  INFO recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Audio gap tracking summary at finish silence_insertions=13 total_silence_ms=8561
2026-03-16T12:29:01.792976Z  INFO recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-16T12:29:01.833322Z  WARN orbit_recording::output_pipeline::core: Muxer streams had failure: Unknown error: -67
[aac @ 0x122d44820] Qavg: 37997.145
2026-03-16T12:29:01.864756Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=257 dropped=174 silence_frames=1 drop_pct="40.4%" is_wireless=false send_timeout_ms=200
2026-03-16T12:29:02.249782Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6120, dropping frame
2026-03-16T12:29:02.252137Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 6120, dropping frame
2026-03-16T12:29:02.565005Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=1 duration_secs=8.653500042 frames=34
[dash @ 0x11224b330] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x11224b330] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x11224b330] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display/master.m3u8.tmp' for writing
2026-03-16T12:29:03.060929Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 50ms threshold elapsed_ms=203 count=4
[dash @ 0x11224b330] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display/segment_002.m4s.tmp' for writing
2026-03-16T12:29:03.268535Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 6150, dropping frame
2026-03-16T12:29:03.271055Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6150, dropping frame
2026-03-16T12:29:03.273708Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 6150, dropping frame
2026-03-16T12:29:04.224034Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 6180, dropping frame
2026-03-16T12:29:04.227674Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6180, dropping frame
2026-03-16T12:29:04.230303Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 6180, dropping frame
2026-03-16T12:29:05.073983Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 50ms threshold elapsed_ms=54 count=5
2026-03-16T12:29:05.305456Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6210, dropping frame
2026-03-16T12:29:05.307913Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 6210, dropping frame
2026-03-16T12:29:06.429504Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 6240, dropping frame
2026-03-16T12:29:06.438640Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6240, dropping frame
2026-03-16T12:29:06.441930Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 6240, dropping frame
2026-03-16T12:29:06.669083Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: M4S encoder thread did not finish within 5s, abandoning
[dash @ 0x11224b330] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x11224b330] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
2026-03-16T12:29:06.728740Z  INFO orbit_enc_ffmpeg::mux::segmented_stream: Recovered orphaned segment /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display/segment_002.m4s with 4658313 bytes, estimated duration 6.146539458s
2026-03-16T12:29:06.747024Z  INFO orbit_recording::studio_recording: pipeline shutdown
2026-03-16T12:29:07.055636Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=257 dropped=323 silence_frames=1 drop_pct="55.7%" is_wireless=false send_timeout_ms=200
2026-03-16T12:29:07.070717Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:07.115161Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:07.235998Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: cursor recorder done
2026-03-16T12:29:07.255998Z  INFO recording: orbit_desktop_lib::recording: recording wait actor done: Ok(())
2026-03-16T12:29:07.263077Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.Unlock
2026-03-16T12:29:07.341480Z  INFO stop_recording: orbit_desktop_lib::recording: Recording has fragments that need remuxing - opening editor immediately
2026-03-16T12:29:07.365091Z TRACE orbit_recording::feeds::camera: CameraFeed.Unlock
2026-03-16T12:29:07.426754Z  INFO orbit_desktop_lib::frame_ws: WebSocket server listening on port 56952
2026-03-16T12:29:07.427435Z  INFO orbit_desktop_lib: Recording is being finalized, waiting for completion...
2026-03-16T12:29:07.950672Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.082169Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.091549Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 6270, dropping frame
2026-03-16T12:29:08.093011Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6270, dropping frame
2026-03-16T12:29:08.095859Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 6270, dropping frame
2026-03-16T12:29:08.144241Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.341901Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.490460Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.509934Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.684386Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.708845Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.722038Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.741785Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.755451Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.766045Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.778695Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.788681Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.801881Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.815482Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.826247Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.844610Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.853220Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.867090Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.880499Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.888547Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.900381Z  WARN orbit_recording::output_pipeline::macos_fragmented_m4s: Failed to encode frame: Encode: End of file
2026-03-16T12:29:08.948434Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: M4S encoder timing summary (using SegmentedVideoEncoder) total_frames=84 slow_converts=48 slow_encodes=6 slow_convert_pct="57.1%" slow_encode_pct="7.1%"
2026-03-16T12:29:09.101359Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6300, dropping frame
2026-03-16T12:29:09.195628Z  INFO orbit_desktop_lib::recording: Starting background finalization for recording
2026-03-16T12:29:09.237279Z  INFO orbit_recording::recovery: Found 1 recoverable segments in "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit" with estimated duration 0ns
2026-03-16T12:29:09.237832Z  INFO orbit_recording::recovery: Concatenating 2 M4S display segments with init to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display.mp4"
2026-03-16T12:29:09.720490Z  INFO orbit_recording::recovery: Concatenating 2 M4S camera segments with init to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera.mp4"
2026-03-16T12:29:10.077991Z  INFO orbit_recording::recovery: Transcoding single mic fragment to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/audio-input.ogg"
2026-03-16T12:29:10.170031Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6330, dropping frame
2026-03-16T12:29:10.578047Z  INFO orbit_recording::recovery: Validating recovered display video: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display.mp4"
2026-03-16T12:29:11.211303Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 6360, dropping frame
2026-03-16T12:29:11.212896Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6360, dropping frame
2026-03-16T12:29:11.635020Z  INFO orbit_recording::recovery: Display video validation passed
2026-03-16T12:29:11.635362Z  INFO orbit_recording::recovery: Validating recovered camera video: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera.mp4"
2026-03-16T12:29:12.045502Z  INFO orbit_recording::recovery: Camera video validation passed
2026-03-16T12:29:12.068153Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=257 dropped=466 silence_frames=1 drop_pct="64.5%" is_wireless=false send_timeout_ms=200
2026-03-16T12:29:12.275579Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6390, dropping frame
2026-03-16T12:29:12.768120Z  INFO orbit_recording::recovery: Created project configuration with timeline for recovered recording
2026-03-16T12:29:12.768284Z  INFO orbit_recording::recovery: Successfully recovered recording at "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit"
2026-03-16T12:29:12.768408Z  INFO orbit_desktop_lib::recording: Successfully remuxed fragmented recording
2026-03-16T12:29:13.356565Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6420, dropping frame
2026-03-16T12:29:13.606203Z  INFO orbit_desktop_lib::recording: Background finalization completed for recording
2026-03-16T12:29:13.606870Z  INFO orbit_desktop_lib: Recording finalization completed
2026-03-16T12:29:13.619936Z DEBUG orbit_project::meta: Checking for captions at: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/captions.json"
2026-03-16T12:29:13.621803Z DEBUG orbit_project::meta: No captions.json found
2026-03-16T12:29:14.541744Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6450, dropping frame
[swscaler @ 0x4105c8000] No accelerated colorspace conversion found from yuv420p to rgb24.
2026-03-16T12:29:15.570329Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6480, dropping frame
2026-03-16T12:29:15.572287Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 6480, dropping frame
2026-03-16T12:29:16.892155Z  INFO orbit_video_decode::avassetreader: Built keyframe index path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/display.mp4 keyframe_count=5 fps=6.728954908398775 duration_secs=8.768077777777778 build_ms=1290
2026-03-16T12:29:16.893589Z  INFO orbit_rendering::decoder::multi_position: Configured decoder pool for video duration duration_secs=8.768077777777778 optimal_pool_size=5 reposition_threshold=5.0
2026-03-16T12:29:17.069907Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=257 dropped=609 silence_frames=1 drop_pct="70.3%" is_wireless=false send_timeout_ms=200
2026-03-16T12:29:17.682662Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 6540, dropping frame
2026-03-16T12:29:17.683996Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6540, dropping frame
2026-03-16T12:29:17.687772Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 6540, dropping frame
2026-03-16T12:29:18.834238Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=0.5583333373069763 decoder_index=1
2026-03-16T12:29:19.317609Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=1.350000023841858 decoder_index=2
2026-03-16T12:29:19.714073Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=15.381988525390625 decoder_index=3
2026-03-16T12:29:20.860134Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 6630, dropping frame
2026-03-16T12:29:20.861478Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6630, dropping frame
2026-03-16T12:29:20.964109Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=8.75963306427002 decoder_index=4
2026-03-16T12:29:20.964311Z  INFO orbit_rendering::decoder::avassetreader: Initialized multi-position decoder pool decoder_count=5 optimal_pool_size=5 reposition_threshold=5.0 fps=6 duration_secs=8.768077777777778 total_frames_estimate=53
2026-03-16T12:29:20.973919Z  INFO orbit_rendering::decoder: Video 'screen' using AVAssetReader (hardware) decoder (3600x2338)
2026-03-16T12:29:21.764653Z  INFO orbit_video_decode::avassetreader: Built keyframe index path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-16 01.28 PM.orbit/content/segments/segment-0/camera.mp4 keyframe_count=3 fps=2.533219924830217 duration_secs=12.632144444444444 build_ms=785
2026-03-16T12:29:21.770245Z  INFO orbit_rendering::decoder::multi_position: Configured decoder pool for video duration duration_secs=12.632144444444444 optimal_pool_size=5 reposition_threshold=5.0
2026-03-16T12:29:21.922464Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6660, dropping frame
2026-03-16T12:29:22.071173Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=257 dropped=752 silence_frames=1 drop_pct="74.5%" is_wireless=false send_timeout_ms=200
2026-03-16T12:29:22.521776Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=1.979433298110962 decoder_index=1
2026-03-16T12:29:22.830825Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=15.290055274963379 decoder_index=2
2026-03-16T12:29:22.831037Z  INFO orbit_rendering::decoder::avassetreader: Initialized multi-position decoder pool decoder_count=3 optimal_pool_size=5 reposition_threshold=5.0 fps=2 duration_secs=12.632144444444444 total_frames_estimate=26
2026-03-16T12:29:22.831549Z  INFO orbit_rendering::decoder: Video 'camera' using AVAssetReader (hardware) decoder (1920x1080)
2026-03-16T12:29:22.832266Z  INFO orbit_rendering::yuv_converter: Creating shared YUV converter pipelines (shader compilation)
2026-03-16T12:29:22.863176Z  INFO orbit_rendering::yuv_converter: Shared YUV converter pipelines created successfully
2026-03-16T12:29:23.142054Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6690, dropping frame
2026-03-16T12:29:23.442344Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-16T12:29:23.527840Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-16T12:29:23.530643Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-16T12:29:24.111686Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 6720, dropping frame
2026-03-16T12:29:24.113238Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6720, dropping frame
2026-03-16T12:29:25.175052Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6750, dropping frame
2026-03-16T12:29:25.176177Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 6750, dropping frame
2026-03-16T12:29:26.234860Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6780, dropping frame
2026-03-16T12:29:26.236321Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 6780, dropping frame
2026-03-16T12:29:27.075124Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=257 dropped=895 silence_frames=1 drop_pct="77.7%" is_wireless=false send_timeout_ms=200
2026-03-16T12:29:30.473843Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 6900, dropping frame
2026-03-16T12:29:32.079681Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=257 dropped=1038 silence_frames=1 drop_pct="80.2%" is_wireless=false send_timeout_ms=200
[BABEL] Note: The code generator has deoptimised the styling of /Users/dives/Desktop/Projects/orbit/apps/desktop/node_modules/.vinxi/client/deps/effect.js as it exceeds the max of 500KB.
2026-03-16T12:29:35.889496Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 7050, dropping frame
2026-03-16T12:29:37.084831Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=257 dropped=1181 silence_frames=1 drop_pct="82.1%" is_wireless=false send_timeout_ms=200
2026-03-16T12:29:37.973588Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 7110, dropping frame
2026-03-16T12:29:37.975561Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 7110, dropping frame
2026-03-16T12:29:40.726770Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 7170, dropping frame
2026-03-16T12:29:40.735488Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 7170, dropping frame
2026-03-16T12:29:40.750838Z  WARN orbit_recording::feeds::camera: Camera sender 2 channel full at frame 7170, dropping frame
2026-03-16T12:29:41.120187Z  WARN orbit_recording::sources::microphone: Microphone data timeout, generating silence is_wireless=false timeout_ms=100
2026-03-16T12:29:41.121216Z  INFO orbit_recording::sources::microphone: Microphone data resumed after silence period
2026-03-16T12:29:42.087759Z  WARN orbit_recording::sources::microphone: Microphone audio stats captured=257 dropped=1323 silence_frames=2 drop_pct="83.7%" is_wireless=false send_timeout_ms=200
2026-03-16T12:29:42.210663Z  WARN orbit_recording::feeds::camera: Camera sender 0 channel full at frame 7200, dropping frame
2026-03-16T12:29:42.212421Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 7200, dropping frame
2026-03-16T12:29:43.261664Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 7230, dropping frame
2026-03-16T12:29:44.998008Z  WARN orbit_recording::sources::microphone: Microphone data timeout, generating silence is_wireless=false timeout_ms=100
2026-03-16T12:29:44.998836Z  INFO orbit_recording::sources::microphone: Microphone data resumed after silence period
2026-03-16T12:29:45.639594Z  WARN orbit_recording::feeds::camera: Camera sender 1 channel full at frame 7290, dropping frame
