"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import { addAdmin, removeAdmin, resendInvite } from "./actions";

const MASTER_ADMIN = "diveshb2k@gmail.com";

type Admin = {
	id: string;
	email: string;
	addedAt: Date;
	addedBy: string | null;
};

export function AdminsClient({ admins }: { admins: Admin[] }) {
	const [email, setEmail] = useState("");
	const [isPending, startTransition] = useTransition();

	const handleAdd = (e: React.FormEvent) => {
		e.preventDefault();
		const normalized = email.trim().toLowerCase();
		if (!normalized) return;
		setEmail("");
		startTransition(async () => {
			await addAdmin(normalized);
			toast.success(`Invite sent to ${normalized}`);
		});
	};

	const handleRemove = (id: string, adminEmail: string) => {
		if (!confirm(`Remove ${adminEmail} as admin?`)) return;
		startTransition(async () => {
			await removeAdmin(id);
			toast.success("Admin removed");
		});
	};

	const handleResend = (adminEmail: string) => {
		startTransition(async () => {
			await resendInvite(adminEmail);
			toast.success(`Invite resent to ${adminEmail}`);
		});
	};

	return (
		<>
			<div className="overflow-hidden rounded-xl border border-gray-5 bg-white">
				<div className="flex items-center justify-between border-b border-gray-5 px-6 py-4">
					<p className="text-sm text-gray-9">
						{admins.length} admin{admins.length !== 1 ? "s" : ""}
					</p>
					<form onSubmit={handleAdd} className="flex gap-2">
						<input
							type="email"
							placeholder="admin@example.com"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="rounded-lg border border-gray-5 px-3 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-56"
						/>
						<button
							type="submit"
							disabled={isPending || !email.trim()}
							className="rounded-lg bg-gray-12 px-4 py-1.5 text-sm font-medium text-gray-1 hover:opacity-90 disabled:opacity-50 transition-opacity"
						>
							Add & Invite
						</button>
					</form>
				</div>

				{admins.length === 0 ? (
					<div className="px-6 py-12 text-center text-sm text-gray-9">
						No other admins yet.
					</div>
				) : (
					<table className="w-full text-sm">
						<thead>
							<tr className="border-b border-gray-5 bg-gray-1">
								<th className="px-6 py-3 text-left font-medium text-gray-9">
									Email
								</th>
								<th className="px-6 py-3 text-left font-medium text-gray-9">
									Added
								</th>
								<th className="px-6 py-3 text-right font-medium text-gray-9">
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{admins.map((admin) => (
								<tr
									key={admin.id}
									className="border-b border-gray-5 last:border-0 hover:bg-gray-1/50"
								>
									<td className="px-6 py-4 font-medium text-gray-12">
										{admin.email}
									</td>
									<td className="px-6 py-4 text-gray-9">
										{admin.addedAt.toLocaleDateString()}
									</td>
									<td className="px-6 py-4 text-right">
										<div className="flex items-center justify-end gap-3">
											<button
												type="button"
												onClick={() => handleResend(admin.email)}
												disabled={isPending}
												className="text-xs text-blue-600 hover:text-blue-800 disabled:opacity-50"
											>
												Resend invite
											</button>
											{admin.email !== MASTER_ADMIN && (
												<button
													type="button"
													onClick={() => handleRemove(admin.id, admin.email)}
													disabled={isPending}
													className="text-xs text-red-600 hover:text-red-800 disabled:opacity-50"
												>
													Remove
												</button>
											)}
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				)}
			</div>
		</>
	);
}
