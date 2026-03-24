import { commands, type LicenseStatus } from "~/utils/tauri";
import {
	createSignal,
	onCleanup,
	onMount,
	Show,
	type ParentProps,
} from "solid-js";

export function AccessGate(props: ParentProps) {
	const [status, setStatus] = createSignal<LicenseStatus | null>(null);
	const [key, setKey] = createSignal("");
	const [loading, setLoading] = createSignal(false);
	const [errorMsg, setErrorMsg] = createSignal<string | null>(null);

	const check = async () => {
		const result = await commands.getLicenseStatus();
		setStatus(result);
	};

	onMount(async () => {
		await check();
		const interval = setInterval(check, 60 * 1000);
		onCleanup(() => clearInterval(interval));

		const handleFocus = () => check();
		window.addEventListener("focus", handleFocus);
		onCleanup(() => window.removeEventListener("focus", handleFocus));
	});

	const handleActivate = async (e: Event) => {
		e.preventDefault();
		const k = key().trim();
		if (!k) return;
		setLoading(true);
		setErrorMsg(null);
		const result = await commands.setLicenseKey(k);
		setStatus(result);
		if (result.type === "invalid") {
			setErrorMsg(result.error);
		}
		setLoading(false);
	};

	const isValid = () => status()?.type === "valid";

	const statusError = () => {
		const s = status();
		if (s?.type === "invalid") return s.error;
		return null;
	};

	return (
		<Show when={!isValid()} fallback={props.children}>
			<div class="flex flex-col items-center justify-center h-full bg-gray-1 p-6">
				<div class="w-full max-w-[272px] bg-gray-2 rounded-2xl border border-gray-5 p-6">
					<div class="flex items-center justify-center w-11 h-11 rounded-xl bg-blue-9 mx-auto mb-5">
						<span class="text-white font-bold text-lg leading-none">O</span>
					</div>
					<h1 class="text-[13px] font-semibold text-gray-12 text-center mb-1">
						Activate Orbit
					</h1>
					<p class="text-[11px] text-gray-9 text-center mb-5 leading-relaxed">
						Enter your license key to continue
					</p>

					<Show when={errorMsg() ?? statusError()}>
						<div class="mb-3 px-3 py-2 bg-red-3 border border-red-7 rounded-lg text-[11px] text-red-11 leading-snug">
							{errorMsg() ?? statusError()}
						</div>
					</Show>

					<form onSubmit={handleActivate} class="flex flex-col gap-2">
						<input
							type="text"
							placeholder="ORBIT-XXXXX-XXXXX-XXXXX-XXXXX"
							value={key()}
							onInput={(e) => {
								setKey(e.currentTarget.value);
								setErrorMsg(null);
							}}
							class="w-full px-3 py-2 font-mono text-[11px] bg-gray-3 border border-gray-5 rounded-lg text-gray-12 placeholder:text-gray-8 focus:outline-none focus:ring-1 focus:ring-blue-9 focus:border-blue-9 transition-colors"
							autocomplete="off"
							spellcheck={false}
						/>
						<button
							type="submit"
							disabled={loading() || !key().trim()}
							class="w-full py-2 bg-gray-12 text-gray-1 text-[12px] font-medium rounded-lg hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-opacity"
						>
							{loading() ? "Activating..." : "Activate"}
						</button>
					</form>
				</div>
			</div>
		</Show>
	);
}
