"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { resetPassword, validateResetToken } from "./actions";

function ResetPasswordForm() {
	const searchParams = useSearchParams();
	const token = searchParams.get("token") ?? "";
	const isSetup = searchParams.get("setup") === "true";

	const [validating, setValidating] = useState(true);
	const [tokenValid, setTokenValid] = useState(false);
	const [email, setEmail] = useState<string | null>(null);
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [loading, setLoading] = useState(false);
	const [done, setDone] = useState(false);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		if (!token) {
			setValidating(false);
			return;
		}
		validateResetToken(token).then((res) => {
			setTokenValid(res.valid);
			setEmail(res.email);
			setValidating(false);
		});
	}, [token]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (password !== confirm) {
			setError("Passwords do not match");
			return;
		}
		if (password.length < 8) {
			setError("Password must be at least 8 characters");
			return;
		}
		setLoading(true);
		setError(null);
		const res = await resetPassword(token, password);
		setLoading(false);
		if (res.success) {
			setDone(true);
		} else {
			setError(res.error ?? "Something went wrong");
		}
	};

	const title = isSetup ? "Set your password" : "Reset your password";

	return (
		<div className="relative flex h-screen w-full items-center justify-center bg-gray-2">
			<div className="w-[calc(100%-5%)] p-[28px] max-w-[432px] bg-gray-3 border border-gray-5 rounded-2xl">
				<div className="flex flex-col items-center mb-7">
					<Link href="/" className="mb-4">
						<div className="size-12 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
							O
						</div>
					</Link>
					<h1 className="text-2xl font-semibold text-gray-12">{title}</h1>
					{email && (
						<p className="text-sm text-gray-10 mt-1">{email}</p>
					)}
				</div>

				{validating && (
					<p className="text-sm text-gray-10 text-center">Validating link...</p>
				)}

				{!validating && !tokenValid && (
					<div className="text-center">
						<p className="text-sm text-red-600 mb-4">
							This link is invalid or has expired.
						</p>
						<Link
							href="/forgot-password"
							className="text-sm text-blue-600 hover:underline"
						>
							Request a new link
						</Link>
					</div>
				)}

				{!validating && tokenValid && !done && (
					<form onSubmit={handleSubmit} className="flex flex-col space-y-3">
						<input
							type="password"
							placeholder="New password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							autoFocus
							minLength={8}
							className="w-full rounded-lg border border-gray-5 bg-gray-2 px-3 py-2 text-sm text-gray-12 placeholder:text-gray-9 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<input
							type="password"
							placeholder="Confirm password"
							value={confirm}
							onChange={(e) => setConfirm(e.target.value)}
							required
							minLength={8}
							className="w-full rounded-lg border border-gray-5 bg-gray-2 px-3 py-2 text-sm text-gray-12 placeholder:text-gray-9 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						{error && (
							<p className="text-xs text-red-600">{error}</p>
						)}
						<button
							type="submit"
							disabled={loading || !password || !confirm}
							className="w-full rounded-lg bg-gray-12 py-2 text-sm font-medium text-gray-1 hover:opacity-90 disabled:opacity-50 transition-opacity"
						>
							{loading ? "Saving..." : isSetup ? "Set password" : "Reset password"}
						</button>
					</form>
				)}

				{done && (
					<div className="text-center">
						<p className="text-sm text-gray-11 mb-4">
							{isSetup
								? "Your password has been set. You can now sign in."
								: "Your password has been reset. You can now sign in."}
						</p>
						<Link
							href="/login"
							className="text-sm text-blue-600 hover:underline"
						>
							Go to login
						</Link>
					</div>
				)}
			</div>
		</div>
	);
}

export default function ResetPasswordPage() {
	return (
		<Suspense fallback={<div className="flex h-screen items-center justify-center"><p className="text-sm text-gray-10">Loading...</p></div>}>
			<ResetPasswordForm />
		</Suspense>
	);
}
