import { getCurrentUser } from "@orbit/database/auth/session";
import Link from "next/link";
import { redirect } from "next/navigation";
import { LoginForm } from "./form";

export const dynamic = "force-dynamic";

export default async function LoginPage({
	searchParams,
}: {
	searchParams: Promise<{ callbackUrl?: string }>;
}) {
	const [session, params] = await Promise.all([getCurrentUser(), searchParams]);
	if (session) {
		redirect(params.callbackUrl || "/dashboard");
	}
	return (
		<div className="relative flex h-screen w-full items-center justify-center bg-gray-2">
			<Link
				href="/"
				className="absolute left-10 top-10 text-sm text-gray-10 hover:text-gray-12"
			>
				← Home
			</Link>
			<LoginForm />
		</div>
	);
}
