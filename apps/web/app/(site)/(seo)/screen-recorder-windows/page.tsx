import type { Metadata } from "next";
import { ScreenRecordWindowsPage } from "@/components/pages/seo/ScreenRecordWindowsPage";

export const metadata: Metadata = {
	title: "Best Free Screen Recorder for Windows 10 & 11 | Orbit",
	description:
		"Record your screen on Windows with Orbit — free, open-source screen recorder with HD video, audio, webcam overlay, and instant sharing. No watermarks. Works on Windows 10 & 11.",
	openGraph: {
		title: "Best Free Screen Recorder for Windows 10 & 11 | Orbit",
		description:
			"Record your screen on Windows with Orbit — free, open-source screen recorder with HD video, audio, webcam overlay, and instant sharing. No watermarks. Works on Windows 10 & 11.",
		url: "https://orbit.so/screen-recorder-windows",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit: Best Free Screen Recorder for Windows",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Best Free Screen Recorder for Windows 10 & 11 | Orbit",
		description:
			"Record your screen on Windows with Orbit — free, open-source screen recorder with HD video, audio, webcam overlay, and instant sharing. No watermarks.",
		images: ["https://orbit.so/og.png"],
	},
	alternates: {
		canonical: "https://orbit.so/screen-recorder-windows",
	},
};

export default function Page() {
	return <ScreenRecordWindowsPage />;
}
