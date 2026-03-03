use serde::{Deserialize, Serialize};
use specta::Type;
use tauri::AppHandle;

use crate::web_api::AuthedApiError;

#[derive(Serialize, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct S3VideoMeta {
    #[serde(rename = "durationInSecs")]
    pub duration_in_secs: f64,
    pub width: u32,
    pub height: u32,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub fps: Option<f32>,
}

#[derive(Serialize, Deserialize, Type, Debug, Clone)]
#[serde(rename_all = "camelCase")]
pub struct Organization {
    pub id: String,
    pub name: String,
    pub owner_id: String,
}

pub async fn fetch_organizations(app: &AppHandle) -> Result<Vec<Organization>, AuthedApiError> {
    let _ = app;
    Err(AuthedApiError::Other("Cloud features are disabled".into()))
}
