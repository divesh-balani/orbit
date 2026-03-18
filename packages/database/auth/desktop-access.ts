import type { desktopAccessGrants } from "../schema.ts";
import { isRootAdminEmail } from "./root-admin.ts";

export type EffectiveDesktopAccessStatus =
	| "pending"
	| "approved"
	| "revoked"
	| "expired";

export type DesktopAccessGrant = typeof desktopAccessGrants.$inferSelect;

export const DESKTOP_OFFLINE_LEASE_MS = 7 * 24 * 60 * 60 * 1000;

export const getDefaultDesktopAccessGrant = (email?: string | null) => {
	if (isRootAdminEmail(email)) {
		return {
			status: "approved" as const,
			validUntil: null,
			approvedAt: new Date(),
			revokedAt: null,
		};
	}

	return {
		status: "pending" as const,
		validUntil: null,
		approvedAt: null,
		revokedAt: null,
	};
};

export const getDefaultDesktopAccessGrantInsert = (
	userId: string,
	email?: string | null,
) => {
	const grant = getDefaultDesktopAccessGrant(email);

	return {
		userId,
		status: grant.status,
		validUntil: grant.validUntil,
		approvedByUserId: null,
		approvedAt: grant.approvedAt,
		revokedAt: grant.revokedAt,
	};
};

export const resolveEffectiveDesktopAccessStatus = (
	grant: DesktopAccessGrant | null | undefined,
	email?: string | null,
	now = new Date(),
): EffectiveDesktopAccessStatus => {
	if (isRootAdminEmail(email)) return "approved";

	if (!grant) return "pending";
	if (grant.status === "revoked") return "revoked";
	if (grant.status === "approved") {
		if (grant.validUntil && grant.validUntil.getTime() <= now.getTime()) {
			return "expired";
		}
		return "approved";
	}

	return "pending";
};
