import type { Metadata } from "next";
import { TermsPage } from "@/components/pages/TermsPage";

export const metadata: Metadata = {
	title: "Terms of Service — Orbit",
};

export default function App() {
	return <TermsPage />;
}
