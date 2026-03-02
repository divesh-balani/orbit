use tauri::{Emitter, Manager, Runtime};
use thiserror::Error;

use crate::ArcLock;

#[derive(Error, Debug)]
pub enum AuthedApiError {
    #[error("User is not authenticated or credentials have expired!")]
    InvalidAuthentication,
    #[error("User needs to upgrade their account to use this feature!")]
    UpgradeRequired,
    #[error("AuthedApiError/AuthStore: {0}")]
    AuthStore(String),
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

    async fn make_app_url(&self, pathname: impl AsRef<str>) -> String;

    async fn is_server_url_custom(&self) -> bool;
}

impl<T: Manager<R> + Emitter<R>, R: Runtime> ManagerExt<R> for T {
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

    async fn make_app_url(&self, pathname: impl AsRef<str>) -> String {
        let app_state = self.state::<ArcLock<crate::App>>();
        let server_url = &app_state.read().await.server_url;
        format!("{}{}", server_url, pathname.as_ref())
    }

    async fn is_server_url_custom(&self) -> bool {
        let state = self.state::<ArcLock<crate::App>>();
        let app_state = state.read().await;

        if let Some(env_url) = std::option_env!("VITE_SERVER_URL") {
            return app_state.server_url != env_url;
        }

        false
    }
}
