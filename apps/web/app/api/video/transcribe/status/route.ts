import { db } from "@orbit/database";
import { getCurrentUser } from "@orbit/database/auth/session";
import { videos } from "@orbit/database/schema";
import type { Video } from "@orbit/web-domain";
import { eq } from "drizzle-orm";
import type { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
	const user = await getCurrentUser();
	const url = new URL(request.url);
	const videoId = url.searchParams.get("videoId") as Video.VideoId;

	if (!user) {
		return Response.json({ auth: false }, { status: 401 });
	}

	if (!videoId) {
		return Response.json(
			{ error: true, message: "videoId not supplied" },
			{ status: 400 },
		);
	}

	const video = await db().select().from(videos).where(eq(videos.id, videoId));

	if (video.length === 0 || !video[0]) {
		return Response.json(
			{ error: true, message: "Video does not exist" },
			{ status: 404 },
		);
	}

	return Response.json(
		{ transcriptionStatus: video[0].transcriptionStatus },
		{ status: 200 },
	);
}
