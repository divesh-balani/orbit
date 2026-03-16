// @ts-check

import * as fs from "node:fs/promises";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function resolveUpdaterConfig() {
	const repository =
		process.env.TAURI_UPDATER_REPOSITORY ||
		process.env.GITHUB_REPOSITORY ||
		"divesh-balani/orbit";
	const endpoints = process.env.TAURI_UPDATER_ENDPOINTS
		? process.env.TAURI_UPDATER_ENDPOINTS.split(",")
				.map((endpoint) => endpoint.trim())
				.filter(Boolean)
		: [`https://github.com/${repository}/releases/latest/download/latest.json`];
	const pubkey = process.env.TAURI_UPDATER_PUBLIC_KEY ?? "";

	return {
		plugins: {
			updater: {
				active: Boolean(pubkey),
				pubkey,
				endpoints,
				windows: {
					installMode: "passive",
				},
			},
		},
	};
}
/**
 * Deeply merges two objects
 *
 * @param {Object} target
 * @param {Object} source
 * @returns {Object}
 */
function deepMerge(target, source) {
	for (const key of Object.keys(source)) {
		if (
			source[key] instanceof Object &&
			key in target &&
			target[key] instanceof Object
		) {
			Object.assign(source[key], deepMerge(target[key], source[key]));
		}
	}
	return { ...target, ...source };
}

/**
 * Writes platform-specific tauri configs
 *
 * @param {NodeJS.Platform} platform
 * @param {{} | undefined} configOptions
 */
export async function createTauriPlatformConfigs(
	platform,
	configOptions = undefined,
) {
	const srcTauri = path.join(__dirname, "../src-tauri/");
	let baseConfig = {};
	let configFileName = null;

	console.log(`Updating Platform (${platform}) Tauri config...`);
	if (platform === "win32") {
		configFileName = "tauri.windows.conf.json";
		baseConfig = {
			...baseConfig,
			bundle: {
				targets: ["nsis"],
				resources: {
					"../../../target/ffmpeg/bin/*.dll": "./",
				},
			},
			...resolveUpdaterConfig(),
		};
	}

	if (platform === "darwin") {
		configFileName = "tauri.macos.conf.json";
		baseConfig = {
			...baseConfig,
			bundle: {
				targets: ["dmg"],
			},
			...resolveUpdaterConfig(),
		};
	}

	if (!configFileName) return;

	const mergedConfig = configOptions
		? deepMerge(baseConfig, configOptions)
		: baseConfig;
	await fs.writeFile(
		`${srcTauri}/${configFileName}`,
		JSON.stringify(mergedConfig, null, 2),
	);
}

async function main() {
	console.log("--- Preparing sidecars and configs...");
	await createTauriPlatformConfigs(process.platform);
	console.log("--- Preparation finished");
}

main().catch((err) => {
	console.error("\n--- Preparation Failed");
	console.error(err);
	console.error("---");
});
