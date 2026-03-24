"use server";

import { db } from "@orbit/database";
import { admins, passwordResetTokens } from "@orbit/database/schema";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { sendPasswordResetEmail } from "@/lib/email";

const MASTER_ADMIN = "diveshb2k@gmail.com";

export async function requestPasswordReset(email: string) {
	const normalized = email.trim().toLowerCase();

	const isMaster = normalized === MASTER_ADMIN;
	if (!isMaster) {
		const [adminRow] = await db()
			.select()
			.from(admins)
			.where(eq(admins.email, normalized))
			.limit(1);
		if (!adminRow) {
			return { success: true };
		}
	}

	const token = nanoid(48);
	const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);

	await db().insert(passwordResetTokens).values({
		id: nanoid(),
		email: normalized,
		token,
		expiresAt,
	});

	await sendPasswordResetEmail(normalized, token);

	return { success: true };
}
