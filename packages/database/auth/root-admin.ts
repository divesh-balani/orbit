import { serverEnv } from "@orbit/env";

const DEFAULT_ROOT_ADMIN_EMAILS = ["diveshb2k@gmail.com"];

export const getRootAdminEmails = () => {
	const configured = serverEnv()
		.ORBIT_ROOT_ADMIN_EMAILS?.split(",")
		.map((email) => email.trim().toLowerCase())
		.filter((email) => email.length > 0);

	return [...new Set([...(configured ?? []), ...DEFAULT_ROOT_ADMIN_EMAILS])];
};

export const isRootAdminEmail = (email?: string | null) => {
	if (!email) return false;
	return getRootAdminEmails().includes(email.trim().toLowerCase());
};
