import { neon } from "@neondatabase/serverless";
import { sql } from "drizzle-orm";
import type { AnyPgColumn } from "drizzle-orm/pg-core";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";

let _cached: ReturnType<typeof drizzle<typeof schema>> | undefined;

export const db = () => {
	if (!_cached) {
		const neonClient = neon(process.env.DATABASE_URL!);
		_cached = drizzle({ client: neonClient, schema });
	}
	return _cached;
};

export const updateIfDefined = <T>(v: T | undefined, col: AnyPgColumn) =>
	sql`COALESCE(${v === undefined ? sql`NULL` : v}, ${col})`;
