// @ts-check

import * as crypto from "node:crypto";
import * as fs from "node:fs/promises";
import {
	confirm,
	group,
	intro,
	isCancel,
	log,
	multiselect,
	outro,
	text,
} from "@clack/prompts";

const DOCKER_DB_ENVS = {
	url: "mysql://root:@localhost:3306/planetscale",
};

async function main() {
	intro("Welcome to the Orbit env setup CLI!");

	const targets = await multiselect({
		message: "Which apps will you be working on?",
		options: [
			{ value: "desktop", label: "Desktop" },
			{ value: "web", label: "Web" },
		],
		required: true,
	});

	if (isCancel(targets)) return;

	const file = await fs
		.readFile("./target/env-profiles/default.json", "utf8")
		.catch(() => null);
	let allEnvs = file ? JSON.parse(file) : {};

	const envs = {
		NODE_ENV: "development",
	};

	const hasWeb = targets.includes("web");
	const hasDesktop = targets.includes("desktop");

	/** @type {boolean | symbol} */
	let usingDockerEnvironment = false;

	if (hasWeb) {
		envs.VITE_SERVER_URL = "http://localhost:3000";
		envs.WEB_URL = "http://localhost:3000";
		envs.NEXTAUTH_URL = envs.WEB_URL;
		envs.WORKFLOWS_RPC_SECRET = crypto.randomBytes(32).toString("base64");
		envs.MEDIA_SERVER_URL = "http://localhost:3456";
		envs.MEDIA_SERVER_WEBHOOK_SECRET = crypto
			.randomBytes(32)
			.toString("base64");

		if (!allEnvs.NEXTAUTH_SECRET) {
			allEnvs.NEXTAUTH_SECRET = crypto.randomBytes(32).toString("base64");
			log.info("Generated NEXTAUTH_SECRET");
		}
		envs.NEXTAUTH_SECRET = allEnvs.NEXTAUTH_SECRET;

		if (!allEnvs.DATABASE_ENCRYPTION_KEY) {
			allEnvs.DATABASE_ENCRYPTION_KEY = crypto.randomBytes(32).toString("hex");
			log.info("Generated DATABASE_ENCRYPTION_KEY");
		}
		envs.DATABASE_ENCRYPTION_KEY = allEnvs.DATABASE_ENCRYPTION_KEY;

		usingDockerEnvironment = await confirm({
			message: "Will you be running MySQL via Docker?",
		});

		if (isCancel(usingDockerEnvironment)) return;
		if (!usingDockerEnvironment) {
			log.info("Database Envs");

			const dbValues = await group({
				DATABASE_URL: () =>
					text({
						message:
							"DATABASE_URL - Can be plain mysql:// or a PlanetScale https:// URL",
						placeholder:
							allEnvs.DATABASE_URL ??
							"mysql://root:@localhost:3306/planetscale",
						defaultValue:
							allEnvs.DATABASE_URL ??
							"mysql://root:@localhost:3306/planetscale",
					}),
			});

			envs.DATABASE_URL = dbValues.DATABASE_URL;
		} else {
			envs.DATABASE_URL = DOCKER_DB_ENVS.url;
		}

		envs.NEXT_PUBLIC_WEB_URL = envs.WEB_URL;
	}

	if (hasDesktop) {
		envs.RUST_BACKTRACE = "1";

		const values = await group(
			{
				VITE_SERVER_URL: () => {
					if (!hasWeb)
						return text({
							message: "VITE_SERVER_URL",
							placeholder: "https://orbit.so",
							defaultValue: "https://orbit.so",
						});
				},
				VITE_VERCEL_AUTOMATION_BYPASS_SECRET: () => {
					if (!hasWeb)
						return text({
							message:
								"VITE_VERCEL_AUTOMATION_BYPASS_SECRET - skip if you're not a Orbit team member",
							placeholder: allEnvs.VITE_VERCEL_AUTOMATION_BYPASS_SECRET,
							defaultValue: allEnvs.VITE_VERCEL_AUTOMATION_BYPASS_SECRET,
						});
				},
			},
			{ onCancel: () => process.exit(0) },
		);

		for (const [key, value] of Object.entries(values)) {
			if (value === undefined || value === "undefined") continue;
			envs[key] = value;
		}
	}

	await fs.writeFile(
		".env",
		Object.entries(envs)
			.map(([key, value]) => `${key}=${value}`)
			.join("\n"),
	);

	log.info(`Written ${Object.keys(envs).length} envs`);

	allEnvs = { ...allEnvs, ...envs };
	await fs.mkdir("./target/env-profiles", { recursive: true });
	await fs.writeFile(
		"./target/env-profiles/default.json",
		JSON.stringify(allEnvs, null, 4),
	);

	const DESKTOP_MSG = "'pnpm dev:desktop' to start the desktop app";
	const WEB_DOCKER_MSG =
		"'pnpm dev:web' to start the web app + Docker services";
	const WEB_MSG = "'pnpm web dev' to start the web app";

	if (hasWeb) {
		if (hasDesktop) {
			if (usingDockerEnvironment) {
				outro(`Run ${DESKTOP_MSG}, and ${WEB_DOCKER_MSG}`);
			} else {
				outro(`Run ${DESKTOP_MSG}, and ${WEB_MSG}`);
			}
		} else {
			if (usingDockerEnvironment) {
				outro(`Run ${WEB_DOCKER_MSG}`);
			} else {
				outro(`Run ${WEB_MSG}`);
			}
		}
	} else if (hasDesktop) {
		outro(`Run ${DESKTOP_MSG}`);
	}
}

await main();
