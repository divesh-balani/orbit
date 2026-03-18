"use server";

import { db } from "@orbit/database";
import { isRootAdminEmail } from "@orbit/database/auth/root-admin";
import { desktopAccessGrants, users } from "@orbit/database/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { requireRootAdminUser } from "@/lib/desktop-access";

const customExpirySchema = z
	.string()
	.datetime({ offset: true })
	.transform((value) => new Date(value));

const accessWindowSchema = z.union([
	z.literal("week"),
	z.literal("month"),
	z.literal("year"),
	z.object({
		custom: customExpirySchema,
	}),
]);

const userIdSchema = z.string().min(1);

async function getTargetUser(userId: string) {
	const [targetUser] = await db()
		.select()
		.from(users)
		.where(eq(users.id, userId))
		.limit(1);

	if (!targetUser) {
		throw new Error("User not found");
	}

	return targetUser;
}

async function getTargetGrant(userId: string) {
	const [targetGrant] = await db()
		.select()
		.from(desktopAccessGrants)
		.where(eq(desktopAccessGrants.userId, userId))
		.limit(1);

	return targetGrant ?? null;
}

function resolveValidUntil(
	windowSelection: z.infer<typeof accessWindowSchema>,
	now: Date,
) {
	if (windowSelection === "week") {
		return new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
	}

	if (windowSelection === "month") {
		const validUntil = new Date(now);
		validUntil.setUTCMonth(validUntil.getUTCMonth() + 1);
		return validUntil;
	}

	if (windowSelection === "year") {
		const validUntil = new Date(now);
		validUntil.setUTCFullYear(validUntil.getUTCFullYear() + 1);
		return validUntil;
	}

	if (windowSelection.custom.getTime() <= now.getTime()) {
		throw new Error("Custom expiry must be in the future");
	}

	return windowSelection.custom;
}

export async function approveDesktopUserAccess(input: {
	userId: string;
	window: z.infer<typeof accessWindowSchema>;
}) {
	const adminUser = await requireRootAdminUser();
	const parsed = z
		.object({
			userId: userIdSchema,
			window: accessWindowSchema,
		})
		.parse(input);

	const targetUser = await getTargetUser(parsed.userId);
	const now = new Date();
	const validUntil = resolveValidUntil(parsed.window, now);
	const existingGrant = await getTargetGrant(parsed.userId);

	if (existingGrant) {
		await db()
			.update(desktopAccessGrants)
			.set({
				status: "approved",
				validUntil,
				approvedByUserId: adminUser.id,
				approvedAt: now,
				revokedAt: null,
			})
			.where(eq(desktopAccessGrants.userId, parsed.userId));
	} else {
		await db().insert(desktopAccessGrants).values({
			userId: parsed.userId,
			status: "approved",
			validUntil,
			approvedByUserId: adminUser.id,
			approvedAt: now,
			revokedAt: null,
		});
	}

	if (isRootAdminEmail(targetUser.email)) {
		await db()
			.update(desktopAccessGrants)
			.set({
				validUntil: null,
				approvedByUserId: adminUser.id,
				approvedAt: now,
				revokedAt: null,
			})
			.where(eq(desktopAccessGrants.userId, parsed.userId));
	}

	revalidatePath("/dashboard/access");
}

export async function revokeDesktopUserAccess(userId: string) {
	const parsedUserId = userIdSchema.parse(userId);
	await requireRootAdminUser();

	const targetUser = await getTargetUser(parsedUserId);
	if (isRootAdminEmail(targetUser.email)) {
		throw new Error("Configured root admins cannot be revoked");
	}

	const now = new Date();
	const existingGrant = await getTargetGrant(parsedUserId);

	if (existingGrant) {
		await db()
			.update(desktopAccessGrants)
			.set({
				status: "revoked",
				validUntil: existingGrant.validUntil,
				revokedAt: now,
			})
			.where(eq(desktopAccessGrants.userId, parsedUserId));
	} else {
		await db().insert(desktopAccessGrants).values({
			userId: parsedUserId,
			status: "revoked",
			validUntil: null,
			approvedByUserId: null,
			approvedAt: null,
			revokedAt: now,
		});
	}

	revalidatePath("/dashboard/access");
}
