import type { Config } from "drizzle-kit";

const URL = process.env.DATABASE_URL;

if (!URL) throw new Error("DATABASE_URL must be set!");

export default {
	schema: "./schema.ts",
	out: "./migrations",
	dialect: "postgresql",
	dbCredentials: { url: URL },
	casing: "snake_case",
} satisfies Config;
