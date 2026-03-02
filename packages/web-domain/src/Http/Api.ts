import { HttpApi, HttpApiError, OpenApi } from "@effect/platform";
import { LoomHttpApi } from "../Loom.ts";

export class ApiContract extends HttpApi.make("orbit-web-api")
	.add(LoomHttpApi.prefix("/loom").addError(HttpApiError.ServiceUnavailable))
	.annotateContext(
		OpenApi.annotations({
			title: "Orbit HTTP API",
			description: "Internal API used by Orbit Desktop and external services",
		}),
	)
	.prefix("/api") {}
