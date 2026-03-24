import { db } from "@orbit/database";
import { admins } from "@orbit/database/schema";
import { getSession } from "@orbit/database/auth/session";
import { eq } from "drizzle-orm";
import { redirect } from "next/navigation";
import type { PropsWithChildren } from "react";

const MASTER_ADMIN = "diveshb2k@gmail.com";

export default async function AdminLayout({ children }: PropsWithChildren) {
	const session = await getSession();
	const email = session?.user?.email;

	if (!email) {
		redirect("/login?callbackUrl=/admin/licenses");
	}

	if (email !== MASTER_ADMIN) {
		const [adminRow] = await db()
			.select()
			.from(admins)
			.where(eq(admins.email, email))
			.limit(1);

		if (!adminRow) {
			redirect("/login?callbackUrl=/admin/licenses");
		}
	}

	return <>{children}</>;
}
