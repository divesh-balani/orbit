"use server";

import { db } from "@orbit/database";
import { licenseKeys } from "@orbit/database/schema";
import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { revalidatePath } from "next/cache";

function generateLicenseKey(): string {
	const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	const group = () =>
		Array.from(
			{ length: 5 },
			() => chars[Math.floor(Math.random() * chars.length)],
		).join("");
	return `ORBIT-${group()}-${group()}-${group()}-${group()}-${group()}`;
}

function parseCustomDuration(value: string): Date | null {
	const now = new Date();
	const match = value
		.trim()
		.match(/^(\d+)\s*(day|days|week|weeks|month|months|year|years)$/i);
	if (!match) return null;
	const n = parseInt(match[1], 10);
	const unit = match[2].toLowerCase();
	if (unit.startsWith("day")) now.setDate(now.getDate() + n);
	else if (unit.startsWith("week")) now.setDate(now.getDate() + n * 7);
	else if (unit.startsWith("month")) now.setMonth(now.getMonth() + n);
	else if (unit.startsWith("year")) now.setFullYear(now.getFullYear() + n);
	return now;
}

export async function createLicense(
	name: string,
	expiryType:
		| "never"
		| "1day"
		| "1month"
		| "1year"
		| "custom_duration"
		| "custom_date",
	expiryValue?: string,
) {
	let expiresAt: Date | null = null;
	const now = new Date();

	if (expiryType === "1day") {
		expiresAt = new Date(now);
		expiresAt.setDate(expiresAt.getDate() + 1);
	} else if (expiryType === "1month") {
		expiresAt = new Date(now);
		expiresAt.setMonth(expiresAt.getMonth() + 1);
	} else if (expiryType === "1year") {
		expiresAt = new Date(now);
		expiresAt.setFullYear(expiresAt.getFullYear() + 1);
	} else if (expiryType === "custom_duration" && expiryValue) {
		expiresAt = parseCustomDuration(expiryValue);
	} else if (expiryType === "custom_date" && expiryValue) {
		expiresAt = new Date(expiryValue);
	}

	await db().insert(licenseKeys).values({
		id: nanoid(),
		key: generateLicenseKey(),
		name: name.trim(),
		expiresAt,
	});

	revalidatePath("/admin/licenses");
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
