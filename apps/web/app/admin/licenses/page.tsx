import { db } from "@orbit/database";
import { licenseKeys } from "@orbit/database/schema";
import { getSession } from "@orbit/database/auth/session";
import { desc } from "drizzle-orm";
import Link from "next/link";
import { LicensesClient } from "./LicensesClient";

const MASTER_ADMIN = "diveshb2k@gmail.com";

export default async function LicensesPage() {
	const [licenses, session] = await Promise.all([
		db().select().from(licenseKeys).orderBy(desc(licenseKeys.createdAt)),
		getSession(),
	]);

	const isMaster = session?.user?.email === MASTER_ADMIN;

	return (
		<div className="min-h-screen bg-gray-1 p-8">
			<div className="max-w-5xl mx-auto">
				<div className="flex items-center justify-between mb-8">
					<div>
						<h1 className="text-2xl font-bold text-gray-12">License Keys</h1>
						<p className="text-sm text-gray-9 mt-1">
							Manage desktop app license keys
						</p>
					</div>
					{isMaster && (
						<Link
							href="/admin/admins"
							className="text-sm text-gray-9 hover:text-gray-12 transition-colors"
						>
							Manage admins →
						</Link>
					)}
				</div>
				<LicensesClient licenses={licenses} />
			</div>
		</div>
	);
}
