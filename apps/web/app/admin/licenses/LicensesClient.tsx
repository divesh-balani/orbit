"use client";

import { useState, useTransition } from "react";
import { toast } from "sonner";
import {
	createLicense,
	deleteLicense,
	restoreLicense,
	revokeLicense,
} from "./actions";

type License = {
	id: string;
	key: string;
	name: string;
	createdAt: Date;
	expiresAt: Date | null;
	revokedAt: Date | null;
};

function getLicenseStatus(license: License): "active" | "revoked" | "expired" {
	if (license.revokedAt) return "revoked";
	if (license.expiresAt && license.expiresAt < new Date()) return "expired";
	return "active";
}

function StatusBadge({ status }: { status: "active" | "revoked" | "expired" }) {
	const styles = {
		active: "bg-green-100 text-green-800",
		revoked: "bg-red-100 text-red-800",
		expired: "bg-gray-100 text-gray-600",
	};
	return (
		<span
			className={`px-2 py-0.5 rounded-full text-xs font-medium ${styles[status]}`}
		>
			{status.charAt(0).toUpperCase() + status.slice(1)}
		</span>
	);
}

function CopyButton({ text }: { text: string }) {
	const [copied, setCopied] = useState(false);
	return (
		<button
			type="button"
			onClick={() => {
				navigator.clipboard.writeText(text);
				setCopied(true);
				setTimeout(() => setCopied(false), 1500);
			}}
			className="ml-2 text-xs text-gray-9 hover:text-gray-12 transition-colors"
		>
			{copied ? "Copied!" : "Copy"}
		</button>
	);
}

function CreateModal({ onClose }: { onClose: () => void }) {
	const [name, setName] = useState("");
	const [expiryType, setExpiryType] = useState<
		"never" | "1day" | "1month" | "1year" | "custom_duration" | "custom_date"
	>("never");
	const [expiryValue, setExpiryValue] = useState("");
	const [isPending, startTransition] = useTransition();

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!name.trim()) {
			toast.error("Name is required");
			return;
		}
		startTransition(async () => {
			await createLicense(name, expiryType, expiryValue || undefined);
			toast.success("License created");
			onClose();
		});
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl">
				<h2 className="mb-4 text-lg font-semibold text-gray-12">
					New License Key
				</h2>
				<form onSubmit={handleSubmit} className="flex flex-col gap-4">
					<label className="block">
						<span className="mb-1 block text-sm font-medium text-gray-11">
							Name
						</span>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							placeholder="e.g. John Doe"
							className="w-full rounded-lg border border-gray-5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
					</label>
					<label className="block">
						<span className="mb-1 block text-sm font-medium text-gray-11">
							Expiry
						</span>
						<select
							value={expiryType}
							onChange={(e) =>
								setExpiryType(e.target.value as typeof expiryType)
							}
							className="w-full rounded-lg border border-gray-5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						>
							<option value="never">Never</option>
							<option value="1day">1 Day</option>
							<option value="1month">1 Month</option>
							<option value="1year">1 Year</option>
							<option value="custom_duration">Custom Duration</option>
							<option value="custom_date">Custom Date</option>
						</select>
					</label>
					{expiryType === "custom_duration" && (
						<label className="block">
							<span className="mb-1 block text-sm font-medium text-gray-11">
								Duration (e.g. "3 months", "2 weeks")
							</span>
							<input
								type="text"
								value={expiryValue}
								onChange={(e) => setExpiryValue(e.target.value)}
								placeholder="3 months"
								className="w-full rounded-lg border border-gray-5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</label>
					)}
					{expiryType === "custom_date" && (
						<label className="block">
							<span className="mb-1 block text-sm font-medium text-gray-11">
								Date
							</span>
							<input
								type="date"
								value={expiryValue}
								onChange={(e) => setExpiryValue(e.target.value)}
								className="w-full rounded-lg border border-gray-5 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</label>
					)}
					<div className="mt-2 flex justify-end gap-3">
						<button
							type="button"
							onClick={onClose}
							className="px-4 py-2 text-sm text-gray-10 transition-colors hover:text-gray-12"
						>
							Cancel
						</button>
						<button
							type="submit"
							disabled={isPending}
							className="rounded-lg bg-gray-12 px-4 py-2 text-sm font-medium text-gray-1 transition-colors hover:bg-gray-11 disabled:opacity-50"
						>
							{isPending ? "Creating..." : "Create"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export function LicensesClient({ licenses }: { licenses: License[] }) {
	const [showModal, setShowModal] = useState(false);
	const [isPending, startTransition] = useTransition();

	const handleRevoke = (id: string) => {
		startTransition(async () => {
			await revokeLicense(id);
			toast.success("License revoked");
		});
	};

	const handleRestore = (id: string) => {
		startTransition(async () => {
			await restoreLicense(id);
			toast.success("License restored");
		});
	};

	const handleDelete = (id: string) => {
		if (!confirm("Delete this license? This cannot be undone.")) return;
		startTransition(async () => {
			await deleteLicense(id);
			toast.success("License deleted");
		});
	};

	return (
		<>
			{showModal && <CreateModal onClose={() => setShowModal(false)} />}
			<div className="overflow-hidden rounded-xl border border-gray-5 bg-white">
				<div className="flex items-center justify-between border-b border-gray-5 px-6 py-4">
					<p className="text-sm text-gray-9">
						{licenses.length} license{licenses.length !== 1 ? "s" : ""}
					</p>
					<button
						type="button"
						onClick={() => setShowModal(true)}
						className="rounded-lg bg-gray-12 px-4 py-2 text-sm font-medium text-gray-1 transition-colors hover:bg-gray-11"
					>
						New License
					</button>
				</div>
				{licenses.length === 0 ? (
					<div className="px-6 py-12 text-center text-sm text-gray-9">
						No licenses yet. Create one to get started.
					</div>
				) : (
					<table className="w-full text-sm">
						<thead>
							<tr className="border-b border-gray-5 bg-gray-1">
								<th className="px-6 py-3 text-left font-medium text-gray-9">
									Name
								</th>
								<th className="px-6 py-3 text-left font-medium text-gray-9">
									Key
								</th>
								<th className="px-6 py-3 text-left font-medium text-gray-9">
									Created
								</th>
								<th className="px-6 py-3 text-left font-medium text-gray-9">
									Expires
								</th>
								<th className="px-6 py-3 text-left font-medium text-gray-9">
									Status
								</th>
								<th className="px-6 py-3 text-right font-medium text-gray-9">
									Actions
								</th>
							</tr>
						</thead>
						<tbody>
							{licenses.map((license) => {
								const status = getLicenseStatus(license);
								return (
									<tr
										key={license.id}
										className="border-b border-gray-5 last:border-0 hover:bg-gray-1/50"
									>
										<td className="px-6 py-4 font-medium text-gray-12">
											{license.name}
										</td>
										<td className="px-6 py-4">
											<span className="font-mono text-xs text-gray-10">
												{license.key}
											</span>
											<CopyButton text={license.key} />
										</td>
										<td className="px-6 py-4 text-gray-9">
											{license.createdAt.toLocaleDateString()}
										</td>
										<td className="px-6 py-4 text-gray-9">
											{license.expiresAt
												? license.expiresAt.toLocaleDateString()
												: "Never"}
										</td>
										<td className="px-6 py-4">
											<StatusBadge status={status} />
										</td>
										<td className="px-6 py-4 text-right">
											<div className="flex items-center justify-end gap-2">
												{status === "revoked" ? (
													<button
														type="button"
														onClick={() => handleRestore(license.id)}
														disabled={isPending}
														className="text-xs text-green-700 hover:text-green-900 disabled:opacity-50"
													>
														Restore
													</button>
												) : (
													<button
														type="button"
														onClick={() => handleRevoke(license.id)}
														disabled={isPending}
														className="text-xs text-orange-600 hover:text-orange-800 disabled:opacity-50"
													>
														Revoke
													</button>
												)}
												<button
													type="button"
													onClick={() => handleDelete(license.id)}
													disabled={isPending}
													className="text-xs text-red-600 hover:text-red-800 disabled:opacity-50"
												>
													Delete
												</button>
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					</table>
				)}
			</div>
		</>
	);
}
