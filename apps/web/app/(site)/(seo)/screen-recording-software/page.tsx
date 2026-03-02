import type { Metadata } from "next";
import { ScreenRecordingSoftwarePage } from "@/components/pages/seo/ScreenRecordingSoftwarePage";

export const metadata: Metadata = {
	title: "Screen Recording Software — Free HD Screen Capture | Orbit",
	description:
		"Free, open-source screen recording software for Mac and Windows. Capture HD video with audio, share instantly, and own your data. Download Orbit today.",
	alternates: {
		canonical: "https://orbit.so/screen-recording-software",
	},
	openGraph: {
		title: "Screen Recording Software — Free HD Screen Capture | Orbit",
		description:
			"Free, open-source screen recording software for Mac and Windows. Capture HD video with audio, share instantly, and own your data.",
		url: "https://orbit.so/screen-recording-software",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit: Screen Recording Software",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Screen Recording Software — Free HD Screen Capture | Orbit",
		description:
			"Free, open-source screen recording software for Mac and Windows. Capture HD video with audio, share instantly, and own your data.",
		images: ["https://orbit.so/og.png"],
	},
};

export default function Page() {
	return <ScreenRecordingSoftwarePage />;
}
