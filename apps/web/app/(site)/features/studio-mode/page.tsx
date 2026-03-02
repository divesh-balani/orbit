import type { Metadata } from "next";
import { StudioModePage } from "./StudioModePage";

export const metadata: Metadata = {
	title: "Studio Mode - Professional Screen Recording | Orbit",
	description:
		"Create professional-quality screen recordings with Orbit Studio Mode. Local recording, 4K 60fps quality, precision editing tools, and complete privacy control.",
	openGraph: {
		title: "Studio Mode - Professional Screen Recording | Orbit",
		description:
			"Create professional-quality screen recordings with Orbit Studio Mode. Local recording, 4K 60fps quality, precision editing tools, and complete privacy control.",
		url: "https://orbit.so/features/studio-mode",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit Studio Mode",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Studio Mode - Professional Screen Recording | Orbit",
		description:
			"Create professional-quality screen recordings with Orbit Studio Mode. Local recording, 4K 60fps quality, precision editing tools, and complete privacy control.",
		images: ["https://orbit.so/og.png"],
	},
};

export default function Page() {
	return <StudioModePage />;
}
