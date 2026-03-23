"use client";

import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, LogoBadge } from "@orbit/ui";
import { motion } from "framer-motion";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Suspense, useEffect, useState } from "react";
import { toast } from "sonner";

const MotionInput = motion(Input);
const MotionLink = motion(Link);
const MotionButton = motion(Button);

export function LoginForm() {
	const searchParams = useSearchParams();
	const router = useRouter();
	const next = searchParams?.get("next");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const theme = Cookies.get("theme") || "light";

	useEffect(() => {
		theme === "dark"
			? (document.body.className = "dark")
			: (document.body.className = "light");
		return () => {
			document.body.className = "light";
		};
	}, [theme]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email || !password) return;

		setLoading(true);
		const result = await signIn("credentials", {
			email: email.trim().toLowerCase(),
			password,
			redirect: false,
			...(next && next.length > 0 ? { callbackUrl: next } : {}),
		});
		setLoading(false);

		if (result?.ok && !result?.error) {
			router.push(next || "/admin");
		} else {
			toast.error("Invalid email or password");
		}
	};

	return (
		<motion.div
			layout
			transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
			className="overflow-hidden relative w-[calc(100%-5%)] p-[28px] max-w-[432px] bg-gray-3 border border-gray-5 rounded-2xl"
		>
			<MotionLink layout="position" className="flex mx-auto size-fit" href="/">
				<LogoBadge className="size-12" />
			</MotionLink>

			<motion.div
				layout="position"
				className="flex flex-col justify-center items-center my-7 text-center"
			>
				<motion.h1
					layout="position"
					className="text-2xl font-semibold text-gray-12"
				>
					Sign in to Orbit
				</motion.h1>
				<motion.p layout="position" className="text-[16px] text-gray-10">
					Enter your email and password to continue.
				</motion.p>
			</motion.div>

			<Suspense>
				<form onSubmit={handleSubmit} className="flex flex-col space-y-3" suppressHydrationWarning>
					<MotionInput
						id="email"
						name="email"
						type="email"
						placeholder="you@example.com"
						autoComplete="email"
						required
						value={email}
						disabled={loading}
						onChange={(e) => setEmail(e.target.value.toLowerCase())}
						suppressHydrationWarning
					/>
					<MotionInput
						id="password"
						name="password"
						type="password"
						placeholder="Password"
						autoComplete="current-password"
						required
						value={password}
						disabled={loading}
						onChange={(e) => setPassword(e.target.value)}
						suppressHydrationWarning
					/>
					<MotionButton
						variant="dark"
						type="submit"
						disabled={loading}
						icon={<FontAwesomeIcon className="mr-1 size-4" icon={faLock} />}
					>
						{loading ? "Signing in..." : "Sign in"}
					</MotionButton>

					<p className="text-xs text-center text-gray-9">
						Forgot your password?{" "}
						<Link
							href="/reset-password"
							className="text-xs font-semibold text-blue-9 hover:text-blue-8"
						>
							Reset via email
						</Link>
					</p>
				</form>
			</Suspense>

			<motion.p
				layout="position"
				className="pt-5 text-xs text-center text-gray-9"
			>
				By signing in you agree to Orbit's{" "}
				<Link
					href="/terms"
					target="_blank"
					className="text-xs font-semibold text-gray-12 hover:text-blue-300"
				>
					Terms of Service
				</Link>{" "}
				and{" "}
				<Link
					href="/privacy"
					target="_blank"
					className="text-xs font-semibold text-gray-12 hover:text-blue-300"
				>
					Privacy Policy
				</Link>
				.
			</motion.p>
		</motion.div>
	);
}
