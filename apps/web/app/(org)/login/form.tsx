"use client";

import { Button, Input } from "@orbit/ui";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { Suspense, useState } from "react";
import { toast } from "sonner";

function LoginFormInner() {
	const searchParams = useSearchParams();
	const callbackUrl = searchParams?.get("callbackUrl") || "/admin";
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email || !password) return;
		setLoading(true);
		const res = await signIn("credentials", {
			email: email.trim().toLowerCase(),
			password,
			callbackUrl,
			redirect: false,
		});
		setLoading(false);
		if (res?.error) {
			toast.error("Invalid email or password");
		} else if (res?.url) {
			window.location.href = res.url;
		}
	};

	return (
		<div className="w-[calc(100%-5%)] p-[28px] max-w-[432px] bg-gray-3 border border-gray-5 rounded-2xl">
			<div className="flex flex-col items-center mb-7">
				<Link href="/" className="mb-4">
					<div className="size-12 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
						O
					</div>
				</Link>
				<h1 className="text-2xl font-semibold text-gray-12">
					Sign in to Orbit
				</h1>
			</div>
			<form onSubmit={handleSubmit} className="flex flex-col space-y-3">
				<Input
					id="email"
					name="email"
					type="email"
					placeholder="admin@example.com"
					autoComplete="email"
					required
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					autoFocus
				/>
				<Input
					id="password"
					name="password"
					type="password"
					placeholder="Password"
					autoComplete="current-password"
					required
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button variant="dark" type="submit" disabled={loading}>
					{loading ? "Signing in..." : "Sign in"}
				</Button>
			</form>
			<div className="mt-4 text-center">
				<Link
					href="/forgot-password"
					className="text-sm text-gray-9 hover:text-gray-12 transition-colors"
				>
					Forgot password?
				</Link>
			</div>
		</div>
	);
}

export function LoginForm() {
	return (
		<Suspense
			fallback={
				<div className="w-[432px] h-64 bg-gray-3 rounded-2xl animate-pulse" />
			}
		>
			<LoginFormInner />
		</Suspense>
	);
}
