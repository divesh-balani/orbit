import type { Organization } from "~/utils/tauri";

export type AuthSecret =
	| { api_key: string }
	| { token: string; expires: number };

export type Plan = {
	upgraded: boolean;
	manual: boolean;
	last_checked: number;
};

export type DesktopAccessStatus =
	| "unauthenticated"
	| "pending"
	| "approved"
	| "revoked"
	| "expired";

export type DesktopAccessSnapshot = {
	status: DesktopAccessStatus;
	checkedAt?: number | null;
	leaseExpiresAt?: number | null;
	validUntil?: number | null;
	approvedAt?: number | null;
	revokedAt?: number | null;
	offline?: boolean;
	errorMessage?: string | null;
};

export type AuthStore = {
	secret: AuthSecret;
	user_id: string | null;
	plan: Plan | null;
	organizations?: Organization[];
	desktop_access?: DesktopAccessSnapshot | null;
};
