import { db } from "@orbit/database";
import {
	type EffectiveDesktopAccessStatus,
	getDefaultDesktopAccessGrantInsert,
	resolveEffectiveDesktopAccessStatus,
} from "@orbit/database/auth/desktop-access";
import { isRootAdminEmail } from "@orbit/database/auth/root-admin";
import { getCurrentUser } from "@orbit/database/auth/session";
import { desktopAccessGrants, users } from "@orbit/database/schema";
import { desc, eq } from "drizzle-orm";

type DbUser = typeof users.$inferSelect;
type DbDesktopAccessGrant = typeof desktopAccessGrants.$inferSelect;

export type DesktopAccessState = {
	userId: string;
	email: string;
	status: EffectiveDesktopAccessStatus;
	grantStatus: DbDesktopAccessGrant["status"] | null;
	validUntil: number | null;
	approvedAt: number | null;
	revokedAt: number | null;
	approvedByUserId: string | null;
	isRootAdmin: boolean;
	checkedAt: number;
};

export type DesktopAccessAdminRow = DesktopAccessState & {
	name: string | null;
	lastName: string | null;
	createdAt: number;
};

const toTimestamp = (value?: Date | null) => value?.getTime() ?? null;

export function serializeDesktopAccessState(
	user: Pick<DbUser, "id" | "email">,
	grant: DbDesktopAccessGrant | null | undefined,
	now = new Date(),
): DesktopAccessState {
	return {
		userId: user.id,
		email: user.email,
		status: resolveEffectiveDesktopAccessStatus(grant, user.email, now),
		grantStatus: grant?.status ?? null,
		validUntil: toTimestamp(grant?.validUntil),
		approvedAt: toTimestamp(grant?.approvedAt),
		revokedAt: toTimestamp(grant?.revokedAt),
		approvedByUserId: grant?.approvedByUserId ?? null,
		isRootAdmin: isRootAdminEmail(user.email),
		checkedAt: now.getTime(),
	};
}

export async function ensureDesktopAccessGrant(
	user: Pick<DbUser, "id" | "email">,
) {
	const [existingGrant] = await db()
		.select()
		.from(desktopAccessGrants)
		.where(eq(desktopAccessGrants.userId, user.id))
		.limit(1);

	if (existingGrant) return existingGrant;

	const values = getDefaultDesktopAccessGrantInsert(user.id, user.email);
	await db().insert(desktopAccessGrants).values(values);

	return {
		userId: values.userId,
		status: values.status,
		validUntil: values.validUntil,
		approvedByUserId: values.approvedByUserId,
		approvedAt: values.approvedAt,
		revokedAt: values.revokedAt,
		createdAt: new Date(),
		updatedAt: new Date(),
	} satisfies DbDesktopAccessGrant;
}

export async function getDesktopAccessStateForUser(
	user: Pick<DbUser, "id" | "email">,
) {
	const grant = await ensureDesktopAccessGrant(user);
	return serializeDesktopAccessState(user, grant);
}

export async function getRootAdminUser() {
	const currentUser = await getCurrentUser();
	if (!currentUser || !isRootAdminEmail(currentUser.email)) return null;
	return currentUser;
}

export async function requireRootAdminUser() {
	const currentUser = await getRootAdminUser();
	if (!currentUser) throw new Error("Not authorized");
	return currentUser;
}

export async function listDesktopAccessUsers(): Promise<
	DesktopAccessAdminRow[]
> {
	const now = new Date();
	const rows = await db()
		.select({
			user: users,
			grant: desktopAccessGrants,
		})
		.from(users)
		.leftJoin(desktopAccessGrants, eq(users.id, desktopAccessGrants.userId))
		.orderBy(desc(users.createdAt));

	return rows.map((row) => ({
		...serializeDesktopAccessState(
			row.user as DbUser,
			(row.grant as DbDesktopAccessGrant | null) ?? null,
			now,
		),
		name: row.user.name,
		lastName: row.user.lastName,
		createdAt: row.user.createdAt.getTime(),
	}));
}
