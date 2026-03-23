"use client";

import { Logo } from "@orbit/ui";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="p-5">
			<div
				style={{ boxShadow: "0px 2px 8px rgba(18, 22, 31, 0.02)" }}
				className="mx-auto max-w-[1400px] bg-gray-1 border-[1px] border-gray-200 p-8 lg:p-12 rounded-[20px] mb-10"
			>
				<div className="flex flex-col items-center text-center space-y-4">
					<Logo className="w-[104px] h-auto mx-auto" />
					<p className="max-w-sm text-gray-12">
						A personal local-only screen recorder. Forked from the open source{" "}
						<a
							href="https://cap.so/"
							target="_blank"
							rel="noopener noreferrer"
							className="underline hover:text-gray-10"
						>
							Cap
						</a>{" "}
						project.
					</p>
					<div className="flex gap-6 pt-2">
						<Link
							href="/download"
							className="text-sm text-gray-10 hover:text-gray-12"
						>
							Download
						</Link>
						<Link
							href="/login"
							className="text-sm text-gray-10 hover:text-gray-12"
						>
							Sign in
						</Link>
					</div>
					<p className="pt-4 text-sm text-gray-9">
						© {new Date().getFullYear()}
					</p>
					<div className="flex justify-center space-x-10">
						<Link href="/terms" className="text-sm text-gray-8">
							Terms of Service
						</Link>
						<Link href="/privacy" className="text-sm text-gray-8">
							Privacy Policy
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};
