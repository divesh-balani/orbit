import type { Metadata } from "next";
import { createBreadcrumbSchema } from "@/utils/web-schema";
import { PageContent } from "./PageContent";

export const metadata: Metadata = {
	title: "Online Tools | Free Browser-Based Utilities",
	description:
		"Discover Orbit's collection of free online tools for file conversion, video editing, and more. All tools run directly in your browser for maximum privacy.",
	alternates: {
		canonical: "https://orbit.so/tools",
	},
};

const breadcrumbSchema = createBreadcrumbSchema([
	{ name: "Home", url: "https://orbit.so" },
	{ name: "Tools", url: "https://orbit.so/tools" },
]);

export default function ToolsPage() {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbSchema),
				}}
			/>
			<PageContent />
		</>
	);
}
