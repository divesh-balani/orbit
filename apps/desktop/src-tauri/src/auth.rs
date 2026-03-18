use reqwest::StatusCode;
use serde::{Deserialize, Serialize};
use serde_json::json;
use specta::Type;
use tauri::{AppHandle, Runtime};
use tauri_plugin_store::StoreExt;

use web_api::ManagerExt;

use crate::{
    api::{self, Organization},
    web_api,
};

const DESKTOP_ACCESS_OFFLINE_LEASE_MS: i64 = 7 * 24 * 60 * 60 * 1000;

#[derive(Serialize, Deserialize, Type, Debug)]
pub struct AuthStore {
    pub secret: AuthSecret,
    pub user_id: Option<String>,
    pub plan: Option<Plan>,
    #[serde(default)]
    pub organizations: Vec<Organization>,
    #[serde(default)]
    pub desktop_access: Option<DesktopAccessSnapshot>,
}

#[derive(Serialize, Deserialize, Type, Debug)]
#[serde(untagged)]
pub enum AuthSecret {
    ApiKey { api_key: String },
    Session { token: String, expires: i32 },
}

#[derive(Serialize, Deserialize, Type, Debug)]
pub struct Plan {
    pub upgraded: bool,
    pub manual: bool,
    pub last_checked: i32,
}

#[derive(Serialize, Deserialize, Type, Debug, Clone, Copy, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub enum DesktopAccessStatus {
    Unauthenticated,
    Pending,
    Approved,
    Revoked,
    Expired,
}

#[derive(Serialize, Deserialize, Type, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct DesktopAccessSnapshot {
    pub status: DesktopAccessStatus,
    #[specta(type = Option<f64>)]
    pub checked_at: Option<i64>,
    #[specta(type = Option<f64>)]
    pub lease_expires_at: Option<i64>,
    #[specta(type = Option<f64>)]
    pub valid_until: Option<i64>,
    #[specta(type = Option<f64>)]
    pub approved_at: Option<i64>,
    #[specta(type = Option<f64>)]
    pub revoked_at: Option<i64>,
    #[serde(default)]
    pub offline: bool,
    pub error_message: Option<String>,
}

#[derive(Deserialize)]
#[serde(rename_all = "camelCase")]
struct DesktopAccessResponse {
    status: DesktopAccessStatus,
    valid_until: Option<i64>,
    approved_at: Option<i64>,
    revoked_at: Option<i64>,
    checked_at: i64,
    offline_lease_ms: Option<i64>,
}

impl DesktopAccessSnapshot {
    fn unauthenticated(now: i64) -> Self {
        Self {
            status: DesktopAccessStatus::Unauthenticated,
            checked_at: Some(now),
            lease_expires_at: None,
            valid_until: None,
            approved_at: None,
            revoked_at: None,
            offline: false,
            error_message: None,
        }
    }

    fn with_error(mut self, error_message: impl Into<String>, offline: bool) -> Self {
        self.error_message = Some(error_message.into());
        self.offline = offline;
        self
    }
}

impl AuthStore {
    pub fn load<R: Runtime>(app: &AppHandle<R>) -> Result<Option<Self>, String> {
        let Some(store) = app
            .store("store")
            .map(|s| s.get("auth"))
            .map_err(|e| e.to_string())?
        else {
            return Ok(None);
        };

        serde_json::from_value(store).map_err(|e| e.to_string())
    }

    pub fn get<R: Runtime>(app: &AppHandle<R>) -> Result<Option<Self>, String> {
        let Ok(Some(store)) = app.store("store").map(|s| s.get("auth")) else {
            return Ok(None);
        };

        serde_json::from_value(store).map_err(|e| e.to_string())
    }

    pub async fn update_auth_plan(app: &AppHandle) -> Result<(), String> {
        let auth = Self::get(app)?;
        let Some(auth) = auth else {
            return Err("User not authenticated".to_string());
        };

        if let Some(plan) = &auth.plan
            && plan.manual
        {
            return Ok(());
        }

        let mut auth = auth;
        println!(
            "Fetching plan for user {}",
            auth.user_id.as_deref().unwrap_or("unknown")
        );
        let response = app
            .authed_api_request("/api/desktop/plan", |client, url| client.get(url))
            .await
            .map_err(|e| {
                println!("Failed to fetch plan: {e}");
                e.to_string()
            })?;
        println!("Plan fetch response status: {}", response.status());

        if !response.status().is_success() {
            let error_msg = format!("Failed to fetch plan: {}", response.status());
            return Err(error_msg);
        }

        #[derive(Deserialize)]
        struct Response {
            upgraded: bool,
        }

        let plan_response: Response = response.json().await.map_err(|e| e.to_string())?;

        auth.plan = Some(Plan {
            upgraded: plan_response.upgraded,
            last_checked: chrono::Utc::now().timestamp() as i32,
            manual: auth.plan.as_ref().is_some_and(|p| p.manual),
        });
        auth.organizations = api::fetch_organizations(app)
            .await
            .map_err(|e| e.to_string())?;

        Self::set(app, Some(auth))?;

        Ok(())
    }

    pub async fn refresh_desktop_access(app: &AppHandle) -> Result<DesktopAccessSnapshot, String> {
        let now = chrono::Utc::now().timestamp_millis();
        let Some(mut auth) = Self::get(app)? else {
            return Ok(DesktopAccessSnapshot::unauthenticated(now));
        };

        let cached_access = auth.desktop_access.clone();
        let response = app
            .authed_api_request("/api/desktop/access", |client, url| client.get(url))
            .await;

        match response {
            Ok(response) => {
                if response.status() == StatusCode::UNAUTHORIZED {
                    Self::set(app, None)?;
                    return Ok(DesktopAccessSnapshot::unauthenticated(now));
                }

                if !response.status().is_success() {
                    let error_message =
                        format!("Failed to refresh desktop access: {}", response.status());

                    if let Some(snapshot) = cached_access {
                        let snapshot = snapshot.with_error(error_message, false);
                        auth.desktop_access = Some(snapshot.clone());
                        Self::set(app, Some(auth))?;
                        return Ok(snapshot);
                    }

                    return Err(error_message);
                }

                let response: DesktopAccessResponse =
                    response.json().await.map_err(|e| e.to_string())?;
                let lease_expires_at = if response.status == DesktopAccessStatus::Approved {
                    Some(
                        response.checked_at.saturating_add(
                            response
                                .offline_lease_ms
                                .unwrap_or(DESKTOP_ACCESS_OFFLINE_LEASE_MS),
                        ),
                    )
                } else {
                    None
                };

                let snapshot = DesktopAccessSnapshot {
                    status: response.status,
                    checked_at: Some(response.checked_at),
                    lease_expires_at,
                    valid_until: response.valid_until,
                    approved_at: response.approved_at,
                    revoked_at: response.revoked_at,
                    offline: false,
                    error_message: None,
                };

                auth.desktop_access = Some(snapshot.clone());
                Self::set(app, Some(auth))?;

                if snapshot.status == DesktopAccessStatus::Approved {
                    Self::update_auth_plan(app).await.ok();
                }

                Ok(snapshot)
            }
            Err(err) => {
                let error_message = err.to_string();

                if let Some(snapshot) = cached_access {
                    if snapshot.status == DesktopAccessStatus::Approved
                        && snapshot
                            .lease_expires_at
                            .is_some_and(|lease_expires_at| lease_expires_at > now)
                    {
                        let snapshot = snapshot.with_error(error_message, true);
                        auth.desktop_access = Some(snapshot.clone());
                        Self::set(app, Some(auth))?;
                        return Ok(snapshot);
                    }

                    let snapshot = if snapshot.status == DesktopAccessStatus::Approved {
                        DesktopAccessSnapshot {
                            status: DesktopAccessStatus::Expired,
                            checked_at: snapshot.checked_at,
                            lease_expires_at: snapshot.lease_expires_at,
                            valid_until: snapshot.valid_until,
                            approved_at: snapshot.approved_at,
                            revoked_at: snapshot.revoked_at,
                            offline: false,
                            error_message: Some(error_message),
                        }
                    } else {
                        snapshot.with_error(error_message, false)
                    };

                    auth.desktop_access = Some(snapshot.clone());
                    Self::set(app, Some(auth))?;
                    return Ok(snapshot);
                }

                Err(error_message)
            }
        }
    }

    pub fn is_upgraded(&self) -> bool {
        match &self.plan {
            Some(plan) => plan.upgraded || plan.manual,
            None => false,
        }
    }

    pub fn set(app: &AppHandle, value: Option<Self>) -> Result<(), String> {
        let Ok(store) = app.store("store") else {
            return Err("Store not found".to_string());
        };

        store.set("auth", json!(value));
        store.save().map_err(|e| e.to_string())
    }
}
