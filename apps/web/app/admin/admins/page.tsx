import { db } from "@orbit/database";
import { admins } from "@orbit/database/schema";
import { getSession } from "@orbit/database/auth/session";
import { redirect } from "next/navigation";
import { AdminsClient } from "./AdminsClient";

const MASTER_ADMIN = "diveshb2k@gmail.com";

export default async function AdminsPage() {
	const session = await getSession();
	if (session?.user?.email !== MASTER_ADMIN) {
		redirect("/admin/licenses");
	}

	const allAdmins = await db().select().from(admins).orderBy(admins.addedAt);

	return (
		<div className="min-h-screen bg-gray-1 p-8">
			<div className="max-w-3xl mx-auto">
				<div className="mb-8">
					<h1 className="text-2xl font-bold text-gray-12">Admins</h1>
					<p className="text-sm text-gray-9 mt-1">
						Manage who has access to the admin panel
					</p>
				</div>
				<AdminsClient admins={allAdmins} />
			</div>
		</div>
	);
}
