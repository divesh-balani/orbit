/** @type {import('next').NextConfig} */

import("dotenv").then(({ config }) => config({ path: "../../.env" }));

import fs from "node:fs";
import path from "node:path";
const packageJson = JSON.parse(
	fs.readFileSync(path.resolve("./package.json"), "utf8"),
);
const { version } = packageJson;

const nextConfig = {
	reactStrictMode: true,
	serverExternalPackages: ["ffmpeg-static"],
	transpilePackages: [
		"@orbit/ui",
		"@orbit/utils",
		"@orbit/web-api-contract",
		"@orbit/web-domain",
		"@orbit/env",
		"@orbit/database",
		"next-mdx-remote",
	],
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		optimizePackageImports: [
			"@orbit/ui",
			"@orbit/utils",
			"lucide-react",
			"framer-motion",
			"motion",
			"@fortawesome/free-solid-svg-icons",
			"@fortawesome/free-brands-svg-icons",
			"@tanstack/react-query",
			"recharts",
			"@radix-ui/react-dialog",
			"@radix-ui/react-dropdown-menu",
			"@radix-ui/react-popover",
			"@radix-ui/react-select",
			"@radix-ui/react-slider",
			"@radix-ui/react-tooltip",
			"date-fns",
		],
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "**",
				port: "",
				pathname: "**",
			},
			{
				protocol: "https",
				hostname: "l.orbit.so",
				port: "",
				pathname: "**",
			},
			process.env.NODE_ENV === "development" && {
				protocol: "http",
				hostname: "localhost",
				port: "9000",
				pathname: "**",
			},
		].filter(Boolean),
	},
	env: {
		appVersion: version,
	},
	// If the NEXT_PUBLIC_DOCKER_BUILD environment variable is set to true, we are output nextjs to standalone ready for docker deployment
	output:
		process.env.NEXT_PUBLIC_DOCKER_BUILD === "true" ? "standalone" : undefined,
	// webpack: (config) => {
	// 	config.module.rules.push({
	// 		test: /\.(?:js|ts)$/,
	// 		use: [
	// 			{
	// 				loader: "babel-loader",
	// 				options: {
	// 					presets: ["next/babel"],
	// 					plugins: [
	// 						"@babel/plugin-transform-private-property-in-object",
	// 						"@babel/plugin-transform-private-methods",
	// 					],
	// 				},
	// 			},
	// 		],
	// 	});

	// 	return config;
	// },
};

export default nextConfig;
