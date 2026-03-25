import { NextRequest, NextResponse } from "next/server";

const GITHUB_REPO = "divesh-balani/orbit";

export async function GET(request: NextRequest) {
	const platform = request.nextUrl.searchParams.get("platform");
	const arch = request.nextUrl.searchParams.get("arch") ?? "x86_64";

	const res = await fetch(
		`https://api.github.com/repos/${GITHUB_REPO}/releases/latest`,
		{
			headers: { Accept: "application/vnd.github+json" },
			next: { revalidate: 300 },
		},
	);

	if (!res.ok) {
		return NextResponse.json({ error: "Failed to fetch release" }, { status: 502 });
	}

	const release = await res.json();
	const version: string = release.tag_name.replace(/^v/, "");
	const assets: { name: string; browser_download_url: string }[] = release.assets;

	const findAsset = (suffix: string) =>
		assets.find((a) => a.name.endsWith(suffix))?.browser_download_url;

	const platforms: Record<string, { url: string | undefined; signature: string | undefined }> = {
		"darwin-x86_64": {
			url: findAsset(".tar.gz"),
			signature: undefined,
		},
		"darwin-aarch64": {
			url: findAsset(".tar.gz"),
			signature: undefined,
		},
		"windows-x86_64": {
			url: findAsset(".nsis.zip"),
			signature: undefined,
		},
	};

	for (const [key, val] of Object.entries(platforms)) {
		if (val.url) {
			const sigUrl = val.url + ".sig";
			const sigRes = await fetch(sigUrl).catch(() => null);
			if (sigRes?.ok) {
				val.signature = await sigRes.text();
			}
		}
	}

	const key = platform && arch ? `${platform}-${arch}` : null;
	const target = key ? platforms[key] : null;

	if (!target?.url || !target.signature) {
		return new NextResponse(null, { status: 204 });
	}

	return NextResponse.json({
		version,
		notes: release.body ?? "",
		pub_date: release.published_at,
		platforms: {
			[`${platform}-${arch}`]: {
				url: target.url,
				signature: target.signature,
			},
		},
	});
}
