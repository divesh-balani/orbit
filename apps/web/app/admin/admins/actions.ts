"use server";

import { db } from "@orbit/database";
import { admins, passwordResetTokens } from "@orbit/database/schema";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";
import { getSession } from "@orbit/database/auth/session";
import { sendAdminInviteEmail } from "@/lib/email";

const MASTER_ADMIN = "diveshb2k@gmail.com";

async function requireMaster() {
	const session = await getSession();
	if (session?.user?.email !== MASTER_ADMIN) {
		throw new Error("Unauthorized");
	}
}

export async function addAdmin(email: string) {
	await requireMaster();

	const normalized = email.trim().toLowerCase();
	if (normalized === MASTER_ADMIN) return;

	const existing = await db()
		.select()
		.from(admins)
		.where(eq(admins.email, normalized))
		.limit(1);

	if (existing.length === 0) {
		await db().insert(admins).values({
			id: nanoid(),
			email: normalized,
			addedBy: MASTER_ADMIN,
		});
	}

	const token = nanoid(48);
	const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000);

	await db().insert(passwordResetTokens).values({
		id: nanoid(),
		email: normalized,
		token,
		expiresAt,
	});

	await sendAdminInviteEmail(normalized, token, MASTER_ADMIN);

	revalidatePath("/admin/admins");
}

export async function removeAdmin(id: string) {
	await requireMaster();

	const [target] = await db()
		.select({ email: admins.email })
		.from(admins)
		.where(eq(admins.id, id))
		.limit(1);

	if (!target || target.email === MASTER_ADMIN) return;

	await db().delete(admins).where(eq(admins.id, id));
	revalidatePath("/admin/admins");
}

export async function resendInvite(email: string) {
	await requireMaster();

	const token = nanoid(48);
	const expiresAt = new Date(Date.now() + 72 * 60 * 60 * 1000);

	await db().insert(passwordResetTokens).values({
		id: nanoid(),
		email,
		token,
		expiresAt,
	});

	await sendAdminInviteEmail(email, token, MASTER_ADMIN);
}
