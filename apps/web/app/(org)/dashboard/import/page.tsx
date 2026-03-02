import type { Metadata } from "next";
import { ImportPage } from "./ImportPage";

export const metadata: Metadata = {
	title: "Import — Orbit",
};

export default function Page() {
	return <ImportPage />;
}
