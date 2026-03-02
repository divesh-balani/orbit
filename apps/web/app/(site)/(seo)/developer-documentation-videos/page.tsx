import type { Metadata } from "next";
import Script from "next/script";
import {
	DeveloperDocumentationVideosPage,
	developerDocumentationVideosContent,
} from "@/components/pages/seo/DeveloperDocumentationVideosPage";
import { createFAQSchema } from "@/utils/web-schema";

export const metadata: Metadata = {
	title:
		"Developer Documentation Videos — Record API Demos and SDK Walkthroughs | Orbit",
	description:
		"Create professional developer documentation videos with screen recording. Record API demos, SDK walkthroughs, and technical tutorials instantly. Orbit is free, open-source, 4K quality, and built for developers.",
	alternates: {
		canonical: "https://orbit.so/developer-documentation-videos",
	},
	openGraph: {
		title:
			"Developer Documentation Videos — Record API Demos and SDK Walkthroughs | Orbit",
		description:
			"Create professional developer documentation videos with screen recording. Record API demos, SDK walkthroughs, and technical tutorials instantly. Free, open-source, and built for developers.",
		url: "https://orbit.so/developer-documentation-videos",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit: Developer Documentation Videos",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Developer Documentation Videos — Record API Demos and SDK Walkthroughs | Orbit",
		description:
			"Record API demos, SDK walkthroughs, and changelog videos instantly. Share a link, embed in your docs, get AI transcripts. Free and open-source.",
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
						createFAQSchema(developerDocumentationVideosContent.faqs),
					),
				}}
			/>
			<DeveloperDocumentationVideosPage />
		</>
	);
}
