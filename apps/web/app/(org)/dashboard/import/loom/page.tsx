import type { Metadata } from "next";
import { ImportLoomPage } from "./ImportLoomPage";

export const metadata: Metadata = {
	title: "Import from Loom — Orbit",
};

export default function Page() {
	return <ImportLoomPage />;
}
