import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@orbit/ui";
import { useRive } from "@rive-app/react-canvas";
import { useTheme } from "../../Contexts";
import { UploadOrbitButton } from "./UploadOrbitButton";
import { WebRecorderDialog } from "./web-recorder-dialog/web-recorder-dialog";

interface EmptyOrbitStateProps {
	userName?: string;
}

export const EmptyOrbitState: React.FC<EmptyOrbitStateProps> = ({
	userName,
}) => {
	const { theme } = useTheme();
	const { RiveComponent: EmptyOrbit } = useRive({
		src: "/rive/main.riv",
		artboard: theme === "light" ? "empty" : "darkempty",
		autoplay: true,
	});
	return (
		<div className="flex flex-col flex-1 justify-center items-center w-full h-full">
			<div className="flex flex-col gap-3 justify-center items-center h-full text-center">
				<div className="mx-auto w-full mb-10 max-w-[450px] flex justify-center items-center">
					<EmptyOrbit
						key={`${theme}empty-orbit`}
						className="h-[150px] w-[400px]"
					/>
				</div>
				<div className="flex flex-col items-center px-5">
					<p className="mb-1 text-xl font-semibold text-gray-12">
						Hey{userName ? ` ${userName}` : ""}! Record your first Orbit
					</p>
					<p className="max-w-md text-gray-10 text-md">
						Craft your narrative with Orbit - get projects done quicker.
					</p>
				</div>
				<div className="flex flex-wrap gap-3 justify-center items-center mt-4">
					<Button
						href="/download"
						className="flex relative gap-2 justify-center items-center"
						variant="primary"
					>
						<FontAwesomeIcon className="size-3.5" icon={faDownload} />
						Download Orbit
					</Button>
					<p className="text-sm text-gray-10">or</p>
					<WebRecorderDialog />
					<p className="text-sm text-gray-10">or</p>
					<UploadOrbitButton />
				</div>
			</div>
		</div>
	);
};
