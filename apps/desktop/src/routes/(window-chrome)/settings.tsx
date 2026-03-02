import { A, type RouteSectionProps } from "@solidjs/router";
import { getVersion } from "@tauri-apps/api/app";
import { getCurrentWindow, LogicalSize } from "@tauri-apps/api/window";
import "@total-typescript/ts-reset/filter-boolean";
import { createResource, For, onMount, Suspense } from "solid-js";
import { OrbitErrorBoundary } from "~/components/OrbitErrorBoundary";

const WINDOW_SIZE = { width: 700, height: 540 } as const;

export default function Settings(props: RouteSectionProps) {
	const [version] = createResource(() => getVersion());

	onMount(() => {
		const currentWindow = getCurrentWindow();

		currentWindow.setSize(
			new LogicalSize(WINDOW_SIZE.width, WINDOW_SIZE.height),
		);
	});

	return (
		<div class="flex-1 flex flex-row divide-x divide-gray-3 text-[0.875rem] leading-[1.25rem] overflow-y-hidden">
			<div class="flex flex-col h-full bg-gray-2">
				<ul class="min-w-[12rem] h-full p-[0.625rem] space-y-1 text-gray-12">
					<For
						each={[
							{
								href: "general",
								name: "General",
								icon: IconCapSettings,
							},
							{
								href: "hotkeys",
								name: "Shortcuts",
								icon: IconCapHotkeys,
							},
							{
								href: "recordings",
								name: "Recordings",
								icon: IconLucideSquarePlay,
							},
							{
								href: "screenshots",
								name: "Screenshots",
								icon: IconLucideImage,
							},
							{
								href: "experimental",
								name: "Experimental",
								icon: IconCapSettings,
							},
						].filter(Boolean)}
					>
						{(item) => (
							<li>
								<A
									href={item.href}
									activeClass="bg-gray-5 pointer-events-none"
									class="rounded-lg h-[2rem] hover:bg-gray-3 text-[13px] px-2 flex flex-row items-center gap-[0.375rem] transition-colors"
								>
									<item.icon class="opacity-60 size-4" />
									<span>{item.name}</span>
								</A>
							</li>
						)}
					</For>
				</ul>
				<div class="p-[0.625rem] text-left flex flex-col">
					<Suspense>
						{version() && (
							<div class="mb-2 text-xs text-gray-11 flex flex-col items-start gap-0.5">
								<span>v{version()}</span>
							</div>
						)}
					</Suspense>
				</div>
			</div>
			<div class="overflow-y-hidden flex-1 animate-in">
				<OrbitErrorBoundary>
					<Suspense>{props.children}</Suspense>
				</OrbitErrorBoundary>
			</div>
		</div>
	);
}
