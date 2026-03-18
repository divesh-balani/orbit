"use client";

import { Button, Input } from "@orbit/ui";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";
import {
	approveDesktopUserAccess,
	revokeDesktopUserAccess,
} from "@/actions/admin/desktop-access";
import type { DesktopAccessAdminRow } from "@/lib/desktop-access";

type DesktopAccessStatus = DesktopAccessAdminRow["status"];
type StatusFilter = "all" | DesktopAccessStatus;

const statusLabels: Record<DesktopAccessStatus, string> = {
	pending: "Pending",
	approved: "Approved",
	revoked: "Revoked",
	expired: "Expired",
};

const statusClasses: Record<DesktopAccessStatus, string> = {
	pending: "bg-amber-50 text-amber-700 ring-amber-200",
	approved: "bg-emerald-50 text-emerald-700 ring-emerald-200",
	revoked: "bg-rose-50 text-rose-700 ring-rose-200",
	expired: "bg-slate-100 text-slate-700 ring-slate-200",
};

function formatUserName(user: DesktopAccessAdminRow) {
	return [user.name, user.lastName].filter(Boolean).join(" ") || user.email;
}

function formatUtc(value: number | null) {
	if (!value) return "No expiry";

	return `${new Intl.DateTimeFormat("en-US", {
		month: "short",
		day: "numeric",
		year: "numeric",
		hour: "numeric",
		minute: "2-digit",
		timeZone: "UTC",
		hour12: true,
	}).format(new Date(value))} UTC`;
}

function formatDateTimeInput(value: number | null) {
	const date = value
		? new Date(value)
		: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
	const year = date.getFullYear();
	const month = `${date.getMonth() + 1}`.padStart(2, "0");
	const day = `${date.getDate()}`.padStart(2, "0");
	const hour = `${date.getHours()}`.padStart(2, "0");
	const minute = `${date.getMinutes()}`.padStart(2, "0");

	return `${year}-${month}-${day}T${hour}:${minute}`;
}

function AccessRow({ user }: { user: DesktopAccessAdminRow }) {
	const router = useRouter();
	const [isPending, startTransition] = useTransition();
	const [customExpiry, setCustomExpiry] = useState(() =>
		formatDateTimeInput(user.validUntil),
	);
	const [error, setError] = useState<string | null>(null);

	const runAction = (action: () => Promise<void>) => {
		startTransition(async () => {
			setError(null);
			try {
				await action();
				router.refresh();
			} catch (actionError) {
				setError(
					actionError instanceof Error ? actionError.message : "Action failed",
				);
			}
		});
	};

	return (
		<div className="rounded-2xl border border-gray-3 bg-gray-1 p-5">
			<div className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
				<div className="space-y-2">
					<div className="flex flex-wrap items-center gap-2">
						<h3 className="text-base font-semibold text-gray-12">
							{formatUserName(user)}
						</h3>
						<span
							className={`inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1 ${statusClasses[user.status]}`}
						>
							{statusLabels[user.status]}
						</span>
						{user.isRootAdmin && (
							<span className="inline-flex items-center rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 ring-1 ring-blue-200">
								Root admin
							</span>
						)}
					</div>
					<div className="text-sm text-gray-11">{user.email}</div>
					<div className="flex flex-wrap gap-x-6 gap-y-1 text-xs text-gray-10">
						<span>Joined {formatUtc(user.createdAt)}</span>
						<span>Expires {formatUtc(user.validUntil)}</span>
						{user.approvedAt && (
							<span>Approved {formatUtc(user.approvedAt)}</span>
						)}
						{user.revokedAt && <span>Revoked {formatUtc(user.revokedAt)}</span>}
					</div>
				</div>
				<div className="grid gap-2 sm:grid-cols-2 xl:min-w-[460px]">
					<Button
						variant="dark"
						size="sm"
						disabled={isPending || user.isRootAdmin}
						onClick={() =>
							runAction(() =>
								approveDesktopUserAccess({
									userId: user.userId,
									window: "week",
								}),
							)
						}
					>
						Approve 1 week
					</Button>
					<Button
						variant="dark"
						size="sm"
						disabled={isPending || user.isRootAdmin}
						onClick={() =>
							runAction(() =>
								approveDesktopUserAccess({
									userId: user.userId,
									window: "month",
								}),
							)
						}
					>
						Approve 1 month
					</Button>
					<Button
						variant="dark"
						size="sm"
						disabled={isPending || user.isRootAdmin}
						onClick={() =>
							runAction(() =>
								approveDesktopUserAccess({
									userId: user.userId,
									window: "year",
								}),
							)
						}
					>
						Approve 1 year
					</Button>
					<Button
						variant="gray"
						size="sm"
						disabled={isPending || user.isRootAdmin}
						onClick={() =>
							runAction(() => revokeDesktopUserAccess(user.userId))
						}
					>
						Revoke access
					</Button>
					<div className="sm:col-span-2 flex flex-col gap-2 sm:flex-row">
						<Input
							type="datetime-local"
							value={customExpiry}
							onChange={(event) => setCustomExpiry(event.target.value)}
							disabled={isPending || user.isRootAdmin}
							className="flex-1"
						/>
						<Button
							variant="gray"
							size="sm"
							disabled={isPending || user.isRootAdmin || !customExpiry}
							onClick={() =>
								runAction(() =>
									approveDesktopUserAccess({
										userId: user.userId,
										window: {
											custom: new Date(customExpiry).toISOString(),
										},
									}),
								)
							}
						>
							Set custom UTC expiry
						</Button>
					</div>
					{error && (
						<p className="sm:col-span-2 text-xs text-rose-600">{error}</p>
					)}
				</div>
			</div>
		</div>
	);
}

export default function AccessAdmin({
	users,
}: {
	users: DesktopAccessAdminRow[];
}) {
	const [search, setSearch] = useState("");
	const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

	const counts = useMemo(
		() =>
			users.reduce(
				(acc, user) => {
					acc[user.status] += 1;
					return acc;
				},
				{
					pending: 0,
					approved: 0,
					revoked: 0,
					expired: 0,
				} satisfies Record<DesktopAccessStatus, number>,
			),
		[users],
	);

	const filteredUsers = useMemo(() => {
		const normalizedSearch = search.trim().toLowerCase();

		return users.filter((user) => {
			if (statusFilter !== "all" && user.status !== statusFilter) return false;
			if (!normalizedSearch) return true;

			return [
				user.email,
				user.name ?? "",
				user.lastName ?? "",
				formatUserName(user),
			]
				.join(" ")
				.toLowerCase()
				.includes(normalizedSearch);
		});
	}, [search, statusFilter, users]);

	return (
		<div className="space-y-6">
			<div className="rounded-3xl border border-gray-3 bg-gray-1 p-6">
				<div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
					<div className="space-y-2">
						<h1 className="text-2xl font-semibold text-gray-12">
							Desktop Access
						</h1>
						<p className="max-w-2xl text-sm text-gray-11">
							Approve new desktop users, renew access windows, and revoke
							desktop access without touching organization seats or Stripe
							state.
						</p>
					</div>
					<div className="relative w-full max-w-md">
						<Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-gray-9" />
						<Input
							value={search}
							onChange={(event) => setSearch(event.target.value)}
							placeholder="Search by name or email"
							className="pl-9"
						/>
					</div>
				</div>
				<div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
					{(
						[
							["pending", counts.pending],
							["approved", counts.approved],
							["expired", counts.expired],
							["revoked", counts.revoked],
						] as const
					).map(([status, count]) => (
						<button
							key={status}
							type="button"
							onClick={() =>
								setStatusFilter((current) =>
									current === status ? "all" : status,
								)
							}
							className={`rounded-2xl border p-4 text-left transition-colors ${
								statusFilter === status
									? "border-gray-12 bg-gray-12 text-gray-1"
									: "border-gray-3 bg-gray-2 text-gray-12 hover:border-gray-5"
							}`}
						>
							<div className="text-xs uppercase tracking-[0.14em] opacity-70">
								{statusLabels[status]}
							</div>
							<div className="mt-2 text-3xl font-semibold">{count}</div>
						</button>
					))}
				</div>
			</div>
			<div className="flex flex-wrap gap-2">
				{(["all", "pending", "approved", "expired", "revoked"] as const).map(
					(status) => (
						<button
							key={status}
							type="button"
							onClick={() => setStatusFilter(status)}
							className={`rounded-full px-3 py-1.5 text-sm font-medium transition-colors ${
								statusFilter === status
									? "bg-gray-12 text-gray-1"
									: "bg-gray-3 text-gray-11 hover:bg-gray-4 hover:text-gray-12"
							}`}
						>
							{status === "all" ? "All users" : statusLabels[status]}
						</button>
					),
				)}
			</div>
			<div className="space-y-4">
				{filteredUsers.length === 0 ? (
					<div className="rounded-2xl border border-dashed border-gray-4 bg-gray-1 px-6 py-12 text-center text-sm text-gray-10">
						No users match the current search or filter.
					</div>
				) : (
					filteredUsers.map((user) => (
						<AccessRow key={user.userId} user={user} />
					))
				)}
			</div>
		</div>
	);
}
