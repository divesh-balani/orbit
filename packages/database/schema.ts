import type {
	Comment,
	Folder,
	ImageUpload,
	Organisation,
	S3Bucket,
	Space,
	User,
	Video,
} from "@orbit/web-domain";
import { sql } from "drizzle-orm";
import {
	bigint,
	boolean,
	customType,
	index,
	integer,
	json,
	pgTable,
	primaryKey,
	real,
	text,
	timestamp,
	unique,
	uniqueIndex,
	varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm/relations";

import { nanoIdLength } from "./helpers.ts";
import type { VideoMetadata } from "./types/index.ts";

const nanoId = customType<{ data: string; notNull: true }>({
	dataType() {
		return `varchar(${nanoIdLength})`;
	},
});
// TODO: This will replace `nanoId` in: https://github.com/CapSoftware/Orbit/pull/1105
const nanoIdRequired = (name: string) =>
	varchar(name, { length: nanoIdLength }).notNull();

const nanoIdNullable = customType<{ data: string; notNull: false }>({
	dataType() {
		return `varchar(${nanoIdLength})`;
	},
});

// Add a custom type for encrypted strings
const encryptedText = customType<{ data: string; notNull: true }>({
	dataType() {
		return "text";
	},
});

const encryptedTextNullable = customType<{ data: string; notNull: false }>({
	dataType() {
		return "text";
	},
});

export const users = pgTable(
	"users",
	{
		id: nanoId("id").notNull().primaryKey().$type<User.UserId>(),
		name: varchar("name", { length: 255 }),
		lastName: varchar("lastName", { length: 255 }),
		email: varchar("email", { length: 255 }).notNull(),
		emailVerified: timestamp("emailVerified"),
		image: varchar("image", { length: 255 }).$type<ImageUpload.ImageUrlOrKey>(),
		stripeCustomerId: varchar("stripeCustomerId", { length: 255 }),
		stripeSubscriptionId: varchar("stripeSubscriptionId", {
			length: 255,
		}),
		thirdPartyStripeSubscriptionId: varchar("thirdPartyStripeSubscriptionId", {
			length: 255,
		}),
		stripeSubscriptionStatus: varchar("stripeSubscriptionStatus", {
			length: 255,
		}),
		stripeSubscriptionPriceId: varchar("stripeSubscriptionPriceId", {
			length: 255,
		}),
		preferences: json("preferences")
			.$type<{
				notifications: {
					pauseComments: boolean;
					pauseReplies: boolean;
					pauseViews: boolean;
					pauseReactions: boolean;
				};
				// For analytics.
				// Adding in preferences so we don't have to
				// add a new column and can be dynamic going forward.
				trackedEvents?: {
					user_signed_up?: boolean;
				};
			} | null>()
			.default(null),
		activeOrganizationId: nanoId(
			"activeOrganizationId",
		).$type<Organisation.OrganisationId>(),
		created_at: timestamp("created_at").notNull().defaultNow(),
		updated_at: timestamp("updated_at").notNull().defaultNow(),
		onboardingSteps: json("onboardingSteps").$type<{
			welcome?: boolean;
			organizationSetup?: boolean;
			customDomain?: boolean;
			inviteTeam?: boolean;
			download?: boolean;
		}>(),
		onboarding_completed_at: timestamp("onboarding_completed_at"),
		customBucket: nanoIdNullable("customBucket"),
		inviteQuota: integer("inviteQuota").notNull().default(1),
		defaultOrgId:
			nanoIdNullable("defaultOrgId").$type<Organisation.OrganisationId>(),
		passwordHash: varchar("passwordHash", { length: 255 }),
	},
	(table) => ({
		emailIndex: uniqueIndex().on(table.email),
	}),
);

export const accounts = pgTable(
	"accounts",
	{
		id: nanoId("id").notNull().primaryKey(),
		userId: nanoId("userId").notNull(),
		type: varchar("type", { length: 255 }).notNull(),
		provider: varchar("provider", { length: 255 }).notNull(),
		providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
		access_token: text("access_token"),
		expires_in: integer("expires_in"),
		id_token: text("id_token"),
		refresh_token: text("refresh_token"),
		refresh_token_expires_in: integer("refresh_token_expires_in"),
		scope: varchar("scope", { length: 255 }),
		token_type: varchar("token_type", { length: 255 }),
		createdAt: timestamp("createdAt").defaultNow().notNull(),
		updatedAt: timestamp("updatedAt").defaultNow().notNull(),
		tempColumn: text("tempColumn"),
	},
	(table) => ({
		userIdIndex: index().on(table.userId),
		providerAccountIdIndex: index().on(
			table.providerAccountId,
		),
	}),
);

export const sessions = pgTable(
	"sessions",
	{
		id: nanoId("id").notNull().primaryKey(),
		sessionToken: varchar("sessionToken", { length: 255 }).notNull(),
		userId: nanoId("userId").notNull().$type<User.UserId>(),
		expires: timestamp("expires").notNull(),
		created_at: timestamp("created_at").notNull().defaultNow(),
		updated_at: timestamp("updated_at").notNull().defaultNow(),
	},
	(table) => ({
		sessionTokenIndex: uniqueIndex().on(table.sessionToken),
		userIdIndex: index().on(table.userId),
	}),
);

export const verificationTokens = pgTable("verification_tokens", {
	identifier: varchar("identifier", { length: 255 }).primaryKey().notNull(),
	token: varchar("token", { length: 255 }).unique().notNull(),
	expires: timestamp("expires").notNull(),
	created_at: timestamp("created_at").notNull().defaultNow(),
	updated_at: timestamp("updated_at").notNull().defaultNow(),
});

export const organizations = pgTable(
	"organizations",
	{
		id: nanoId("id")
			.notNull()
			.primaryKey()
			.$type<Organisation.OrganisationId>(),
		name: varchar("name", { length: 255 }).notNull(),
		ownerId: nanoId("ownerId").notNull().$type<User.UserId>(),
		metadata: json("metadata"),
		tombstoneAt: timestamp("tombstoneAt"),
		allowedEmailDomain: varchar("allowedEmailDomain", { length: 255 }),
		customDomain: varchar("customDomain", { length: 255 }),
		domainVerified: timestamp("domainVerified"),
		settings: json("settings").$type<{
			disableSummary?: boolean;
			disableCaptions?: boolean;
			disableChapters?: boolean;
			disableReactions?: boolean;
			disableTranscript?: boolean;
			disableComments?: boolean;
		}>(),
		iconUrl: varchar("iconUrl", {
			length: 1024,
		}).$type<ImageUpload.ImageUrlOrKey>(),
		createdAt: timestamp("createdAt").notNull().defaultNow(),
		updatedAt: timestamp("updatedAt").notNull().defaultNow(),
		workosOrganizationId: varchar("workosOrganizationId", { length: 255 }),
		workosConnectionId: varchar("workosConnectionId", { length: 255 }),
	},
	(table) => ({
		ownerIdTombstoneIndex: index().on(
			table.ownerId,
			table.tombstoneAt,
		),
		customDomainIndex: index().on(table.customDomain),
	}),
);

export type OrganisationMemberRole = "owner" | "member";
export const organizationMembers = pgTable(
	"organization_members",
	{
		id: nanoId("id").notNull().primaryKey(),
		userId: nanoId("userId").notNull().$type<User.UserId>(),
		organizationId: nanoId("organizationId")
			.notNull()
			.$type<Organisation.OrganisationId>(),
		role: varchar("role", { length: 255 })
			.notNull()
			.$type<OrganisationMemberRole>(),
		createdAt: timestamp("createdAt").notNull().defaultNow(),
		updatedAt: timestamp("updatedAt").notNull().defaultNow(),
	},
	(table) => ({
		organizationIdIndex: index().on(table.organizationId),
		userIdOrganizationIdIndex: index().on(
			table.userId,
			table.organizationId,
		),
	}),
);

export const organizationInvites = pgTable(
	"organization_invites",
	{
		id: nanoId("id").notNull().primaryKey(),
		organizationId: nanoId("organizationId")
			.notNull()
			.$type<Organisation.OrganisationId>(),
		invitedEmail: varchar("invitedEmail", { length: 255 }).notNull(),
		invitedByUserId: nanoId("invitedByUserId").notNull().$type<User.UserId>(),
		role: varchar("role", { length: 255 })
			.notNull()
			.$type<OrganisationMemberRole>(),
		status: varchar("status", { length: 255 }).notNull().default("pending"),
		createdAt: timestamp("createdAt").notNull().defaultNow(),
		updatedAt: timestamp("updatedAt").notNull().defaultNow(),
		expiresAt: timestamp("expiresAt"),
	},
	(table) => ({
		organizationIdIndex: index().on(table.organizationId),
		invitedEmailIndex: index().on(table.invitedEmail),
		invitedByUserIdIndex: index().on(
			table.invitedByUserId,
		),
		statusIndex: index().on(table.status),
	}),
);

export const folders = pgTable(
	"folders",
	{
		id: nanoId("id").notNull().primaryKey().$type<Folder.FolderId>(),
		name: varchar("name", { length: 255 }).notNull(),
		color: varchar("color", { length: 16 })
			.notNull()
			.default("normal"),
		organizationId: nanoId("organizationId")
			.notNull()
			.$type<Organisation.OrganisationId>(),
		createdById: nanoId("createdById").notNull().$type<User.UserId>(),
		parentId: nanoIdNullable("parentId").$type<Folder.FolderId>(),
		spaceId: nanoIdNullable("spaceId").$type<Space.SpaceIdOrOrganisationId>(),
		createdAt: timestamp("createdAt").notNull().defaultNow(),
		updatedAt: timestamp("updatedAt").notNull().defaultNow(),
	},
	(table) => ({
		organizationIdIndex: index().on(table.organizationId),
		createdByIdIndex: index().on(table.createdById),
		parentIdIndex: index().on(table.parentId),
		spaceIdIndex: index().on(table.spaceId),
	}),
);

export const videos = pgTable(
	"videos",
	{
		id: nanoId("id").notNull().primaryKey().$type<Video.VideoId>(),
		ownerId: nanoId("ownerId").notNull().$type<User.UserId>(),
		orgId: nanoIdRequired("orgId").$type<Organisation.OrganisationId>(),
		name: varchar("name", { length: 255 }).notNull().default("My Video"),
		bucket: nanoIdNullable("bucket").$type<S3Bucket.S3BucketId>(),
		// in seconds
		duration: real("duration"),
		width: integer("width"),
		height: integer("height"),
		fps: integer("fps"),
		metadata: json("metadata").$type<VideoMetadata>(),
		public: boolean("public").notNull().default(true),
		settings: json("settings").$type<{
			disableSummary?: boolean;
			disableCaptions?: boolean;
			disableChapters?: boolean;
			disableReactions?: boolean;
			disableTranscript?: boolean;
			disableComments?: boolean;
		}>(),
		transcriptionStatus: varchar("transcriptionStatus", { length: 255 }).$type<
			"PROCESSING" | "COMPLETE" | "ERROR" | "SKIPPED" | "NO_AUDIO"
		>(),
		source: json("source")
			.$type<
				| { type: "MediaConvert" }
				| { type: "local" }
				| { type: "desktopMP4" }
				| { type: "webMP4" }
			>()
			.notNull()
			.default({ type: "MediaConvert" }),
		folderId: nanoIdNullable("folderId").$type<Folder.FolderId>(),
		createdAt: timestamp("createdAt").notNull().defaultNow(),
		effectiveCreatedAt: timestamp("effectiveCreatedAt"),
		updatedAt: timestamp("updatedAt").notNull().defaultNow(),
		// PRIVATE
		password: encryptedTextNullable("password"),
		// LEGACY
		xStreamInfo: text("xStreamInfo"),
		isScreenshot: boolean("isScreenshot").notNull().default(false),
		// DEPRECATED
		awsRegion: varchar("awsRegion", { length: 255 }),
		awsBucket: varchar("awsBucket", { length: 255 }),
		videoStartTime: varchar("videoStartTime", { length: 255 }),
		audioStartTime: varchar("audioStartTime", { length: 255 }),
		jobId: varchar("jobId", { length: 255 }),
		jobStatus: varchar("jobStatus", { length: 255 }),
		skipProcessing: boolean("skipProcessing").notNull().default(false),
	},
	(table) => [
		index().on(table.ownerId),
		index().on(table.public),
		index().on(table.folderId),
		index().on(
			table.orgId,
			table.ownerId,
			table.folderId,
		),
		index().on(
			table.orgId,
			table.effectiveCreatedAt,
		),
	],
);

export const sharedVideos = pgTable(
	"shared_videos",
	{
		id: nanoId("id").notNull().primaryKey(),
		videoId: nanoId("videoId").notNull().$type<Video.VideoId>(),
		folderId: nanoIdNullable("folderId").$type<Folder.FolderId>(),
		organizationId: nanoId("organizationId")
			.notNull()
			.$type<Organisation.OrganisationId>(),
		sharedByUserId: nanoId("sharedByUserId").notNull().$type<User.UserId>(),
		sharedAt: timestamp("sharedAt").notNull().defaultNow(),
	},
	(table) => ({
		folderIdIndex: index().on(table.folderId),
		organizationIdIndex: index().on(table.organizationId),
		sharedByUserIdIndex: index().on(
			table.sharedByUserId,
		),
		videoIdOrganizationIdIndex: index().on(
			table.videoId,
			table.organizationId,
		),
		videoIdFolderIdIndex: index().on(
			table.videoId,
			table.folderId,
		),
	}),
);

export const comments = pgTable(
	"comments",
	{
		id: nanoId("id").notNull().primaryKey().$type<Comment.CommentId>(),
		type: varchar("type", { length: 6 }).notNull(),
		content: text("content").notNull(),
		timestamp: real("timestamp"),
		authorId: nanoId("authorId").notNull().$type<User.UserId>(),
		videoId: nanoId("videoId").notNull().$type<Video.VideoId>(),
		createdAt: timestamp("createdAt").notNull().defaultNow(),
		updatedAt: timestamp("updatedAt").notNull().defaultNow(),
		parentCommentId:
			nanoIdNullable("parentCommentId").$type<Comment.CommentId>(),
	},
	(table) => ({
		videoTypeCreatedIndex: index().on(
			table.videoId,
			table.type,
			table.createdAt,
			table.id,
		),
		authorIdIndex: index().on(table.authorId),
		parentCommentIdIndex: index().on(
			table.parentCommentId,
		),
	}),
);

export const notifications = pgTable(
	"notifications",
	{
		id: nanoId("id").notNull().primaryKey(),
		orgId: nanoId("orgId").notNull().$type<Organisation.OrganisationId>(),
		recipientId: nanoId("recipientId").notNull().$type<User.UserId>(),
		type: varchar("type", { length: 10 })
			.notNull()
			.$type<"view" | "comment" | "reply" | "reaction" /*| "mention"*/>(),
		data: json("data")
			.$type<{
				videoId?: string;
				authorId?: string;
				comment?: {
					id: string;
					content: string;
				};
			}>()
			.notNull(),
		readAt: timestamp("readAt"),
		createdAt: timestamp("createdAt").notNull().defaultNow(),
	},
	(table) => ({
		orgIdIndex: index().on(table.orgId),
		typeIndex: index().on(table.type),
		readAtIndex: index().on(table.readAt),
		createdAtIndex: index().on(table.createdAt),
		recipientReadIndex: index().on(
			table.recipientId,
			table.readAt,
		),
		recipientCreatedIndex: index().on(
			table.recipientId,
			table.createdAt,
		),
	}),
);

export type MessengerAgent = "Millie";
export type MessengerConversationMode = "agent" | "human";
export type MessengerMessageRole = "user" | "agent" | "admin";

export const messengerConversations = pgTable(
	"messenger_conversations",
	{
		id: nanoId("id").notNull().primaryKey(),
		agent: varchar("agent", { length: 32 })
			.notNull()
			.$type<MessengerAgent>(),
		mode: varchar("mode", { length: 16 })
			.notNull()
			.default("agent")
			.$type<MessengerConversationMode>(),
		userId: nanoIdNullable("userId").$type<User.UserId>(),
		anonymousId: varchar("anonymousId", { length: 64 }),
		takeoverByUserId: nanoIdNullable("takeoverByUserId").$type<User.UserId>(),
		takeoverAt: timestamp("takeoverAt"),
		createdAt: timestamp("createdAt").notNull().defaultNow(),
		updatedAt: timestamp("updatedAt").notNull().defaultNow(),
		lastMessageAt: timestamp("lastMessageAt").notNull().defaultNow(),
	},
	(table) => ({
		userLastMessageIndex: index().on(
			table.userId,
			table.lastMessageAt,
		),
		anonymousLastMessageIndex: index().on(
			table.anonymousId,
			table.lastMessageAt,
		),
		modeLastMessageIndex: index().on(
			table.mode,
			table.lastMessageAt,
		),
		updatedAtIndex: index().on(table.updatedAt),
	}),
);

export const messengerMessages = pgTable(
	"messenger_messages",
	{
		id: nanoId("id").notNull().primaryKey(),
		conversationId: nanoId("conversationId")
			.notNull()
			.references(() => messengerConversations.id, { onDelete: "cascade" }),
		role: varchar("role", { length: 16 })
			.notNull()
			.$type<MessengerMessageRole>(),
		content: text("content").notNull(),
		userId: nanoIdNullable("userId").$type<User.UserId>(),
		anonymousId: varchar("anonymousId", { length: 64 }),
		createdAt: timestamp("createdAt").notNull().defaultNow(),
	},
	(table) => ({
		conversationCreatedAtIndex: index().on(
			table.conversationId,
			table.createdAt,
		),
		roleCreatedAtIndex: index().on(
			table.role,
			table.createdAt,
		),
	}),
);

export const s3Buckets = pgTable("s3_buckets", {
	id: nanoId("id").notNull().primaryKey().$type<S3Bucket.S3BucketId>(),
	ownerId: nanoId("ownerId").notNull().$type<User.UserId>(),
	// Use encryptedText for sensitive fields
	region: encryptedText("region").notNull(),
	endpoint: encryptedTextNullable("endpoint"),
	bucketName: encryptedText("bucketName").notNull(),
	accessKeyId: encryptedText("accessKeyId").notNull(),
	secretAccessKey: encryptedText("secretAccessKey").notNull(),
	provider: text("provider").notNull().default("aws"),
});

export const notificationsRelations = relations(notifications, ({ one }) => ({
	org: one(organizations, {
		fields: [notifications.orgId],
		references: [organizations.id],
	}),
	recipient: one(users, {
		fields: [notifications.recipientId],
		references: [users.id],
	}),
}));

export const authApiKeys = pgTable("auth_api_keys", {
	id: varchar("id", { length: 36 }).notNull().primaryKey(),
	userId: nanoId("userId").notNull().$type<User.UserId>(),
	createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export const commentsRelations = relations(comments, ({ one }) => ({
	author: one(users, {
		fields: [comments.authorId],
		references: [users.id],
	}),
	video: one(videos, {
		fields: [comments.videoId],
		references: [videos.id],
	}),
	parentComment: one(comments, {
		fields: [comments.parentCommentId],
		references: [comments.id],
	}),
}));

export const messengerConversationsRelations = relations(
	messengerConversations,
	({ one, many }) => ({
		user: one(users, {
			fields: [messengerConversations.userId],
			references: [users.id],
		}),
		messages: many(messengerMessages),
	}),
);

export const messengerMessagesRelations = relations(
	messengerMessages,
	({ one }) => ({
		conversation: one(messengerConversations, {
			fields: [messengerMessages.conversationId],
			references: [messengerConversations.id],
		}),
		user: one(users, {
			fields: [messengerMessages.userId],
			references: [users.id],
		}),
	}),
);

// Define Relationships
export const usersRelations = relations(users, ({ many, one }) => ({
	accounts: many(accounts),
	sessions: many(sessions),
	organizationMembers: many(organizationMembers),
	videos: many(videos),
	sharedVideos: many(sharedVideos),
	customBucket: one(s3Buckets),
	spaces: many(spaces),
	spaceMembers: many(spaceMembers),
	messengerConversations: many(messengerConversations),
	messengerMessages: many(messengerMessages),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
	user: one(users, {
		fields: [accounts.userId],
		references: [users.id],
	}),
}));

export const s3BucketsRelations = relations(s3Buckets, ({ one }) => ({
	owner: one(users, {
		fields: [s3Buckets.ownerId],
		references: [users.id],
	}),
}));

export const organizationsRelations = relations(
	organizations,
	({ one, many }) => ({
		owner: one(users, {
			fields: [organizations.ownerId],
			references: [users.id],
		}),
		organizationMembers: many(organizationMembers),
		sharedVideos: many(sharedVideos),
		organizationInvites: many(organizationInvites),
		spaces: many(spaces),
	}),
);

export const sessionsRelations = relations(sessions, ({ one }) => ({
	user: one(users, {
		fields: [sessions.userId],
		references: [users.id],
	}),
}));

export const verificationTokensRelations = relations(
	verificationTokens,
	() => ({
		// No relations defined
	}),
);

export const organizationMembersRelations = relations(
	organizationMembers,
	({ one }) => ({
		user: one(users, {
			fields: [organizationMembers.userId],
			references: [users.id],
		}),
		organization: one(organizations, {
			fields: [organizationMembers.organizationId],
			references: [organizations.id],
		}),
	}),
);

export const organizationInvitesRelations = relations(
	organizationInvites,
	({ one }) => ({
		organization: one(organizations, {
			fields: [organizationInvites.organizationId],
			references: [organizations.id],
		}),
		invitedByUser: one(users, {
			fields: [organizationInvites.invitedByUserId],
			references: [users.id],
		}),
	}),
);

export const videosRelations = relations(videos, ({ one, many }) => ({
	owner: one(users, {
		fields: [videos.ownerId],
		references: [users.id],
	}),
	sharedVideos: many(sharedVideos),
	spaceVideos: many(spaceVideos),
	folder: one(folders, {
		fields: [videos.folderId],
		references: [folders.id],
	}),
}));

export const sharedVideosRelations = relations(sharedVideos, ({ one }) => ({
	video: one(videos, {
		fields: [sharedVideos.videoId],
		references: [videos.id],
	}),
	organization: one(organizations, {
		fields: [sharedVideos.organizationId],
		references: [organizations.id],
	}),
	sharedByUser: one(users, {
		fields: [sharedVideos.sharedByUserId],
		references: [users.id],
	}),
}));

export const spaces = pgTable(
	"spaces",
	{
		id: nanoId("id")
			.notNull()
			.primaryKey()
			.$type<Space.SpaceIdOrOrganisationId>(),
		primary: boolean("primary").notNull().default(false),
		name: varchar("name", { length: 255 }).notNull(),
		organizationId: nanoId("organizationId")
			.notNull()
			.$type<Organisation.OrganisationId>(),
		createdById: nanoId("createdById").notNull().$type<User.UserId>(),
		iconUrl: varchar("iconUrl", {
			length: 255,
		}).$type<ImageUpload.ImageUrlOrKey>(),
		description: varchar("description", { length: 1000 }),
		createdAt: timestamp("createdAt").notNull().defaultNow(),
		updatedAt: timestamp("updatedAt").notNull().defaultNow(),
		privacy: varchar("privacy", { length: 255 })
			.notNull()
			.default("Private"),
	},
	(table) => ({
		organizationIdIndex: index().on(table.organizationId),
		createdByIdIndex: index().on(table.createdById),
	}),
);

export const spaceMembers = pgTable(
	"space_members",
	{
		id: nanoId("id").notNull().primaryKey(),
		spaceId: nanoId("spaceId").notNull().$type<Space.SpaceIdOrOrganisationId>(),
		userId: nanoId("userId").notNull().$type<User.UserId>(),
		role: varchar("role", { length: 255 })
			.notNull()
			.default("member")
			.$type<"member" | "Admin">(),
		createdAt: timestamp("createdAt").notNull().defaultNow(),
		updatedAt: timestamp("updatedAt").notNull().defaultNow(),
	},
	(table) => ({
		userIdIndex: index().on(table.userId),
		spaceIdUserIdUnique: unique("space_id_user_id_unique").on(
			table.spaceId,
			table.userId,
		),
	}),
);

export const spaceVideos = pgTable(
	"space_videos",
	{
		id: nanoId("id").notNull().primaryKey(),
		spaceId: nanoId("spaceId").notNull().$type<Space.SpaceIdOrOrganisationId>(),
		folderId: nanoIdNullable("folderId").$type<Folder.FolderId>(),
		videoId: nanoId("videoId").notNull().$type<Video.VideoId>(),
		addedById: nanoId("addedById").notNull().$type<User.UserId>(),
		addedAt: timestamp("addedAt").notNull().defaultNow(),
	},
	(table) => ({
		folderIdIndex: index().on(table.folderId),
		videoIdIndex: index().on(table.videoId),
		addedByIdIndex: index().on(table.addedById),
		spaceIdVideoIdIndex: index().on(
			table.spaceId,
			table.videoId,
		),
		spaceIdFolderIdIndex: index().on(
			table.spaceId,
			table.folderId,
		),
	}),
);

export const spacesRelations = relations(spaces, ({ one, many }) => ({
	organization: one(organizations, {
		fields: [spaces.organizationId],
		references: [organizations.id],
	}),
	createdBy: one(users, {
		fields: [spaces.createdById],
		references: [users.id],
	}),
	spaceMembers: many(spaceMembers),
	spaceVideos: many(spaceVideos),
}));

export const spaceMembersRelations = relations(spaceMembers, ({ one }) => ({
	space: one(spaces, {
		fields: [spaceMembers.spaceId],
		references: [spaces.id],
	}),
	user: one(users, {
		fields: [spaceMembers.userId],
		references: [users.id],
	}),
}));

export const spaceVideosRelations = relations(spaceVideos, ({ one }) => ({
	space: one(spaces, {
		fields: [spaceVideos.spaceId],
		references: [spaces.id],
	}),
	video: one(videos, {
		fields: [spaceVideos.videoId],
		references: [videos.id],
	}),
	addedBy: one(users, {
		fields: [spaceVideos.addedById],
		references: [users.id],
	}),
}));

export const foldersRelations = relations(folders, ({ one, many }) => ({
	organization: one(organizations, {
		fields: [folders.organizationId],
		references: [organizations.id],
	}),
	createdBy: one(users, {
		fields: [folders.createdById],
		references: [users.id],
	}),
	parentFolder: one(folders, {
		fields: [folders.parentId],
		references: [folders.id],
		relationName: "parentChild",
	}),
	childFolders: many(folders, { relationName: "parentChild" }),
	videos: many(videos),
}));

export const videoUploads = pgTable("video_uploads", {
	videoId: nanoId("video_id").primaryKey().notNull().$type<Video.VideoId>(),
	uploaded: bigint("uploaded", { mode: "number" })
		.notNull()
		.$defaultFn(() => 0),
	total: bigint("total", { mode: "number" })
		.notNull()
		.$defaultFn(() => 0),
	startedAt: timestamp("started_at").notNull().defaultNow(),
	updatedAt: timestamp("updated_at").notNull().defaultNow(),
	mode: varchar("mode", { length: 255 }),
	phase: varchar("phase", { length: 32 })
		.$type<
			"uploading" | "processing" | "generating_thumbnail" | "complete" | "error"
		>()
		.notNull()
		.default("uploading"),
	processingProgress: integer("processing_progress").notNull().default(0),
	processingMessage: varchar("processing_message", { length: 255 }),
	processingError: text("processing_error"),
	rawFileKey: varchar("raw_file_key", { length: 512 }),
});

export const importedVideos = pgTable(
	"imported_videos",
	{
		id: nanoId("id").notNull(),
		orgId: nanoIdNullable("orgId")
			.notNull()
			.$type<Organisation.OrganisationId>(),
		source: varchar("source", { length: 255 }).notNull(),
		sourceId: varchar("source_id", { length: 255 }).notNull(),
	},
	(table) => [
		primaryKey({ columns: [table.orgId, table.source, table.sourceId] }),
	],
);

export const licenseKeys = pgTable("licenseKeys", {
	id: varchar("id", { length: 21 }).notNull().primaryKey(),
	key: varchar("key", { length: 255 }).notNull().unique(),
	name: varchar("name", { length: 255 }).notNull(),
	createdAt: timestamp("createdAt").notNull().default(sql`now()`),
	expiresAt: timestamp("expiresAt"),
	revokedAt: timestamp("revokedAt"),
});

export const admins = pgTable("admins", {
	id: varchar("id", { length: 21 }).notNull().primaryKey(),
	email: varchar("email", { length: 255 }).notNull().unique(),
	addedAt: timestamp("addedAt").notNull().default(sql`now()`),
	addedBy: varchar("addedBy", { length: 255 }),
});

export const passwordResetTokens = pgTable("passwordResetTokens", {
	id: varchar("id", { length: 21 }).notNull().primaryKey(),
	email: varchar("email", { length: 255 }).notNull(),
	token: varchar("token", { length: 255 }).notNull().unique(),
	expiresAt: timestamp("expiresAt").notNull(),
	usedAt: timestamp("usedAt"),
});
