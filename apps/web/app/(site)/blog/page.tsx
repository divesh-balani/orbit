import type { Metadata } from "next";
import { UpdatesPage } from "@/components/pages/UpdatesPage";

export const metadata: Metadata = {
	title: "Blog — Orbit",
};

export default function App() {
	return <UpdatesPage />;
}
