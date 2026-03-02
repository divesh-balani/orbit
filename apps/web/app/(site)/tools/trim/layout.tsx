import { createBreadcrumbSchema } from "@/utils/web-schema";

const breadcrumbSchema = createBreadcrumbSchema([
	{ name: "Home", url: "https://orbit.so" },
	{ name: "Tools", url: "https://orbit.so/tools" },
	{ name: "Trim Video Online", url: "https://orbit.so/tools/trim" },
]);

export default function TrimLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbSchema),
				}}
			/>
			{children}
		</>
	);
}
