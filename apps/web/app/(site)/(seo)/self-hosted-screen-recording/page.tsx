import type { Metadata } from "next";
import Script from "next/script";
import {
	SelfHostedScreenRecordingPage,
	selfHostedScreenRecordingContent,
} from "@/components/pages/seo/SelfHostedScreenRecordingPage";
import { createFAQSchema } from "@/utils/web-schema";

export const metadata: Metadata = {
	title:
		"Self-Hosted Screen Recording — Own Your Data, No Vendor Lock-In | Orbit",
	description:
		"Orbit lets you self-host screen recordings on your own S3-compatible storage. Connect AWS S3, Cloudflare R2, or MinIO — recordings go directly to your infrastructure. Open source, MIT-licensed, free to use.",
	alternates: {
		canonical: "https://orbit.so/self-hosted-screen-recording",
	},
	openGraph: {
		title:
			"Self-Hosted Screen Recording — Own Your Data, No Vendor Lock-In | Orbit",
		description:
			"Orbit lets you self-host screen recordings on your own S3-compatible storage. Connect AWS S3, Cloudflare R2, or MinIO — recordings go directly to your infrastructure. Open source and free.",
		url: "https://orbit.so/self-hosted-screen-recording",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit: Self-Hosted Screen Recording",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title:
			"Self-Hosted Screen Recording — Own Your Data, No Vendor Lock-In | Orbit",
		description:
			"Orbit lets you self-host screen recordings on your own S3-compatible storage. AWS S3, Cloudflare R2, MinIO — your infrastructure, instant shareable links.",
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
						createFAQSchema(selfHostedScreenRecordingContent.faqs),
					),
				}}
			/>
			<SelfHostedScreenRecordingPage />
		</>
	);
}
