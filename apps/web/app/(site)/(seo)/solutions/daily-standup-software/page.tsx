import type { Metadata } from "next";
import { DailyStandupSoftwarePage } from "@/components/pages/seo/DailyStandupSoftwarePage";

export const metadata: Metadata = {
	title: "Daily Standup Software: Streamline Your Agile Meetings with Orbit",
	description:
		"Looking for daily standup software? Discover how Orbit helps remote or hybrid teams run async standups efficiently—no more timezone conflicts!",
	openGraph: {
		title: "Daily Standup Software: Streamline Your Agile Meetings with Orbit",
		description:
			"Looking for daily standup software? Discover how Orbit helps remote or hybrid teams run async standups efficiently—no more timezone conflicts!",
		url: "https://orbit.so/solutions/daily-standup-software",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit: Daily Standup Software",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Daily Standup Software: Streamline Your Agile Meetings with Orbit",
		description:
			"Looking for daily standup software? Discover how Orbit helps remote or hybrid teams run async standups efficiently—no more timezone conflicts!",
		images: ["https://orbit.so/og.png"],
	},
	alternates: {
		canonical: "https://orbit.so/solutions/daily-standup-software",
	},
};

export default DailyStandupSoftwarePage;
