import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@orbit/database/auth/auth-options";

const ADMIN_EMAIL = "diveshb2k@gmail.com";

export default async function AdminLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions());
	if (!session?.user?.email || session.user.email !== ADMIN_EMAIL) {
		redirect("/login?next=/admin/licenses");
	}

	return (
		<div className="min-h-screen bg-gray-50">
			<header className="border-b border-gray-200 bg-white">
				<div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
					<h1 className="text-lg font-semibold text-gray-900">Orbit Admin</h1>
					<nav className="flex items-center gap-6 text-sm font-medium text-gray-600">
						<a href="/admin/licenses" className="hover:text-gray-900">
							Licenses
						</a>
					</nav>
				</div>
			</header>
			<main className="mx-auto max-w-5xl px-6 py-10">{children}</main>
		</div>
	);
}
