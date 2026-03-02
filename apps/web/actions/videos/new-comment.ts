"use server";

import { db } from "@orbit/database";
import { getCurrentUser } from "@orbit/database/auth/session";
import { nanoId } from "@orbit/database/helpers";
import { comments } from "@orbit/database/schema";
import type { ImageUpload } from "@orbit/web-domain";
import { Comment, type Video } from "@orbit/web-domain";
import { revalidatePath } from "next/cache";
import { createNotification } from "@/lib/Notification";

export async function newComment(data: {
	content: string;
	videoId: Video.VideoId;
	type: "text" | "emoji";
	authorImage: ImageUpload.ImageUrl | null;
	parentCommentId: Comment.CommentId;
	timestamp: number;
}) {
	const user = await getCurrentUser();

	if (!user) {
		throw new Error("User not authenticated");
	}

	const content = data.content;
	const videoId = data.videoId;
	const type = data.type;
	const parentCommentId = data.parentCommentId;
	const timestamp = data.timestamp;
	const conditionalType = parentCommentId
		? "reply"
		: type === "emoji"
			? "reaction"
			: "comment";

	if (!content || !videoId) {
		throw new Error("Content and videoId are required");
	}
	const id = Comment.CommentId.make(nanoId());

	const newComment = {
		id: id,
		authorId: user.id,
		type: type,
		content: content,
		videoId: videoId,
		timestamp: timestamp ?? null,
		parentCommentId: parentCommentId,
		createdAt: new Date(),
		updatedAt: new Date(),
	};

	await db().insert(comments).values(newComment);

	try {
		await createNotification({
			type: conditionalType,
			videoId,
			authorId: user.id,
			comment: { id, content },
			parentCommentId,
		});
	} catch (error) {
		console.error("Failed to create notification:", error);
	}

	// Add author name to the returned data
	const commentWithAuthor = {
		...newComment,
		authorName: user.name,
		authorImage: data.authorImage,
		sending: false,
	};

	revalidatePath(`/s/${videoId}`);

	return commentWithAuthor;
}
