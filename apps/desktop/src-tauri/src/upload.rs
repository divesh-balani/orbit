use crate::{UploadProgress, api::S3VideoMeta, web_api::AuthedApiError};
use cap_project::{S3UploadMeta, VideoUploadInfo};
use flume::Receiver;
use serde::Serialize;
use specta::Type;
use std::path::{Path, PathBuf};
use tauri::{AppHandle, ipc::Channel};

pub struct UploadedItem {
    pub link: String,
    pub id: String,
}

#[derive(Clone, Serialize, Type, tauri_specta::Event)]
pub struct UploadProgressEvent {
    video_id: String,
    uploaded: String,
    total: String,
}

pub async fn upload_video(
    _app: &AppHandle,
    _video_id: String,
    _file_path: PathBuf,
    _screenshot_path: PathBuf,
    _meta: S3VideoMeta,
    _channel: Option<Channel<UploadProgress>>,
) -> Result<UploadedItem, AuthedApiError> {
    Err(AuthedApiError::Other(
        "Uploads are disabled in local-only mode".into(),
    ))
}

pub async fn upload_image(
    _app: &AppHandle,
    _file_path: PathBuf,
) -> Result<UploadedItem, AuthedApiError> {
    Err(AuthedApiError::Other(
        "Uploads are disabled in local-only mode".into(),
    ))
}

pub async fn create_or_get_video(
    _app: &AppHandle,
    _is_screenshot: bool,
    _video_id: Option<String>,
    _name: Option<String>,
    _meta: Option<S3VideoMeta>,
    _organization_id: Option<String>,
) -> Result<S3UploadMeta, AuthedApiError> {
    Err(AuthedApiError::Other(
        "Uploads are disabled in local-only mode".into(),
    ))
}

pub fn build_video_meta(_path: &PathBuf) -> Result<S3VideoMeta, String> {
    Err("Uploads are disabled in local-only mode".into())
}

pub fn try_repair_corrupt_mp4(_path: &Path) -> Result<(), String> {
    Err("Uploads are disabled in local-only mode".into())
}

pub async fn compress_image(_path: PathBuf) -> Result<Vec<u8>, String> {
    Err("Uploads are disabled in local-only mode".into())
}

pub struct InstantMultipartUpload {
    pub handle: tokio::task::JoinHandle<Result<(), AuthedApiError>>,
}

impl InstantMultipartUpload {
    pub fn spawn(
        _app: AppHandle,
        _file_path: PathBuf,
        _pre_created_video: VideoUploadInfo,
        _recording_dir: PathBuf,
        _realtime_upload_done: Option<Receiver<()>>,
    ) -> Self {
        Self {
            handle: tokio::spawn(async {
                Err(AuthedApiError::Other(
                    "Uploads are disabled in local-only mode".into(),
                ))
            }),
        }
    }

    pub async fn run(
        _app: AppHandle,
        _file_path: PathBuf,
        _pre_created_video: VideoUploadInfo,
        _recording_dir: PathBuf,
        _realtime_video_done: Option<Receiver<()>>,
    ) -> Result<Option<S3VideoMeta>, AuthedApiError> {
        Err(AuthedApiError::Other(
            "Uploads are disabled in local-only mode".into(),
        ))
    }
}

pub async fn singlepart_uploader(
    _app: AppHandle,
    _request: crate::api::PresignedS3PutRequest,
    _total_size: u64,
    _stream: impl futures::Stream<Item = std::io::Result<bytes::Bytes>> + Send + 'static,
) -> Result<(), AuthedApiError> {
    Err(AuthedApiError::Other(
        "Uploads are disabled in local-only mode".into(),
    ))
}

pub fn emit_upload_complete(_app: &AppHandle, _video_id: &str) {}
