use orbit_recording::{
    RecordingMode, feeds::camera::DeviceOrModelID, sources::screen_capture::ScreenCaptureTarget,
};
use serde::{Deserialize, Serialize};
use std::path::{Path, PathBuf};
use tauri::{AppHandle, Manager, Url};
use tracing::trace;

use crate::{
    App, ArcLock,
    auth::{AuthSecret, AuthStore},
    recording::StartRecordingInputs,
    windows::ShowCapWindow,
};

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum CaptureMode {
    Screen(String),
    Window(String),
}

#[derive(Debug, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub enum DeepLinkAction {
    StartRecording {
        capture_mode: CaptureMode,
        camera: Option<DeviceOrModelID>,
        mic_label: Option<String>,
        capture_system_audio: bool,
        mode: RecordingMode,
    },
    StopRecording,
    OpenEditor {
        project_path: PathBuf,
    },
    OpenSettings {
        page: Option<String>,
    },
}

pub enum ActionParseFromUrlError {
    ParseFailed(String),
    Invalid,
    NotAction,
}

#[derive(Debug)]
pub struct DeepLinkSignIn {
    secret: AuthSecret,
    user_id: Option<String>,
}

impl TryFrom<&Url> for DeepLinkAction {
    type Error = ActionParseFromUrlError;

    fn try_from(url: &Url) -> Result<Self, Self::Error> {
        #[cfg(target_os = "macos")]
        if url.scheme() == "file" {
            return Ok(Self::OpenEditor {
                project_path: url.to_file_path().unwrap(),
            });
        }

        match url.domain().or_else(|| url.host_str()) {
            Some(v) if v != "action" => Err(ActionParseFromUrlError::NotAction),
            _ => Err(ActionParseFromUrlError::Invalid),
        }?;

        let params = url
            .query_pairs()
            .collect::<std::collections::HashMap<_, _>>();
        let json_value = params
            .get("value")
            .ok_or(ActionParseFromUrlError::Invalid)?;
        let action: Self = serde_json::from_str(json_value)
            .map_err(|e| ActionParseFromUrlError::ParseFailed(e.to_string()))?;
        Ok(action)
    }
}

impl TryFrom<&Url> for DeepLinkSignIn {
    type Error = ActionParseFromUrlError;

    fn try_from(url: &Url) -> Result<Self, Self::Error> {
        if !matches!(url.domain().or_else(|| url.host_str()), Some("signin")) {
            return Err(ActionParseFromUrlError::NotAction);
        }

        let params = url
            .query_pairs()
            .collect::<std::collections::HashMap<_, _>>();
        let user_id = params.get("user_id").map(|value| value.to_string());

        if let Some(api_key) = params.get("api_key") {
            return Ok(Self {
                secret: AuthSecret::ApiKey {
                    api_key: api_key.to_string(),
                },
                user_id,
            });
        }

        if let Some(token) = params.get("token") {
            let expires = params
                .get("expires")
                .ok_or(ActionParseFromUrlError::Invalid)?
                .parse::<i32>()
                .map_err(|e| ActionParseFromUrlError::ParseFailed(e.to_string()))?;

            return Ok(Self {
                secret: AuthSecret::Session {
                    token: token.to_string(),
                    expires,
                },
                user_id,
            });
        }

        Err(ActionParseFromUrlError::Invalid)
    }
}

impl DeepLinkAction {
    pub async fn execute(self, app: &AppHandle) -> Result<(), String> {
        match self {
            DeepLinkAction::StartRecording {
                capture_mode,
                camera,
                mic_label,
                capture_system_audio,
                mode,
            } => {
                let state = app.state::<ArcLock<App>>();

                crate::set_camera_input(app.clone(), state.clone(), camera, None).await?;
                crate::set_mic_input(state.clone(), mic_label).await?;

                let capture_target: ScreenCaptureTarget = match capture_mode {
                    CaptureMode::Screen(name) => orbit_recording::screen_capture::list_displays()
                        .into_iter()
                        .find(|(s, _)| s.name == name)
                        .map(|(s, _)| ScreenCaptureTarget::Display { id: s.id })
                        .ok_or(format!("No screen with name \"{}\"", &name))?,
                    CaptureMode::Window(name) => orbit_recording::screen_capture::list_windows()
                        .into_iter()
                        .find(|(w, _)| w.name == name)
                        .map(|(w, _)| ScreenCaptureTarget::Window { id: w.id })
                        .ok_or(format!("No window with name \"{}\"", &name))?,
                };

                let inputs = StartRecordingInputs {
                    mode,
                    capture_target,
                    capture_system_audio,
                    organization_id: None,
                };

                crate::recording::start_recording(app.clone(), state, inputs)
                    .await
                    .map(|_| ())
            }
            DeepLinkAction::StopRecording => {
                crate::recording::stop_recording(app.clone(), app.state()).await
            }
            DeepLinkAction::OpenEditor { project_path } => {
                crate::open_project_from_path(Path::new(&project_path), app.clone())
            }
            DeepLinkAction::OpenSettings { page } => {
                crate::show_window(app.clone(), ShowCapWindow::Settings { page }).await
            }
        }
    }
}

impl DeepLinkSignIn {
    async fn execute(self, app: &AppHandle) -> Result<(), String> {
        AuthStore::set(
            app,
            Some(AuthStore {
                secret: self.secret,
                user_id: self.user_id,
                plan: None,
                organizations: Vec::new(),
                desktop_access: None,
            }),
        )?;

        ShowCapWindow::Main {
            init_target_mode: None,
        }
        .show(app)
        .await
        .map(|_| ())
        .map_err(|e| e.to_string())
    }
}

pub fn handle(app_handle: &AppHandle, urls: Vec<Url>) {
    trace!("Handling deep actions for: {:?}", &urls);

    let mut actions = Vec::new();
    let mut sign_ins = Vec::new();

    for url in urls.into_iter().filter(|url| !url.as_str().is_empty()) {
        if let Ok(sign_in) = DeepLinkSignIn::try_from(&url) {
            sign_ins.push(sign_in);
            continue;
        }

        match DeepLinkAction::try_from(&url) {
            Ok(action) => actions.push(action),
            Err(error) => match error {
                ActionParseFromUrlError::ParseFailed(msg) => {
                    eprintln!("Failed to parse deep link \"{}\": {}", &url, msg)
                }
                ActionParseFromUrlError::Invalid => {
                    eprintln!("Invalid deep link format \"{}\"", &url)
                }
                ActionParseFromUrlError::NotAction => {}
            },
        }
    }

    if actions.is_empty() && sign_ins.is_empty() {
        return;
    }

    let app_handle = app_handle.clone();
    tauri::async_runtime::spawn(async move {
        for sign_in in sign_ins {
            if let Err(e) = sign_in.execute(&app_handle).await {
                eprintln!("Failed to handle sign-in deep link: {e}");
            }
        }

        for action in actions {
            if let Err(e) = action.execute(&app_handle).await {
                eprintln!("Failed to handle deep link action: {e}");
            }
        }
    });
}
