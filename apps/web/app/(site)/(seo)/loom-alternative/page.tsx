import type { Metadata } from "next";
import { LoomAlternativePage } from "@/components/pages/seo/LoomAlternativePage";

export const metadata: Metadata = {
	title:
		"The Ultimate Loom Alternative: Why Orbit is the Best Open-Source Screen Recorder for Mac & Windows",
	description:
		"Looking for the best Loom alternative? Discover Orbit, the open-source, privacy-focused screen recorder for Mac & Windows with a built-in Loom video importer. See why users are switching today!",
	openGraph: {
		title:
			"The Ultimate Loom Alternative: Why Orbit is the Best Open-Source Screen Recorder",
		description:
			"Looking for the best Loom alternative? Discover Orbit with a built-in Loom video importer. Open-source, privacy-focused screen recorder for Mac & Windows.",
		url: "https://orbit.so/loom-alternative",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit: The Best Loom Alternative",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "The Ultimate Loom Alternative: Orbit Screen Recorder",
		description:
			"Looking for the best Loom alternative? Discover Orbit, the open-source, privacy-focused screen recorder for Mac & Windows.",
		images: ["https://orbit.so/og.png"],
	},
	alternates: {
		canonical: "https://orbit.so/loom-alternative",
	},
};

export default function Page() {
	return <LoomAlternativePage />;
}
