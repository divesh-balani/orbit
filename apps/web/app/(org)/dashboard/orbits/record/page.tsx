import type { Metadata } from "next";
import { RecordVideoPage } from "./RecordVideoPage";

export const metadata: Metadata = {
	title: "Record an Orbit",
};

export default function RecordVideoRoute() {
	return <RecordVideoPage />;
}
