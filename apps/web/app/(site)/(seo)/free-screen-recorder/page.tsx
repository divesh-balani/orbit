import type { Metadata } from "next";
import Script from "next/script";
import {
	FreeScreenRecorderPage,
	freeScreenRecorderContent,
} from "@/components/pages/seo/FreeScreenRecorderPage";
import { createFAQSchema } from "@/utils/web-schema";

export const metadata: Metadata = {
	title: "Free Screen Recorder: High-Quality Recording at No Cost",
	description:
		"Orbit offers a top-rated, free screen recorder with high-quality video capture, making it perfect for creating tutorials, educational content, and professional demos without any hidden fees.",
	openGraph: {
		title: "Free Screen Recorder: High-Quality Recording at No Cost",
		description:
			"Orbit offers a top-rated, free screen recorder with high-quality video capture, making it perfect for creating tutorials, educational content, and professional demos without any hidden fees.",
		url: "https://orbit.so/free-screen-recorder",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit: Free Screen Recorder",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Free Screen Recorder: High-Quality Recording at No Cost",
		description:
			"Orbit offers a top-rated, free screen recorder with high-quality video capture, making it perfect for creating tutorials, educational content, and professional demos without any hidden fees.",
		images: ["https://orbit.so/og.png"],
	},
	alternates: {
		canonical: "https://orbit.so/free-screen-recorder",
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
						createFAQSchema(freeScreenRecorderContent.faqs),
					),
				}}
			/>
			<FreeScreenRecorderPage />
		</>
	);
}
