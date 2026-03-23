"use client";

import { Button } from "@orbit/ui";
import { motion } from "motion/react";
import Link from "next/link";
import { useDetectPlatform } from "hooks/useDetectPlatform";
import {
	getDownloadButtonText,
	getDownloadUrl,
	getPlatformIcon,
	PlatformIcons,
} from "@/utils/platform";

const fadeIn = {
	hidden: { opacity: 0, y: 20 },
	visible: (custom: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: custom * 0.1, duration: 0.5, ease: "easeOut" },
	}),
};

export const HomePage = () => {
	const { platform, isIntel } = useDetectPlatform();
	const loading = platform === null;

	return (
		<div className="flex flex-col items-center justify-center min-h-screen px-5 text-center">
			<div className="max-w-xl mx-auto">
				<motion.h1
					className="text-5xl font-medium text-black mb-4"
					initial="hidden"
					animate="visible"
					custom={1}
					variants={fadeIn}
				>
					Orbit
				</motion.h1>

				<motion.p
					className="text-xl text-zinc-500 mb-4"
					initial="hidden"
					animate="visible"
					custom={2}
					variants={fadeIn}
				>
					A personal local-only screen recorder for macOS and Windows.
				</motion.p>

				<motion.p
					className="text-sm text-zinc-400 mb-10"
					initial="hidden"
					animate="visible"
					custom={3}
					variants={fadeIn}
				>
					Forked from the open source{" "}
					<a
						href="https://cap.so/"
						target="_blank"
						rel="noopener noreferrer"
						className="underline hover:text-zinc-600"
					>
						Cap
					</a>{" "}
					project. This is a personal build — not an official product.
				</motion.p>

				<motion.div
					className="flex flex-wrap gap-4 justify-center mb-6"
					initial="hidden"
					animate="visible"
					custom={4}
					variants={fadeIn}
				>
					<Button
						variant="dark"
						href={
							platform === "windows"
								? "/download"
								: getDownloadUrl(platform, isIntel)
						}
						size="lg"
						className="font-medium"
					>
						{!loading && getPlatformIcon(platform)}
						{getDownloadButtonText(platform, loading, isIntel)}
					</Button>
					<Button
						variant="gray"
						href="/login"
						size="lg"
						className="font-medium"
					>
						Sign in
					</Button>
				</motion.div>

				<motion.div
					initial="hidden"
					animate="visible"
					custom={5}
					variants={fadeIn}
				>
					<PlatformIcons />
					<Link
						href="/download"
						className="mt-2 text-sm underline text-gray-10 hover:text-gray-12"
					>
						All download options
					</Link>
				</motion.div>
			</div>
		</div>
	);
};
