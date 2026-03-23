import { db } from "@orbit/database";
import { licenseKeys } from "@orbit/database/schema";
import { desc } from "drizzle-orm";
import { LicensesClient } from "./LicensesClient";

export const dynamic = "force-dynamic";

export default async function LicensesPage() {
	const licenses = await db()
		.select()
		.from(licenseKeys)
		.orderBy(desc(licenseKeys.createdAt));

	return <LicensesClient licenses={licenses} />;
}
