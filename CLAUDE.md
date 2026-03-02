# CLAUDE.md

This file provides comprehensive guidance to Claude Code when working with code in this repository.

## Project Overview

Orbit is a personal local-only desktop screen recorder, editor, and exporter — forked from the open-source Cap project. It's a Turborepo monorepo with a Tauri v2 desktop app (Rust + SolidStart). The web app at `apps/web` exists in the repo but is not used; the desktop app at `apps/desktop` is the sole product (macOS and Windows).

### Product Context
- **Core Purpose**: Local screen recording, editing, and exporting (no cloud)
- **Target Users**: Personal use
- **Key Features**: Studio mode recording, built-in editor, local export (file + clipboard), screenshots (local), captions (local Whisper)
- **What Was Removed**: All cloud upload/sharing, authentication/sign-in, instant recording mode, PostHog analytics, licensing/upgrade, server URL configuration, integrations, feedback, changelog

## File Location Patterns & Key Directories

### Core Applications
- `apps/web/` — Next.js web application (sharing, management, dashboard)
- `apps/desktop/` — Tauri desktop app (recording, editing)
- `apps/discord-bot/` — Discord integration bot
- `apps/storybook/` — UI component documentation

### Shared Packages
- `packages/database/` — Drizzle ORM, auth, email templates
- `packages/ui/` — React components for web app
- `packages/ui-solid/` — SolidJS components for desktop
- `packages/utils/` — Shared utilities, types, constants
- `packages/env/` — Environment variable validation
- `packages/web-*` — Effect-based web API layers

### Rust Crates
- `crates/media*/` — Video/audio processing pipeline
- `crates/recording/` — Core recording functionality
- `crates/rendering/` — Video rendering and effects
- `crates/camera*/` — Cross-platform camera handling
- `crates/scap-*/` — Screen capture implementations

### Important File Patterns
- `**/tauri.ts` — Auto-generated IPC bindings (DO NOT EDIT)
- `**/queries.ts` — Auto-generated query bindings (DO NOT EDIT)
- `apps/web/actions/**/*.ts` — Server Actions ("use server")
- `packages/database/schema.ts` — Database schema definitions
- `*.config.*` — Configuration files (Next.js, Tailwind, etc.)

## Key Commands

### Development
```bash
pnpm dev:web             # Start Next.js dev server (apps/web only)
pnpm run dev:desktop     # Start Tauri desktop dev (apps/desktop)
pnpm build               # Build all packages/apps via Turbo
pnpm lint                # Lint with Biome across the repo
pnpm format              # Format with Biome
pnpm typecheck           # TypeScript project references build
```

### Database Operations
```bash
pnpm db:generate         # Generate Drizzle migrations
pnpm db:push             # Push schema changes to MySQL
pnpm db:studio           # Open Drizzle Studio
pnpm --dir packages/database db:check  # Verify database schema
```

### App-Specific Commands
```bash
# Web app (apps/web)
cd apps/web && pnpm dev          # Start Next.js dev server

# Desktop (apps/desktop)
cd apps/desktop && pnpm dev      # Start SolidStart + Tauri dev
pnpm tauri:build                 # Build desktop app (release)
```

## Development Environment Guidelines

### Server Management
- Do not start additional development servers or localhost services unless explicitly asked. Assume the developer already has the environment running and focus on code changes.
- Prefer `pnpm dev:web` or `pnpm run dev:desktop` when you only need one app. Avoid starting multiple overlapping servers.
- Avoid running Docker or external services yourself unless requested; root workflows handle them as needed.
- **Database**: MySQL via Docker Compose; schema managed through Drizzle migrations
- **Storage**: All recordings stored locally on disk (cloud storage removed)

### Auto-generated Bindings (Desktop)
- **NEVER EDIT**: `tauri.ts`, `queries.ts` (auto-generated on app load)
- **NEVER EDIT**: Files under `apps/desktop/src-tauri/gen/`
- **Icons**: Auto-imported in desktop app; do not import manually
- **Regeneration**: These files update automatically when Rust types change

### Common Development Pain Points
- **Node Version**: Must use Node 20 (specified in package.json engines)
- **PNPM Version**: Locked to 10.5.2 for consistency
- **Turbo Cache**: May need clearing if builds behave unexpectedly (`rm -rf .turbo`)
- **Database Migrations**: Always run `pnpm db:generate` before `pnpm db:push`
- **Desktop Icons**: Use `unplugin-icons` auto-import instead of manual imports

## Architecture Overview

### Monorepo Structure
- `apps/web` — Next.js 14 (App Router) web application
- `apps/desktop` — Tauri v2 desktop app with SolidStart (SolidJS)
- `packages/database` — Drizzle ORM (MySQL) + auth utilities
- `packages/ui` — React UI components for the web
- `packages/ui-solid` — SolidJS UI components for desktop
- `packages/utils` — Shared utilities and types
- `packages/env` — Zod-validated build/server env modules
- `crates/*` — Rust crates for media, rendering, recording, camera, etc.

### Technology Stack
- **Package Manager**: pnpm (`pnpm@10.5.2`)
- **Build System**: Turborepo
- **Desktop**: Tauri v2, Rust 2024, SolidStart
- **Styling**: Tailwind CSS
- **Desktop State**: `@tanstack/solid-query`
- **Captions**: Local Whisper (whisper-rs) — requires ARM-native cmake on Apple Silicon

### Critical Architectural Decisions
1. **Local-Only**: No cloud services, no authentication, no uploads. All data stays on disk.
2. **Desktop IPC**: Use `tauri_specta` for strongly typed commands/events; do not modify generated bindings.
3. **Gutted Cloud Code**: Upload, auth, API, and analytics modules still exist in the codebase but are no-ops. The Tauri IPC bindings reference these types, so the modules must remain (returning errors or doing nothing) to avoid breaking the auto-generated bindings.

## Development Workflow & Best Practices

### Code Organization Principles
1. **Follow Local Patterns**: Study neighboring files and shared packages first
2. **Database Changes**: Always `pnpm db:generate` → `pnpm db:push` → test
3. **Strict Typing**: Use existing types; validate config via `@cap/env`
4. **Component Consistency**: Use `@cap/ui` (React) or `@cap/ui-solid` (Solid)
5. **No Manual Edits**: Never touch auto-generated bindings or schemas

### Key Implementation Patterns

#### Desktop IPC Commands
```typescript
import { events, commands } from "./tauri";

await commands.startRecording({ ... });

await events.recordingStateChanged.listen((event) => {
  setState(event.payload);
});
```

## Environment Variables

No cloud environment variables are needed. The desktop app runs fully locally.

## Testing & Build Optimization

### Testing Strategy
- **Package-Specific**: Check each `package.json` for test commands
- **Web App**: Uses Vitest for utilities, no comprehensive frontend tests yet
- **Desktop**: Vitest for SolidJS components in some packages
- **Tasks Service**: Jest for API endpoint testing
- **Rust**: Standard Cargo test framework for crates

### Build Performance
- **Turborepo Caching**: Aggressive caching across all packages
- **Cache Invalidation**: Prefer targeted `--filter` over global rebuilds
- **Docker Builds**: `NEXT_PUBLIC_DOCKER_BUILD=true` enables standalone output
- **Development**: Incremental builds via TypeScript project references

### Performance Monitoring
- **Desktop Memory**: Rust crates handle heavy media processing

## Troubleshooting Common Issues

### Build Failures
- **"Cannot find module"**: Check workspace dependencies in package.json
- **TypeScript errors**: Run `pnpm typecheck` to see project-wide issues
- **Turbo cache issues**: Clear with `rm -rf .turbo`
- **Node version mismatch**: Ensure Node 20 is active

### Desktop App Issues
- **IPC binding errors**: Restart dev server to regenerate `tauri.ts`
- **Rust compile errors**: Check Cargo.toml dependencies
- **Permission issues**: macOS/Windows may require app permissions
- **Recording failures**: Verify screen capture permissions

### macOS Build Issues
- **whisper-rs-sys AVX errors on Apple Silicon**: Ensure ARM-native cmake is used (`/opt/homebrew/bin/cmake`), not x86 cmake at `/usr/local/bin/cmake`. The x86 cmake causes `CMAKE_SYSTEM_PROCESSOR: x86_64` detection, enabling AVX/AVX2 instructions incompatible with ARM64. Fix: `brew install cmake` and ensure `/opt/homebrew/bin` is first in PATH.

## Desktop (Solid + Tauri) Patterns
- Data fetching: `@tanstack/solid-query` for local state.
- IPC: Call generated `commands` and `events` from `tauri_specta`. Listen directly to generated events and prefer the typed interfaces.
- Windowing/permissions are handled in Rust; keep UI logic in Solid and avoid mixing IPC with rendering logic.
- Recording flow: TargetSelectOverlay (screen chooser) → RecordingControls (timer/stop/pause) → Editor (on stop, all recording windows auto-hide)
- Window management: `CapWindowId` enum in `windows.rs`; `hide_recording_windows()` hides all recording-related windows when transitioning to editor.

## Conventions
- **CRITICAL: NO CODE COMMENTS**: Never add any form of comments to code. This includes:
  - Single-line comments: `//` (JavaScript/TypeScript/Rust), `#` (Python/Shell)
  - Multi-line comments: `/* */` (JavaScript/TypeScript), `/* */` (Rust)
  - Documentation comments: `///`, `//!` (Rust), `/** */` (JSDoc)
  - Any other comment syntax in any language
  - Code must be self-explanatory through naming, types, and structure. Use docs/READMEs for explanations when necessary.
- Directory naming: lower-case-dashed
- Components: PascalCase; hooks: camelCase starting with `use`
- Strict TypeScript; avoid `any`; leverage shared types
- Use Biome for linting/formatting; match existing formatting

## Rust Clippy Rules (Workspace Lints)
All Rust code must respect these workspace-level lints defined in `Cargo.toml`. Violating any of these will fail CI:

**Rust compiler lints:**
- `unused_must_use = "deny"` — Always handle `Result`/`Option` or types marked `#[must_use]`; never ignore them.

**Clippy lints (all denied — code MUST NOT contain these patterns):**
- `dbg_macro` — Never use `dbg!()` in code; use proper logging (`tracing::debug!`, etc.) instead.
- `let_underscore_future` — Never write `let _ = async_fn()` which silently drops futures; await or explicitly handle them.
- `unchecked_duration_subtraction` — Use `duration.saturating_sub(other)` instead of `duration - other` to avoid panics on underflow.
- `collapsible_if` — Merge nested `if` statements: write `if a && b { }` instead of `if a { if b { } }`.
- `clone_on_copy` — Don't call `.clone()` on `Copy` types (integers, bools, etc.); just copy them directly.
- `redundant_closure` — Use function references directly: `iter.map(foo)` instead of `iter.map(|x| foo(x))`.
- `ptr_arg` — Accept `&[T]` or `&str` instead of `&Vec<T>` or `&String` in function parameters for flexibility.
- `len_zero` — Use `.is_empty()` instead of `.len() == 0` or `.len() > 0` / `.len() != 0`.
- `let_unit_value` — Don't assign `()` to a variable: write `foo();` instead of `let _ = foo();` or `let x = foo();` when return is unit.
- `unnecessary_lazy_evaluations` — Use `.unwrap_or(val)` instead of `.unwrap_or_else(|| val)` when the default is a simple/cheap value.
- `needless_range_loop` — Use `for item in &collection` or `for (i, item) in collection.iter().enumerate()` instead of `for i in 0..collection.len()`.
- `manual_clamp` — Use `value.clamp(min, max)` instead of manual `if` chains or `.min(max).max(min)` patterns.

**Examples of violations to avoid:**

```rust
dbg!(value);
let _ = some_async_function();
let duration = duration_a - duration_b;
if condition {
    if other_condition {
        do_something();
    }
}
let x = 5.clone();
vec.iter().map(|x| process(x))
fn example(v: &Vec<i32>) { }
if vec.len() == 0 { }
let _ = returns_unit();
option.unwrap_or_else(|| 42)
for i in 0..vec.len() { println!("{}", vec[i]); }
value.min(max).max(min)
```

**Correct alternatives:**

```rust
tracing::debug!(?value);
some_async_function().await;
let duration = duration_a.saturating_sub(duration_b);
if condition && other_condition {
    do_something();
}
let x = 5;
vec.iter().map(process)
fn example(v: &[i32]) { }
if vec.is_empty() { }
returns_unit();
option.unwrap_or(42)
for item in &vec { println!("{}", item); }
value.clamp(min, max)
```

## Security & Privacy Considerations

### Data Handling
- **Video Storage**: Local filesystem only (no cloud uploads)
- **No Authentication**: Auth modules are gutted no-ops
- **No Analytics**: PostHog is a no-op
- **No Network Requests**: The app makes no outbound requests to cap.so or any external service

### Privacy Controls
- **Recording Permissions**: Platform-specific (macOS Screen Recording, Windows)
- **Data Retention**: User-controlled deletion of local recordings

### Media Processing Flow
```
Desktop Recording → Local Files → Editor → Local Export (file or clipboard)
```
Captions are generated locally via Whisper (whisper-rs).

## References & Documentation

### Core Technologies
- **TanStack Query**: https://tanstack.com/query/latest
- **React Patterns**: https://react.dev/learn/you-might-not-need-an-effect
- **Tauri v2**: https://github.com/tauri-apps/tauri
- **tauri_specta**: https://github.com/oscartbeaumont/tauri-specta
- **Drizzle ORM**: https://orm.drizzle.team/
- **SolidJS**: https://solidjs.com/

### Development Resources
- **Monorepo Guide**: Turborepo documentation
- **Media Processing**: FFmpeg documentation for Rust bindings

## Gutted Cloud Modules (No-Ops)

The following modules exist but are no-ops or return errors. They must remain because the auto-generated Tauri IPC bindings reference their types:

### Rust (apps/desktop/src-tauri/src/)
- `upload.rs` — All upload functions return errors
- `api.rs` — All API call functions return errors
- `web_api.rs` — `authed_api_request` returns error
- `auth.rs` — Auth store exists but is unused
- `posthog.rs` — Analytics capture is a no-op

### Frontend (apps/desktop/src/)
- `utils/analytics.ts` — `trackEvent` is a no-op
- `utils/auth.ts` — Exists but unused
- `utils/web-api.ts` — Exists but unused
- `components/SignInButton.tsx` — Exists but unused
- `routes/editor/ShareButton.tsx` — Exists but unused
- `routes/(window-chrome)/upgrade.tsx` — Renders empty
- `routes/(window-chrome)/settings/license.tsx` — Renders empty
- `routes/(window-chrome)/settings/feedback.tsx` — Renders empty
- `routes/(window-chrome)/settings/changelog.tsx` — Renders empty
- `routes/(window-chrome)/settings/integrations/index.tsx` — Renders empty

### Removed from UI
- Instant recording mode (only Studio + Screenshot remain)
- Sign-in button and auth prompts
- Upload/share buttons in editor and recordings list
- "Shareable Link" export option (only File + Clipboard remain)
- Settings pages: License, Integrations, Feedback, Changelog
- Pro/upgrade badges and links
- Server URL configuration

## Code Formatting

Always format code before completing work:
- **TypeScript/JavaScript**: Run `pnpm format` to format all code with Biome
- **Rust**: Run `cargo fmt` to format all Rust code with rustfmt

These commands should be run regularly during development and always at the end of a coding session to ensure consistent formatting across the codebase.
