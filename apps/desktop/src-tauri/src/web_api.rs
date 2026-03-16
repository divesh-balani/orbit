use std::time::Duration;

use tauri::{Manager, Runtime};
use thiserror::Error;

use crate::auth::{AuthSecret, AuthStore};

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
        let app = self.app_handle();
        let Some(auth) = AuthStore::get(&app)? else {
            return Err(AuthedApiError::Other("User not authenticated".into()));
        };

        let client = reqwest::Client::builder()
            .timeout(Duration::from_secs(30))
            .build()?;
        let url = {
            let state = app.state::<crate::ArcLock<crate::App>>();
            let state = state.read().await;
            build_api_url(&state.server_url, path.into())
        };

        let request = build(&client, url);
        let request = match auth.secret {
            AuthSecret::ApiKey { api_key } => request.bearer_auth(api_key),
            AuthSecret::Session { token, .. } => request.bearer_auth(token),
        };

        request.send().await.map_err(Into::into)
    }

    async fn api_request(
        &self,
        path: impl Into<String>,
        build: impl FnOnce(&reqwest::Client, String) -> reqwest::RequestBuilder,
    ) -> Result<reqwest::Response, reqwest::Error> {
        let app = self.app_handle();
        let client = reqwest::Client::builder()
            .timeout(Duration::from_secs(30))
            .build()?;
        let url = {
            let state = app.state::<crate::ArcLock<crate::App>>();
            let state = state.read().await;
            build_api_url(&state.server_url, path.into())
        };

        build(&client, url).send().await
    }
}

fn build_api_url(server_url: &str, path: String) -> String {
    if path.starts_with("http://") || path.starts_with("https://") {
        return path;
    }

    let normalized_server_url = server_url.trim_end_matches('/');
    let normalized_path = if path.starts_with('/') {
        path
    } else {
        format!("/{path}")
    };

    format!("{normalized_server_url}{normalized_path}")
}
