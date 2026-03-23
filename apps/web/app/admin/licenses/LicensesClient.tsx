"use client";

import { useRef, useState, useTransition } from "react";
import {
	createLicense,
	deleteLicense,
	restoreLicense,
	revokeLicense,
} from "./actions";

interface License {
	id: string;
	key: string;
	name: string;
	expiresAt: Date | null;
	revokedAt: Date | null;
	createdAt: Date;
}

function statusBadge(license: License) {
	if (license.revokedAt) {
		return (
			<span className="inline-flex items-center rounded-full bg-red-50 px-2 py-0.5 text-xs font-medium text-red-700 ring-1 ring-red-200">
				Revoked
			</span>
		);
	}
	if (license.expiresAt && new Date(license.expiresAt) < new Date()) {
		return (
			<span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-amber-200">
				Expired
			</span>
		);
	}
	return (
		<span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200">
			Active
		</span>
	);
}

function formatDate(d: Date | null) {
	if (!d) return "Never";
	return new Intl.DateTimeFormat("en-US", {
		year: "numeric",
		month: "short",
		day: "numeric",
	}).format(new Date(d));
}

function CopyButton({ value }: { value: string }) {
	const [copied, setCopied] = useState(false);
	const handle = () => {
		navigator.clipboard.writeText(value);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};
	return (
		<button
			type="button"
			onClick={handle}
			className="ml-2 rounded px-2 py-0.5 text-xs font-medium text-gray-500 ring-1 ring-gray-300 transition hover:bg-gray-100"
		>
			{copied ? "Copied!" : "Copy"}
		</button>
	);
}

function CreateModal({ onClose }: { onClose: () => void }) {
	const [expiryType, setExpiryType] = useState("1month");
	const [generatedKey, setGeneratedKey] = useState<string | null>(null);
	const [pending, startTransition] = useTransition();
	const formRef = useRef<HTMLFormElement>(null);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		startTransition(async () => {
			const result = await createLicense(fd);
			if (result?.key) {
				setGeneratedKey(result.key);
				formRef.current?.reset();
				setExpiryType("1month");
			}
		});
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
			<div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
				{generatedKey ? (
					<>
						<h2 className="text-lg font-semibold text-gray-900">
							License Created
						</h2>
						<p className="mt-1 text-sm text-gray-500">
							Copy this key now — it won't be shown again.
						</p>
						<div className="mt-4 flex items-center justify-between rounded-lg bg-gray-900 px-4 py-3">
							<span className="font-mono text-sm text-white">
								{generatedKey}
							</span>
							<CopyButton value={generatedKey} />
						</div>
						<button
							type="button"
							onClick={onClose}
							className="mt-4 w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
						>
							Done
						</button>
					</>
				) : (
					<>
						<div className="mb-5 flex items-center justify-between">
							<h2 className="text-lg font-semibold text-gray-900">
								New License
							</h2>
							<button
								type="button"
								onClick={onClose}
								className="text-gray-400 hover:text-gray-600"
							>
								✕
							</button>
						</div>
						<form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
							<div>
								<label
									htmlFor="name"
									className="mb-1 block text-sm font-medium text-gray-700"
								>
									License name
								</label>
								<input
									id="name"
									name="name"
									type="text"
									required
									placeholder="e.g. Gavin's license"
									className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
								/>
							</div>

							<div>
								<label
									htmlFor="expiryType"
									className="mb-1 block text-sm font-medium text-gray-700"
								>
									Expiry
								</label>
								<select
									id="expiryType"
									name="expiryType"
									value={expiryType}
									onChange={(e) => setExpiryType(e.target.value)}
									className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
								>
									<option value="never">Never expires</option>
									<option value="1day">1 day</option>
									<option value="1week">1 week</option>
									<option value="1month">1 month</option>
									<option value="1year">1 year</option>
									<option value="custom-duration">Custom duration</option>
									<option value="custom-date">Custom date</option>
								</select>
							</div>

							{expiryType === "custom-duration" && (
								<div className="flex items-center gap-2">
									<input
										name="customAmount"
										type="number"
										min="1"
										required
										placeholder="2"
										className="w-24 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
									/>
									<select
										name="customUnit"
										className="flex-1 rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
									>
										<option value="days">Days</option>
										<option value="months">Months</option>
										<option value="years">Years</option>
									</select>
								</div>
							)}

							{expiryType === "custom-date" && (
								<input
									name="customDate"
									type="date"
									required
									min={new Date().toISOString().split("T")[0]}
									className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm text-gray-900 outline-none transition focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
								/>
							)}

							<button
								type="submit"
								disabled={pending}
								className="w-full rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800 disabled:opacity-50"
							>
								{pending ? "Generating…" : "Generate License"}
							</button>
						</form>
					</>
				)}
			</div>
		</div>
	);
}

export function LicensesClient({ licenses }: { licenses: License[] }) {
	const [showCreate, setShowCreate] = useState(false);
	const [pending, startTransition] = useTransition();

	return (
		<>
			{showCreate && <CreateModal onClose={() => setShowCreate(false)} />}

			<div className="mb-6 flex items-center justify-between">
				<div>
					<h2 className="text-2xl font-semibold text-gray-900">Licenses</h2>
					<p className="mt-1 text-sm text-gray-500">
						{licenses.length} license{licenses.length !== 1 ? "s" : ""} total
					</p>
				</div>
				<button
					type="button"
					onClick={() => setShowCreate(true)}
					className="rounded-lg bg-gray-900 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-gray-800"
				>
					+ New License
				</button>
			</div>

			{licenses.length === 0 ? (
				<div className="rounded-xl border border-dashed border-gray-300 px-8 py-16 text-center text-sm text-gray-400">
					No licenses yet. Create one to get started.
				</div>
			) : (
				<div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
					<table className="w-full text-sm">
						<thead>
							<tr className="border-b border-gray-200 bg-gray-50 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
								<th className="px-5 py-3">Name</th>
								<th className="px-5 py-3">License Key</th>
								<th className="px-5 py-3">Expires</th>
								<th className="px-5 py-3">Created</th>
								<th className="px-5 py-3">Status</th>
								<th className="px-5 py-3 text-right">Actions</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-100">
							{licenses.map((license) => (
								<tr key={license.id} className="hover:bg-gray-50">
									<td className="px-5 py-4 font-medium text-gray-900">
										{license.name}
									</td>
									<td className="px-5 py-4">
										<div className="flex items-center">
											<span className="font-mono text-xs text-gray-600">
												{license.key}
											</span>
											<CopyButton value={license.key} />
										</div>
									</td>
									<td className="px-5 py-4 text-gray-600">
										{formatDate(license.expiresAt)}
									</td>
									<td className="px-5 py-4 text-gray-500">
										{formatDate(license.createdAt)}
									</td>
									<td className="px-5 py-4">{statusBadge(license)}</td>
									<td className="px-5 py-4 text-right">
										<div className="flex items-center justify-end gap-2">
											{license.revokedAt ? (
												<button
													type="button"
													disabled={pending}
													onClick={() =>
														startTransition(() => restoreLicense(license.id))
													}
													className="rounded px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-300 transition hover:bg-emerald-50 disabled:opacity-50"
												>
													Restore
												</button>
											) : (
												<button
													type="button"
													disabled={pending}
													onClick={() =>
														startTransition(() => revokeLicense(license.id))
													}
													className="rounded px-3 py-1 text-xs font-medium text-amber-700 ring-1 ring-amber-300 transition hover:bg-amber-50 disabled:opacity-50"
												>
													Revoke
												</button>
											)}
											<button
												type="button"
												disabled={pending}
												onClick={() => {
													if (
														confirm(
															`Delete "${license.name}"? This cannot be undone.`,
														)
													) {
														startTransition(() => deleteLicense(license.id));
													}
												}}
												className="rounded px-3 py-1 text-xs font-medium text-red-700 ring-1 ring-red-300 transition hover:bg-red-50 disabled:opacity-50"
											>
												Delete
											</button>
										</div>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</>
	);
}
