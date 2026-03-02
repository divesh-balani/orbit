import { serverEnv } from "@orbit/env";
import { Dub } from "dub";

export const dub = () =>
	new Dub({
		token: serverEnv().DUB_API_KEY,
	});
