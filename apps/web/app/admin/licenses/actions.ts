"use server";

import { randomBytes, randomUUID } from "node:crypto";
import { db } from "@orbit/database";
import { licenseKeys } from "@orbit/database/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

function generateLicenseKey(): string {
	const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
	const groups = Array.from({ length: 5 }, () =>
		Array.from({ length: 5 }, () => {
			const byte = randomBytes(1)[0] ?? 0;
			return chars[byte % chars.length];
		}).join(""),
	);
	return `ORBIT-${groups.join("-")}`;
}

export async function createLicense(formData: FormData) {
	const name = formData.get("name") as string;
	const expiryType = formData.get("expiryType") as string;
	const customDate = formData.get("customDate") as string;
	const customAmount = formData.get("customAmount") as string;
	const customUnit = formData.get("customUnit") as string;

	if (!name?.trim()) return { error: "Name is required" };

	let expiresAt: Date | null = null;

	if (expiryType === "1day") {
		expiresAt = new Date(Date.now() + 1 * 24 * 60 * 60 * 1000);
	} else if (expiryType === "1week") {
		expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
	} else if (expiryType === "1month") {
		expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
	} else if (expiryType === "1year") {
		expiresAt = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
	} else if (expiryType === "custom-date" && customDate) {
		expiresAt = new Date(customDate);
	} else if (expiryType === "custom-duration" && customAmount && customUnit) {
		const amount = parseInt(customAmount, 10);
		if (!Number.isNaN(amount) && amount > 0) {
			const multipliers: Record<string, number> = {
				days: 24 * 60 * 60 * 1000,
				months: 30 * 24 * 60 * 60 * 1000,
				years: 365 * 24 * 60 * 60 * 1000,
			};
			if (multipliers[customUnit]) {
				expiresAt = new Date(Date.now() + amount * multipliers[customUnit]);
			}
		}
	}

	const key = generateLicenseKey();

	await db().insert(licenseKeys).values({
		id: randomUUID(),
		key,
		name: name.trim(),
		expiresAt,
		createdAt: new Date(),
	});

	revalidatePath("/admin/licenses");
	return { key };
}

export async function revokeLicense(id: string) {
	await db()
		.update(licenseKeys)
		.set({ revokedAt: new Date() })
		.where(eq(licenseKeys.id, id));
	revalidatePath("/admin/licenses");
}

export async function restoreLicense(id: string) {
	await db()
		.update(licenseKeys)
		.set({ revokedAt: null })
		.where(eq(licenseKeys.id, id));
	revalidatePath("/admin/licenses");
}

export async function deleteLicense(id: string) {
	await db().delete(licenseKeys).where(eq(licenseKeys.id, id));
	revalidatePath("/admin/licenses");
}
