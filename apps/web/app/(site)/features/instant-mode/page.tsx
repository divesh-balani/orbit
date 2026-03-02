import type { Metadata } from "next";
import { InstantModePage } from "./InstantModePage";

export const metadata: Metadata = {
	title: "Instant Mode - Quick Screen Recording & Sharing | Orbit",
	description:
		"Record and share instantly with Orbit's cloud-powered Instant Mode. Get automatic transcriptions, collaborative comments, shareable links, and team workspaces for fast feedback loops.",
	openGraph: {
		title: "Instant Mode - Quick Screen Recording & Sharing | Orbit",
		description:
			"Record and share instantly with Orbit's cloud-powered Instant Mode. Get automatic transcriptions, collaborative comments, shareable links, and team workspaces for fast feedback loops.",
		url: "https://orbit.so/features/instant-mode",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit Instant Mode",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Instant Mode - Quick Screen Recording & Sharing | Orbit",
		description:
			"Record and share instantly with Orbit's cloud-powered Instant Mode. Get automatic transcriptions, collaborative comments, shareable links, and team workspaces for fast feedback loops.",
		images: ["https://orbit.so/og.png"],
	},
};

export default function Page() {
	return <InstantModePage />;
}
