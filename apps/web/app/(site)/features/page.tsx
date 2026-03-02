import type { Metadata } from "next";
import { FeaturesPage } from "./FeaturesPage";

export const metadata: Metadata = {
	title: "Features - Orbit",
	description:
		"Discover all the powerful features Orbit offers for screen recording, sharing, and collaboration. From AI-powered tools to advanced editing capabilities.",
};

export default function Page() {
	return <FeaturesPage />;
}
