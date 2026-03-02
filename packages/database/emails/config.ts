import { buildEnv, serverEnv } from "@orbit/env";
import type { JSXElementConstructor, ReactElement } from "react";
import { Resend } from "resend";

export const resend = () =>
	serverEnv().RESEND_API_KEY ? new Resend(serverEnv().RESEND_API_KEY) : null;

export const sendEmail = async ({
	email,
	subject,
	react,
	marketing,
	test,
	scheduledAt,
	cc,
	replyTo,
	fromOverride,
}: {
	email: string;
	subject: string;
	react: ReactElement<any, string | JSXElementConstructor<any>>;
	marketing?: boolean;
	test?: boolean;
	scheduledAt?: string;
	cc?: string | string[];
	replyTo?: string;
	fromOverride?: string;
}) => {
	const r = resend();
	if (!r) {
		return Promise.resolve();
	}

	if (marketing && !buildEnv.NEXT_PUBLIC_IS_ORBIT) return;
	let from;

	if (fromOverride) from = fromOverride;
	else if (marketing) from = "Richie from Orbit <richie@send.orbit.so>";
	else if (buildEnv.NEXT_PUBLIC_IS_ORBIT)
		from = "Orbit Auth <no-reply@auth.orbit.so>";
	else from = `auth@${serverEnv().RESEND_FROM_DOMAIN}`;

	return r.emails.send({
		from,
		to: test ? "delivered@resend.dev" : email,
		subject,
		react,
		scheduledAt,
		cc: test ? undefined : cc,
		replyTo: replyTo,
	}) as any;
};
