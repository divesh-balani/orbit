"use server";

import {
	CloudFrontClient,
	CreateInvalidationCommand,
} from "@aws-sdk/client-cloudfront";
import { db } from "@orbit/database";
import { getCurrentUser } from "@orbit/database/auth/session";
import { videos } from "@orbit/database/schema";
import { serverEnv } from "@orbit/env";
import { AwsCredentials, S3Buckets } from "@orbit/web-backend";
import { S3Bucket } from "@orbit/web-domain";
import { eq } from "drizzle-orm";
import { Effect, Option } from "effect";

import { MESSENGER_ADMIN_EMAIL } from "@/lib/messenger/constants";
import { runPromise } from "@/lib/server";

async function requireAdmin() {
	const user = await getCurrentUser();
	if (!user || user.email !== MESSENGER_ADMIN_EMAIL) {
		throw new Error("Unauthorized");
	}
	return user;
}

async function getVideoOrThrow(videoId: string) {
	const [video] = await db()
		.select({
			id: videos.id,
			ownerId: videos.ownerId,
			bucket: videos.bucket,
		})
		.from(videos)
		.where(eq(videos.id, videoId));

	if (!video) {
		throw new Error("Video not found");
	}
	return video;
}

export async function getVideoReplaceUploadUrl(videoId: string) {
	await requireAdmin();
	const video = await getVideoOrThrow(videoId);

	const fileKey = `${video.ownerId}/${video.id}/result.mp4`;

	const bucketIdOption = Option.fromNullable(video.bucket).pipe(
		Option.map((id) => S3Bucket.S3BucketId.make(id)),
	);

	const presignedPostData = await Effect.gen(function* () {
		const [bucket] = yield* S3Buckets.getBucketAccess(bucketIdOption);
		return yield* bucket.getPresignedPostUrl(fileKey, {
			Fields: { "Content-Type": "video/mp4" },
			Expires: 1800,
		});
	}).pipe(runPromise);

	return { presignedPostData };
}

export async function invalidateVideoCache(videoId: string) {
	await requireAdmin();
	const video = await getVideoOrThrow(videoId);

	if (video.bucket) {
		return;
	}

	const distributionId = serverEnv().ORBIT_CLOUDFRONT_DISTRIBUTION_ID;
	if (!distributionId) {
		return;
	}

	const fileKey = `${video.ownerId}/${video.id}/result.mp4`;

	const cloudfront = new CloudFrontClient({
		region: serverEnv().ORBIT_AWS_REGION || "us-east-1",
		credentials: await runPromise(
			Effect.map(AwsCredentials, (c) => c.credentials),
		),
	});

	await cloudfront.send(
		new CreateInvalidationCommand({
			DistributionId: distributionId,
			InvalidationBatch: {
				CallerReference: `${Date.now()}`,
				Paths: {
					Quantity: 1,
					Items: [`/${fileKey}`],
				},
			},
		}),
	);
}
