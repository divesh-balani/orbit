use tauri::{Manager, Runtime};
use thiserror::Error;

#[derive(Error, Debug)]
pub enum AuthedApiError {
    #[error("AuthedApiError/Request: {0}")]
    Request(reqwest::Error),
    #[error("AuthedApiError/Deserialization: {0}")]
    Deserialization(#[from] serde_json::Error),
    #[error("The request has timed out")]
    Timeout,
    #[error("AuthedApiError/Other: {0}")]
    Other(String),
}

impl From<reqwest::Error> for AuthedApiError {
    fn from(err: reqwest::Error) -> Self {
        match err {
            err if err.is_timeout() => AuthedApiError::Timeout,
            err => AuthedApiError::Request(err),
        }
    }
}

impl From<&'static str> for AuthedApiError {
    fn from(value: &'static str) -> Self {
        AuthedApiError::Other(value.into())
    }
}

impl From<String> for AuthedApiError {
    fn from(value: String) -> Self {
        AuthedApiError::Other(value)
    }
}

pub trait ManagerExt<R: Runtime>: Manager<R> {
    async fn authed_api_request(
        &self,
        path: impl Into<String>,
        build: impl FnOnce(&reqwest::Client, String) -> reqwest::RequestBuilder,
    ) -> Result<reqwest::Response, AuthedApiError>;

    async fn api_request(
        &self,
        path: impl Into<String>,
        build: impl FnOnce(&reqwest::Client, String) -> reqwest::RequestBuilder,
    ) -> Result<reqwest::Response, reqwest::Error>;
}

impl<T: Manager<R>, R: Runtime> ManagerExt<R> for T {
    async fn authed_api_request(
        &self,
        path: impl Into<String>,
        build: impl FnOnce(&reqwest::Client, String) -> reqwest::RequestBuilder,
    ) -> Result<reqwest::Response, AuthedApiError> {
        let _ = (path.into(), build);
        Err(AuthedApiError::Other("Cloud features are disabled".into()))
    }

    async fn api_request(
        &self,
        path: impl Into<String>,
        build: impl FnOnce(&reqwest::Client, String) -> reqwest::RequestBuilder,
    ) -> Result<reqwest::Response, reqwest::Error> {
        let _ = (path.into(), build);
        panic!("Cloud features are disabled")
    }
}
