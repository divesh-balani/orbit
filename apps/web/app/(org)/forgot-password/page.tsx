"use client";

import Link from "next/link";
import { useState } from "react";
import { requestPasswordReset } from "./actions";

export default function ForgotPasswordPage() {
	const [email, setEmail] = useState("");
	const [submitted, setSubmitted] = useState(false);
	const [loading, setLoading] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!email.trim()) return;
		setLoading(true);
		await requestPasswordReset(email);
		setLoading(false);
		setSubmitted(true);
	};

	return (
		<div className="relative flex h-screen w-full items-center justify-center bg-gray-2">
			<Link
				href="/login"
				className="absolute left-10 top-10 text-sm text-gray-10 hover:text-gray-12"
			>
				← Back to login
			</Link>
			<div className="w-[calc(100%-5%)] p-[28px] max-w-[432px] bg-gray-3 border border-gray-5 rounded-2xl">
				<div className="flex flex-col items-center mb-7">
					<Link href="/" className="mb-4">
						<div className="size-12 rounded-xl bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
							O
						</div>
					</Link>
					<h1 className="text-2xl font-semibold text-gray-12">
						Forgot password
					</h1>
					<p className="text-sm text-gray-10 mt-1 text-center">
						Enter your admin email to receive a reset link
					</p>
				</div>
				{submitted ? (
					<div className="text-center py-4">
						<p className="text-sm text-gray-11">
							If that email belongs to an admin account, you'll receive a reset
							link shortly.
						</p>
						<Link
							href="/login"
							className="mt-4 inline-block text-sm text-blue-600 hover:underline"
						>
							Back to login
						</Link>
					</div>
				) : (
					<form onSubmit={handleSubmit} className="flex flex-col space-y-3">
						<input
							type="email"
							placeholder="admin@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							autoFocus
							className="w-full rounded-lg border border-gray-5 bg-gray-2 px-3 py-2 text-sm text-gray-12 placeholder:text-gray-9 focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						<button
							type="submit"
							disabled={loading || !email.trim()}
							className="w-full rounded-lg bg-gray-12 py-2 text-sm font-medium text-gray-1 hover:opacity-90 disabled:opacity-50 transition-opacity"
						>
							{loading ? "Sending..." : "Send reset link"}
						</button>
					</form>
				)}
			</div>
		</div>
	);
}
