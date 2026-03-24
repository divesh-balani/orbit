import { db } from "@orbit/database";
import { licenseKeys } from "@orbit/database/schema";
import { eq } from "drizzle-orm";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
	let body: { key?: string };
	try {
		body = await req.json();
	} catch {
		return NextResponse.json(
			{ valid: false, error: "Invalid request" },
			{ status: 400 },
		);
	}

	const key = body.key?.trim().toUpperCase();
	if (!key) {
		return NextResponse.json(
			{ valid: false, error: "No key provided" },
			{ status: 400 },
		);
	}

	const [license] = await db()
		.select()
		.from(licenseKeys)
		.where(eq(licenseKeys.key, key))
		.limit(1);

	if (!license) {
		return NextResponse.json({ valid: false, error: "License key not found" });
	}

	if (license.revokedAt) {
		return NextResponse.json({
			valid: false,
			error: "License key has been revoked",
		});
	}

	if (license.expiresAt && license.expiresAt < new Date()) {
		return NextResponse.json({
			valid: false,
			error: "License key has expired",
		});
	}

	return NextResponse.json({
		valid: true,
		name: license.name,
		expiresAt: license.expiresAt?.toISOString() ?? null,
	});
}
