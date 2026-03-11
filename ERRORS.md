...
1123 | /                     app.run_on_main_thread({
1124 | |                         let window = window.clone();
1125 | |                         move || {
1126 | |                             use tauri::ActivationPolicy;
...    |
1167 | |                     })
     | |                      ^
     | |                      |
     | |______________________`app` escapes the method body here
     |                        argument requires that `'1` must outlive `'static`

    Building [=======================> ] 994/996: orbit-desktop                                                  
For more information about this error, try `rustc --explain E0521`.
    Building [=======================> ] 994/996: orbit-desktop                                                  
error: could not compile `orbit-desktop` (lib) due to 1 previous error
        Info File src-tauri/src/windows.rs changed. Rebuilding application...
     Running DevCommand (`cargo  run --no-default-features --color always --`)
        Info File src-tauri/src/windows.rs changed. Rebuilding application...
     Running DevCommand (`cargo  run --no-default-features --color always --`)
    Blocking waiting for file lock on package cache
    Blocking waiting for file lock on package cache
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
   Compiling orbit-desktop v0.4.8 (/Users/dives/Desktop/Projects/orbit/apps/desktop/src-tauri)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 54.33s
     Running `/Users/dives/Desktop/Projects/orbit/target/debug/orbit-desktop`
2026-03-11T14:19:00.451419Z  INFO orbit_desktop_lib::frame_ws: WebSocket server listening on port 61957
2026-03-11T14:19:00.454034Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new sender
Initializing GeneralSettingsStore
GeneralSettingsState managed
Checking startup completion and permissions...
Notification permission already granted
2026-03-11T14:19:01.323753Z  INFO orbit_desktop_lib::gpu_context: Using hardware GPU adapter for shared context adapter_name="Apple M3 Pro" adapter_backend=Metal
Permissions check result: OSPermissionsCheck { screen_recording: Granted, microphone: Granted, camera: Granted, accessibility: Granted }
Permissions granted, showing main window
2026-03-11T14:19:01.700887Z TRACE orbit_desktop_lib::platform::macos::sc_shareable_content: ScreenCaptureKit cache warmed elapsed_ms=242.595
[baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
Browserslist: browsers data (caniuse-lite) is 11 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
2026-03-11T14:19:09.813202Z TRACE orbit_recording::feeds::camera: CameraFeed.RemoveInput
        Info File src-tauri/src/windows.rs changed. Rebuilding application...
     Running DevCommand (`cargo  run --no-default-features --color always --`)
        Info File src-tauri/src/windows.rs changed. Rebuilding application...
     Running DevCommand (`cargo  run --no-default-features --color always --`)
    Blocking waiting for file lock on package cache
    Blocking waiting for file lock on package cache
    Blocking waiting for file lock on build directory
   Compiling objc2-exception-helper v0.1.1
   Compiling ring v0.17.14
   Compiling objc_exception v0.1.2
   Compiling mac-notification-sys v0.6.6
   Compiling objc2 v0.6.2
        Info File src-tauri/src/windows.rs changed. Rebuilding application..., objc_exception(build), objc2-exception-helper, ring(build), objc2(build)                                                                                                             
     Running DevCommand (`cargo  run --no-default-features --color always --`)
        Info File src-tauri/src/windows.rs changed. Rebuilding application...
     Running DevCommand (`cargo  run --no-default-features --color always --`)
    Blocking waiting for file lock on build directory
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
   Compiling objc2-core-foundation v0.3.1
   Compiling block2 v0.6.1
   Compiling objc2-javascript-core v0.3.1
   Compiling rustls v0.23.31
   Compiling rustls v0.21.12
   Compiling cocoa v0.26.1
   Compiling dispatch2 v0.3.0
   Compiling screencapturekit v0.3.6
   Compiling objc2-foundation v0.3.1
   Compiling objc2-core-graphics v0.3.1
   Compiling objc2-security v0.3.1
   Compiling objc2-core-video v0.3.1
   Compiling objc2-core-media v0.3.1
   Compiling objc2-io-kit v0.3.1
   Compiling rustls-webpki v0.103.6
   Compiling sct v0.7.1
   Compiling rustls-webpki v0.101.7
   Compiling sysinfo v0.35.2
   Compiling wgpu-hal v25.0.2 (/Users/dives/Desktop/Projects/orbit/vendor/wgpu-hal)
   Compiling tokio-rustls v0.24.1
   Compiling wgpu-core-deps-apple v25.0.0
   Compiling hyper-rustls v0.24.2
   Compiling wgpu-core v25.0.2
   Compiling reqwest v0.11.27
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
   Compiling orbit-flags v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/flags)
   Compiling orbit-camera-avfoundation v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/camera-avfoundation)
   Compiling wgpu v25.0.2
   Compiling orbit-audio v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/audio)
   Compiling orbit-utils v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/utils)
   Compiling orbit-video-decode v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/video-decode)
   Compiling orbit-project v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/project)
   Compiling orbit-media v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/media)
   Compiling orbit-enc-ffmpeg v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/enc-ffmpeg)
   Compiling sorbit-targets v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/sorbit-targets)
   Compiling sentry-rust-minidump v0.13.0
   Compiling orbit-enc-avfoundation v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/enc-avfoundation)
   Compiling orbit-frame-converter v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/frame-converter)
   Compiling orbit-cursor-capture v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/cursor-capture)
   Compiling orbit-enc-gif v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/enc-gif)
   Compiling orbit-fail v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/fail)
   Compiling orbit-timestamp v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/timestamp)
   Compiling opentelemetry-otlp v0.31.0
   Compiling sorbit-direct3d v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/sorbit-direct3d)
   Compiling glyphon v0.9.0
   Compiling orbit-rendering v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/rendering)
   Compiling objc2-core-image v0.3.1
   Compiling objc2-quartz-core v0.3.1
   Compiling objc2-cloud-kit v0.3.1
   Compiling objc2-core-data v0.3.1
   Compiling objc2-avf-audio v0.3.1
   Compiling notify-rust v4.11.7
   Compiling objc2-av-foundation v0.3.1
   Compiling objc2-app-kit v0.3.1
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
   Compiling global-hotkey v0.7.0
   Compiling arboard v3.6.1
   Compiling rfd v0.15.4
   Compiling clipboard-rs v0.2.4
   Compiling sorbit-ffmpeg v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/sorbit-ffmpeg)
   Compiling osakit v0.3.1
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

   Compiling tray-icon v0.21.1
warning: `tao` (lib) generated 6 warnings
   Compiling wry v0.53.3
   Compiling tauri-runtime v2.8.0
   Compiling tauri-runtime-wry v2.8.1
   Compiling tauri v2.8.5
   Compiling tauri-plugin-fs v2.4.2
   Compiling tauri-plugin-deep-link v2.4.3
   Compiling tauri-plugin-notification v2.3.1
   Compiling tauri-plugin-process v2.3.0
   Compiling tauri-nspanel v2.0.1 (https://github.com/ahkohd/tauri-nspanel?branch=v2#18ffb9a2)
   Compiling tauri-plugin-shell v2.3.1
   Compiling tauri-plugin-sentry v0.5.0
   Compiling tauri-plugin-updater v2.9.0
   Compiling tauri-plugin-oauth v2.0.0 (https://github.com/FabianLars/tauri-plugin-oauth?branch=v2#f941c99c)
   Compiling tauri-plugin-os v2.3.1
   Compiling tauri-plugin-global-shortcut v2.3.0
   Compiling tauri-plugin-clipboard-manager v2.3.0
   Compiling tauri-plugin-store v2.4.0
   Compiling tauri-plugin-single-instance v2.3.4
   Compiling tauri-plugin-positioner v2.3.0
   Compiling tauri-plugin-window-state v2.4.0
   Compiling tauri-specta v2.0.0-rc.20
   Compiling tauri-plugin-opener v2.5.0
   Compiling tauri-plugin-dialog v2.4.0
   Compiling tauri-plugin-http v2.5.2
   Compiling orbit-desktop v0.4.8 (/Users/dives/Desktop/Projects/orbit/apps/desktop/src-tauri)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 1m 55s
     Running `/Users/dives/Desktop/Projects/orbit/target/debug/orbit-desktop`
2026-03-11T14:21:14.764582Z  INFO orbit_desktop_lib::frame_ws: WebSocket server listening on port 62154
2026-03-11T14:21:14.766108Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new sender
3:21:14 PM [vite] (client) hmr update /src/App.tsx, /@fs/Users/dives/Desktop/Projects/orbit/packages/ui-solid/src/main.css, /src/styles/theme.css, /src/routes/(window-chrome)/new-main/index.tsx, /src/routes/(window-chrome)/new-main/MicrophoneSelect.tsx, /src/routes/(window-chrome)/new-main/ModeInfoPanel.tsx, /src/routes/(window-chrome)/new-main/CameraSelect.tsx, /src/components/RecoveryToast.tsx, /src/components/Mode.tsx, /src/routes/(window-chrome)/new-main/SystemAudio.tsx, /src/routes/editor/ui.tsx, /src/routes/(window-chrome)/new-main/TargetCard.tsx
Initializing GeneralSettingsStore
GeneralSettingsState managed
Checking startup completion and permissions...
Notification permission already granted
2026-03-11T14:21:15.185228Z  INFO orbit_desktop_lib::gpu_context: Using hardware GPU adapter for shared context adapter_name="Apple M3 Pro" adapter_backend=Metal
Permissions check result: OSPermissionsCheck { screen_recording: Granted, microphone: Granted, camera: Granted, accessibility: Granted }
Permissions granted, showing main window
2026-03-11T14:21:15.321922Z TRACE orbit_desktop_lib::platform::macos::sc_shareable_content: ScreenCaptureKit cache warmed elapsed_ms=64.998
2026-03-11T14:21:16.537436Z TRACE orbit_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-11T14:21:23.508022Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.RemoveInput
2026-03-11T14:21:23.508121Z TRACE orbit_recording::feeds::camera: CameraFeed.RemoveInput
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
   Compiling objc2-core-foundation v0.3.1
   Compiling block2 v0.6.1
   Compiling objc2-javascript-core v0.3.1
   Compiling rustls v0.23.31
   Compiling rustls v0.21.12
   Compiling cocoa v0.26.1
   Compiling dispatch2 v0.3.0
   Compiling screencapturekit v0.3.6
   Compiling objc2-foundation v0.3.1
   Compiling objc2-core-graphics v0.3.1
   Compiling objc2-security v0.3.1
   Compiling objc2-core-video v0.3.1
   Compiling objc2-core-media v0.3.1
   Compiling objc2-io-kit v0.3.1
   Compiling rustls-webpki v0.103.6
   Compiling sct v0.7.1
   Compiling rustls-webpki v0.101.7
   Compiling sysinfo v0.35.2
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
   Compiling wgpu v25.0.2
   Compiling orbit-media-info v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/media-info)
   Compiling ffmpeg-hw-device v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/ffmpeg-hw-device)
   Compiling orbit-cursor-info v0.0.0 (/Users/dives/Desktop/Projects/orbit/crates/cursor-info)
   Compiling orbit-flags v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/flags)
   Compiling orbit-camera-avfoundation v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/camera-avfoundation)
   Compiling orbit-video-decode v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/video-decode)
   Compiling orbit-project v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/project)
   Compiling orbit-media v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/media)
   Compiling orbit-audio v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/audio)
   Compiling orbit-enc-ffmpeg v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/enc-ffmpeg)
   Compiling sorbit-targets v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/sorbit-targets)
   Compiling orbit-utils v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/utils)
   Compiling orbit-cursor-capture v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/cursor-capture)
   Compiling orbit-frame-converter v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/frame-converter)
   Compiling orbit-enc-avfoundation v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/enc-avfoundation)
   Compiling sentry-rust-minidump v0.13.0
   Compiling orbit-fail v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/fail)
   Compiling orbit-enc-gif v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/enc-gif)
   Compiling orbit-timestamp v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/timestamp)
   Compiling opentelemetry-otlp v0.31.0
   Compiling sorbit-direct3d v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/sorbit-direct3d)
   Compiling glyphon v0.9.0
   Compiling orbit-rendering v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/rendering)
   Compiling objc2-quartz-core v0.3.1
   Compiling objc2-core-image v0.3.1
   Compiling objc2-core-data v0.3.1
   Compiling objc2-cloud-kit v0.3.1
   Compiling objc2-avf-audio v0.3.1
   Compiling orbit-editor v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/editor)
   Compiling notify-rust v4.11.7
   Compiling objc2-av-foundation v0.3.1
   Compiling objc2-app-kit v0.3.1
   Compiling orbit-export v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/export)
   Compiling orbit-camera v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/camera)
   Compiling orbit-camera-ffmpeg v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/camera-ffmpeg)
   Compiling objc2-web-kit v0.3.1
   Compiling muda v0.17.1
   Compiling tao v0.34.3 (/Users/dives/Desktop/Projects/orbit/vendor/tao)
   Compiling window-vibrancy v0.6.0
   Compiling sorbit-screencapturekit v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/sorbit-screencapturekit)
   Compiling objc2-osa-kit v0.3.1
   Compiling global-hotkey v0.7.0
   Compiling rfd v0.15.4
   Compiling arboard v3.6.1
   Compiling clipboard-rs v0.2.4
   Compiling sorbit-ffmpeg v0.1.0 (/Users/dives/Desktop/Projects/orbit/crates/sorbit-ffmpeg)
   Compiling osakit v0.3.1
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

   Compiling tray-icon v0.21.1
warning: `tao` (lib) generated 6 warnings
   Compiling tauri-runtime v2.8.0
   Compiling wry v0.53.3
   Compiling tauri-runtime-wry v2.8.1
   Compiling tauri v2.8.5
   Compiling tauri-plugin-fs v2.4.2
   Compiling tauri-plugin-deep-link v2.4.3
   Compiling tauri-plugin-store v2.4.0
   Compiling tauri-plugin-sentry v0.5.0
   Compiling tauri-plugin-global-shortcut v2.3.0
   Compiling tauri-plugin-updater v2.9.0
   Compiling tauri-plugin-notification v2.3.1
   Compiling tauri-plugin-clipboard-manager v2.3.0
   Compiling tauri-plugin-os v2.3.1
   Compiling tauri-nspanel v2.0.1 (https://github.com/ahkohd/tauri-nspanel?branch=v2#18ffb9a2)
   Compiling tauri-plugin-window-state v2.4.0
   Compiling tauri-specta v2.0.0-rc.20
   Compiling tauri-plugin-single-instance v2.3.4
   Compiling tauri-plugin-shell v2.3.1
   Compiling tauri-plugin-positioner v2.3.0
   Compiling tauri-plugin-oauth v2.0.0 (https://github.com/FabianLars/tauri-plugin-oauth?branch=v2#f941c99c)
   Compiling tauri-plugin-dialog v2.4.0
   Compiling tauri-plugin-http v2.5.2
   Compiling tauri-plugin-opener v2.5.0
   Compiling tauri-plugin-process v2.3.0
   Compiling orbit-desktop v0.4.8 (/Users/dives/Desktop/Projects/orbit/apps/desktop/src-tauri)
warning: unused variable: `app`
    --> apps/desktop/src-tauri/src/windows.rs:1125:29
     |
1125 |                         let app = app.clone();
     |                             ^^^ help: if this is intentional, prefix it with an underscore: `_app`
     |
     = note: `#[warn(unused_variables)]` (part of `#[warn(unused)]`) on by default

warning: `orbit-desktop` (lib) generated 1 warning (run `cargo fix --lib -p orbit-desktop` to apply 1 suggestion)
    Finished `dev` profile [unoptimized + debuginfo] target(s) in 1m 00s
     Running `/Users/dives/Desktop/Projects/orbit/target/debug/orbit-desktop`
2026-03-11T14:24:38.361045Z  INFO orbit_desktop_lib::frame_ws: WebSocket server listening on port 62368
2026-03-11T14:24:38.362607Z DEBUG orbit_recording::feeds::camera: CameraFeed: Adding new sender
Initializing GeneralSettingsStore
GeneralSettingsState managed
Checking startup completion and permissions...
Notification permission already granted
2026-03-11T14:24:38.651480Z  INFO orbit_desktop_lib::gpu_context: Using hardware GPU adapter for shared context adapter_name="Apple M3 Pro" adapter_backend=Metal
Permissions check result: OSPermissionsCheck { screen_recording: Granted, microphone: Granted, camera: Granted, accessibility: Granted }
Permissions granted, showing main window
2026-03-11T14:24:38.825711Z TRACE orbit_desktop_lib::platform::macos::sc_shareable_content: ScreenCaptureKit cache warmed elapsed_ms=96.678
[baseline-browser-mapping] The data in this module is over two months old.  To ensure accurate Baseline data, please update: `npm i baseline-browser-mapping@latest -D`
Browserslist: browsers data (caniuse-lite) is 11 months old. Please run:
  npx update-browserslist-db@latest
  Why you should do it regularly: https://github.com/browserslist/update-db#readme
2026-03-11T14:24:42.198640Z TRACE orbit_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-11T14:28:34.979667Z DEBUG recording: orbit_desktop_lib::windows: InProgressRecording window: cursor_monitor=(0, 0, 2560, 1440), pos=(1120, 1170)
2026-03-11T14:28:34.988363Z DEBUG recording: orbit_desktop_lib::windows: InProgressRecording window created: label=in-progress-recording, inner_size=Ok(PhysicalSize { width: 320, height: 150 }), outer_position=Ok(PhysicalPosition { x: 1120, y: 342 })
2026-03-11T14:28:38.048264Z DEBUG recording: orbit_desktop_lib::recording: spawning start_recording actor
2026-03-11T14:28:38.053973Z TRACE orbit_recording::feeds::camera: CameraFeed.Lock
2026-03-11T14:28:38.078486Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.Lock
2026-03-11T14:28:38.079692Z TRACE recording:studio_recording: orbit_recording::studio_recording: creating recording actor
2026-03-11T14:28:38.080254Z TRACE recording:studio_recording:segment{index=0}: orbit_recording::studio_recording: preparing segment pipeline 0
2026-03-11T14:28:38.081206Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Screen capture buffer size buffer_size=15
2026-03-11T14:28:38.082964Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: SCK content filter: Retained(ContentFilter(<SCContentFilter: 0x126f181c0>))
2026-03-11T14:28:38.083014Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: size: PhysicalSize { width: 2560.0, height: 1440.0 }
2026-03-11T14:28:38.083343Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Screen capture queue depth queue_depth=8 max_queue_depth=8
2026-03-11T14:28:38.088518Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Pixel buffer pool initialized min_count=20 width=2560 height=1440
2026-03-11T14:28:38.094131Z  INFO recording:studio_recording:segment{index=0}:screen-out: orbit_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display
2026-03-11T14:28:38.094170Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-11T14:28:38.094285Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-11T14:28:38.094391Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: orbit_recording::output_pipeline::core: Task started
2026-03-11T14:28:38.094405Z  INFO recording:studio_recording:segment{index=0}: orbit_recording::studio_recording: pipeline playing
2026-03-11T14:28:38.094598Z TRACE recording:studio_recording: orbit_recording::studio_recording: spawning recording actor
2026-03-11T14:28:38.146753Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 0 image to: "cursor_0.png"
2026-03-11T14:28:38.264814Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: M4S muxer encoder channel buffer size buffer_size=60
2026-03-11T14:28:38.276759Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Encoder pixel format configuration encoder=h264_videotoolbox input_format=NV12 output_format=NV12 needs_pixel_conversion=false external_conversion=false
2026-03-11T14:28:38.276912Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: No pixel format conversion needed (zero-copy path) encoder=h264_videotoolbox
2026-03-11T14:28:38.486690Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Selected hardware H264 encoder encoder=h264_videotoolbox width=2560 height=1440 fps=60.0
2026-03-11T14:28:38.489385Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: FFmpeg DASH muxer state after write_header() manifest_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd manifest_exists=true init_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/init.mp4 init_exists=true
2026-03-11T14:28:38.489436Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: Initialized segmented video encoder with FFmpeg DASH muxer (init.mp4 + m4s segments). CRITICAL: init.mp4 is required for segment playback/recovery. path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display segment_duration_secs=3 width=2560 height=1440
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/init.mp4' for writing
2026-03-11T14:28:38.495644Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: Started M4S fragmented video encoder path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/segment_001.m4s.tmp' for writing
2026-03-11T14:28:40.929752Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Capturing video baseline offset after warmup wall_clock_secs=2.849524792 camera_secs=2.6874921670000003 baseline_offset_secs=-0.1620326249999997
2026-03-11T14:28:41.017482Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 1 image to: "cursor_1.png"
2026-03-11T14:28:41.082738Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=1 duration_secs=3.000214 frames=63
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/master.m3u8.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/segment_002.m4s.tmp' for writing
2026-03-11T14:28:41.660934Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 2 image to: "cursor_2.png"
2026-03-11T14:28:43.238631Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=146 drops=0 drop_rate_pct="0.0%" total_frames=146
2026-03-11T14:28:44.149861Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=2 duration_secs=3.068751042 frames=113
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[mp4 @ 0x126f2e070] Packet duration: -13104 / dts: 628957 is out of range
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/segment_003.m4s.tmp' for writing
[mp4 @ 0x126f2e070] Packet duration: -11605 / dts: 630456 is out of range
[mp4 @ 0x126f2e070] pts has no value
[mp4 @ 0x126f2e070] Packet duration: -9742 / dts: 632320 is out of range
[mp4 @ 0x126f2e070] pts has no value
[mp4 @ 0x126f2e070] Packet duration: -8163 / dts: 633900 is out of range
[mp4 @ 0x126f2e070] pts has no value
[mp4 @ 0x126f2e070] Packet duration: -5267 / dts: 636797 is out of range
[mp4 @ 0x126f2e070] pts has no value
[mp4 @ 0x126f2e070] Packet duration: -3519 / dts: 638546 is out of range
[mp4 @ 0x126f2e070] pts has no value
[mp4 @ 0x126f2e070] Packet duration: -1957 / dts: 640109 is out of range
[mp4 @ 0x126f2e070] pts has no value
[mp4 @ 0x126f2e070] Packet duration: -414 / dts: 641653 is out of range
[mp4 @ 0x126f2e070] pts has no value
2026-03-11T14:28:47.237248Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=3 duration_secs=3.087158208 frames=106
2026-03-11T14:28:48.240290Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=139 drops=0 drop_rate_pct="0.0%" total_frames=285
2026-03-11T14:28:50.272781Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=4 duration_secs=3.035404125 frames=11
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/segment_004.m4s.tmp' for writing
2026-03-11T14:28:50.806014Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Video drift correction status frame_count=300 wall_clock_secs=12.725799958 camera_secs=12.562469 corrected_secs=12.725799958 drift_ratio=1.0130015013768392 baseline_offset=-0.1620326249999997 total_pause_ms=0
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[mp4 @ 0x126f2e070] Packet duration: -41 / dts: 1334854 is out of range
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/segment_005.m4s.tmp' for writing
2026-03-11T14:28:53.243104Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=61 drops=0 drop_rate_pct="0.0%" total_frames=346
2026-03-11T14:28:53.380607Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=5 duration_secs=3.107764542 frames=55
2026-03-11T14:28:56.466710Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=6 duration_secs=3.086596083 frames=123
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[mp4 @ 0x126f2e070] Packet duration: -8901 / dts: 1641499 is out of range
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/segment_006.m4s.tmp' for writing
[mp4 @ 0x126f2e070] Packet duration: -7410 / dts: 1642990 is out of range
[mp4 @ 0x126f2e070] pts has no value
2026-03-11T14:28:58.246026Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=139 drops=0 drop_rate_pct="0.0%" total_frames=485
2026-03-11T14:28:59.478151Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=7 duration_secs=3.011082625 frames=27
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/segment_007.m4s.tmp' for writing
2026-03-11T14:29:02.488711Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=8 duration_secs=3.010054083 frames=59
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/segment_008.m4s.tmp' for writing
2026-03-11T14:29:03.248816Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=101 drops=0 drop_rate_pct="0.0%" total_frames=586
2026-03-11T14:29:03.668069Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Video drift correction status frame_count=600 wall_clock_secs=25.587837708 camera_secs=25.423548625 corrected_secs=25.587837708 drift_ratio=1.006462083064142 baseline_offset=-0.1620326249999997 total_pause_ms=0
2026-03-11T14:29:05.841049Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=9 duration_secs=3.353033209 frames=96
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/segment_009.m4s.tmp' for writing
2026-03-11T14:29:08.249694Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=147 drops=0 drop_rate_pct="0.0%" total_frames=733
2026-03-11T14:29:08.987499Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=10 duration_secs=3.146484541 frames=103
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/segment_010.m4s.tmp' for writing
2026-03-11T14:29:12.016711Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=11 duration_secs=3.029349542 frames=71
2026-03-11T14:29:13.251519Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=102 drops=0 drop_rate_pct="0.0%" total_frames=835
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[mp4 @ 0x126f2e070] Packet duration: -184 / dts: 3175369 is out of range
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/segment_011.m4s.tmp' for writing
2026-03-11T14:29:15.022993Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=12 duration_secs=3.006235292 frames=45
2026-03-11T14:29:16.142678Z  INFO orbit_recording::studio_recording: pipeline shuting down
2026-03-11T14:29:16.142805Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Capturer stopping after creating 895 video frames
2026-03-11T14:29:16.142805Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video cancelled, draining remaining frames from channel
2026-03-11T14:29:16.143130Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video finished after cancellation, total 895 frames
2026-03-11T14:29:16.143248Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: M4S encoder timing summary (using SegmentedVideoEncoder) total_frames=895 slow_converts=0 slow_encodes=0 slow_convert_pct="0.0%" slow_encode_pct="0.0%"
2026-03-11T14:29:16.143291Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-11T14:29:16.147164Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-11T14:29:16.151292Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-11T14:29:16.151881Z TRACE orbit_recording::output_pipeline::macos_fragmented_m4s: M4S encoder channel already closed during finish: sending on a closed channel
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x136e209d0] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
2026-03-11T14:29:16.172241Z  INFO orbit_recording::studio_recording: pipeline shutdown
2026-03-11T14:29:16.172509Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: cursor recorder done
2026-03-11T14:29:16.179275Z  INFO recording: orbit_desktop_lib::recording: recording wait actor done: Ok(())
2026-03-11T14:29:16.180600Z  INFO stop_recording: orbit_desktop_lib::recording: Recording has fragments that need remuxing - opening editor immediately
2026-03-11T14:29:16.186820Z  INFO orbit_desktop_lib::frame_ws: WebSocket server listening on port 62695
2026-03-11T14:29:16.187414Z  INFO orbit_desktop_lib: Recording is being finalized, waiting for completion...
2026-03-11T14:29:16.250807Z  INFO orbit_desktop_lib::recording: Starting background finalization for recording
2026-03-11T14:29:16.260824Z  INFO orbit_recording::recovery: Found 1 recoverable segments in "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit" with estimated duration 0ns
2026-03-11T14:29:16.260929Z  INFO orbit_recording::recovery: Concatenating 11 M4S display segments with init to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display.mp4"
2026-03-11T14:29:16.367322Z  INFO orbit_recording::recovery: Validating recovered display video: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display.mp4"
2026-03-11T14:29:16.409604Z  INFO orbit_recording::recovery: Display video validation passed
2026-03-11T14:29:16.454552Z  INFO orbit_recording::recovery: Created project configuration with timeline for recovered recording
2026-03-11T14:29:16.454593Z  INFO orbit_recording::recovery: Successfully recovered recording at "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit"
2026-03-11T14:29:16.454616Z  INFO orbit_desktop_lib::recording: Successfully remuxed fragmented recording
2026-03-11T14:29:16.480566Z  INFO orbit_desktop_lib::recording: Background finalization completed for recording
2026-03-11T14:29:16.480818Z  INFO orbit_desktop_lib: Recording finalization completed
2026-03-11T14:29:16.481229Z DEBUG orbit_project::meta: Checking for captions at: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/captions.json"
2026-03-11T14:29:16.481251Z DEBUG orbit_project::meta: No captions.json found
[swscaler @ 0x1288e8000] No accelerated colorspace conversion found from yuv420p to rgb24.
2026-03-11T14:29:16.598819Z  INFO orbit_video_decode::avassetreader: Built keyframe index path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.28 PM.orbit/content/segments/segment-0/display.mp4 keyframe_count=75 fps=23.51630507610612 duration_secs=38.0587 build_ms=54
2026-03-11T14:29:16.599565Z  INFO orbit_rendering::decoder::multi_position: Configured decoder pool for video duration duration_secs=38.0587 optimal_pool_size=5 reposition_threshold=5.0
2026-03-11T14:29:16.756406Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=7.216766834259033 decoder_index=1
2026-03-11T14:29:16.788062Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=17.556299209594727 decoder_index=2
2026-03-11T14:29:16.812482Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=28.217466354370117 decoder_index=3
2026-03-11T14:29:16.843486Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=37.86945724487305 decoder_index=4
2026-03-11T14:29:16.843610Z  INFO orbit_rendering::decoder::avassetreader: Initialized multi-position decoder pool decoder_count=5 optimal_pool_size=5 reposition_threshold=5.0 fps=23 duration_secs=38.0587 total_frames_estimate=876
2026-03-11T14:29:16.843734Z  INFO orbit_rendering::decoder: Video 'screen' using AVAssetReader (hardware) decoder (2560x1440)
2026-03-11T14:29:16.844959Z  INFO orbit_rendering::yuv_converter: Creating shared YUV converter pipelines (shader compilation)
2026-03-11T14:29:16.875444Z  INFO orbit_rendering::yuv_converter: Shared YUV converter pipelines created successfully
2026-03-11T14:29:16.899922Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-11T14:29:16.905046Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-11T14:29:16.905543Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
[BABEL] Note: The code generator has deoptimised the styling of /Users/dives/Desktop/Projects/orbit/apps/desktop/node_modules/.vinxi/client/deps/effect.js as it exceeds the max of 500KB.
Pretty name: Orbit 2026-03-11 at 15.28.38
2026-03-11T14:29:19.117848Z  INFO orbit_desktop_lib::frame_ws: Socket connection established
2026-03-11T14:29:19.191464Z  INFO orbit_rendering::yuv_converter: Reallocating YUV converter textures for larger video old_width=1920 old_height=1080 new_width=2560 new_height=1472
2026-03-11T14:29:19.312230Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=0 mb_per_sec="0.7" avg_kb="1283.4" dims="1248x702" format="NV12"
2026-03-11T14:29:22.122181Z  INFO orbit_editor::playback: No audio segments found, skipping audio playback thread.
2026-03-11T14:29:22.124736Z  INFO orbit_rendering::frame_pipeline: Resizing render session textures old_width=1248 old_height=702 new_width=1920 new_height=1080
2026-03-11T14:29:22.213269Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=1 mb_per_sec="2.2" avg_kb="2160.4" dims="1920x1080" format="NV12"
2026-03-11T14:29:24.123820Z  INFO orbit_editor::playback: Playback stats effective_fps="60.5" total_rendered=121 total_skipped=0 cache_hits=0 prefetch_hits=121 sync_decodes=0 prefetch_buffer=87
2026-03-11T14:29:24.218180Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=61 mb_per_sec="189.7" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:29:26.128458Z  INFO orbit_editor::playback: Playback stats effective_fps="60.2" total_rendered=241 total_skipped=0 cache_hits=0 prefetch_hits=241 sync_decodes=0 prefetch_buffer=84
2026-03-11T14:29:26.230640Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="188.2" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:29:28.143391Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=362 total_skipped=0 cache_hits=0 prefetch_hits=362 sync_decodes=0 prefetch_buffer=89
2026-03-11T14:29:28.232325Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="186.6" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:29:30.160677Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=483 total_skipped=0 cache_hits=0 prefetch_hits=483 sync_decodes=0 prefetch_buffer=87
2026-03-11T14:29:30.233361Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="186.6" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:29:32.176671Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=604 total_skipped=0 cache_hits=0 prefetch_hits=604 sync_decodes=0 prefetch_buffer=85
2026-03-11T14:29:32.251620Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=59 mb_per_sec="183.5" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:29:34.190505Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=725 total_skipped=0 cache_hits=0 prefetch_hits=725 sync_decodes=0 prefetch_buffer=88
2026-03-11T14:29:34.266690Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="188.2" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:29:36.193228Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=845 total_skipped=0 cache_hits=0 prefetch_hits=845 sync_decodes=0 prefetch_buffer=88
2026-03-11T14:29:36.267546Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="186.6" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:29:38.210724Z  INFO orbit_editor::playback: Playback stats effective_fps="60.0" total_rendered=966 total_skipped=0 cache_hits=0 prefetch_hits=966 sync_decodes=0 prefetch_buffer=89
2026-03-11T14:29:38.280406Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="188.2" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:29:40.226708Z  INFO orbit_editor::playback: Playback stats effective_fps="60.0" total_rendered=1087 total_skipped=0 cache_hits=0 prefetch_hits=1087 sync_decodes=0 prefetch_buffer=86
2026-03-11T14:29:40.282226Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=58 mb_per_sec="180.4" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:29:42.244290Z  INFO orbit_editor::playback: Playback stats effective_fps="60.0" total_rendered=1208 total_skipped=0 cache_hits=0 prefetch_hits=1208 sync_decodes=0 prefetch_buffer=88
2026-03-11T14:29:42.321566Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="186.6" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:29:43.322481Z  WARN orbit_editor::editor_instance: preview task abort await failed: task 343 was cancelled
2026-03-11T14:29:43.322876Z TRACE orbit_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-11T14:29:43.332593Z ERROR orbit_rendering::decoder::avassetreader: Failed to reset decoder, marking as invalid requested_time=21.08333396911621 error=AssetReader::with_asset: The operation could not be completed
2026-03-11T14:29:43.332682Z  WARN orbit_rendering::decoder::avassetreader: No frames decoded from video - decoder iterator returned no frames decoder_idx=2 requested_frame=506 requested_time=21.08333396911621 was_reset=true cache_size=87 consecutive_empty=1 near_end=false
2026-03-11T14:29:43.332737Z  WARN orbit_rendering::decoder::avassetreader: No frames decoded from video - decoder iterator returned no frames decoder_idx=2 requested_frame=508 requested_time=21.16666603088379 was_reset=false cache_size=87 consecutive_empty=2 near_end=false
2026-03-11T14:29:43.406694Z ERROR orbit_desktop_lib::frame_ws: Failed to send frame to socket: Error { inner: Io(Os { code: 32, kind: BrokenPipe, message: "Broken pipe" }) }
2026-03-11T14:29:43.406745Z  INFO orbit_desktop_lib::frame_ws: Websocket closing after 24.29s
2026-03-11T14:29:45.606717Z TRACE recording: orbit_desktop_lib::panel_manager: Window handle validation failed: runtime error: failed to receive message from webview
2026-03-11T14:29:45.606840Z  WARN recording: orbit_desktop_lib::windows: InProgressRecording window handle invalid, destroying and recreating...
2026-03-11T14:29:46.636893Z ERROR recording: orbit_desktop_lib::windows: InProgressRecording window STILL in registry, cannot recreate
2026-03-11T14:29:49.645266Z DEBUG recording: orbit_desktop_lib::recording: spawning start_recording actor
2026-03-11T14:29:49.645649Z TRACE orbit_recording::feeds::camera: CameraFeed.Lock
2026-03-11T14:29:49.668913Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.Lock
2026-03-11T14:29:49.669395Z TRACE recording:studio_recording: orbit_recording::studio_recording: creating recording actor
2026-03-11T14:29:49.670347Z TRACE recording:studio_recording:segment{index=0}: orbit_recording::studio_recording: preparing segment pipeline 0
2026-03-11T14:29:49.670932Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Screen capture buffer size buffer_size=15
2026-03-11T14:29:49.671146Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: SCK content filter: Retained(ContentFilter(<SCContentFilter: 0x126f3e7a0>))
2026-03-11T14:29:49.671215Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: size: PhysicalSize { width: 2560.0, height: 1440.0 }
2026-03-11T14:29:49.671425Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Screen capture queue depth queue_depth=8 max_queue_depth=8
2026-03-11T14:29:49.671588Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Pixel buffer pool initialized min_count=20 width=2560 height=1440
2026-03-11T14:29:49.672798Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: orbit_recording::output_pipeline::core: Task started
2026-03-11T14:29:49.673485Z  INFO recording:studio_recording:segment{index=0}:screen-out: orbit_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display
2026-03-11T14:29:49.673492Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-11T14:29:49.673499Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-11T14:29:49.673606Z  INFO recording:studio_recording:segment{index=0}: orbit_recording::studio_recording: pipeline playing
2026-03-11T14:29:49.673699Z TRACE recording:studio_recording: orbit_recording::studio_recording: spawning recording actor
2026-03-11T14:29:49.724882Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 0 image to: "cursor_0.png"
2026-03-11T14:29:49.728665Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: M4S muxer encoder channel buffer size buffer_size=60
2026-03-11T14:29:49.729734Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Encoder pixel format configuration encoder=h264_videotoolbox input_format=NV12 output_format=NV12 needs_pixel_conversion=false external_conversion=false
2026-03-11T14:29:49.729780Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: No pixel format conversion needed (zero-copy path) encoder=h264_videotoolbox
2026-03-11T14:29:49.798651Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Selected hardware H264 encoder encoder=h264_videotoolbox width=2560 height=1440 fps=60.0
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/init.mp4' for writing
2026-03-11T14:29:49.798916Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: FFmpeg DASH muxer state after write_header() manifest_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd manifest_exists=true init_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/init.mp4 init_exists=true
2026-03-11T14:29:49.798964Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: Initialized segmented video encoder with FFmpeg DASH muxer (init.mp4 + m4s segments). CRITICAL: init.mp4 is required for segment playback/recovery. path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display segment_duration_secs=3 width=2560 height=1440
2026-03-11T14:29:49.807644Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: Started M4S fragmented video encoder path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/segment_001.m4s.tmp' for writing
2026-03-11T14:29:51.762936Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Capturing video baseline offset after warmup wall_clock_secs=2.092675083 camera_secs=2.027772875 baseline_offset_secs=-0.0649022079999999
2026-03-11T14:29:52.676265Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=1 duration_secs=3.0054695 frames=90
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/master.m3u8.tmp' for writing
[mp4 @ 0x136f55030] Packet duration: -113 / dts: 281018 is out of range
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/segment_002.m4s.tmp' for writing
2026-03-11T14:29:53.669422Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 1 image to: "cursor_1.png"
2026-03-11T14:29:54.727642Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=178 drops=0 drop_rate_pct="0.0%" total_frames=178
2026-03-11T14:29:56.018075Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=2 duration_secs=3.341740667 frames=119
2026-03-11T14:29:56.845936Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 2 image to: "cursor_2.png"
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[mp4 @ 0x136f55030] Packet duration: -37230 / dts: 716156 is out of range
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/segment_003.m4s.tmp' for writing
[mp4 @ 0x136f55030] Packet duration: -32847 / dts: 720539 is out of range
[mp4 @ 0x136f55030] pts has no value
[mp4 @ 0x136f55030] Packet duration: -10615 / dts: 742772 is out of range
[mp4 @ 0x136f55030] pts has no value
[mp4 @ 0x136f55030] Packet duration: -9138 / dts: 744250 is out of range
[mp4 @ 0x136f55030] pts has no value
[mp4 @ 0x136f55030] Packet duration: -4760 / dts: 748629 is out of range
[mp4 @ 0x136f55030] pts has no value
[mp4 @ 0x136f55030] Packet duration: -3293 / dts: 750097 is out of range
[mp4 @ 0x136f55030] pts has no value
[mp4 @ 0x136f55030] Packet duration: -1810 / dts: 751581 is out of range
[mp4 @ 0x136f55030] pts has no value
2026-03-11T14:29:59.021314Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=3 duration_secs=3.003141375 frames=37
2026-03-11T14:29:59.729163Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=81 drops=0 drop_rate_pct="0.0%" total_frames=259
2026-03-11T14:30:02.445302Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=4 duration_secs=3.424055083 frames=22
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[mp4 @ 0x136f55030] Packet duration: -12820 / dts: 1071080 is out of range
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/segment_004.m4s.tmp' for writing
[mp4 @ 0x136f55030] Packet duration: -11354 / dts: 1072546 is out of range
[mp4 @ 0x136f55030] pts has no value
2026-03-11T14:30:04.731038Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=24 drops=0 drop_rate_pct="0.0%" total_frames=283
2026-03-11T14:30:05.600088Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=5 duration_secs=3.154486125 frames=19
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/segment_005.m4s.tmp' for writing
2026-03-11T14:30:08.744342Z DEBUG orbit_enc_ffmpeg::mux::segmented_stream: Segment boundary reached (time-based) segment_index=6 duration_secs=3.143530083 frames=8
2026-03-11T14:30:09.736347Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Screen capture stats frames=14 drops=0 drop_rate_pct="0.0%" total_frames=297
2026-03-11T14:30:10.502748Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Video drift correction status frame_count=300 wall_clock_secs=20.832486 camera_secs=20.7707875 corrected_secs=20.832486 drift_ratio=1.0029704458725985 baseline_offset=-0.0649022079999999 total_pause_ms=0
2026-03-11T14:30:10.774155Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 3 image to: "cursor_3.png"
2026-03-11T14:30:11.398225Z  INFO orbit_recording::studio_recording: pipeline shuting down
2026-03-11T14:30:11.398333Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Capturer stopping after creating 306 video frames
2026-03-11T14:30:11.398336Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video cancelled, draining remaining frames from channel
2026-03-11T14:30:11.398416Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video finished after cancellation, total 306 frames
2026-03-11T14:30:11.398462Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-11T14:30:11.398492Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: M4S encoder timing summary (using SegmentedVideoEncoder) total_frames=306 slow_converts=0 slow_encodes=0 slow_convert_pct="0.0%" slow_encode_pct="0.0%"
2026-03-11T14:30:11.400648Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-11T14:30:11.402780Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-11T14:30:11.402914Z TRACE orbit_recording::output_pipeline::macos_fragmented_m4s: M4S encoder channel already closed during finish: sending on a closed channel
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[mp4 @ 0x136f55030] Packet duration: -42772 / dts: 1876370 is out of range
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/segment_006.m4s.tmp' for writing
[mp4 @ 0x136f55030] Packet duration: -20693 / dts: 1898449 is out of range
[mp4 @ 0x136f55030] pts has no value
[mp4 @ 0x136f55030] Packet duration: -17659 / dts: 1901484 is out of range
[mp4 @ 0x136f55030] pts has no value
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x126f4be70] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
2026-03-11T14:30:11.422950Z  INFO orbit_recording::studio_recording: pipeline shutdown
2026-03-11T14:30:11.423040Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: cursor recorder done
2026-03-11T14:30:11.425820Z  INFO recording: orbit_desktop_lib::recording: recording wait actor done: Ok(())
2026-03-11T14:30:11.426468Z  INFO stop_recording: orbit_desktop_lib::recording: Recording has fragments that need remuxing - opening editor immediately
2026-03-11T14:30:11.427258Z  INFO orbit_desktop_lib::frame_ws: WebSocket server listening on port 62779
2026-03-11T14:30:11.427305Z  INFO orbit_desktop_lib: Recording is being finalized, waiting for completion...
2026-03-11T14:30:11.484207Z  INFO orbit_desktop_lib::recording: Starting background finalization for recording
2026-03-11T14:30:11.486254Z  INFO orbit_recording::recovery: Found 1 recoverable segments in "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit" with estimated duration 0ns
2026-03-11T14:30:11.486399Z  INFO orbit_recording::recovery: Concatenating 6 M4S display segments with init to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display.mp4"
2026-03-11T14:30:11.531388Z  INFO orbit_recording::recovery: Validating recovered display video: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display.mp4"
2026-03-11T14:30:11.587382Z  INFO orbit_recording::recovery: Display video validation passed
2026-03-11T14:30:11.709437Z  INFO orbit_recording::recovery: Created project configuration with timeline for recovered recording
2026-03-11T14:30:11.709532Z  INFO orbit_recording::recovery: Successfully recovered recording at "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit"
2026-03-11T14:30:11.709599Z  INFO orbit_desktop_lib::recording: Successfully remuxed fragmented recording
2026-03-11T14:30:11.742039Z  INFO orbit_desktop_lib::recording: Background finalization completed for recording
2026-03-11T14:30:11.742133Z  INFO orbit_desktop_lib: Recording finalization completed
2026-03-11T14:30:11.742587Z DEBUG orbit_project::meta: Checking for captions at: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/captions.json"
2026-03-11T14:30:11.742619Z DEBUG orbit_project::meta: No captions.json found
[swscaler @ 0x368718000] No accelerated colorspace conversion found from yuv420p to rgb24.
2026-03-11T14:30:11.820970Z  INFO orbit_video_decode::avassetreader: Built keyframe index path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.29 PM.orbit/content/segments/segment-0/display.mp4 keyframe_count=26 fps=14.0844782299176 duration_secs=21.726044444444444 build_ms=37
2026-03-11T14:30:11.821076Z  INFO orbit_rendering::decoder::multi_position: Configured decoder pool for video duration duration_secs=21.726044444444444 optimal_pool_size=5 reposition_threshold=5.0
2026-03-11T14:30:11.885107Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=2.18987774848938 decoder_index=1
2026-03-11T14:30:11.915786Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=4.441877841949463 decoder_index=2
2026-03-11T14:30:11.941729Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=8.6000337600708 decoder_index=3
2026-03-11T14:30:11.965514Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=21.32379913330078 decoder_index=4
2026-03-11T14:30:11.965566Z  INFO orbit_rendering::decoder::avassetreader: Initialized multi-position decoder pool decoder_count=5 optimal_pool_size=5 reposition_threshold=5.0 fps=14 duration_secs=21.726044444444444 total_frames_estimate=305
2026-03-11T14:30:11.965648Z  INFO orbit_rendering::decoder: Video 'screen' using AVAssetReader (hardware) decoder (2560x1440)
2026-03-11T14:30:11.965706Z  INFO orbit_rendering::yuv_converter: Creating shared YUV converter pipelines (shader compilation)
2026-03-11T14:30:11.985535Z  INFO orbit_rendering::yuv_converter: Shared YUV converter pipelines created successfully
Pretty name: Orbit 2026-03-11 at 15.29.49
2026-03-11T14:30:12.013194Z  INFO orbit_desktop_lib::frame_ws: Socket connection established
2026-03-11T14:30:12.014318Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-11T14:30:12.022352Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-11T14:30:12.022591Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-11T14:30:12.167688Z  INFO orbit_rendering::yuv_converter: Reallocating YUV converter textures for larger video old_width=1920 old_height=1080 new_width=2560 new_height=1472
2026-03-11T14:30:12.269068Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=55 mb_per_sec="171.7" avg_kb="3021.7" dims="1248x702" format="NV12"
2026-03-11T14:30:32.377551Z  INFO orbit_rendering::frame_pipeline: Resizing render session textures old_width=1248 old_height=702 new_width=1920 new_height=1080
2026-03-11T14:30:32.492220Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=1 mb_per_sec="2.2" avg_kb="2160.4" dims="1920x1080" format="NV12"
2026-03-11T14:30:35.850946Z  INFO orbit_editor::playback: No audio segments found, skipping audio playback thread.
2026-03-11T14:30:35.864999Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=1 mb_per_sec="3.1" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:30:37.854448Z  INFO orbit_editor::playback: Playback stats effective_fps="60.4" total_rendered=121 total_skipped=0 cache_hits=0 prefetch_hits=121 sync_decodes=0 prefetch_buffer=88
2026-03-11T14:30:37.878602Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="188.2" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:30:39.855205Z  INFO orbit_editor::playback: Playback stats effective_fps="60.2" total_rendered=241 total_skipped=0 cache_hits=0 prefetch_hits=241 sync_decodes=0 prefetch_buffer=88
2026-03-11T14:30:39.883672Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="186.6" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:30:41.855344Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=361 total_skipped=0 cache_hits=0 prefetch_hits=361 sync_decodes=0 prefetch_buffer=89
2026-03-11T14:30:41.895213Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="188.2" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:30:43.855714Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=481 total_skipped=0 cache_hits=0 prefetch_hits=481 sync_decodes=0 prefetch_buffer=85
2026-03-11T14:30:43.904270Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=58 mb_per_sec="182.0" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:30:45.870457Z  INFO orbit_editor::playback: Playback stats effective_fps="60.1" total_rendered=602 total_skipped=0 cache_hits=0 prefetch_hits=602 sync_decodes=0 prefetch_buffer=89
2026-03-11T14:30:45.912342Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=60 mb_per_sec="188.2" avg_kb="3037.5" dims="1920x1080" format="NV12"
2026-03-11T14:30:47.634901Z  WARN orbit_editor::editor_instance: preview task abort await failed: task 1362 was cancelled
2026-03-11T14:30:47.634959Z TRACE orbit_recording::feeds::camera: CameraFeed.RemoveInput
2026-03-11T14:30:47.653234Z ERROR orbit_rendering::decoder::avassetreader: Failed to reset decoder, marking as invalid requested_time=13.214285850524902 error=AssetReader::with_asset: The operation could not be completed
2026-03-11T14:30:47.653308Z  WARN orbit_rendering::decoder::avassetreader: No frames decoded from video - decoder iterator returned no frames decoder_idx=0 requested_frame=185 requested_time=13.214285850524902 was_reset=true cache_size=84 consecutive_empty=1 near_end=false
2026-03-11T14:30:47.704853Z ERROR orbit_desktop_lib::frame_ws: Failed to send frame to socket: Error { inner: Io(Os { code: 54, kind: ConnectionReset, message: "Connection reset by peer" }) }
2026-03-11T14:30:47.704906Z  INFO orbit_desktop_lib::frame_ws: Websocket closing after 35.69s
2026-03-11T14:31:04.553700Z TRACE recording: orbit_desktop_lib::panel_manager: Window handle validation failed: runtime error: failed to receive message from webview
2026-03-11T14:31:04.553933Z  WARN recording: orbit_desktop_lib::windows: InProgressRecording window handle invalid, destroying and recreating...
2026-03-11T14:31:05.568645Z ERROR recording: orbit_desktop_lib::windows: InProgressRecording window STILL in registry, cannot recreate
2026-03-11T14:31:08.589861Z DEBUG recording: orbit_desktop_lib::recording: spawning start_recording actor
2026-03-11T14:31:08.590490Z TRACE orbit_recording::feeds::camera: CameraFeed.Lock
2026-03-11T14:31:08.629356Z TRACE orbit_recording::feeds::microphone: MicrophoneFeed.Lock
2026-03-11T14:31:08.629715Z TRACE recording:studio_recording: orbit_recording::studio_recording: creating recording actor
2026-03-11T14:31:08.632029Z TRACE recording:studio_recording:segment{index=0}: orbit_recording::studio_recording: preparing segment pipeline 0
2026-03-11T14:31:08.632139Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Screen capture buffer size buffer_size=15
2026-03-11T14:31:08.632277Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: SCK content filter: Retained(ContentFilter(<SCContentFilter: 0x31b627bc0>))
2026-03-11T14:31:08.632375Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: size: PhysicalSize { width: 2560.0, height: 1440.0 }
2026-03-11T14:31:08.632471Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Screen capture queue depth queue_depth=8 max_queue_depth=8
2026-03-11T14:31:08.632638Z DEBUG recording:studio_recording:segment{index=0}: orbit_recording::sources::screen_capture::macos: Pixel buffer pool initialized min_count=20 width=2560 height=1440
2026-03-11T14:31:08.633234Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: orbit_recording::output_pipeline::core: Task started
2026-03-11T14:31:08.633356Z  INFO recording:studio_recording:segment{index=0}:screen-out: orbit_recording::output_pipeline::core: Built pipeline for output /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display
2026-03-11T14:31:08.633386Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-11T14:31:08.633403Z TRACE recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task started
2026-03-11T14:31:08.633514Z  INFO recording:studio_recording:segment{index=0}: orbit_recording::studio_recording: pipeline playing
2026-03-11T14:31:08.633597Z TRACE recording:studio_recording: orbit_recording::studio_recording: spawning recording actor
2026-03-11T14:31:08.682430Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: Saved cursor 0 image to: "cursor_0.png"
2026-03-11T14:31:08.692760Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: M4S muxer encoder channel buffer size buffer_size=60
2026-03-11T14:31:08.693202Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Encoder pixel format configuration encoder=h264_videotoolbox input_format=NV12 output_format=NV12 needs_pixel_conversion=false external_conversion=false
2026-03-11T14:31:08.693293Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: No pixel format conversion needed (zero-copy path) encoder=h264_videotoolbox
2026-03-11T14:31:08.725820Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::video::h264: Selected hardware H264 encoder encoder=h264_videotoolbox width=2560 height=1440 fps=60.0
[dash @ 0x314418110] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display/init.mp4' for writing
2026-03-11T14:31:08.726102Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: FFmpeg DASH muxer state after write_header() manifest_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd manifest_exists=true init_path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display/init.mp4 init_exists=true
2026-03-11T14:31:08.726170Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_enc_ffmpeg::mux::segmented_stream: Initialized segmented video encoder with FFmpeg DASH muxer (init.mp4 + m4s segments). CRITICAL: init.mp4 is required for segment playback/recovery. path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display segment_duration_secs=3 width=2560 height=1440
2026-03-11T14:31:08.733379Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::macos_fragmented_m4s: Started M4S fragmented video encoder path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display
[dash @ 0x314418110] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display/segment_001.m4s.tmp' for writing
2026-03-11T14:31:10.775662Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Capturing video baseline offset after warmup wall_clock_secs=2.143723417 camera_secs=2.083327375 baseline_offset_secs=-0.06039604199999982
2026-03-11T14:31:11.053286Z  INFO orbit_recording::studio_recording: pipeline shuting down
2026-03-11T14:31:11.053386Z DEBUG recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::sources::screen_capture::macos: Capturer stopping after creating 58 video frames
2026-03-11T14:31:11.053393Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video cancelled, draining remaining frames from channel
2026-03-11T14:31:11.053451Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: mux-video finished after cancellation, total 58 frames
2026-03-11T14:31:11.053487Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="mux-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-11T14:31:11.053492Z DEBUG orbit_recording::output_pipeline::macos_fragmented_m4s: M4S encoder timing summary (using SegmentedVideoEncoder) total_frames=58 slow_converts=0 slow_encodes=0 slow_convert_pct="0.0%" slow_encode_pct="0.0%"
2026-03-11T14:31:11.055966Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="capture-video"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-11T14:31:11.056627Z  INFO recording:studio_recording:segment{index=0}:screen-out:{task="screen-capture-monitor"}: orbit_recording::output_pipeline::core: Task finished successfully
2026-03-11T14:31:11.056711Z TRACE orbit_recording::output_pipeline::macos_fragmented_m4s: M4S encoder channel already closed during finish: sending on a closed channel
[dash @ 0x314418110] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display/dash_manifest.mpd.tmp' for writing
[dash @ 0x314418110] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display/media_0.m3u8.tmp' for writing
[dash @ 0x314418110] Opening '/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display/master.m3u8.tmp' for writing
2026-03-11T14:31:11.061997Z  INFO orbit_enc_ffmpeg::mux::segmented_stream: Recovered orphaned segment /Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display/segment_001.m4s with 853226 bytes, estimated duration 2.424828459s
2026-03-11T14:31:11.072084Z  INFO orbit_recording::studio_recording: pipeline shutdown
2026-03-11T14:31:11.079472Z  INFO recording:studio_recording:segment{index=0}:cursor: orbit_recording::cursor: cursor recorder done
2026-03-11T14:31:11.080486Z  INFO recording: orbit_desktop_lib::recording: recording wait actor done: Ok(())
2026-03-11T14:31:11.080890Z  INFO stop_recording: orbit_desktop_lib::recording: Recording has fragments that need remuxing - opening editor immediately
2026-03-11T14:31:11.081681Z  INFO orbit_desktop_lib::frame_ws: WebSocket server listening on port 62866
2026-03-11T14:31:11.081721Z  INFO orbit_desktop_lib: Recording is being finalized, waiting for completion...
2026-03-11T14:31:11.135292Z  INFO orbit_desktop_lib::recording: Starting background finalization for recording
2026-03-11T14:31:11.135833Z  INFO orbit_recording::recovery: Found 1 recoverable segments in "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit" with estimated duration 0ns
2026-03-11T14:31:11.136074Z  INFO orbit_recording::recovery: Concatenating 1 M4S display segments with init to "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display.mp4"
2026-03-11T14:31:11.159136Z  INFO orbit_recording::recovery: Validating recovered display video: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display.mp4"
2026-03-11T14:31:11.209093Z  INFO orbit_recording::recovery: Display video validation passed
2026-03-11T14:31:11.258295Z  INFO orbit_recording::recovery: Created project configuration with timeline for recovered recording
2026-03-11T14:31:11.258417Z  INFO orbit_recording::recovery: Successfully recovered recording at "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit"
2026-03-11T14:31:11.258461Z  INFO orbit_desktop_lib::recording: Successfully remuxed fragmented recording
2026-03-11T14:31:11.288333Z  INFO orbit_desktop_lib::recording: Background finalization completed for recording
2026-03-11T14:31:11.288455Z  INFO orbit_desktop_lib: Recording finalization completed
2026-03-11T14:31:11.289177Z DEBUG orbit_project::meta: Checking for captions at: "/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/captions.json"
2026-03-11T14:31:11.289273Z DEBUG orbit_project::meta: No captions.json found
[swscaler @ 0x368c68000] No accelerated colorspace conversion found from yuv420p to rgb24.
2026-03-11T14:31:11.339654Z  INFO orbit_video_decode::avassetreader: Built keyframe index path=/Users/dives/Library/Application Support/so.orbit.desktop.dev/recordings/Q27G4ZR (Display) 2026-03-11 03.31 PM.orbit/content/segments/segment-0/display.mp4 keyframe_count=5 fps=24.187718940559375 duration_secs=2.397911111111111 build_ms=30
2026-03-11T14:31:11.340599Z  INFO orbit_rendering::decoder::multi_position: Configured decoder pool for video duration duration_secs=2.397911111111111 optimal_pool_size=5 reposition_threshold=5.0
2026-03-11T14:31:11.382253Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=0.1944444477558136 decoder_index=1
2026-03-11T14:31:11.403617Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=0.3888888955116272 decoder_index=2
2026-03-11T14:31:11.435853Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=0.5902777910232544 decoder_index=3
2026-03-11T14:31:11.473911Z  INFO orbit_rendering::decoder::avassetreader: Created additional decoder instance for multi-position pool position_secs=0.7916666865348816 decoder_index=4
2026-03-11T14:31:11.473957Z  INFO orbit_rendering::decoder::avassetreader: Initialized multi-position decoder pool decoder_count=5 optimal_pool_size=5 reposition_threshold=5.0 fps=24 duration_secs=2.397911111111111 total_frames_estimate=58
2026-03-11T14:31:11.474014Z  INFO orbit_rendering::decoder: Video 'screen' using AVAssetReader (hardware) decoder (2560x1440)
2026-03-11T14:31:11.474171Z  INFO orbit_rendering::yuv_converter: Creating shared YUV converter pipelines (shader compilation)
2026-03-11T14:31:11.481892Z  INFO orbit_rendering::yuv_converter: Shared YUV converter pipelines created successfully
Pretty name: Orbit 2026-03-11 at 15.31.08
2026-03-11T14:31:11.505178Z  INFO orbit_desktop_lib::frame_ws: Socket connection established
2026-03-11T14:31:11.509449Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-11T14:31:11.514784Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-11T14:31:11.515033Z  INFO orbit_rendering::yuv_converter: Initializing YUV converter textures (using shared pipelines) gpu_max_texture_size=8192
2026-03-11T14:31:11.655502Z  INFO orbit_rendering::yuv_converter: Reallocating YUV converter textures for larger video old_width=1920 old_height=1080 new_width=2560 new_height=1472
2026-03-11T14:31:11.767188Z  INFO orbit_desktop_lib::frame_ws: WS frame stats fps=62 mb_per_sec="193.5" avg_kb="3023.5" dims="1248x702" format="NV12"
