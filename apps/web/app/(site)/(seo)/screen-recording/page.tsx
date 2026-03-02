import type { Metadata } from "next";
import Script from "next/script";
import {
	ScreenRecordingPage,
	screenRecordingContent,
} from "@/components/pages/seo/ScreenRecordingPage";
import { createFAQSchema } from "@/utils/web-schema";

export const metadata: Metadata = {
	title: "Screen Recording — Free HD Capture, Instant Sharing | Orbit",
	description:
		"Record your screen in HD with audio and webcam overlay, then share instantly with a link. Orbit is free, open-source screen recording software for Mac and Windows.",
	alternates: {
		canonical: "https://orbit.so/screen-recording",
	},
	openGraph: {
		title: "Screen Recording — Free HD Capture, Instant Sharing | Orbit",
		description:
			"Record your screen in HD with audio and webcam overlay, then share instantly with a link. Free, open-source, available on Mac and Windows.",
		url: "https://orbit.so/screen-recording",
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
		title: "Screen Recording — Free HD Capture, Instant Sharing | Orbit",
		description:
			"Record your screen in HD with audio and webcam overlay, then share instantly with a link. Free, open-source, available on Mac and Windows.",
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
					__html: JSON.stringify(createFAQSchema(screenRecordingContent.faqs)),
				}}
			/>
			<ScreenRecordingPage />
		</>
	);
}
