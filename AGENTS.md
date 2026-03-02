# Repository Guidelines

## Project Overview
Orbit is a personal local-only desktop screen recorder, editor, and exporter — forked from Cap. All cloud, auth, upload, sharing, analytics, and licensing features have been removed. Only studio recording, the editor, local export (file + clipboard), screenshots, and local Whisper captions remain.

## Project Structure & Modules
- Turborepo monorepo (desktop app is the sole product):
  - `apps/desktop` (Tauri v2 + SolidStart) — the main application.
  - `apps/web` (Next.js) — exists in repo but not used.
  - `packages/*` shared libs (e.g., `ui-solid`, `utils`).
  - `crates/*` Rust media/recording/rendering/camera crates.
  - `scripts/*` for tooling.

## Build, Test, Develop
- Install: `pnpm install`; setup: `pnpm env-setup` then `pnpm cap-setup`.
- Dev: `pnpm dev` (web+desktop). Desktop only: `pnpm dev:desktop`. Web only: `pnpm dev:web` or `cd apps/web && pnpm dev`.
- Build: `pnpm build` (Turbo). Desktop release: `pnpm tauri:build`.
- DB: `pnpm db:generate` → `pnpm db:push` → `pnpm db:studio`.
- Docker: `pnpm docker:up | docker:stop | docker:clean`.
- Quality: `pnpm lint`, `pnpm format`, `pnpm typecheck`. Rust: `cargo build -p <crate>`, `cargo test -p <crate>`.

## Coding Style & Naming
- TypeScript: 2‑space indent; Biome formats/lints (`pnpm format`).
- Rust: `rustfmt` + workspace clippy lints.
- Naming: files kebab‑case (`user-menu.tsx`); components PascalCase; Rust modules snake_case, crates kebab‑case.
- Runtime: Node 20, pnpm 10.x, Rust 1.88+, Docker for MySQL/MinIO.
- **NO COMMENTS**: Never add comments to code (`//`, `/* */`, `///`, `//!`, `#`, etc.). Code must be self-explanatory through naming, types, and structure. This applies to all languages (TypeScript, Rust, JavaScript, etc.).

## Rust Clippy Rules (Workspace Lints)
All Rust code must respect these workspace-level lints defined in `Cargo.toml`:

**Rust compiler lints:**
- `unused_must_use = "deny"` — Always handle `Result`/`Option` or types marked `#[must_use]`; never ignore them.

**Clippy lints (all denied):**
- `dbg_macro` — Never use `dbg!()` in code; use proper logging instead.
- `let_underscore_future` — Never write `let _ = async_fn()` which silently drops futures; await or explicitly handle them.
- `unchecked_duration_subtraction` — Use `saturating_sub` instead of `-` for `Duration` to avoid panics.
- `collapsible_if` — Merge nested `if` statements: use `if a && b { }` instead of `if a { if b { } }`.
- `clone_on_copy` — Don't call `.clone()` on `Copy` types; just copy them directly.
- `redundant_closure` — Use function references directly: `iter.map(foo)` instead of `iter.map(|x| foo(x))`.
- `ptr_arg` — Accept `&[T]` or `&str` instead of `&Vec<T>` or `&String` in function parameters.
- `len_zero` — Use `.is_empty()` instead of `.len() == 0` or `.len() > 0`.
- `let_unit_value` — Don't assign `()` to a variable: write `foo();` instead of `let _ = foo();` when return is unit.
- `unnecessary_lazy_evaluations` — Use `.unwrap_or(val)` instead of `.unwrap_or_else(|| val)` for cheap values.
- `needless_range_loop` — Use `for item in &collection` instead of `for i in 0..collection.len()` when index isn't needed.
- `manual_clamp` — Use `.clamp(min, max)` instead of manual `if` chains or `.min().max()` patterns.

## Testing
- TS/JS: Vitest where present (e.g., desktop). Name tests `*.test.ts(x)` near sources.
- Rust: `cargo test` per crate; tests in `src` or `tests`.
- Prefer unit tests for logic and light smoke tests for flows; no strict coverage yet.

## Commits & PRs
- Conventional style: `feat:`, `fix:`, `chore:`, `improve:`, `refactor:`, `docs:` (e.g., `fix: hide watermark for pro users`).
- PRs: clear description, linked issues, screenshots/GIFs for UI, env/migration notes. Keep scope tight and update docs when behavior changes.

## Local-Only Architecture
- No cloud services, no authentication, no uploads, no analytics. All data stays on disk.
- Upload, auth, API, and analytics Rust modules are no-ops/return errors but must remain because auto-generated Tauri IPC bindings reference their types.
- Frontend cloud components (ShareButton, SignInButton, upgrade page, etc.) exist but render empty or are unused.
- Only Studio + Screenshot recording modes (Instant mode removed).
- Export options: File and Clipboard only (no Shareable Link).
- Settings pages: General, Shortcuts, Recordings, Screenshots, Experimental only.
- macOS Apple Silicon: requires ARM-native cmake (`/opt/homebrew/bin/cmake`) for whisper-rs-sys builds.

## Agent‑Specific Practices (inspired by CLAUDE.md)
- Do not start extra servers; use `pnpm dev:desktop` for development.
- Never edit auto‑generated files: `**/tauri.ts`, `**/queries.ts`, `apps/desktop/src-tauri/gen/**`.
- Prefer existing scripts and Turbo filters over ad‑hoc commands; clear `.turbo` only when necessary.
- macOS note: desktop permissions (screen/mic) apply to the terminal running `pnpm dev:desktop`.
- **CRITICAL: NO CODE COMMENTS**: Never add any form of comments (`//`, `/* */`, `///`, `//!`, `#`, etc.) to generated or edited code. Code must be self-explanatory.

## Code Formatting
- Always format code before completing work: run `pnpm format` for TypeScript/JavaScript and `cargo fmt` for Rust.
- Run these commands regularly during development and always at the end of a coding session to ensure consistent formatting.
