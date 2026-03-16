import { Button } from "@orbit/ui-solid";
import { invoke } from "@tauri-apps/api/core";
import { getCurrentWindow } from "@tauri-apps/api/window";
import * as shell from "@tauri-apps/plugin-shell";
import { createSignal, type JSX, onCleanup, onMount, Show } from "solid-js";
import { authStore, generalSettingsStore } from "~/store";
import type {
	DesktopAccessSnapshot,
	AuthStore as DesktopAuthStore,
} from "~/utils/auth-types";
import { clientEnv } from "~/utils/env";
import IconOrbitLogoFull from "~icons/orbit/logo-full";
import IconOrbitLogoFullDark from "~icons/orbit/logo-full-dark";
import { WindowChromeHeader } from "../Context";

function authKey(auth?: DesktopAuthStore | null) {
	if (!auth) return "";
	if ("api_key" in auth.secret)
		return `${auth.user_id ?? ""}:${auth.secret.api_key}`;
	return `${auth.user_id ?? ""}:${auth.secret.token}`;
}

function formatUtc(value?: number | null) {
	if (!value) return null;

	return `${new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "2-digit",
		timeZone: "UTC",
		hour12: true,
	}).format(new Date(value))} UTC`;
}

async function refreshDesktopAccess() {
	return invoke<DesktopAccessSnapshot>("refresh_desktop_access");
}

export default function AccessGate(props: { children: JSX.Element }) {
	const [access, setAccess] = createSignal<DesktopAccessSnapshot | null>(null);
	const [isLoading, setIsLoading] = createSignal(true);
	const [errorMessage, setErrorMessage] = createSignal<string | null>(null);

	const refresh = async () => {
		setIsLoading(true);
		try {
			const nextAccess = await refreshDesktopAccess();
			setAccess(nextAccess);
			setErrorMessage(nextAccess.errorMessage ?? null);
		} catch (error) {
			setErrorMessage(
				error instanceof Error
					? error.message
					: "Failed to refresh desktop access",
			);
		} finally {
			setIsLoading(false);
		}
	};

	onMount(async () => {
		let disposed = false;
		let unlisten: (() => void) | undefined;
		const intervalId = window.setInterval(
			() => {
				void refresh();
			},
			5 * 60 * 1000,
		);

		onCleanup(() => {
			disposed = true;
			unlisten?.();
			window.clearInterval(intervalId);
		});

		const initialAuth = await authStore.get();
		let previousAuthKey = authKey(initialAuth);
		if (!disposed) {
			await refresh();
		}

		if (disposed) return;

		unlisten = await authStore.listen((nextAuth) => {
			const nextAuthKey = authKey(nextAuth);
			if (nextAuthKey === previousAuthKey) return;
			previousAuthKey = nextAuthKey;
			void refresh();
		});
	});

	const openSignIn = async () => {
		const settings = await generalSettingsStore.get();
		const serverUrl = settings?.serverUrl || clientEnv.VITE_SERVER_URL;
		await shell.open(
			`${serverUrl}/api/desktop/session/request?platform=desktop&type=api_key`,
		);
	};

	const signOut = async () => {
		await authStore.set(undefined);
		setAccess(null);
		setErrorMessage(null);
	};

	const status = () => access()?.status ?? "unauthenticated";

	if (status() === "approved") {
		return props.children;
	}

	return (
		<div class="flex h-full flex-col bg-[--background] text-[--text-primary]">
			<WindowChromeHeader hideMaximize>
				<div class="flex w-full justify-end px-3 pt-2" data-tauri-drag-region>
					<button
						type="button"
						onClick={() => getCurrentWindow().hide()}
						class="rounded-full px-2 py-1 text-xs text-gray-10 transition-colors hover:bg-gray-3 hover:text-gray-12"
					>
						Hide
					</button>
				</div>
			</WindowChromeHeader>
			<div class="flex flex-1 items-center justify-center px-5 pb-6">
				<div class="w-full max-w-[420px] rounded-[28px] border border-gray-3 bg-gray-1 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
					<div class="mb-6 flex items-center justify-center">
						<div class="*:h-auto *:w-[108px] text-[--text-primary]">
							<IconOrbitLogoFullDark class="hidden dark:block" />
							<IconOrbitLogoFull class="block dark:hidden" />
						</div>
					</div>
					<div class="space-y-2 text-center">
						<h1 class="text-xl font-semibold text-gray-12">
							{status() === "pending"
								? "Waiting for approval"
								: status() === "revoked"
									? "Access revoked"
									: status() === "expired"
										? "Access expired"
										: "Sign in to continue"}
						</h1>
						<p class="text-sm leading-6 text-gray-10">
							{status() === "pending"
								? "Your account exists, but desktop access has not been approved yet."
								: status() === "revoked"
									? "Your desktop access has been revoked. Contact the admin if you need it restored."
									: status() === "expired"
										? "Your desktop access expired. Recheck after your admin extends it."
										: "Use your approved Orbit account to unlock the desktop app."}
						</p>
					</div>
					<Show when={access()?.validUntil}>
						{(value) => (
							<p class="mt-4 rounded-2xl bg-gray-2 px-4 py-3 text-center text-xs text-gray-10">
								Access window ends {formatUtc(value())}
							</p>
						)}
					</Show>
					<Show when={errorMessage()}>
						{(message) => (
							<p class="mt-4 rounded-2xl bg-rose-50 px-4 py-3 text-center text-xs text-rose-700">
								{message()}
							</p>
						)}
					</Show>
					<div class="mt-6 flex flex-col gap-3">
						<Show
							when={status() === "unauthenticated"}
							fallback={
								<>
									<Button
										variant="primary"
										disabled={isLoading()}
										onClick={() => {
											void refresh();
										}}
									>
										{isLoading() ? "Checking..." : "Recheck access"}
									</Button>
									<Button
										variant="gray"
										disabled={isLoading()}
										onClick={() => {
											void signOut();
										}}
									>
										Sign out
									</Button>
								</>
							}
						>
							<Button
								variant="primary"
								disabled={isLoading()}
								onClick={() => {
									void openSignIn();
								}}
							>
								{isLoading() ? "Checking..." : "Sign in with email"}
							</Button>
						</Show>
					</div>
				</div>
			</div>
		</div>
	);
}
