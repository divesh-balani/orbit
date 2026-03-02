import "server-only";

import { serverEnv } from "@orbit/env";
import Supermemory from "supermemory";
import {
	MESSENGER_ADMIN_EMAIL,
	MESSENGER_DEFAULT_KNOWLEDGE_TAG,
} from "./constants";

export type SupermemoryConversationMessage = {
	role: "user" | "assistant";
	content: string;
	timestamp: string;
};

const getApiKey = () => serverEnv().SUPERMEMORY_API_KEY;

let _client: Supermemory | null = null;

const getClient = () => {
	const key = getApiKey();
	if (!key) return null;
	if (_client) return _client;
	_client = new Supermemory({ apiKey: key });
	return _client;
};

export const getKnowledgeTag = () =>
	serverEnv().SUPERMEMORY_KNOWLEDGE_TAG?.trim() ||
	MESSENGER_DEFAULT_KNOWLEDGE_TAG;

export const getIdentityTag = (
	userId: string | null,
	anonymousId: string | null,
) =>
	userId
		? `orbit-support-user:${userId}`
		: `orbit-support-anon:${anonymousId ?? "unknown"}`;

export const isSupermemoryConfigured = () => Boolean(getApiKey());

const extractSnippet = (result: {
	memory?: string;
	chunk?: string;
	metadata?: { [key: string]: unknown } | null;
}) => {
	const content = result.memory ?? result.chunk ?? "";
	const title =
		(typeof result.metadata?.title === "string" && result.metadata.title) || "";
	const trimmed = content.trim();
	if (!trimmed) return "";
	if (!title) return trimmed;
	return `${title}\n${trimmed}`;
};

export const searchSupermemory = async ({
	query,
	containerTag,
	limit = 4,
}: {
	query: string;
	containerTag: string;
	limit?: number;
}) => {
	if (!query.trim()) return [] as string[];
	if (!containerTag.trim()) return [] as string[];

	const client = getClient();
	if (!client) return [] as string[];

	const response = await client.search.memories({
		q: query,
		containerTag,
		searchMode: "hybrid",
		limit,
	});

	return response.results
		.map(extractSnippet)
		.filter((value) => value.length > 0)
		.map((value) => value.slice(0, 1800));
};

export const storeConversationInSupermemory = async ({
	conversationId,
	containerTag,
	messages,
}: {
	conversationId: string;
	containerTag: string;
	messages: SupermemoryConversationMessage[];
}) => {
	if (!messages.length) return;

	const client = getClient();
	if (!client) return;

	await client.post("/v4/conversations", {
		body: { conversationId, containerTag, messages },
	});
};

export const syncOrbitKnowledgeBase = async (requestedByEmail: string) => {
	if (requestedByEmail !== MESSENGER_ADMIN_EMAIL) {
		throw new Error("Unauthorized");
	}

	const client = getClient();
	if (!client) {
		throw new Error("SUPERMEMORY_API_KEY is not configured");
	}

	const knowledgeTag = getKnowledgeTag();
	const sources = [
		"https://orbit.so",
		"https://orbit.so/download",
		"https://orbit.so/download/versions",
		"https://orbit.so/pricing",
		"https://orbit.so/features",
		"https://orbit.so/features/instant-mode",
		"https://orbit.so/features/studio-mode",
		"https://orbit.so/docs",
		"https://orbit.so/docs/commercial-license",
		"https://orbit.so/faq",
		"https://orbit.so/blog",
		"https://orbit.so/about",
		"https://orbit.so/self-hosting",
		"https://orbit.so/testimonials",
		"https://orbit.so/student-discount",
		"https://orbit.so/deactivate-license",
		"https://orbit.so/terms",
		"https://orbit.so/privacy",

		"https://orbit.so/screen-recorder",
		"https://orbit.so/free-screen-recorder",
		"https://orbit.so/screen-recorder-mac",
		"https://orbit.so/screen-recorder-windows",
		"https://orbit.so/screen-recording-software",
		"https://orbit.so/loom-alternative",

		"https://orbit.so/solutions/remote-team-collaboration",
		"https://orbit.so/solutions/employee-onboarding-platform",
		"https://orbit.so/solutions/daily-standup-software",
		"https://orbit.so/solutions/online-classroom-tools",
		"https://orbit.so/solutions/agencies",

		"https://orbit.so/tools",
		"https://orbit.so/tools/loom-downloader",
		"https://orbit.so/tools/video-speed-controller",
		"https://orbit.so/tools/trim",
		"https://orbit.so/tools/convert",
		"https://orbit.so/tools/convert/webm-to-mp4",
		"https://orbit.so/tools/convert/mov-to-mp4",
		"https://orbit.so/tools/convert/avi-to-mp4",
		"https://orbit.so/tools/convert/mkv-to-mp4",
		"https://orbit.so/tools/convert/mp4-to-gif",
		"https://orbit.so/tools/convert/mp4-to-mp3",
		"https://orbit.so/tools/convert/mp4-to-webm",

		"https://github.com/CapSoftware/Orbit",
	];

	await client.documents.batchAdd({
		containerTag: knowledgeTag,
		documents: sources,
	});

	return { sources, knowledgeTag };
};
