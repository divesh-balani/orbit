import type { Metadata } from "next";
import Script from "next/script";
import {
	MacScreenRecordingWithAudioPage,
	macScreenRecordingWithAudioContent,
} from "@/components/pages/seo/MacScreenRecordingWithAudioPage";
import { createFAQSchema } from "@/utils/web-schema";

export const metadata: Metadata = {
	title: "Mac Screen Recording with Audio — Capture System Sound & Mic | Orbit",
	description:
		"Record your Mac screen with system audio and microphone using Orbit. No BlackHole, no plugins required. Free, open-source, and available for macOS. Download Orbit today.",
	alternates: {
		canonical: "https://orbit.so/mac-screen-recording-with-audio",
	},
	openGraph: {
		title: "Mac Screen Recording with Audio — Capture System Sound & Mic | Orbit",
		description:
			"Record your Mac screen with system audio and microphone using Orbit. No BlackHole, no plugins required. Free and open-source for macOS.",
		url: "https://orbit.so/mac-screen-recording-with-audio",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit: Mac Screen Recording with Audio",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Mac Screen Recording with Audio — Capture System Sound & Mic | Orbit",
		description:
			"Record your Mac screen with system audio and microphone using Orbit. No BlackHole, no plugins required. Free and open-source for macOS.",
		images: ["https://orbit.so/og.png"],
	},
};

export default function Page() {
	return (
		<>
			<Script
				id="faq-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						createFAQSchema(macScreenRecordingWithAudioContent.faqs),
					),
				}}
			/>
			<MacScreenRecordingWithAudioPage />
		</>
	);
}
