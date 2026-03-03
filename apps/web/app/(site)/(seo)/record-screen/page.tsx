import type { Metadata } from "next";
import Script from "next/script";
import {
	RecordScreenPage,
	recordScreenContent,
} from "@/components/pages/seo/RecordScreenPage";
import { createFAQSchema } from "@/utils/web-schema";

export const metadata: Metadata = {
	title: "Record Screen — Free HD Screen Recorder with Instant Sharing | Orbit",
	description:
		"Record your screen in HD on Mac or Windows with Orbit. Capture audio, webcam overlay, and share with a link instantly. Free, open-source, no watermarks, no time limits in Studio Mode.",
	alternates: {
		canonical: "https://orbit.so/record-screen",
	},
	openGraph: {
		title:
			"Record Screen — Free HD Screen Recorder with Instant Sharing | Orbit",
		description:
			"Record your screen in HD on Mac or Windows. Capture audio and webcam, then share with a link instantly. Free, open-source, no watermarks.",
		url: "https://orbit.so/record-screen",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit: Record Your Screen for Free",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Record Screen — Free HD Screen Recorder with Instant Sharing | Orbit",
		description:
			"Record your screen in HD on Mac or Windows. Capture audio and webcam, then share with a link instantly. Free, open-source, no watermarks.",
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
					__html: JSON.stringify(createFAQSchema(recordScreenContent.faqs)),
				}}
			/>
			<RecordScreenPage />
		</>
	);
}
