import type { Metadata } from "next";
import { Settings } from "./Settings";

export const metadata: Metadata = {
	title: "Settings — Orbit",
};

export default async function SettingsPage() {
	return <Settings />;
}
