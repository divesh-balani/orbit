import { db } from "@orbit/database";
import { licenseKeys } from "@orbit/database/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const body = await request.json().catch(() => null);
	const key = body?.key;

	if (!key || typeof key !== "string") {
		return NextResponse.json(
			{ valid: false, error: "Missing key" },
			{ status: 400 },
		);
	}

	const [license] = await db()
		.select()
		.from(licenseKeys)
		.where(eq(licenseKeys.key, key.trim().toUpperCase()))
		.limit(1);

	if (!license) {
		return NextResponse.json({ valid: false, error: "Invalid license key" });
	}

	if (license.revokedAt) {
		return NextResponse.json({
			valid: false,
			error: "License has been revoked",
		});
	}

	if (license.expiresAt && new Date(license.expiresAt) < new Date()) {
		return NextResponse.json({
			valid: false,
			error: "License has expired",
			expiresAt: license.expiresAt,
		});
	}

	return NextResponse.json({
		valid: true,
		name: license.name,
		expiresAt: license.expiresAt ?? null,
	});
}
