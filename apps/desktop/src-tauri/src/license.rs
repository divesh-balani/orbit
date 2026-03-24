use serde::{Deserialize, Serialize};
use serde_json::json;
use specta::Type;
use tauri::{AppHandle, Runtime};
use tauri_plugin_store::StoreExt;

#[derive(Serialize, Deserialize, Type, Debug, Clone)]
#[serde(rename_all = "camelCase", tag = "type")]
pub enum LicenseStatus {
    Valid {
        name: String,
        expires_at: Option<String>,
    },
    Invalid {
        error: String,
    },
    NotSet,
}

#[derive(Serialize, Deserialize, Type, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct LicenseStore {
    pub key: Option<String>,
}

impl LicenseStore {
    pub fn get<R: Runtime>(app: &AppHandle<R>) -> Option<Self> {
        app.store("store")
            .ok()
            .and_then(|s| s.get("license"))
            .and_then(|v| serde_json::from_value(v).ok())
    }

    pub fn set<R: Runtime>(app: &AppHandle<R>, value: &Self) -> Result<(), String> {
        let store = app.store("store").map_err(|e| e.to_string())?;
        store.set("license", json!(value));
        store.save().map_err(|e| e.to_string())
    }

    pub async fn refresh(app: &AppHandle, server_url: &str) -> Result<LicenseStatus, String> {
        let current = Self::get(app).unwrap_or(LicenseStore { key: None });

        let key = match &current.key {
            Some(k) => k.clone(),
            None => return Ok(LicenseStatus::NotSet),
        };

        let url = format!("{}/api/licenses/validate", server_url.trim_end_matches('/'));
        let client = reqwest::Client::new();

        let network_result = client
            .post(&url)
            .json(&json!({ "key": key }))
            .timeout(std::time::Duration::from_secs(10))
            .send()
            .await;

        match network_result {
            Ok(resp) => {
                #[derive(Deserialize)]
                struct ValidateResponse {
                    valid: bool,
                    error: Option<String>,
                    name: Option<String>,
                    #[serde(rename = "expiresAt")]
                    expires_at: Option<String>,
                }

                let status = match resp.json::<ValidateResponse>().await {
                    Ok(r) if r.valid => LicenseStatus::Valid {
                        name: r.name.unwrap_or_default(),
                        expires_at: r.expires_at,
                    },
                    Ok(r) => LicenseStatus::Invalid {
                        error: r.error.unwrap_or("License is not valid".into()),
                    },
                    Err(e) => LicenseStatus::Invalid {
                        error: format!("Response parse error: {e}"),
                    },
                };

                Self::set(app, &LicenseStore { key: current.key })?;
                Ok(status)
            }
            Err(_) => Ok(LicenseStatus::Invalid {
                error: "Could not reach license server".into(),
            }),
        }
    }
}
