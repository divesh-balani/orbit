2026-03-01T23:11:06.908488Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=914 dropped=2802 silence_frames=0 drop_pct="75.4%" is_wireless=false send_timeout_ms=5
2026-03-01T23:11:07.322049Z TRACE cap_recording::feeds::camera: CameraFeed.RemoveInput
12:11:07 AM [vite] (client) ✨ new dependencies optimized: @total-typescript/ts-reset/filter-boolean, @tauri-apps/plugin-notification
12:11:07 AM [vite] (client) ✨ optimized dependencies changed. reloading
2026-03-01T23:11:10.270884Z TRACE cap_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-01T23:11:10.773775Z  WARN cap_recording::sources::microphone: Microphone data timeout, generating silence is_wireless=false timeout_ms=100
2026-03-01T23:11:10.774089Z  INFO cap_recording::sources::microphone: Microphone data resumed after silence period
2026-03-01T23:11:11.909822Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=914 dropped=2945 silence_frames=1 drop_pct="76.3%" is_wireless=false send_timeout_ms=5
2026-03-01T23:11:16.911669Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=914 dropped=3088 silence_frames=1 drop_pct="77.2%" is_wireless=false send_timeout_ms=5
2026-03-01T23:11:21.914244Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=914 dropped=3231 silence_frames=1 drop_pct="77.9%" is_wireless=false send_timeout_ms=5
2026-03-01T23:11:22.848154Z TRACE cap_recording::feeds::microphone: MicrophoneFeed.RemoveInput
2026-03-01T23:11:22.848359Z  INFO cap_recording::feeds::microphone: Microphone actor shut down, ending stream
2026-03-01T23:11:22.848421Z TRACE cap_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-01T23:11:22.925131Z  WARN cap_recording::sources::microphone: Microphone data timeout, generating silence is_wireless=false timeout_ms=100
2026-03-01T23:11:27.016389Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=914 dropped=3257 silence_frames=40 drop_pct="78.1%" is_wireless=false send_timeout_ms=5
2026-03-01T23:11:31.880372Z TRACE cap_recording::feeds::microphone: MicrophoneFeed.RemoveInput
2026-03-01T23:11:31.880557Z TRACE cap_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-01T23:11:32.227955Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=914 dropped=3257 silence_frames=90 drop_pct="78.1%" is_wireless=false send_timeout_ms=5
2026-03-01T23:11:33.751716Z  INFO cap_desktop_lib::camera: Camera preview shutdown requested (session 1).
2026-03-01T23:11:33.751827Z  INFO cap_desktop_lib::camera: Camera preview shutdown requested. Cleaning up...
2026-03-01T23:11:33.751885Z TRACE cap_recording::feeds::microphone: MicrophoneFeed.RemoveInput
2026-03-01T23:11:33.751951Z TRACE cap_recording::feeds::camera: CameraFeed.RemoveInput
dives@MacBook-Pro orbit % clear
dives@MacBook-Pro orbit % pnpm run dev:desktop

> cap@ dev:desktop /Users/dives/Desktop/Projects/orbit
> pnpm run --filter=@cap/desktop dev


> @cap/desktop@ dev /Users/dives/Desktop/Projects/orbit/apps/desktop
> pnpm -w cap-setup && dotenv -e ../../.env -- pnpm run preparescript && dotenv -e ../../.env -- pnpm tauri dev


> cap@ cap-setup /Users/dives/Desktop/Projects/orbit
> dotenv -e .env -- node scripts/setup.js

Using cached native-deps-aarch64-darwin-apple.tar.xz
Using cached native-deps
Trimmed .framework
Signing .framework libraries
Signed .framework libraries
Copied ffmpeg dylibs to target/debug

> @cap/desktop@ preparescript /Users/dives/Desktop/Projects/orbit/apps/desktop
> node scripts/prepare.js

--- Preparing sidecars and configs...
Updating Platform (darwin) Tauri config...
--- Preparation finished

> @cap/desktop@ tauri /Users/dives/Desktop/Projects/orbit/apps/desktop
> tauri dev

     Running BeforeDevCommand (`pnpm localdev`)

> @cap/desktop@ localdev /Users/dives/Desktop/Projects/orbit/apps/desktop
> dotenv -e ../../.env -- vinxi dev --port 3002

vinxi v0.5.6
vinxi starting dev server

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
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/cap-test for changes...
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
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/project for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/recording for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/rendering for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/rendering-skia for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/scap-cpal for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/scap-direct3d for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/scap-ffmpeg for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/scap-screencapturekit for changes...
        Info Watching /Users/dives/Desktop/Projects/orbit/crates/scap-targets for changes...
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
   Compiling cocoa v0.26.1
   Compiling objc2-core-foundation v0.3.1
   Compiling block2 v0.6.1
   Compiling objc2-javascript-core v0.3.1
   Compiling dispatch2 v0.3.0
   Compiling screencapturekit v0.3.6
   Compiling rustls v0.23.31
   Compiling rustls v0.21.12
   Compiling objc2-foundation v0.3.1
   Compiling objc2-core-graphics v0.3.1
   Compiling objc2-security v0.3.1
   Compiling objc2-core-media v0.3.1
   Compiling objc2-core-video v0.3.1
   Compiling objc2-io-kit v0.3.1
   Compiling sysinfo v0.35.2
   Compiling rustls-webpki v0.103.6
   Compiling rustls-webpki v0.101.7
   Compiling sct v0.7.1
   Compiling wgpu-hal v25.0.2 (/Users/dives/Desktop/Projects/orbit/vendor/wgpu-hal)
   Compiling wgpu-core-deps-apple v25.0.0
   Compiling wgpu-core v25.0.2
   Compiling tokio-rustls v0.24.1
   Compiling hyper-rustls v0.24.2
   Compiling reqwest v0.11.27
   Compiling tokio-rustls v0.26.3
   Compiling hyper-rustls v0.27.7
   Compiling reqwest v0.12.24 (https://github.com/CapSoftware/reqwest?rev=9b5ecbd5210a9510fde766015cabb724c1e70d2e#9b5ecbd5)
   Compiling posthog-rs v0.3.7 (https://github.com/CapSoftware/posthog-rs?rev=c7e9712be2f9a9122b1df685d5a067afa5415288#c7e9712b)
   Compiling workspace-hack v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/workspace-hack)
   Compiling sentry v0.42.0
   Compiling opentelemetry-http v0.31.0
   Compiling cap-media-info v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/media-info)
   Compiling ffmpeg-hw-device v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/ffmpeg-hw-device)
   Compiling cap-cursor-info v0.0.0 (/Users/dives/Desktop/Projects/orbit/crates/cursor-info)
   Compiling cap-flags v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/flags)
   Compiling cap-audio v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/audio)
   Compiling cap-camera-avfoundation v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/camera-avfoundation)
   Compiling cap-utils v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/utils)
   Compiling wgpu v25.0.2
   Compiling cap-video-decode v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/video-decode)
   Compiling cap-project v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/project)
   Compiling cap-media v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/media)
   Compiling cap-enc-ffmpeg v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/enc-ffmpeg)
   Compiling scap-targets v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/scap-targets)
   Compiling sentry-rust-minidump v0.13.0
   Compiling cap-frame-converter v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/frame-converter)
   Compiling cap-enc-avfoundation v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/enc-avfoundation)
   Compiling cap-cursor-capture v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/cursor-capture)
   Compiling cap-timestamp v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/timestamp)
   Compiling cap-enc-gif v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/enc-gif)
   Compiling cap-fail v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/fail)
   Compiling opentelemetry-otlp v0.31.0
   Compiling scap-direct3d v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/scap-direct3d)
   Compiling glyphon v0.9.0
   Compiling cap-rendering v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/rendering)
   Compiling cap-editor v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/editor)
   Compiling objc2-quartz-core v0.3.1
   Compiling objc2-core-image v0.3.1
   Compiling objc2-core-data v0.3.1
   Compiling objc2-cloud-kit v0.3.1
   Compiling objc2-avf-audio v0.3.1
   Compiling cap-export v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/export)
   Compiling notify-rust v4.11.7
   Compiling objc2-av-foundation v0.3.1
   Compiling objc2-app-kit v0.3.1
   Compiling cap-camera v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/camera)
   Compiling cap-camera-ffmpeg v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/camera-ffmpeg)
   Compiling objc2-web-kit v0.3.1
   Compiling tao v0.34.3 (/Users/dives/Desktop/Projects/orbit/vendor/tao)
   Compiling muda v0.17.1
   Compiling window-vibrancy v0.6.0
   Compiling objc2-osa-kit v0.3.1
   Compiling scap-screencapturekit v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/scap-screencapturekit)
   Compiling arboard v3.6.1
   Compiling rfd v0.15.4
   Compiling global-hotkey v0.7.0
   Compiling clipboard-rs v0.2.4
   Compiling scap-ffmpeg v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/scap-ffmpeg)
   Compiling cap-recording v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/recording)
   Compiling osakit v0.3.1
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

   Compiling tray-icon v0.21.1
warning: `tao` (lib) generated 6 warnings
   Compiling tauri-runtime v2.8.0
   Compiling wry v0.53.3
   Compiling tauri-runtime-wry v2.8.1
   Compiling tauri v2.8.5
   Compiling tauri-plugin-fs v2.4.2
   Compiling tauri-plugin-deep-link v2.4.3
   Compiling tauri-plugin-opener v2.5.0
   Compiling tauri-plugin-notification v2.3.1
   Compiling tauri-plugin-store v2.4.0
   Compiling tauri-plugin-sentry v0.5.0
   Compiling tauri-plugin-global-shortcut v2.3.0
   Compiling tauri-plugin-os v2.3.1
   Compiling tauri-plugin-process v2.3.0
   Compiling tauri-plugin-positioner v2.3.0
   Compiling tauri-plugin-oauth v2.0.0 (https://github.com/FabianLars/tauri-plugin-oauth?branch=v2#f941c99c)
   Compiling tauri-plugin-clipboard-manager v2.3.0
   Compiling tauri-plugin-updater v2.9.0
   Compiling tauri-nspanel v2.0.1 (https://github.com/ahkohd/tauri-nspanel?branch=v2#18ffb9a2)
   Compiling tauri-plugin-window-state v2.4.0
   Compiling tauri-specta v2.0.0-rc.20
   Compiling tauri-plugin-single-instance v2.3.4
   Compiling tauri-plugin-shell v2.3.1
   Compiling tauri-plugin-dialog v2.4.0
   Compiling tauri-plugin-http v2.5.2
   Compiling orbit-desktop v0.4.8 (/Users/dives/Desktop/Projects/orbit/apps/desktop/src-tauri)
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
   --> apps/desktop/src-tauri/src/recording.rs:412:5
    |
410 | pub enum RecordingAction {
    |          --------------- variants in this enum
411 |     Started,
412 |     InvalidAuthentication,
    |     ^^^^^^^^^^^^^^^^^^^^^
413 |     UpgradeRequired,
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

warning: `orbit-desktop` (lib) generated 19 warnings
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 46.36s
     Running `/Users/dives/Desktop/Projects/orbit/target/debug/orbit-desktop`
2026-03-01T23:30:18.916271Z  INFO cap_desktop_lib::frame_ws: WebSocket server listening on port 59028
2026-03-01T23:30:18.917901Z DEBUG cap_recording::feeds::camera: CameraFeed: Adding new sender
Initializing GeneralSettingsStore
GeneralSettingsState managed
Checking startup completion and permissions...
Notification permission already granted
2026-03-01T23:30:19.166256Z  INFO cap_desktop_lib::gpu_context: Using hardware GPU adapter for shared context adapter_name="Apple M3 Pro" adapter_backend=Metal
Permissions check result: OSPermissionsCheck { screen_recording: Granted, microphone: Granted, camera: Granted, accessibility: Granted }
Permissions granted, showing main window
2026-03-01T23:30:19.305970Z TRACE cap_desktop_lib::platform::macos::sc_shareable_content: ScreenCaptureKit cache warmed elapsed_ms=48.777
[baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
Browserslist: browsers data (caniuse-lite) is 11 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
2026-03-01T23:30:22.711428Z TRACE cap_recording::feeds::microphone: MicrophoneFeed.SetInput('MacBook Pro Microphone')
2026-03-01T23:30:22.711548Z TRACE cap_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-01T23:30:23.242720Z  INFO cap_recording::feeds::microphone: Device 'MacBook Pro Microphone' available configs:
2026-03-01T23:30:23.301996Z  INFO cap_recording::feeds::microphone:   Format: F32, Min rate: 44100, Max rate: 44100, Sample size: 4
2026-03-01T23:30:23.302036Z  INFO cap_recording::feeds::microphone:   Format: F32, Min rate: 48000, Max rate: 48000, Sample size: 4
2026-03-01T23:30:23.302046Z  INFO cap_recording::feeds::microphone:   Format: F32, Min rate: 88200, Max rate: 88200, Sample size: 4
2026-03-01T23:30:23.302054Z  INFO cap_recording::feeds::microphone:   Format: F32, Min rate: 96000, Max rate: 96000, Sample size: 4
2026-03-01T23:30:23.302070Z  INFO cap_recording::feeds::microphone: 🎤 Building stream (id 0, label 'MacBook Pro Microphone') for 'Some("MacBook Pro Microphone")' with config: rate=48000, channels=1, format=F32, buffer_size=1680 frames (~35.0ms)
2026-03-01T23:30:23.434113Z TRACE cap_recording::feeds::microphone: MicrophoneFeed.InputConnected
2026-03-01T23:30:23.483926Z  INFO cap_recording::feeds::microphone: 🎤 First audio callback - data size: 6720 bytes, format: F32
2026-03-01T23:30:27.624258Z DEBUG recording: cap_desktop_lib::windows: InProgressRecording window: cursor_monitor=(0, 0, 2560, 1440), pos=(1120, 1170)
2026-03-01T23:30:27.657435Z DEBUG recording: cap_desktop_lib::windows: InProgressRecording window created: label=in-progress-recording, inner_size=Ok(PhysicalSize { width: 320, height: 150 }), outer_position=Ok(PhysicalPosition { x: 1120, y: 328 })
2026-03-01T23:30:30.673533Z DEBUG recording: cap_desktop_lib::recording: spawning start_recording actor
2026-03-01T23:30:30.673867Z TRACE cap_recording::feeds::camera: CameraFeed.Lock
2026-03-01T23:30:30.695230Z TRACE cap_recording::feeds::microphone: MicrophoneFeed.Lock
2026-03-01T23:30:30.695982Z TRACE recording:studio_recording: cap_recording::studio_recording: creating recording actor
2026-03-01T23:30:30.696339Z DEBUG recording:studio_recording: cap_recording::studio_recording: mic audio info: AudioInfo {
    sample_format: F32(
        Planar,
    ),
    sample_rate: 48000,
    channels: 1,
    time_base: Rational(1/1000000),
    buffer_size: 1680,
    is_wireless_transport: false,
}
2026-03-01T23:30:30.696820Z TRACE recording:studio_recording:segment{index=0}: cap_recording::studio_recording: preparing segment pipeline 0
2026-03-01T23:30:30.696954Z DEBUG recording:studio_recording:segment{index=0}: cap_recording::sources::screen_capture::macos: Screen capture buffer size buffer_size=15
2026-03-01T23:30:30.697710Z DEBUG recording:studio_recording:segment{index=0}: cap_recording::sources::screen_capture::macos: SCK content filter: Retained(ContentFilter(<SCContentFilter: 0x14f56d2f0>))
2026-03-01T23:30:30.697791Z DEBUG recording:studio_recording:segment{index=0}: cap_recording::sources::screen_capture::macos: size: PhysicalSize { width: 2560.0, height: 1440.0 }
2026-03-01T23:30:30.697871Z DEBUG recording:studio_recording:segment{index=0}: cap_recording::sources::screen_capture::macos: Screen capture queue depth queue_depth=8 max_queue_depth=8
2026-03-01T23:30:30.700607Z DEBUG recording:studio_recording:segment{index=0}: cap_recording::sources::screen_capture::macos: Pixel buffer pool initialized min_count=20 width=2560 height=1440
2026-03-01T23:30:30.701524Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: cap_recording::output_pipeline::core: Task started
2026-03-01T23:30:30.701746Z  INFO recording:studio_recording:segment{index=0}:screen-out: cap_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display
2026-03-01T23:30:30.701756Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: cap_recording::output_pipeline::core: Task started
2026-03-01T23:30:30.701765Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_recording::output_pipeline::core: Task started
2026-03-01T23:30:30.704035Z  INFO recording:studio_recording:segment{index=0}:mic-out: cap_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/audio-input.m4a
2026-03-01T23:30:30.704057Z TRACE recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: cap_recording::output_pipeline::core: Task started
2026-03-01T23:30:30.704138Z  INFO recording:studio_recording:segment{index=0}: cap_recording::studio_recording: pipeline playing
2026-03-01T23:30:30.704227Z TRACE recording:studio_recording: cap_recording::studio_recording: spawning recording actor
2026-03-01T23:30:30.755721Z  INFO recording:studio_recording:segment{index=0}:cursor: cap_recording::cursor: Saved cursor 0 image to: "cursor_0.png"
2026-03-01T23:30:30.774582Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_recording::output_pipeline::macos_fragmented_m4s: M4S muxer encoder channel buffer size buffer_size=60
2026-03-01T23:30:30.775058Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_enc_ffmpeg::video::h264: Encoder pixel format configuration encoder=h264_videotoolbox input_format=NV12 output_format=NV12 needs_pixel_conversion=false external_conversion=false
2026-03-01T23:30:30.775151Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_enc_ffmpeg::video::h264: No pixel format conversion needed (zero-copy path) encoder=h264_videotoolbox
2026-03-01T23:30:30.865146Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_enc_ffmpeg::video::h264: Selected hardware H264 encoder encoder=h264_videotoolbox width=2560 height=1440 fps=60.0
[dash @ 0x16b40de20] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/init.mp4' for writing
2026-03-01T23:30:30.865408Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_enc_ffmpeg::mux::segmented_stream: FFmpeg DASH muxer state after write_header() manifest_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/dash_manifest.mpd manifest_exists=true init_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/init.mp4 init_exists=true
2026-03-01T23:30:30.865451Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_enc_ffmpeg::mux::segmented_stream: Initialized segmented video encoder with FFmpeg DASH muxer (init.mp4 + m4s segments). CRITICAL: init.mp4 is required for segment playback/recovery. path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display segment_duration_secs=3 width=2560 height=1440
2026-03-01T23:30:30.881497Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_recording::output_pipeline::macos_fragmented_m4s: Started M4S fragmented video encoder path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display
[dash @ 0x16b40de20] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/segment_001.m4s.tmp' for writing
2026-03-01T23:30:30.904488Z DEBUG cap_recording::output_pipeline::macos_fragmented_m4s: encoder.queue_frame exceeded 5ms threshold elapsed_ms=22 count=1
2026-03-01T23:30:32.788804Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_recording::output_pipeline::core: Capturing video baseline offset after warmup wall_clock_secs=2.092042792 camera_secs=2.013899126 baseline_offset_secs=-0.07814366599999989
2026-03-01T23:30:33.789645Z DEBUG cap_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=1 duration_secs=3.092130583 frames=89
[dash @ 0x16b40de20] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x16b40de20] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x16b40de20] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/master.m3u8.tmp' for writing
[dash @ 0x16b40de20] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/segment_002.m4s.tmp' for writing
2026-03-01T23:30:35.705194Z DEBUG cap_recording::sources::microphone: Microphone audio frames forwarded captured=143
2026-03-01T23:30:35.758234Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: cap_recording::sources::screen_capture::macos: Screen capture stats frames=121 drops=0 drop_rate_pct="0.0%" total_frames=121
2026-03-01T23:30:35.894344Z  INFO recording:studio_recording:segment{index=0}:cursor: cap_recording::cursor: Saved cursor 1 image to: "cursor_1.png"
2026-03-01T23:30:36.808967Z DEBUG cap_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=2 duration_secs=3.01828375 frames=42
[dash @ 0x16b40de20] Segment durations differ too much, enable use_timeline and use_template, or keep a stricter keyframe interval
[dash @ 0x16b40de20] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x16b40de20] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[mp4 @ 0x1296c79b0] Packet duration: -17843 / dts: 570632 is out of range
[dash @ 0x16b40de20] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/segment_003.m4s.tmp' for writing
[mp4 @ 0x1296c79b0] Packet duration: -16331 / dts: 572144 is out of range
[mp4 @ 0x1296c79b0] pts has no value
[mp4 @ 0x1296c79b0] Packet duration: -14819 / dts: 573657 is out of range
[mp4 @ 0x1296c79b0] pts has no value
[mp4 @ 0x1296c79b0] Packet duration: -13317 / dts: 575160 is out of range
[mp4 @ 0x1296c79b0] pts has no value
[mp4 @ 0x1296c79b0] Packet duration: -11870 / dts: 576608 is out of range
[mp4 @ 0x1296c79b0] pts has no value
[mp4 @ 0x1296c79b0] Packet duration: -8923 / dts: 579556 is out of range
[mp4 @ 0x1296c79b0] pts has no value
2026-03-01T23:30:38.686870Z  INFO cap_recording::studio_recording: pipeline shuting down
2026-03-01T23:30:38.687371Z  INFO recording:studio_recording:segment{index=0}:mic-out:{task="mux-audio"}: cap_recording::output_pipeline::core: Task finished successfully
2026-03-01T23:30:38.687398Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_recording::output_pipeline::core: mux-video cancelled, draining remaining frames from channel
2026-03-01T23:30:38.687398Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: cap_recording::sources::screen_capture::macos: Capturer stopping after creating 219 video frames
2026-03-01T23:30:38.687988Z  WARN cap_recording::output_pipeline::core: Muxer streams had failure: Unknown error: -67
[aac @ 0x16a81aac0] Qavg: 65536.000
2026-03-01T23:30:38.692533Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: cap_recording::output_pipeline::core: Task finished successfully
2026-03-01T23:30:38.693727Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: cap_recording::output_pipeline::core: Task finished successfully
2026-03-01T23:30:38.693951Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_recording::output_pipeline::core: mux-video drain complete: 1 frames processed, 0 errors (limit hit: false) in 6.418792ms
2026-03-01T23:30:38.694006Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_recording::output_pipeline::core: mux-video finished after cancellation, total 220 frames
2026-03-01T23:30:38.694031Z DEBUG cap_recording::output_pipeline::macos_fragmented_m4s: M4S encoder timing summary (using SegmentedVideoEncoder) total_frames=220 slow_converts=0 slow_encodes=1 slow_convert_pct="0.0%" slow_encode_pct="0.5%"
2026-03-01T23:30:38.694042Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: cap_recording::output_pipeline::core: Task finished successfully
2026-03-01T23:30:38.694176Z TRACE cap_recording::output_pipeline::macos_fragmented_m4s: M4S encoder channel already closed during finish: sending on a closed channel
[dash @ 0x16b40de20] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x16b40de20] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
2026-03-01T23:30:38.726870Z  INFO cap_enc_ffmpeg::mux::segmented_stream: Recovered orphaned segment /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display/segment_003.m4s with 5189081 bytes, estimated duration 1.887070125s
2026-03-01T23:30:38.732934Z  INFO cap_recording::studio_recording: pipeline shutdown
2026-03-01T23:30:38.734731Z  INFO recording:studio_recording:segment{index=0}:cursor: cap_recording::cursor: cursor recorder done
2026-03-01T23:30:38.736714Z  INFO recording: cap_desktop_lib::recording: recording wait actor done: Ok(())
2026-03-01T23:30:38.736769Z TRACE cap_recording::feeds::microphone: MicrophoneFeed.Unlock
2026-03-01T23:30:38.737259Z  INFO stop_recording: cap_desktop_lib::recording: Recording has fragments that need remuxing - opening editor immediately
2026-03-01T23:30:38.738321Z  INFO cap_desktop_lib::frame_ws: WebSocket server listening on port 59061
2026-03-01T23:30:38.738387Z  INFO cap_desktop_lib: Recording is being finalized, waiting for completion...
2026-03-01T23:30:38.804519Z  INFO cap_desktop_lib::recording: Starting background finalization for recording
2026-03-01T23:30:38.808549Z  INFO cap_recording::recovery: Found 1 recoverable segments in "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" with estimated duration 0ns
2026-03-01T23:30:38.808721Z  INFO cap_recording::recovery: Concatenating 3 M4S display segments with init to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display.mp4"
2026-03-01T23:30:38.864913Z  INFO cap_recording::recovery: Transcoding single mic fragment to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/audio-input.ogg"
2026-03-01T23:30:38.875624Z  INFO cap_recording::recovery: Validating recovered display video: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display.mp4"
2026-03-01T23:30:38.950032Z  INFO cap_recording::recovery: Display video validation passed
2026-03-01T23:30:39.015624Z  INFO cap_recording::recovery: Created project configuration with timeline for recovered recording
2026-03-01T23:30:39.015668Z  INFO cap_recording::recovery: Successfully recovered recording at "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap"
2026-03-01T23:30:39.015691Z  INFO cap_desktop_lib::recording: Successfully remuxed fragmented recording
2026-03-01T23:30:39.047159Z  INFO cap_desktop_lib::recording: Background finalization completed for recording
2026-03-01T23:30:39.047288Z  INFO cap_desktop_lib: Recording finalization completed
2026-03-01T23:30:39.047607Z DEBUG cap_project::meta: Checking for captions at: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/captions.json"
2026-03-01T23:30:39.047634Z DEBUG cap_project::meta: No captions.json found
[swscaler @ 0x138c20000] No accelerated colorspace conversion found from yuv420p to rgb24.
2026-03-01T23:30:39.149977Z  INFO cap_video_decode::avassetreader: Built keyframe index path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/display.mp4 keyframe_count=19 fps=27.497403023047823 duration_secs=8.000755555555555 build_ms=57
2026-03-01T23:30:39.150274Z  INFO cap_rendering::decoder::multi_position: Configured decoder pool for video duration duration_secs=8.000755555555555 optimal_pool_size=5 reposition_threshold=5.0
2026-03-01T23:30:39.310774Z  INFO cap_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=1.8611222505569458 decoder_index=1
2026-03-01T23:30:39.345575Z  INFO cap_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=3.8954334259033203 decoder_index=2
2026-03-01T23:30:39.385892Z  INFO cap_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=7.126777648925781 decoder_index=3
2026-03-01T23:30:39.419098Z  INFO cap_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=7.944277763366699 decoder_index=4
2026-03-01T23:30:39.419155Z  INFO cap_rendering::decoder::avassetreader: Initialized multi-position decoder pool decoder_count=5 optimal_pool_size=5 reposition_threshold=5.0 fps=27 duration_secs=8.000755555555555 total_frames_estimate=217
2026-03-01T23:30:39.419266Z  INFO cap_rendering::decoder: Video 'screen' using AVAssetReader (hardware) decoder (2560x1440)
2026-03-01T23:30:39.419512Z  INFO cap_rendering::yuv_converter: Creating shared YUV converter pipelines (shader compilation)
2026-03-01T23:30:39.426275Z  INFO cap_rendering::yuv_converter: Shared YUV converter pipelines created successfully
2026-03-01T23:30:39.451734Z  INFO cap_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-01T23:30:39.457747Z  INFO cap_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-01T23:30:39.458095Z  INFO cap_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-01T23:30:40.706772Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=228 dropped=58 silence_frames=0 drop_pct="20.3%" is_wireless=false send_timeout_ms=20
[BABEL] Note: The code generator has deoptimised the styling of /Users/dives/Desktop/Projects/orbit/apps/desktop/node_modules/.vinxi/client/deps/effect.js as it exceeds the max of 500KB.
Pretty name: Orbit 2026-03-02 at 00.30.30
2026-03-01T23:30:41.562329Z  INFO cap_desktop_lib::frame_ws: Socket connection established
2026-03-01T23:30:41.596083Z  INFO cap_rendering::yuv_converter: Reallocating YUV converter textures for larger video old_width=1920 old_height=1080 new_width=2560 new_height=1472
2026-03-01T23:30:41.708646Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=0 mb_per_sec="0.7" avg_kb="1283.4" dims="1248x702" format="NV12"
2026-03-01T23:30:41.731521Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap"}: cap_desktop_lib::captions: === LOAD CAPTIONS START ===
2026-03-01T23:30:41.731583Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap"}: cap_desktop_lib::captions: Loading captions for video_id: /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap
2026-03-01T23:30:41.731621Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap"}: cap_desktop_lib::captions: Getting captions directory for video_id: /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap
2026-03-01T23:30:41.731655Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap"}: cap_desktop_lib::captions: Captions directory path: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM"
2026-03-01T23:30:41.731705Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap"}: cap_desktop_lib::captions: No captions file found at: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM/captions.json"
2026-03-01T23:30:41.731734Z  INFO load_captions{video_id="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap"}: cap_desktop_lib::captions: === LOAD CAPTIONS END (no file) ===
2026-03-01T23:30:43.185637Z  INFO cap_editor::playback: Creating pre-rendered audio stream duration_secs=8.027833 start_playhead=0.0 sample_rate=44100
2026-03-01T23:30:43.185758Z  INFO cap_editor::audio: Pre-rendering audio for playback duration_secs=8.027833 sample_rate=44100 channels=2
2026-03-01T23:30:43.186556Z  INFO cap_editor::audio: Audio resampler created with high-quality settings (filter_size=128) input_rate=48000 output_rate=44100 output_format=F32(Packed)
2026-03-01T23:30:43.201398Z  INFO cap_rendering::frame_pipeline: Resizing render session textures old_width=1248 old_height=702 new_width=1920 new_height=1080
2026-03-01T23:30:43.259031Z  INFO cap_editor::audio: Audio pre-rendering complete total_samples=709362 memory_mb=2
2026-03-01T23:30:43.292372Z  INFO cap_editor::playback: Pre-rendered audio stream created successfully
2026-03-01T23:30:43.709863Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=16 mb_per_sec="48.9" avg_kb="2982.7" dims="1920x1080" format="NV12"
2026-03-01T23:30:45.188125Z  INFO cap_editor::playback: Playback stats effective_fps="60.4" total_rendered=120 total_skipped=0 cache_hits=0 prefetch_hits=120 sync_decodes=0 prefetch_buffer=88
2026-03-01T23:30:45.708445Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=228 dropped=201 silence_frames=0 drop_pct="46.9%" is_wireless=false send_timeout_ms=20
2026-03-01T23:30:45.711629Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="186.6" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-01T23:30:47.204921Z  INFO cap_editor::playback: Playback stats effective_fps="60.2" total_rendered=241 total_skipped=0 cache_hits=0 prefetch_hits=241 sync_decodes=0 prefetch_buffer=87
2026-03-01T23:30:47.712288Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="186.6" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-01T23:30:49.219131Z  INFO cap_editor::playback: Playback stats effective_fps="60.2" total_rendered=362 total_skipped=0 cache_hits=0 prefetch_hits=362 sync_decodes=0 prefetch_buffer=89
2026-03-01T23:30:49.728840Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=58 mb_per_sec="182.0" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-01T23:30:50.709573Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=228 dropped=344 silence_frames=0 drop_pct="60.1%" is_wireless=false send_timeout_ms=20
2026-03-01T23:30:51.144329Z  INFO cap_editor::playback: Audio playback thread finished.
2026-03-01T23:30:52.893326Z  WARN cap_rendering::decoder::avassetreader: No frames decoded from video - decoder iterator returned no frames decoder_idx=3 requested_frame=216 requested_time=8.0 was_reset=false cache_size=89 consecutive_empty=1 near_end=true
2026-03-01T23:30:52.893422Z  WARN cap_rendering::decoder::avassetreader: No frames decoded from video - decoder iterator returned no frames decoder_idx=3 requested_frame=216 requested_time=8.0 was_reset=false cache_size=89 consecutive_empty=2 near_end=true
2026-03-01T23:30:52.903532Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=43 mb_per_sec="133.7" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-01T23:30:52.924718Z  INFO cap_rendering::decoder::avassetreader: Decoder reached EOF - will use cached frames for remaining requests decoder_idx=3 requested_frame=216 total_frames=217 cache_max=215
2026-03-01T23:30:54.141925Z  INFO cap_editor::playback: Creating pre-rendered audio stream duration_secs=8.027833 start_playhead=0.0 sample_rate=44100
2026-03-01T23:30:54.142021Z  INFO cap_editor::audio: Pre-rendering audio for playback duration_secs=8.027833 sample_rate=44100 channels=2
2026-03-01T23:30:54.142674Z  INFO cap_editor::audio: Audio resampler created with high-quality settings (filter_size=128) input_rate=48000 output_rate=44100 output_format=F32(Packed)
2026-03-01T23:30:54.225651Z  INFO cap_editor::audio: Audio pre-rendering complete total_samples=709362 memory_mb=2
2026-03-01T23:30:54.255684Z  INFO cap_editor::playback: Pre-rendered audio stream created successfully
2026-03-01T23:30:54.914180Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=23 mb_per_sec="73.1" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-01T23:30:55.710734Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=228 dropped=487 silence_frames=0 drop_pct="68.1%" is_wireless=false send_timeout_ms=20
2026-03-01T23:30:56.142908Z  INFO cap_editor::playback: Playback stats effective_fps="60.4" total_rendered=117 total_skipped=0 cache_hits=0 prefetch_hits=117 sync_decodes=0 prefetch_buffer=87
2026-03-01T23:30:56.916893Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="186.6" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-01T23:30:57.384174Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: === TRANSCRIBE AUDIO COMMAND START ===
2026-03-01T23:30:57.384326Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Video path: /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap
2026-03-01T23:30:57.384410Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Model path: /Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin
2026-03-01T23:30:57.384628Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Language: auto
2026-03-01T23:30:57.384866Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Temp audio path: "/var/folders/_n/s2y4q39123gdcbdf0b9n08940000gp/T/.tmpWn9aRG/audio.wav"
2026-03-01T23:30:57.384920Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: === EXTRACT AUDIO START ===
2026-03-01T23:30:57.384939Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Attempting to extract audio from: /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap
2026-03-01T23:30:57.384960Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Output path: "/var/folders/_n/s2y4q39123gdcbdf0b9n08940000gp/T/.tmpWn9aRG/audio.wav"
2026-03-01T23:30:57.384997Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Detected .cap project directory
2026-03-01T23:30:57.385126Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Found 1 segments with audio sources
2026-03-01T23:30:57.385144Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Processing segment 0 with 1 audio sources
2026-03-01T23:30:57.389103Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Processing audio source "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap/content/segments/segment-0/audio-input.ogg": 1 channels, 385024 samples
2026-03-01T23:30:57.389277Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Segment 0 produced 385024 samples, appending to final audio
2026-03-01T23:30:57.389468Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Final mixed audio: 385024 samples
2026-03-01T23:30:57.392726Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Mixed audio RMS: 0.0000
2026-03-01T23:30:57.392776Z  WARN transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: WARNING: Mixed audio RMS is very low (0.000000) - audio may be nearly silent!
2026-03-01T23:30:57.393050Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Using frame size: 1024, total samples: 385024, channel count: 1
2026-03-01T23:30:57.393075Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Processing chunk 0, size: 1024
2026-03-01T23:30:57.393113Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Successfully resampled chunk 0, output samples: 325
[wav @ 0x4092fa720] Timestamps are unset in a packet for stream 0. This is deprecated and will stop working in the future. Fix your code to set the timestamps properly
[wav @ 0x4092fa720] Encoder did not produce proper pts, making some up.
2026-03-01T23:30:57.393832Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Processing chunk 100, size: 1024
2026-03-01T23:30:57.393858Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Successfully resampled chunk 100, output samples: 341
2026-03-01T23:30:57.394475Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Processing chunk 200, size: 1024
2026-03-01T23:30:57.394499Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Successfully resampled chunk 200, output samples: 342
2026-03-01T23:30:57.395221Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Processing chunk 300, size: 1024
2026-03-01T23:30:57.395251Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Successfully resampled chunk 300, output samples: 341
2026-03-01T23:30:57.395816Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: === EXTRACT AUDIO END (from .cap) ===
2026-03-01T23:30:57.396017Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Successfully extracted audio to "/var/folders/_n/s2y4q39123gdcbdf0b9n08940000gp/T/.tmpWn9aRG/audio.wav"
2026-03-01T23:30:57.396077Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Audio file created at: "/var/folders/_n/s2y4q39123gdcbdf0b9n08940000gp/T/.tmpWn9aRG/audio.wav", size: 256728 bytes
2026-03-01T23:30:57.396120Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Initializing Whisper context with model: /Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin
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
2026-03-01T23:30:57.741642Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Whisper context ready
2026-03-01T23:30:57.741699Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Starting Whisper transcription in blocking task...
2026-03-01T23:30:57.741849Z  INFO cap_desktop_lib::captions: === WHISPER TRANSCRIPTION START ===
2026-03-01T23:30:57.741861Z  INFO cap_desktop_lib::captions: Processing audio file: "/var/folders/_n/s2y4q39123gdcbdf0b9n08940000gp/T/.tmpWn9aRG/audio.wav"
2026-03-01T23:30:57.741872Z  INFO cap_desktop_lib::captions: Language setting: auto
2026-03-01T23:30:57.741931Z  INFO cap_desktop_lib::captions: Whisper params - translate: false, token_timestamps: true, max_len: MAX
2026-03-01T23:30:57.742187Z  INFO cap_desktop_lib::captions: Processing audio file of size: 256728 bytes
2026-03-01T23:30:57.746245Z  INFO cap_desktop_lib::captions: Converted 128364 samples to f32 format (duration: 8.02s at 16000Hz)
2026-03-01T23:30:57.749283Z  INFO cap_desktop_lib::captions: Audio samples - min: -0.1677, max: 0.9766, avg: 0.000100, RMS: 0.0082
2026-03-01T23:30:57.749319Z  INFO cap_desktop_lib::captions: First 20 audio samples:
2026-03-01T23:30:57.749389Z  INFO cap_desktop_lib::captions:   Sample[0] = 0.572815
2026-03-01T23:30:57.749466Z  INFO cap_desktop_lib::captions:   Sample[1] = 0.549011
2026-03-01T23:30:57.749536Z  INFO cap_desktop_lib::captions:   Sample[2] = -0.165527
2026-03-01T23:30:57.749580Z  INFO cap_desktop_lib::captions:   Sample[3] = 0.000092
2026-03-01T23:30:57.749618Z  INFO cap_desktop_lib::captions:   Sample[4] = 0.510468
2026-03-01T23:30:57.749645Z  INFO cap_desktop_lib::captions:   Sample[5] = 0.541687
2026-03-01T23:30:57.749652Z  INFO cap_desktop_lib::captions:   Sample[6] = 0.854675
2026-03-01T23:30:57.749658Z  INFO cap_desktop_lib::captions:   Sample[7] = 0.253540
2026-03-01T23:30:57.749664Z  INFO cap_desktop_lib::captions:   Sample[8] = 0.000488
2026-03-01T23:30:57.749671Z  INFO cap_desktop_lib::captions:   Sample[9] = 0.000000
2026-03-01T23:30:57.749676Z  INFO cap_desktop_lib::captions:   Sample[10] = 0.000031
2026-03-01T23:30:57.749682Z  INFO cap_desktop_lib::captions:   Sample[11] = 0.000031
2026-03-01T23:30:57.749688Z  INFO cap_desktop_lib::captions:   Sample[12] = 0.488281
2026-03-01T23:30:57.749693Z  INFO cap_desktop_lib::captions:   Sample[13] = 0.000000
2026-03-01T23:30:57.749718Z  INFO cap_desktop_lib::captions:   Sample[14] = 0.976562
2026-03-01T23:30:57.749745Z  INFO cap_desktop_lib::captions:   Sample[15] = 0.000000
2026-03-01T23:30:57.749752Z  INFO cap_desktop_lib::captions:   Sample[16] = 0.000061
2026-03-01T23:30:57.749758Z  INFO cap_desktop_lib::captions:   Sample[17] = 0.000488
2026-03-01T23:30:57.749765Z  INFO cap_desktop_lib::captions:   Sample[18] = 0.572632
2026-03-01T23:30:57.749770Z  INFO cap_desktop_lib::captions:   Sample[19] = 0.658783
whisper_init_state: kv self size  =   49.55 MB
whisper_init_state: kv cross size =   55.30 MB
whisper_init_state: compute buffer (conv)   =   20.23 MB
whisper_init_state: compute buffer (encode) =  128.14 MB
whisper_init_state: compute buffer (cross)  =    6.31 MB
whisper_init_state: compute buffer (decode) =   97.40 MB
2026-03-01T23:30:58.156011Z  INFO cap_editor::playback: Playback stats effective_fps="60.2" total_rendered=238 total_skipped=0 cache_hits=0 prefetch_hits=238 sync_decodes=0 prefetch_buffer=87
2026-03-01T23:30:58.936031Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="188.2" avg_kb="3037.5" dims="1920x1080" format="NV12"
whisper_full_with_state: auto-detected language: en (p = 0.303829)
2026-03-01T23:31:00.173210Z  INFO cap_editor::playback: Playback stats effective_fps="60.2" total_rendered=359 total_skipped=0 cache_hits=0 prefetch_hits=359 sync_decodes=0 prefetch_buffer=81
2026-03-01T23:31:00.712414Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=228 dropped=630 silence_frames=0 drop_pct="73.4%" is_wireless=false send_timeout_ms=20
2026-03-01T23:31:00.946750Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="188.2" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-01T23:31:01.364361Z  INFO cap_desktop_lib::captions: Found 1 segments
2026-03-01T23:31:01.364418Z  INFO cap_desktop_lib::captions: === Segment 0: start=0.00s, end=10.00s, raw_text='[BLANK_AUDIO]'
2026-03-01T23:31:01.364434Z  INFO cap_desktop_lib::captions:   Segment 0 has 7 tokens
2026-03-01T23:31:01.364445Z DEBUG cap_desktop_lib::captions: Filtering special token: "[_BEG_]"
2026-03-01T23:31:01.364452Z DEBUG cap_desktop_lib::captions:   Token[0]: id=50364, text="[_BEG_]" -> SKIPPED (special)
2026-03-01T23:31:01.364461Z DEBUG cap_desktop_lib::captions: Filtering special token: " ["
2026-03-01T23:31:01.364466Z DEBUG cap_desktop_lib::captions:   Token[1]: id=542, text=" [" -> SKIPPED (special)
2026-03-01T23:31:01.364475Z  INFO cap_desktop_lib::captions:   Token[2]: id=37592, text="BLANK", t0=0.77s, t1=4.61s, prob=0.3174
2026-03-01T23:31:01.364486Z DEBUG cap_desktop_lib::captions:     -> Word start set to 0.77s
2026-03-01T23:31:01.364493Z DEBUG cap_desktop_lib::captions:     -> Appending to word: 'BLANK'
2026-03-01T23:31:01.364501Z  INFO cap_desktop_lib::captions:   Token[3]: id=62, text="_", t0=4.61s, t1=5.37s, prob=0.9936
2026-03-01T23:31:01.364539Z DEBUG cap_desktop_lib::captions:     -> Appending to word: 'BLANK_'
2026-03-01T23:31:01.364549Z  INFO cap_desktop_lib::captions:   Token[4]: id=29937, text="AUDIO", t0=5.37s, t1=8.02s, prob=0.9992
2026-03-01T23:31:01.364559Z DEBUG cap_desktop_lib::captions:     -> Appending to word: 'BLANK_AUDIO'
2026-03-01T23:31:01.364567Z DEBUG cap_desktop_lib::captions: Filtering special token: "]"
2026-03-01T23:31:01.364574Z DEBUG cap_desktop_lib::captions:   Token[5]: id=60, text="]" -> SKIPPED (special)
2026-03-01T23:31:01.364583Z DEBUG cap_desktop_lib::captions: Filtering special token: "[_TT_500]"
2026-03-01T23:31:01.364590Z DEBUG cap_desktop_lib::captions:   Token[6]: id=50864, text="[_TT_500]" -> SKIPPED (special)
2026-03-01T23:31:01.364599Z  INFO cap_desktop_lib::captions:     -> Final word: 'BLANK_AUDIO' (0.77s - 8.02s)
2026-03-01T23:31:01.364609Z  INFO cap_desktop_lib::captions:   Segment 0 produced 1 words
2026-03-01T23:31:01.364618Z  INFO cap_desktop_lib::captions:     Word[0]: 'BLANK_AUDIO' (0.77s - 8.02s)
2026-03-01T23:31:01.364645Z  INFO cap_desktop_lib::captions: === WHISPER TRANSCRIPTION COMPLETE ===
2026-03-01T23:31:01.364656Z  INFO cap_desktop_lib::captions: Total segments: 1
2026-03-01T23:31:01.364663Z  INFO cap_desktop_lib::captions: Total words: 1
2026-03-01T23:31:01.364670Z  INFO cap_desktop_lib::captions: === FINAL TRANSCRIPTION SUMMARY ===
2026-03-01T23:31:01.364677Z  INFO cap_desktop_lib::captions: Segment 'segment-0-0' (0.77s - 8.02s): BLANK_AUDIO
2026-03-01T23:31:01.364684Z  INFO cap_desktop_lib::captions: === END SUMMARY ===
2026-03-01T23:31:01.369219Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: === TRANSCRIBE AUDIO RESULT ===
2026-03-01T23:31:01.369282Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: Transcription produced 1 segments
2026-03-01T23:31:01.369306Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions:   Result Segment[0]: 'BLANK_AUDIO' (1 words)
2026-03-01T23:31:01.369324Z  INFO transcribe_audio{video_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Odyssey G5 (Display) 2026-03-02 12.30 AM.cap" model_path="/Users/dives/Library/Application Support/so.orbit.desktop.dev/transcription_models/small.bin" language="auto"}: cap_desktop_lib::captions: === TRANSCRIBE AUDIO COMMAND END (success) ===
2026-03-01T23:31:02.150529Z  INFO cap_editor::playback: Audio playback thread finished.
2026-03-01T23:31:03.682571Z  INFO cap_editor::playback: Creating pre-rendered audio stream duration_secs=8.027833 start_playhead=0.0 sample_rate=44100
2026-03-01T23:31:03.682709Z  INFO cap_editor::audio: Pre-rendering audio for playback duration_secs=8.027833 sample_rate=44100 channels=2
2026-03-01T23:31:03.683857Z  INFO cap_editor::audio: Audio resampler created with high-quality settings (filter_size=128) input_rate=48000 output_rate=44100 output_format=F32(Packed)
2026-03-01T23:31:03.750788Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=36 mb_per_sec="113.5" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-01T23:31:03.764129Z  INFO cap_editor::audio: Audio pre-rendering complete total_samples=709362 memory_mb=2
2026-03-01T23:31:03.795340Z  INFO cap_editor::playback: Pre-rendered audio stream created successfully
2026-03-01T23:31:05.688532Z  INFO cap_editor::playback: Playback stats effective_fps="60.4" total_rendered=118 total_skipped=0 cache_hits=0 prefetch_hits=118 sync_decodes=0 prefetch_buffer=87
2026-03-01T23:31:05.712896Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=228 dropped=772 silence_frames=0 drop_pct="77.2%" is_wireless=false send_timeout_ms=20
2026-03-01T23:31:05.763527Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="188.2" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-01T23:31:07.689136Z  INFO cap_editor::playback: Playback stats effective_fps="60.2" total_rendered=238 total_skipped=0 cache_hits=0 prefetch_hits=238 sync_decodes=0 prefetch_buffer=88
2026-03-01T23:31:07.838463Z  INFO cap_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="186.6" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-01T23:31:08.471766Z  WARN cap_editor::editor_instance: preview task abort await failed: task 205 was cancelled
2026-03-01T23:31:08.471766Z  INFO cap_editor::playback: Audio playback thread finished.
2026-03-01T23:31:08.517836Z ERROR cap_desktop_lib::frame_ws: Failed to send frame to socket: Error { inner: Io(Os { code: 32, kind: BrokenPipe, message: "Broken pipe" }) }
2026-03-01T23:31:08.517894Z  INFO cap_desktop_lib::frame_ws: Websocket closing after 26.96s
2026-03-01T23:31:10.715166Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=228 dropped=915 silence_frames=0 drop_pct="80.1%" is_wireless=false send_timeout_ms=20
^A2026-03-01T23:31:15.646430Z TRACE cap_recording::feeds::microphone: MicrophoneFeed.RemoveInput
2026-03-01T23:31:15.646738Z  INFO cap_recording::feeds::microphone: Microphone actor shut down, ending stream
2026-03-01T23:31:15.646920Z TRACE cap_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-01T23:31:15.717413Z  WARN cap_recording::sources::microphone: Microphone audio stats captured=228 dropped=1056 silence_frames=0 drop_pct="82.2%" is_wireless=false send_timeout_ms=20
2026-03-01T23:31:15.719834Z  WARN cap_recording::sources::microphone: Microphone data timeout, generating silence is_wireless=false timeout_ms=100
^A