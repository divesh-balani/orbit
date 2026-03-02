import type { Metadata } from "next";
import Script from "next/script";
import {
	VideoRecordingSoftwarePage,
	videoRecordingSoftwareContent,
} from "@/components/pages/seo/VideoRecordingSoftwarePage";
import { createFAQSchema } from "@/utils/web-schema";

export const metadata: Metadata = {
	title: "Video Recording Software — Free HD Capture, Instant Sharing | Orbit",
	description:
		"Orbit is free video recording software for Mac and Windows. Record your screen, webcam, and audio in HD, then share instantly with a link. Open-source, no watermarks, no time limits in Studio Mode.",
	alternates: {
		canonical: "https://orbit.so/video-recording-software",
	},
	openGraph: {
		title: "Video Recording Software — Free HD Capture, Instant Sharing | Orbit",
		description:
			"Orbit is free video recording software for Mac and Windows. Record in HD with audio and webcam, then share with a link instantly. Open-source, no watermarks.",
		url: "https://orbit.so/video-recording-software",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit: Video Recording Software",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Video Recording Software — Free HD Capture, Instant Sharing | Orbit",
		description:
			"Orbit is free video recording software for Mac and Windows. Record in HD with audio and webcam, then share with a link instantly. Open-source, no watermarks.",
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
						createFAQSchema(videoRecordingSoftwareContent.faqs),
					),
				}}
			/>
			<VideoRecordingSoftwarePage />
		</>
	);
}
