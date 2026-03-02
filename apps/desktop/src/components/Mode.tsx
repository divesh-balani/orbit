import Tooltip from "~/components/Tooltip";
import { useRecordingOptions } from "~/routes/(window-chrome)/OptionsContext";
import { commands } from "~/utils/tauri";

const Mode = () => {
	const { rawOptions, setOptions } = useRecordingOptions();

	return (
		<div class="flex gap-2 relative justify-end items-center p-1.5 rounded-full border border-gray-5 bg-gray-3 w-fit">
			<Tooltip
				placement="top"
				content="Studio mode"
				openDelay={0}
				closeDelay={0}
			>
				<div
					onClick={() => {
						setOptions({ mode: "studio" });
						commands.setRecordingMode("studio");
					}}
					class={`flex justify-center items-center transition-all duration-200 rounded-full size-7 hover:cursor-pointer ${
						rawOptions.mode === "studio"
							? "ring-2 ring-offset-1 ring-offset-gray-1 bg-gray-7 hover:bg-gray-7 ring-blue-500"
							: "bg-gray-3 hover:bg-gray-7"
					}`}
				>
					<IconCapFilmCut class="size-3.5 invert dark:invert-0" />
				</div>
			</Tooltip>

			<Tooltip
				placement="top"
				content="Screenshot mode"
				openDelay={0}
				closeDelay={0}
			>
				<div
					onClick={() => {
						setOptions({ mode: "screenshot" });
						commands.setRecordingMode("screenshot");
					}}
					class={`flex justify-center items-center transition-all duration-200 rounded-full size-7 hover:cursor-pointer ${
						rawOptions.mode === "screenshot"
							? "ring-2 ring-offset-1 ring-offset-gray-1 bg-gray-7 hover:bg-gray-7 ring-blue-500"
							: "bg-gray-3 hover:bg-gray-7"
					}`}
				>
					<IconCapScreenshot class="size-3.5 invert dark:invert-0" />
				</div>
			</Tooltip>
		</div>
	);
};

export default Mode;
