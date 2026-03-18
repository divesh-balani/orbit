import { buildEnv, serverEnv } from "@orbit/env";
import { render } from "@react-email/render";
import nodemailer from "nodemailer";
import type { JSXElementConstructor, ReactElement } from "react";
import { Resend } from "resend";

export const resend = () =>
	serverEnv().RESEND_API_KEY ? new Resend(serverEnv().RESEND_API_KEY) : null;

const smtpTransport = () => {
	const env = serverEnv();
	if (!env.SMTP_HOST || !env.SMTP_PORT) return null;

	return nodemailer.createTransport({
		host: env.SMTP_HOST,
		port: env.SMTP_PORT,
		secure: env.SMTP_SECURE,
		auth:
			env.SMTP_USER && env.SMTP_PASS
				? {
						user: env.SMTP_USER,
						pass: env.SMTP_PASS,
					}
				: undefined,
	});
};

export const hasEmailTransport = () =>
	Boolean(smtpTransport()) || Boolean(resend());

const getDefaultFrom = ({
	marketing,
	fromOverride,
}: {
	marketing?: boolean;
	fromOverride?: string;
}) => {
	if (fromOverride) return fromOverride;

	const env = serverEnv();
	if (marketing && buildEnv.NEXT_PUBLIC_IS_ORBIT) {
		return "Richie from Orbit <richie@send.orbit.so>";
	}

	if (env.SMTP_FROM_EMAIL || env.SMTP_USER) {
		const fromEmail = env.SMTP_FROM_EMAIL ?? env.SMTP_USER;
		const fromName = env.SMTP_FROM_NAME ?? "Orbit Auth";
		if (fromEmail) return `${fromName} <${fromEmail}>`;
	}

	if (buildEnv.NEXT_PUBLIC_IS_ORBIT) {
		return "Orbit Auth <no-reply@auth.orbit.so>";
	}

	if (env.RESEND_FROM_DOMAIN) {
		return `auth@${env.RESEND_FROM_DOMAIN}`;
	}

	return undefined;
};

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
	react: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
	marketing?: boolean;
	test?: boolean;
	scheduledAt?: string;
	cc?: string | string[];
	replyTo?: string;
	fromOverride?: string;
}) => {
	const r = resend();
	if (marketing && !buildEnv.NEXT_PUBLIC_IS_ORBIT) return;

	const from = getDefaultFrom({ marketing, fromOverride });
	const transport = smtpTransport();

	if (!transport && !r) {
		return Promise.resolve();
	}

	if (transport && !scheduledAt) {
		const html = await render(react);

		return transport.sendMail({
			from,
			to: test ? "delivered@resend.dev" : email,
			subject,
			html,
			cc: test ? undefined : cc,
			replyTo,
		});
	}

	if (!r) {
		const html = await render(react);

		return transport?.sendMail({
			from,
			to: test ? "delivered@resend.dev" : email,
			subject,
			html,
			cc: test ? undefined : cc,
			replyTo,
		});
	}

	return r.emails.send({
		from,
		to: test ? "delivered@resend.dev" : email,
		subject,
		react,
		scheduledAt,
		cc: test ? undefined : cc,
		replyTo: replyTo,
	});
};
