use serde::{Deserialize, Serialize};
use specta::Type;
use tauri::AppHandle;

use crate::web_api::AuthedApiError;

pub async fn upload_multipart_initiate(
    app: &AppHandle,
    video_id: &str,
) -> Result<String, AuthedApiError> {
    let _ = (app, video_id);
    Err(AuthedApiError::Other("Cloud features are disabled".into()))
}

pub async fn upload_multipart_presign_part(
    app: &AppHandle,
    video_id: &str,
    upload_id: &str,
    part_number: u32,
    md5_sum: Option<&str>,
) -> Result<String, AuthedApiError> {
    let _ = (app, video_id, upload_id, part_number, md5_sum);
    Err(AuthedApiError::Other("Cloud features are disabled".into()))
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct UploadedPart {
    pub part_number: u32,
    pub etag: String,
    pub size: usize,
    #[serde(skip)]
    pub total_size: u64,
}

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

pub async fn upload_multipart_complete(
    app: &AppHandle,
    video_id: &str,
    upload_id: &str,
    parts: &[UploadedPart],
    meta: Option<S3VideoMeta>,
) -> Result<Option<String>, AuthedApiError> {
    let _ = (app, video_id, upload_id, parts, meta);
    Err(AuthedApiError::Other("Cloud features are disabled".into()))
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "lowercase")]
pub enum PresignedS3PutRequestMethod {
    #[allow(unused)]
    Post,
    Put,
}

#[derive(Debug, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct PresignedS3PutRequest {
    pub video_id: String,
    pub subpath: String,
    pub method: PresignedS3PutRequestMethod,
    #[serde(flatten)]
    pub meta: Option<S3VideoMeta>,
}

pub async fn upload_signed(
    app: &AppHandle,
    body: PresignedS3PutRequest,
) -> Result<String, AuthedApiError> {
    let _ = (app, body);
    Err(AuthedApiError::Other("Cloud features are disabled".into()))
}

pub async fn desktop_video_progress(
    app: &AppHandle,
    video_id: &str,
    uploaded: u64,
    total: u64,
) -> Result<(), AuthedApiError> {
    let _ = (app, video_id, uploaded, total);
    Err(AuthedApiError::Other("Cloud features are disabled".into()))
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
