"use server";

import { db } from "@orbit/database";
import { hashPassword } from "@orbit/database/crypto";
import { passwordResetTokens, users } from "@orbit/database/schema";
import { and, eq, gt, isNull } from "drizzle-orm";
import { nanoid } from "nanoid";

export async function validateResetToken(token: string) {
	const [row] = await db()
		.select()
		.from(passwordResetTokens)
		.where(
			and(
				eq(passwordResetTokens.token, token),
				isNull(passwordResetTokens.usedAt),
				gt(passwordResetTokens.expiresAt, new Date()),
			),
		)
		.limit(1);

	if (!row) return { valid: false, email: null };
	return { valid: true, email: row.email };
}

export async function resetPassword(token: string, password: string) {
	if (password.length < 8) {
		return { success: false, error: "Password must be at least 8 characters" };
	}

	const [row] = await db()
		.select()
		.from(passwordResetTokens)
		.where(
			and(
				eq(passwordResetTokens.token, token),
				isNull(passwordResetTokens.usedAt),
				gt(passwordResetTokens.expiresAt, new Date()),
			),
		)
		.limit(1);

	if (!row) {
		return { success: false, error: "Invalid or expired reset link" };
	}

	const hash = await hashPassword(password);

	const [existingUser] = await db()
		.select()
		.from(users)
		.where(eq(users.email, row.email))
		.limit(1);

	if (existingUser) {
		await db()
			.update(users)
			.set({ passwordHash: hash })
			.where(eq(users.email, row.email));
	} else {
		await db().insert(users).values({
			id: nanoid() as any,
			email: row.email,
			name: row.email.split("@")[0],
			passwordHash: hash,
		});
	}

	await db()
		.update(passwordResetTokens)
		.set({ usedAt: new Date() })
		.where(eq(passwordResetTokens.id, row.id));

	return { success: true };
}
