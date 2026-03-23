"use client";

import { Button, Logo } from "@orbit/ui";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { useCurrentUser } from "../Layout/AuthContext";

export const Navbar = () => {
	const auth = useCurrentUser();
	const [showMobileMenu, setShowMobileMenu] = useState(false);

	return (
		<>
			<header className="fixed left-0 right-0 z-[51] animate-in fade-in slide-in-from-top-4 duration-500 top-4 lg:top-6">
				<nav className="p-2 mx-auto w-full max-w-[calc(100%-20px)] bg-white rounded-full border backdrop-blur-md lg:max-w-fit border-zinc-200 h-fit">
					<div className="flex gap-8 justify-between items-center mx-auto max-w-5xl h-full">
						<Link passHref href="/">
							<Logo
								className="transition-all duration-200 ease-out"
								viewBoxDimensions="0 0 120 40"
								style={{ width: 90, height: 40 }}
							/>
						</Link>

						<div className="hidden items-center space-x-2 lg:flex">
							<Button
								variant="outline"
								href="/download"
								size="sm"
								className="font-medium"
							>
								Download
							</Button>
							{!auth && (
								<Button
									variant="gray"
									href="/login"
									size="sm"
									className="font-medium"
								>
									Login
								</Button>
							)}
							<Button
								variant="dark"
								href={auth ? "/dashboard" : "/signup"}
								size="sm"
								className="font-medium"
							>
								{auth ? "Dashboard" : "Sign Up"}
							</Button>
						</div>

						<button
							type="button"
							className="flex lg:hidden"
							onClick={() => setShowMobileMenu(!showMobileMenu)}
						>
							<div className="flex flex-col gap-[5px] mr-1">
								<motion.div
									animate={{
										rotate: showMobileMenu ? 45 : 0,
										y: showMobileMenu ? 7 : 0,
									}}
									transition={{ duration: 0.2 }}
									className="w-6 h-0.5 bg-black"
								/>
								<motion.div
									animate={{
										opacity: showMobileMenu ? 0 : 1,
										x: showMobileMenu ? -5 : 0,
									}}
									transition={{ duration: 0.2 }}
									className="w-6 h-0.5 bg-black"
								/>
								<motion.div
									animate={{
										rotate: showMobileMenu ? -45 : 0,
										y: showMobileMenu ? -7 : 0,
									}}
									transition={{ duration: 0.2 }}
									className="w-6 h-0.5 bg-black"
								/>
							</div>
						</button>
					</div>
				</nav>
			</header>

			{showMobileMenu && (
				<div className="block overflow-auto fixed top-0 left-0 z-40 px-4 w-full h-full bg-gray-2">
					<div className="pb-12">
						<nav className="relative mt-36">
							<div className="flex flex-col gap-4 items-center">
								<Button
									variant="dark"
									href={auth ? "/dashboard" : "/signup"}
									size="lg"
									className="w-full font-medium"
									onClick={() => setShowMobileMenu(false)}
								>
									{auth ? "Dashboard" : "Sign Up"}
								</Button>
								{!auth && (
									<Button
										variant="gray"
										href="/login"
										size="lg"
										className="w-full font-medium"
										onClick={() => setShowMobileMenu(false)}
									>
										Login
									</Button>
								)}
								<Button
									variant="blue"
									href="/download"
									size="lg"
									className="w-full font-medium"
									onClick={() => setShowMobileMenu(false)}
								>
									Download App
								</Button>
							</div>
						</nav>
					</div>
				</div>
			)}
		</>
	);
};
