import type { Metadata } from "next";
import { EmployeeOnboardingPlatformPage } from "@/components/pages/seo/EmployeeOnboardingPlatformPage";

export const metadata: Metadata = {
	title:
		"Employee Onboarding Platform: Streamline New-Hire Training with Orbit",
	description:
		"Looking for a powerful employee onboarding platform? Discover how Orbit's open-source screen recorder and asynchronous features simplify new-hire training.",
	openGraph: {
		title:
			"Employee Onboarding Platform: Streamline New-Hire Training with Orbit",
		description:
			"Looking for a powerful employee onboarding platform? Discover how Orbit's open-source screen recorder and asynchronous features simplify new-hire training.",
		url: "https://orbit.so/solutions/employee-onboarding-platform",
		siteName: "Orbit",
		images: [
			{
				url: "https://orbit.so/og.png",
				width: 1200,
				height: 630,
				alt: "Orbit: Employee Onboarding Platform",
			},
		],
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Employee Onboarding Platform | Orbit Screen Recorder",
		description:
			"Discover how Orbit's open-source screen recorder simplifies new-hire training with asynchronous video and built-in feedback.",
		images: ["https://orbit.so/og.png"],
	},
	alternates: {
		canonical: "https://orbit.so/solutions/employee-onboarding-platform",
	},
};

export default EmployeeOnboardingPlatformPage;
