import { eq } from "drizzle-orm";
import { nanoid } from "nanoid";
import { hashPassword } from "./crypto.ts";
import { db } from "./index.ts";
import { admins, users } from "./schema.ts";

const ADMIN_EMAIL = "diveshb2k@gmail.com";
const ADMIN_PASSWORD = "Supersecret123#";

const passwordHash = await hashPassword(ADMIN_PASSWORD);

const [existing] = await db()
	.select({ id: users.id })
	.from(users)
	.where(eq(users.email, ADMIN_EMAIL))
	.limit(1);

if (existing) {
	await db()
		.update(users)
		.set({ passwordHash })
		.where(eq(users.email, ADMIN_EMAIL));
	console.log("Updated admin user password hash.");
} else {
	await db().insert(users).values({
		id: nanoid(15),
		email: ADMIN_EMAIL,
		name: "Admin",
		passwordHash,
	});
	console.log("Created admin user.");
}

const [existingAdmin] = await db()
	.select({ id: admins.id })
	.from(admins)
	.where(eq(admins.email, ADMIN_EMAIL))
	.limit(1);

if (!existingAdmin) {
	await db().insert(admins).values({
		id: nanoid(15),
		email: ADMIN_EMAIL,
		addedBy: null,
	});
	console.log("Added master admin to admins table.");
}

process.exit(0);
