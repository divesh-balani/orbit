80" format="NV12"
2026-03-02T21:43:20.388209Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=359 total_skipped=0 cache_hits=0 prefetch_hits=359 sync_decodes=0 prefetch_buffer=86
2026-03-02T21:43:20.463511Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="182.0" avg_kb="2961.6" dims="1872x1080" format="NV12"
2026-03-02T21:43:22.206341Z  WARN orbit_editor::editor_instance: preview task abort await failed: task 461 was cancelled
2026-03-02T21:43:22.234615Z  WARN orbit_desktop_lib: Camera window CloseRequested event received!
2026-03-02T21:43:22.262739Z ERROR orbit_rendering::decoder::avassetreader: Failed to reset decoder, marking as invalid requested_time=7.689655303955078 error=AssetReader::with_asset: The operation could not be completed
2026-03-02T21:43:22.265846Z  WARN orbit_rendering::decoder::avassetreader: No frames decoded from video - decoder iterator returned no frames decoder_idx=0 requested_frame=223 requested_time=7.689655303955078 was_reset=true cache_size=78 consecutive_empty=1 near_end=false
2026-03-02T21:43:22.272909Z ERROR orbit_desktop_lib::frame_ws: Failed to send frame to socket: Error { inner: Io(Os { code: 32, kind: BrokenPipe, message: "Broken pipe" }) }
2026-03-02T21:43:22.273040Z  INFO orbit_desktop_lib::frame_ws: Websocket closing after 41.15s
2026-03-02T21:43:23.817953Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new sender
2026-03-02T21:43:23.818058Z TRACE orbit_recording::feeds::camera: CameraFeed.SetInput('ModelID(ModelID { vid: "046d", pid: "0825" })')
2026-03-02T21:43:24.364174Z TRACE orbit_recording::feeds::camera: CameraFeed.InputConnected
2026-03-02T21:43:24.364554Z TRACE orbit_recording::feeds::camera: Attaching new camera
2026-03-02T21:43:24.365610Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new sender
2026-03-02T21:43:24.366364Z  INFO orbit_recording::feeds::camera: Camera capture thread: waiting for done signal for ModelID(ModelID { vid: "046d", pid: "0825" })
2026-03-02T21:43:29.446810Z  WARN orbit_desktop_lib: Camera window CloseRequested event received!
2026-03-02T21:43:29.448719Z TRACE orbit_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-02T21:43:29.448826Z  WARN orbit_recording::feeds::camera: Camera capture thread: done signal received for ModelID(ModelID { vid: "046d", pid: "0825" }), result=Ok(())
2026-03-02T21:43:29.616110Z  WARN orbit_recording::feeds::camera: Camera capture thread: stopped capture of ModelID(ModelID { vid: "046d", pid: "0825" })
2026-03-02T21:43:32.713778Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.RemoveInput
2026-03-02T21:43:32.713986Z TRACE orbit_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-02T21:43:34.576823Z  WARN orbit_desktop_lib: Camera window CloseRequested event received!
2026-03-02T21:43:36.166079Z  INFO orbit_desktop_lib::camera: Camera preview shutdown requested (session 1).
2026-03-02T21:43:36.166143Z  INFO orbit_desktop_lib::camera: Camera preview shutdown requested. Cleaning up...
2026-03-02T21:43:36.166175Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.RemoveInput
2026-03-02T21:43:36.166214Z TRACE orbit_recording::feeds::camera: CameraFeed.RemoveInput
dives@MacBook-Pro orbit % clear
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
        Warn Waiting for your frontend dev server to start on http://localhost:3002/...

  ➜ Local:    http://localhost:3002/
  ➜ Network:  use --host to expose

     Running DevCommand (`cargo  run --no-default-features --color always --`)
        Info Watching /Users/dives/Desktop/Projects/orbit/apps/desktop/src-tauri for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/apps/cli for changes...
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
   Compiling objc2-exception-helper v0.1.1
   Compiling ring v0.17.14
   Compiling objc_exception v0.1.2
   Compiling mac-notification-sys v0.6.6
   Compiling objc2 v0.6.2
   Compiling objc v0.2.7
   Compiling metal v0.31.0
   Compiling cocoa-foundation v0.2.1
   Compiling objc_id v0.1.1
   Compiling objc-foundation v0.1.1
   Compiling rustls v0.23.31
   Compiling rustls v0.21.12
   Compiling objc2-core-foundation v0.3.1
   Compiling block2 v0.6.1
   Compiling objc2-javascript-core v0.3.1
   Compiling dispatch2 v0.3.0
   Compiling screencapturekit v0.3.6
   Compiling cocoa v0.26.1
   Compiling objc2-foundation v0.3.1
   Compiling objc2-core-graphics v0.3.1
   Compiling objc2-security v0.3.1
   Compiling objc2-core-media v0.3.1
   Compiling objc2-core-video v0.3.1
   Compiling objc2-io-kit v0.3.1
   Compiling rustls-webpki v0.103.6
   Compiling sct v0.7.1
   Compiling rustls-webpki v0.101.7
   Compiling sysinfo v0.35.2
   Compiling wgpu-hal v25.0.2 (/Users/dives/Desktop/Projects/orbit/vendor/wgpu-hal)
   Compiling tokio-rustls v0.24.1
   Compiling hyper-rustls v0.24.2
   Compiling wgpu-core-deps-apple v25.0.0
   Compiling reqwest v0.11.27
   Compiling wgpu-core v25.0.2
   Compiling tokio-rustls v0.26.3
   Compiling hyper-rustls v0.27.7
   Compiling reqwest v0.12.24 (https://github.com/CapSoftware/reqwest?rev=9b5ecbd5210a9510fde766015cabb724c1e70d2e#9b5ecbd5)
   Compiling posthog-rs v0.3.7 (https://github.com/CapSoftware/posthog-rs?rev=c7e9712be2f9a9122b1df685d5a067afa5415288#c7e9712b)
   Compiling workspace-hack v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/workspace-hack)
   Compiling sentry v0.42.0
   Compiling opentelemetry-http v0.31.0
   Compiling orbit-media-info v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/media-info)
   Compiling ffmpeg-hw-device v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/ffmpeg-hw-device)
   Compiling orbit-cursor-info v0.0.0 (/Users/dives/Desktop/Projects/orbit/crates/cursor-info)
   Compiling orbit-video-decode v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/video-decode)
   Compiling orbit-flags v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/flags)
   Compiling orbit-media v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/media)
   Compiling orbit-project v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/project)
   Compiling orbit-camera-avfoundation v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/camera-avfoundation)
   Compiling orbit-audio v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/audio)
   Compiling orbit-enc-ffmpeg v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/enc-ffmpeg)
   Compiling sorbit-targets v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/sorbit-targets)
   Compiling orbit-utils v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/utils)
   Compiling orbit-cursor-capture v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/cursor-capture)
   Compiling sentry-rust-minidump v0.13.0
   Compiling orbit-enc-avfoundation v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/enc-avfoundation)
   Compiling orbit-frame-converter v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/frame-converter)
   Compiling orbit-fail v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/fail)
   Compiling orbit-timestamp v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/timestamp)
   Compiling wgpu v25.0.2
   Compiling orbit-enc-gif v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/enc-gif)
   Compiling opentelemetry-otlp v0.31.0
   Compiling sorbit-direct3d v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/sorbit-direct3d)
   Compiling glyphon v0.9.0
   Compiling orbit-rendering v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/rendering)
   Compiling objc2-quartz-core v0.3.1
   Compiling objc2-core-image v0.3.1
   Compiling objc2-core-data v0.3.1
   Compiling objc2-cloud-kit v0.3.1
   Compiling objc2-avf-audio v0.3.1
   Compiling notify-rust v4.11.7
   Compiling objc2-app-kit v0.3.1
   Compiling objc2-av-foundation v0.3.1
   Compiling orbit-editor v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/editor)
   Compiling orbit-export v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/export)
   Compiling orbit-camera v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/camera)
   Compiling orbit-camera-ffmpeg v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/camera-ffmpeg)
   Compiling objc2-web-kit v0.3.1
   Compiling muda v0.17.1
   Compiling tao v0.34.3 (/Users/dives/Desktop/Projects/orbit/vendor/tao)
   Compiling window-vibrancy v0.6.0
   Compiling sorbit-screencapturekit v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/sorbit-screencapturekit)
   Compiling objc2-osa-kit v0.3.1
   Compiling rfd v0.15.4
   Compiling arboard v3.6.1
   Compiling global-hotkey v0.7.0
   Compiling clipboard-rs v0.2.4
   Compiling sorbit-ffmpeg v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/sorbit-ffmpeg)
   Compiling orbit-recording v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/recording)
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

   Compiling osakit v0.3.1
   Compiling tray-icon v0.21.1
warning: `tao` (lib) generated 6 warnings
   Compiling tauri-runtime v2.8.0
   Compiling wry v0.53.3
   Compiling tauri-runtime-wry v2.8.1
   Compiling tauri v2.8.5
   Compiling tauri-plugin-fs v2.4.2
   Compiling tauri-plugin-deep-link v2.4.3
   Compiling tauri-plugin-os v2.3.1
   Compiling tauri-nspanel v2.0.1 (https://github.com/ahkohd/tauri-nspanel?branch=v2#18ffb9a2)
   Compiling tauri-plugin-process v2.3.0
   Compiling tauri-specta v2.0.0-rc.20
   Compiling tauri-plugin-opener v2.5.0
   Compiling tauri-plugin-shell v2.3.1
   Compiling tauri-plugin-sentry v0.5.0
   Compiling tauri-plugin-oauth v2.0.0 (https://github.com/FabianLars/tauri-plugin-oauth?branch=v2#f941c99c)
   Compiling tauri-plugin-positioner v2.3.0
   Compiling tauri-plugin-global-shortcut v2.3.0
   Compiling tauri-plugin-notification v2.3.1
   Compiling tauri-plugin-updater v2.9.0
   Compiling tauri-plugin-store v2.4.0
   Compiling tauri-plugin-window-state v2.4.0
   Compiling tauri-plugin-single-instance v2.3.4
   Compiling tauri-plugin-clipboard-manager v2.3.0
   Compiling tauri-plugin-http v2.5.2
   Compiling tauri-plugin-dialog v2.4.0
   Compiling orbit-desktop v0.4.8 (/Users/dives/Desktop/Projects/orbit/apps/desktop/src-tauri)
warning: unused import: `destroy_recording_controls_window`
  --> apps/desktop/src-tauri/src/recording.rs:64:39
   |
64 |         OrbitWindowId, ShowCapWindow, destroy_recording_controls_window, hide_recording_windows,
   |                                       ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
   |
   = note: `#[warn(unused_imports)]` (part of `#[warn(unused)]`) on by default

warning: function `upload_multipart_initiate` is never used
 --> apps/desktop/src-tauri/src/api.rs:7:14
  |
7 | pub async fn upload_multipart_initiate(
  |              ^^^^^^^^^^^^^^^^^^^^^^^^^
  |
  = note: `#[warn(dead_code)]` (part of `#[warn(unused)]`) on by default

warning: function `upload_multipart_presign_part` is never used
  --> apps/desktop/src-tauri/src/api.rs:15:14
   |
15 | pub async fn upload_multipart_presign_part(
   |              ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: struct `UploadedPart` is never constructed
  --> apps/desktop/src-tauri/src/api.rs:28:12
   |
28 | pub struct UploadedPart {
   |            ^^^^^^^^^^^^

warning: function `upload_multipart_complete` is never used
  --> apps/desktop/src-tauri/src/api.rs:47:14
   |
47 | pub async fn upload_multipart_complete(
   |              ^^^^^^^^^^^^^^^^^^^^^^^^^

warning: enum `PresignedS3PutRequestMethod` is never used
  --> apps/desktop/src-tauri/src/api.rs:60:10
   |
60 | pub enum PresignedS3PutRequestMethod {
   |          ^^^^^^^^^^^^^^^^^^^^^^^^^^^

warning: struct `PresignedS3PutRequest` is never constructed
  --> apps/desktop/src-tauri/src/api.rs:68:12
   |
68 | pub struct PresignedS3PutRequest {
   |            ^^^^^^^^^^^^^^^^^^^^^

warning: function `upload_signed` is never used
  --> apps/desktop/src-tauri/src/api.rs:76:14
   |
76 | pub async fn upload_signed(
   |              ^^^^^^^^^^^^^

warning: function `desktop_video_progress` is never used
  --> apps/desktop/src-tauri/src/api.rs:84:14
   |
84 | pub async fn desktop_video_progress(
   |              ^^^^^^^^^^^^^^^^^^^^^^

warning: enum `PostHogEvent` is never used
 --> apps/desktop/src-tauri/src/posthog.rs:4:10
  |
4 | pub enum PostHogEvent {
  |          ^^^^^^^^^^^^

warning: function `async_capture_event` is never used
  --> apps/desktop/src-tauri/src/posthog.rs:20:8
   |
20 | pub fn async_capture_event(_event: PostHogEvent) {}
   |        ^^^^^^^^^^^^^^^^^^^

warning: variants `InvalidAuthentication` and `UpgradeRequired` are never constructed
   --> apps/desktop/src-tauri/src/recording.rs:414:5
    |
412 | pub enum RecordingAction {
    |          --------------- variants in this enum
413 |     Started,
414 |     InvalidAuthentication,
    |     ^^^^^^^^^^^^^^^^^^^^^
415 |     UpgradeRequired,
    |     ^^^^^^^^^^^^^^^

warning: function `try_repair_corrupt_mp4` is never used
  --> apps/desktop/src-tauri/src/upload.rs:60:8
   |
60 | pub fn try_repair_corrupt_mp4(_path: &Path) -> Result<(), String> {
   |        ^^^^^^^^^^^^^^^^^^^^^^

warning: function `compress_image` is never used
  --> apps/desktop/src-tauri/src/upload.rs:64:14
   |
64 | pub async fn compress_image(_path: PathBuf) -> Result<Vec<u8>, String> {
   |              ^^^^^^^^^^^^^^

warning: field `handle` is never read
  --> apps/desktop/src-tauri/src/upload.rs:69:9
   |
68 | pub struct InstantMultipartUpload {
   |            ---------------------- field in this struct
69 |     pub handle: tokio::task::JoinHandle<Result<(), AuthedApiError>>,
   |         ^^^^^^

warning: associated function `run` is never used
  --> apps/desktop/src-tauri/src/upload.rs:89:18
   |
72 | impl InstantMultipartUpload {
   | --------------------------- associated function in this implementation
...
89 |     pub async fn run(
   |                  ^^^

warning: function `singlepart_uploader` is never used
   --> apps/desktop/src-tauri/src/upload.rs:102:14
    |
102 | pub async fn singlepart_uploader(
    |              ^^^^^^^^^^^^^^^^^^^

warning: function `emit_upload_complete` is never used
   --> apps/desktop/src-tauri/src/upload.rs:113:8
    |
113 | pub fn emit_upload_complete(_app: &AppHandle, _video_id: &str) {}
    |        ^^^^^^^^^^^^^^^^^^^^

warning: variants `InvalidAuthentication`, `UpgradeRequired`, and `AuthStore` are never constructed
  --> apps/desktop/src-tauri/src/web_api.rs:9:5
   |
 7 | pub enum AuthedApiError {
   |          -------------- variants in this enum
 8 |     #[error("User is not authenticated or credentials have expired!")]
 9 |     InvalidAuthentication,
   |     ^^^^^^^^^^^^^^^^^^^^^
10 |     #[error("User needs to upgrade their account to use this feature!")]
11 |     UpgradeRequired,
   |     ^^^^^^^^^^^^^^^
12 |     #[error("AuthedApiError/AuthStore: {0}")]
13 |     AuthStore(String),
   |     ^^^^^^^^^
   |
   = note: `AuthedApiError` has a derived impl for the trait `Debug`, but this is intentionally ignored during dead code analysis

warning: methods `make_app_url` and `is_server_url_custom` are never used
  --> apps/desktop/src-tauri/src/web_api.rs:58:14
   |
45 | pub trait ManagerExt<R: Runtime>: Manager<R> {
   |           ---------- methods in this trait
...
58 |     async fn make_app_url(&self, pathname: impl AsRef<str>) -> String;
   |              ^^^^^^^^^^^^
59 |
60 |     async fn is_server_url_custom(&self) -> bool;
   |              ^^^^^^^^^^^^^^^^^^^^

warning: `orbit-desktop` (lib) generated 20 warnings (run `cargo fix --lib -p orbit-desktop` to apply 1 suggestion)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 1m 06s
     Running `/Users/dives/Desktop/Projects/orbit/target/debug/orbit-desktop`
2026-03-03T01:06:09.809159Z  INFO orbit_desktop_lib::frame_ws: WebSocket server listening on port 55049
2026-03-03T01:06:09.810750Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new sender
Initializing GeneralSettingsStore
GeneralSettingsState managed
Checking startup completion and permissions...
Notification permission already granted
2026-03-03T01:06:10.059306Z  INFO orbit_desktop_lib::gpu_context: Using hardware GPU adapter for shared context adapter_name="Apple M3 Pro" adapter_backend=Metal
Permissions check result: OSPermissionsCheck { screen_recording: Granted, microphone: Granted, camera: Granted, accessibility: Granted }
Permissions granted, showing main window
2026-03-03T01:06:10.176436Z TRACE orbit_desktop_lib::platform::macos::sc_shareable_content: ScreenCaptureKit cache warmed elapsed_ms=51.797
[baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
Browserslist: browsers data (caniuse-lite) is 11 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
2026-03-03T01:06:14.034401Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new sender
2026-03-03T01:06:14.034565Z TRACE orbit_recording::feeds::camera: CameraFeed.SetInput('ModelID(ModelID { vid: "046d", pid: "0825" })')
2026-03-03T01:06:14.035362Z  WARN set_camera_input{id=Some(ModelID(ModelID { vid: "046d", pid: "0825" })) skip_camera_window=None}: orbit_desktop_lib: Failed to set camera input (attempt 1): DeviceNotFound. Retrying...
2026-03-03T01:06:14.035377Z TRACE orbit_recording::feeds::camera: CameraFeed.InputConnectFailed
2026-03-03T01:06:14.537555Z TRACE orbit_recording::feeds::camera: CameraFeed.SetInput('ModelID(ModelID { vid: "046d", pid: "0825" })')
2026-03-03T01:06:14.537989Z TRACE orbit_recording::feeds::camera: CameraFeed.InputConnectFailed
2026-03-03T01:06:14.537997Z  WARN set_camera_input{id=Some(ModelID(ModelID { vid: "046d", pid: "0825" })) skip_camera_window=None}: orbit_desktop_lib: Failed to set camera input (attempt 2): DeviceNotFound. Retrying...
2026-03-03T01:06:15.039601Z TRACE orbit_recording::feeds::camera: CameraFeed.SetInput('ModelID(ModelID { vid: "046d", pid: "0825" })')
2026-03-03T01:06:15.040726Z TRACE orbit_recording::feeds::camera: CameraFeed.InputConnectFailed
2026-03-03T01:06:17.254136Z DEBUG recording: orbit_desktop_lib::windows: InProgressRecording window: cursor_monitor=(0, 0, 1800, 1169), pos=(740, 899)
2026-03-03T01:06:17.276222Z DEBUG recording: orbit_desktop_lib::windows: InProgressRecording window created: label=in-progress-recording, inner_size=Ok(PhysicalSize { width: 640, height: 300 }), outer_position=Ok(PhysicalPosition { x: 1480, y: 1798 })
2026-03-03T01:06:20.282259Z DEBUG recording: orbit_desktop_lib::recording: spawning start_recording actor
2026-03-03T01:06:20.283033Z TRACE orbit_recording::feeds::camera: CameraFeed.Lock
2026-03-03T01:06:20.307408Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.Lock
2026-03-03T01:06:20.308029Z TRACE recording:studio_recording: orbit_recording::studio_recording: creating recording actor
2026-03-03T01:06:20.309238Z TRACE recording:studio_recording:segment{index=0}: orbit_recording::studio_recording: preparing segment pipeline 0
2026-03-03T01:06:20.309525Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Screen capture buffer size buffer_size=15
2026-03-03T01:06:20.310464Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: SCK content filter: Retained(ContentFilter(<SCContentFilter: 0x12066ef00>))
2026-03-03T01:06:20.310578Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: size: PhysicalSize { width: 3600.0, height: 2338.0 }
2026-03-03T01:06:20.310688Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Screen capture queue depth queue_depth=8 max_queue_depth=8
2026-03-03T01:06:20.310953Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Pixel buffer pool initialized min_count=20 width=3600 height=2338
2026-03-03T01:06:20.312264Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: orbit_recording::output_pipeline::core: Task started
2026-03-03T01:06:20.312584Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-03T01:06:20.312609Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-03T01:06:20.312708Z  INFO recording:studio_recording:segment{index=0}:screen-out: orbit_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display
2026-03-03T01:06:20.312962Z  INFO recording:studio_recording:segment{index=0}: orbit_recording::studio_recording: pipeline playing
2026-03-03T01:06:20.313194Z TRACE recording:studio_recording: orbit_recording::studio_recording: spawning recording actor
2026-03-03T01:06:20.366074Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 0 image to: "cursor_0.png"
2026-03-03T01:06:20.489903Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: M4S muxer encoder channel buffer size buffer_size=60
2026-03-03T01:06:20.490932Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Encoder pixel format configuration encoder=h264_videotoolbox input_format=NV12 output_format=NV12 needs_pixel_conversion=false external_conversion=false
2026-03-03T01:06:20.490997Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: No pixel format conversion needed (zero-copy path) encoder=h264_videotoolbox
2026-03-03T01:06:20.732355Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Selected hardware H264 encoder encoder=h264_videotoolbox width=3600 height=2338 fps=60.0
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/init.mp4' for writing
2026-03-03T01:06:20.732768Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: FFmpeg DASH muxer state after write_header() manifest_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/dash_manifest.mpd manifest_exists=true init_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/init.mp4 init_exists=true
2026-03-03T01:06:20.732817Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: Initialized segmented video encoder with FFmpeg DASH muxer (init.mp4 + m4s segments). CRITICAL: init.mp4 is required for segment playback/recovery. path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display segment_duration_secs=3 width=3600 height=2338
2026-03-03T01:06:20.760614Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: Started M4S fragmented video encoder path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/segment_001.m4s.tmp' for writing
2026-03-03T01:06:20.806798Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=43 count=1
2026-03-03T01:06:20.850902Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=8 count=2
2026-03-03T01:06:20.869530Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=16 count=3
2026-03-03T01:06:20.888428Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=16 count=4
2026-03-03T01:06:20.907028Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=16 count=5
2026-03-03T01:06:22.531201Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Capturing video baseline offset after warmup wall_clock_secs=2.222179375 camera_secs=2.070836917 baseline_offset_secs=-0.15134245800000024
2026-03-03T01:06:23.326884Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=1 duration_secs=3.01634125 frames=127
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/master.m3u8.tmp' for writing
[mp4 @ 0x1206b5fe0] Packet duration: -69 / dts: 280260 is out of range
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/segment_002.m4s.tmp' for writing
2026-03-03T01:06:23.566800Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=8 count=100
2026-03-03T01:06:25.454138Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=224 drops=0 drop_rate_pct="0.0%" total_frames=224
2026-03-03T01:06:26.262140Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 1 image to: "cursor_1.png"
2026-03-03T01:06:26.356899Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=2 duration_secs=3.02959925 frames=133
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/segment_003.m4s.tmp' for writing
2026-03-03T01:06:27.548590Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Video drift correction status frame_count=300 wall_clock_secs=7.239533542 camera_secs=7.095860125 corrected_secs=7.239533542 drift_ratio=1.0202474984665795 baseline_offset=-0.15134245800000024 total_pause_ms=0
2026-03-03T01:06:29.374824Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=3 duration_secs=3.017920042 frames=96
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[mp4 @ 0x1206b5fe0] Packet duration: -30 / dts: 824721 is out of range
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/segment_004.m4s.tmp' for writing
2026-03-03T01:06:30.456212Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=168 drops=0 drop_rate_pct="0.0%" total_frames=392
2026-03-03T01:06:32.378749Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=4 duration_secs=3.00320825 frames=63
[dash @ 0x1206a20e0] Segment durations differ too much, enable use_timeline and use_template, or keep a stricter keyframe interval
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[mp4 @ 0x1206b5fe0] Packet duration: -19 / dts: 1088971 is out of range
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/segment_005.m4s.tmp' for writing
2026-03-03T01:06:34.261123Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=17 count=200
2026-03-03T01:06:35.143846Z  INFO orbit_recording::studio_recording: pipeline shuting down
2026-03-03T01:06:35.144034Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Capturer stopping after creating 531 video frames
2026-03-03T01:06:35.144056Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video cancelled, draining remaining frames from channel
2026-03-03T01:06:35.144227Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: M4S encoder timing summary (using SegmentedVideoEncoder) total_frames=531 slow_converts=0 slow_encodes=244 slow_convert_pct="0.0%" slow_encode_pct="46.0%"
2026-03-03T01:06:35.144292Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video finished after cancellation, total 531 frames
2026-03-03T01:06:35.144351Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-03T01:06:35.148274Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-03T01:06:35.157276Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-03T01:06:35.157612Z TRACE orbit_recording::output_pipeline::macos_fragmented_m4s: M4S encoder channel already closed during finish: sending on a closed channel
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x1206a20e0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
2026-03-03T01:06:35.360702Z  INFO orbit_enc_ffmpeg::mux::segmented_stream: Recovered orphaned segment /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display/segment_005.m4s with 15342131 bytes, estimated duration 2.781531125s
2026-03-03T01:06:35.373687Z  INFO orbit_recording::studio_recording: pipeline shutdown
2026-03-03T01:06:35.378018Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: cursor recorder done
2026-03-03T01:06:35.380534Z  INFO recording: orbit_desktop_lib::recording: recording wait actor done: Ok(())
2026-03-03T01:06:35.381008Z  INFO stop_recording: orbit_desktop_lib::recording: Recording has fragments that need remuxing - opening editor immediately
2026-03-03T01:06:35.381893Z  INFO orbit_desktop_lib::frame_ws: WebSocket server listening on port 55103
2026-03-03T01:06:35.381945Z  INFO orbit_desktop_lib: Recording is being finalized, waiting for completion...
2026-03-03T01:06:35.432709Z  INFO orbit_desktop_lib::recording: Starting background finalization for recording
2026-03-03T01:06:35.434251Z  INFO orbit_recording::recovery: Found 1 recoverable segments in "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit" with estimated duration 0ns
2026-03-03T01:06:35.434322Z  INFO orbit_recording::recovery: Concatenating 5 M4S display segments with init to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display.mp4"
2026-03-03T01:06:35.557783Z  INFO orbit_recording::recovery: Validating recovered display video: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display.mp4"
2026-03-03T01:06:35.629714Z  INFO orbit_recording::recovery: Display video validation passed
2026-03-03T01:06:35.672631Z  INFO orbit_recording::recovery: Created project configuration with timeline for recovered recording
2026-03-03T01:06:35.672676Z  INFO orbit_recording::recovery: Successfully recovered recording at "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit"
2026-03-03T01:06:35.672699Z  INFO orbit_desktop_lib::recording: Successfully remuxed fragmented recording
2026-03-03T01:06:35.695230Z  INFO orbit_desktop_lib::recording: Background finalization completed for recording
2026-03-03T01:06:35.695351Z  INFO orbit_desktop_lib: Recording finalization completed
2026-03-03T01:06:35.695697Z DEBUG orbit_project::meta: Checking for captions at: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/captions.json"
2026-03-03T01:06:35.695725Z DEBUG orbit_project::meta: No captions.json found
[swscaler @ 0x171268000] No accelerated colorspace conversion found from yuv420p to rgb24.
2026-03-03T01:06:35.785368Z  INFO orbit_video_decode::avassetreader: Built keyframe index path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit/content/segments/segment-0/display.mp4 keyframe_count=45 fps=35.78660132872453 duration_secs=14.837955555555556 build_ms=49
2026-03-03T01:06:35.785577Z  INFO orbit_rendering::decoder::multi_position: Configured decoder pool for video duration duration_secs=14.837955555555556 optimal_pool_size=5 reposition_threshold=5.0
2026-03-03T01:06:35.933837Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=3.1147665977478027 decoder_index=1
2026-03-03T01:06:35.964618Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=6.147177696228027 decoder_index=2
2026-03-03T01:06:35.990059Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=10.4890775680542 decoder_index=3
2026-03-03T01:06:36.017355Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=14.745855331420898 decoder_index=4
2026-03-03T01:06:36.017410Z  INFO orbit_rendering::decoder::avassetreader: Initialized multi-position decoder pool decoder_count=5 optimal_pool_size=5 reposition_threshold=5.0 fps=35 duration_secs=14.837955555555556 total_frames_estimate=520
2026-03-03T01:06:36.017529Z  INFO orbit_rendering::decoder: Video 'screen' using AVAssetReader (hardware) decoder (3600x2338)
2026-03-03T01:06:36.017763Z  INFO orbit_rendering::yuv_converter: Creating shared YUV converter pipelines (shader compilation)
2026-03-03T01:06:36.023974Z  INFO orbit_rendering::yuv_converter: Shared YUV converter pipelines created successfully
2026-03-03T01:06:36.059067Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-03T01:06:36.064539Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-03T01:06:36.064773Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
[BABEL] Note: The code generator has deoptimised the styling of /Users/dives/Desktop/Projects/orbit/apps/desktop/node_modules/.vinxi/client/deps/effect.js as it exceeds the max of 500KB.
Pretty name: Orbit 2026-03-03 at 02.06.20
2026-03-03T01:06:38.153917Z  INFO orbit_desktop_lib::frame_ws: Socket connection established
2026-03-03T01:06:38.216555Z  INFO orbit_rendering::yuv_converter: Reallocating YUV converter textures for larger video old_width=1920 old_height=1080 new_width=3648 new_height=2368
2026-03-03T01:06:38.336871Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=0 mb_per_sec="0.6" avg_kb="1110.6" dims="1080x702" format="NV12"
2026-03-03T01:06:38.354683Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit"}: orbit_desktop_lib::captions: === LOAD CAPTIONS START ===
2026-03-03T01:06:38.354744Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit"}: orbit_desktop_lib::captions: Loading captions for video_id: /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit
2026-03-03T01:06:38.354775Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit"}: orbit_desktop_lib::captions: Getting captions directory for video_id: /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit
2026-03-03T01:06:38.354810Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit"}: orbit_desktop_lib::captions: Captions directory path: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM"
2026-03-03T01:06:38.354878Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit"}: orbit_desktop_lib::captions: No captions file found at: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM/captions.json"
2026-03-03T01:06:38.354897Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Built-in Retina Display (Display) 2026-03-03 02.06 AM.orbit"}: orbit_desktop_lib::captions: === LOAD CAPTIONS END (no file) ===
2026-03-03T01:06:41.552693Z  INFO orbit_editor::playback: No audio segments found, skipping audio playback thread.
2026-03-03T01:06:41.554175Z  INFO orbit_rendering::frame_pipeline: Resizing render session textures old_width=1080 old_height=702 new_width=1664 new_height=1080
2026-03-03T01:06:41.588611Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=1 mb_per_sec="1.9" avg_kb="1871.6" dims="1664x1080" format="NV12"
2026-03-03T01:06:43.556891Z  INFO orbit_editor::playback: Playback stats effective_fps="60.4" total_rendered=121 total_skipped=0 cache_hits=0 prefetch_hits=121 sync_decodes=0 prefetch_buffer=81
2026-03-03T01:06:43.597113Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=57 mb_per_sec="153.7" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-03T01:06:45.572432Z  INFO orbit_editor::playback: Playback stats effective_fps="60.2" total_rendered=242 total_skipped=0 cache_hits=0 prefetch_hits=242 sync_decodes=0 prefetch_buffer=85
2026-03-03T01:06:45.602127Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="161.7" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-03T01:06:47.573738Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=362 total_skipped=0 cache_hits=0 prefetch_hits=362 sync_decodes=0 prefetch_buffer=85
2026-03-03T01:06:47.614771Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="163.1" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-03T01:06:49.590166Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=483 total_skipped=0 cache_hits=0 prefetch_hits=483 sync_decodes=0 prefetch_buffer=89
2026-03-03T01:06:49.615386Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="161.7" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-03T01:06:51.607329Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=604 total_skipped=0 cache_hits=0 prefetch_hits=604 sync_decodes=0 prefetch_buffer=76
2026-03-03T01:06:51.617833Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="161.7" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-03T01:06:53.623927Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=725 total_skipped=0 cache_hits=0 prefetch_hits=725 sync_decodes=0 prefetch_buffer=84
2026-03-03T01:06:53.634103Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="163.1" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-03T01:06:55.638383Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=846 total_skipped=0 cache_hits=0 prefetch_hits=846 sync_decodes=0 prefetch_buffer=45
2026-03-03T01:06:55.645991Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="163.1" avg_kb="2632.5" dims="1664x1080" format="NV12"
2026-03-03T01:06:57.256984Z TRACE orbit_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-03T01:06:57.256984Z  WARN orbit_editor::editor_instance: preview task abort await failed: task 238 was cancelled
2026-03-03T01:06:57.298221Z ERROR orbit_desktop_lib::frame_ws: Failed to send frame to socket: Error { inner: Io(Os { code: 32, kind: BrokenPipe, message: "Broken pipe" }) }
2026-03-03T01:06:57.298373Z  INFO orbit_desktop_lib::frame_ws: Websocket closing after 19.14s
2026-03-03T01:07:04.410677Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.RemoveInput
2026-03-03T01:07:04.410834Z TRACE orbit_recording::feeds::camera: CameraFeed.RemoveInput
dives@MacBook-Pro orbit % 