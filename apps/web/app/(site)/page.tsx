import Link from "next/link";

export default function Home() {
	return (
		<main className="min-h-screen flex items-center justify-center bg-gray-1">
			<div className="text-center max-w-lg px-6">
				<div className="size-20 rounded-2xl bg-blue-500 flex items-center justify-center text-white font-bold text-3xl mx-auto mb-6">
					O
				</div>
				<h1 className="text-4xl font-bold text-gray-12 mb-4">Orbit</h1>
				<p className="text-lg text-gray-10 mb-2">
					A personal screen recorder, forked from the open-source{" "}
					<a
						href="https://github.com/CapSoftware/Cap"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-9 hover:text-blue-8 font-medium"
					>
						Cap
					</a>{" "}
					project.
				</p>
				<p className="text-sm text-gray-9 mb-8">
					All recordings stay local. No cloud. No tracking.
				</p>
				<Link
					href="/login?callbackUrl=/admin/licenses"
					className="inline-flex items-center px-5 py-2.5 bg-gray-12 text-gray-1 rounded-lg font-medium hover:bg-gray-11 transition-colors"
				>
					Admin
				</Link>
			</div>
		</main>
	);
}
