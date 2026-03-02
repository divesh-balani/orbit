import type { Metadata } from "next";
import { ImportFilePage } from "./ImportFilePage";

export const metadata: Metadata = {
	title: "Upload File — Orbit",
};

export default function Page() {
	return <ImportFilePage />;
}
