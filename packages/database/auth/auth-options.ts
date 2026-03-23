import crypto from "node:crypto";
import { serverEnv } from "@orbit/env";
import { eq } from "drizzle-orm";
import type { NextAuthOptions } from "next-auth";
import { getServerSession as _getServerSession } from "next-auth";
import type { Adapter } from "next-auth/adapters";
import CredentialsProvider from "next-auth/providers/credentials";
import EmailProvider from "next-auth/providers/email";
import type { Provider } from "next-auth/providers/index";
import { hashPassword, verifyPassword } from "../crypto.ts";
import { hasEmailTransport, sendEmail } from "../emails/config.ts";
import { db } from "../index.ts";
import { users } from "../schema.ts";
import { isEmailAllowedForSignup } from "./domain-utils.ts";
import { DrizzleAdapter } from "./drizzle-adapter.ts";

export const maxDuration = 120;

export const authOptions = (): NextAuthOptions => {
	let _adapter: Adapter | undefined;
	let _providers: Provider[] | undefined;

	return {
		get adapter() {
			if (_adapter) return _adapter;
			_adapter = DrizzleAdapter(db());
			return _adapter;
		},
		debug: true,
		session: {
			strategy: "jwt",
		},
		get secret() {
			return serverEnv().NEXTAUTH_SECRET;
		},
		pages: {
			signIn: "/login",
		},
		get providers() {
			if (_providers) return _providers;
			_providers = [
				CredentialsProvider({
					name: "credentials",
					credentials: {
						email: { label: "Email", type: "email" },
						password: { label: "Password", type: "password" },
					},
					async authorize(credentials) {
						if (!credentials?.email || !credentials?.password) return null;

						const email = (credentials.email as string).trim().toLowerCase();
						const [user] = await db()
							.select({
								id: users.id,
								name: users.name,
								email: users.email,
								image: users.image,
								hashedPassword: users.hashedPassword,
							})
							.from(users)
							.where(eq(users.email, email))
							.limit(1);

						if (!user?.hashedPassword) return null;

						const valid = await verifyPassword(
							user.hashedPassword,
							credentials.password as string,
						);
						if (!valid) return null;

						return {
							id: user.id,
							name: user.name,
							email: user.email,
							image: user.image,
						};
					},
				}),
				EmailProvider({
					async generateVerificationToken() {
						return crypto.randomInt(100000, 1000000).toString();
					},
					async sendVerificationRequest({ identifier, token }) {
						console.log("sendVerificationRequest");

						if (!hasEmailTransport()) {
							console.log("\n");
							console.log(
								"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
							);
							console.log("🔐 VERIFICATION CODE (Development Mode)");
							console.log(
								"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
							);
							console.log(`📧 Email: ${identifier}`);
							console.log(`🔢 Code: ${token}`);
							console.log(`⏱  Expires in: 10 minutes`);
							console.log(
								"━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━",
							);
							console.log("\n");
						} else {
							console.log({ identifier, token });
							const { OTPEmail } = await import("../emails/otp-email");
							const email = OTPEmail({ code: token, email: identifier });
							console.log({ email });
							await sendEmail({
								email: identifier,
								subject: `Your Orbit Verification Code`,
								react: email,
							});
						}
					},
				}),
			];

			return _providers;
		},
		cookies: {
			sessionToken: {
				name: `next-auth.session-token`,
				options: {
					httpOnly: true,
					sameSite: "none",
					path: "/",
					secure: true,
				},
			},
		},
		callbacks: {
			async signIn({ user, email, credentials }) {
				const allowedDomains = serverEnv().ORBIT_ALLOWED_SIGNUP_DOMAINS;
				if (!allowedDomains) return true;

				const rawEmail =
					user?.email ||
					(typeof email === "string"
						? email
						: typeof credentials?.email === "string"
							? credentials.email
							: null);
				if (!rawEmail || typeof rawEmail !== "string") return true;
				const userEmail = rawEmail.toLowerCase();

				const [existingUser] = await db()
					.select()
					.from(users)
					.where(eq(users.email, userEmail))
					.limit(1);

				// Only apply domain restrictions for new users, existing ones can always sign in
				if (
					!existingUser &&
					!isEmailAllowedForSignup(userEmail, allowedDomains)
				) {
					console.warn(`Signup blocked for email domain: ${userEmail}`);
					return false;
				}

				return true;
			},
			async session({ token, session }) {
				if (!session.user) return session;

				if (token?.id && typeof token.id === "string") {
					(session.user as { id: string }).id = token.id;
					session.user.name = token.name ?? null;
					session.user.email = token.email ?? null;
					session.user.image = token.picture ?? null;
				}

				return session;
			},
			async jwt({ token, user }) {
				if (user || !token.id) {
					const [dbUser] = await db()
						.select({
							id: users.id,
							name: users.name,
							lastName: users.lastName,
							email: users.email,
							image: users.image,
						})
						.from(users)
						.where(eq(users.email, (token.email || "").toLowerCase()))
						.limit(1);

					if (!dbUser) {
						if (user) {
							token.id = user?.id;
						}
						return token;
					}

					return {
						id: dbUser.id,
						name: dbUser.name,
						lastName: dbUser.lastName,
						email: dbUser.email,
						picture: dbUser.image,
					};
				}

				return token;
			},
		},
	};
};

export const getServerSession = () => _getServerSession(authOptions());
