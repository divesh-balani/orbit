import type { Metadata } from "next";
import Script from "next/script";
import {
	HowToScreenRecordPage,
	howToScreenRecordContent,
} from "@/components/pages/seo/HowToScreenRecordPage";
import { createFAQSchema, createHowToSchema } from "@/utils/web-schema";

export const metadata: Metadata = {
	title: "How to Screen Record on Mac, Windows & Chrome (2026 Guide) | Orbit",
	description:
		"Learn how to screen record with audio on Mac, Windows, and Chrome. Free step-by-step guide covering built-in tools and Orbit, the open-source screen recorder.",
	openGraph: {
		title: "How to Screen Record on Mac, Windows & Chrome (2026 Guide) | Orbit",
		description:
			"Learn how to screen record with audio on any platform. Step-by-step instructions for macOS, Windows, and Chrome with free and paid options.",
		url: "https://orbit.so/how-to-screen-record",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "How to Screen Record — Complete 2026 Guide by Orbit",
			},
		],
		locale: "en_US",
		type: "article",
	},
	twitter: {
		card: "summary_large_image",
		title: "How to Screen Record on Mac, Windows & Chrome (2026 Guide) | Orbit",
		description:
			"Learn how to screen record with audio on Mac, Windows, and Chrome. Free step-by-step guide.",
		images: ["https://orbit.so/og.png"],
	},
	alternates: {
		canonical: "https://orbit.so/how-to-screen-record",
	},
};

const howToSteps = [
	{
		name: "Download and install Orbit",
		text: "Download Orbit for free from orbit.so/download for Mac or Windows, or use Instant Mode in your browser for quick recordings without any installation.",
	},
	{
		name: "Choose your recording settings",
		text: "Open Orbit and select your recording source. Choose between full screen, specific window, or custom region capture. Toggle microphone and system audio on or off based on your needs.",
	},
	{
		name: "Start recording your screen",
		text: "Click the record button to begin capturing your screen. Orbit records in high definition with minimal system impact so you can present, demo, or teach without lag.",
	},
	{
		name: "Share or export your recording",
		text: "Stop the recording when finished. Orbit generates an instant shareable link, or you can export the video locally in your preferred format. Share your recording with anyone in seconds.",
	},
];

export default function Page() {
	return (
		<>
			<Script
				id="faq-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						createFAQSchema(howToScreenRecordContent.faqs),
					),
				}}
			/>
			<Script
				id="howto-structured-data"
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(
						createHowToSchema({
							name: "How to Screen Record on Mac, Windows & Chrome",
							description:
								"Learn how to screen record with audio on Mac, Windows, or in your browser using Orbit, the free open-source screen recorder.",
							totalTime: "PT2M",
							steps: howToSteps,
						}),
					),
				}}
			/>
			<HowToScreenRecordPage />
		</>
	);
}
