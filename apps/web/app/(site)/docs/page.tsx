import type { Metadata } from "next";
import { DocsPage } from "@/components/pages/DocsPage";

export const metadata: Metadata = {
	title: "Documentation — Orbit",
};

export default function App() {
	return <DocsPage />;
}
