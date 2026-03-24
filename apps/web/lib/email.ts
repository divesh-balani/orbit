import nodemailer from "nodemailer";

const MASTER_ADMIN = "diveshb2k@gmail.com";

function getTransporter() {
	return nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS,
		},
	});
}

function baseUrl() {
	return process.env.NEXTAUTH_URL?.replace(/\/$/, "") ?? "http://localhost:3000";
}

export async function sendPasswordResetEmail(to: string, token: string) {
	const url = `${baseUrl()}/reset-password?token=${token}`;
	await getTransporter().sendMail({
		from: `"Orbit Admin" <${process.env.EMAIL_USER}>`,
		to,
		subject: "Reset your Orbit password",
		html: `
			<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;background:#f9f9f9;border-radius:12px;">
				<h2 style="margin:0 0 8px;font-size:20px;color:#111;">Reset your password</h2>
				<p style="margin:0 0 24px;color:#555;font-size:14px;">Click the button below to set a new password. This link expires in 24 hours.</p>
				<a href="${url}" style="display:inline-block;padding:12px 24px;background:#111;color:#fff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:500;">Reset password</a>
				<p style="margin:24px 0 0;color:#888;font-size:12px;">If you didn't request this, you can safely ignore this email.</p>
			</div>
		`,
	});
}

export async function sendAdminInviteEmail(
	to: string,
	token: string,
	invitedBy: string,
) {
	const url = `${baseUrl()}/reset-password?token=${token}&setup=true`;
	const inviterDisplay = invitedBy === MASTER_ADMIN ? "the Orbit master admin" : invitedBy;
	await getTransporter().sendMail({
		from: `"Orbit Admin" <${process.env.EMAIL_USER}>`,
		to,
		subject: "You've been added as an Orbit admin",
		html: `
			<div style="font-family:sans-serif;max-width:480px;margin:0 auto;padding:32px 24px;background:#f9f9f9;border-radius:12px;">
				<h2 style="margin:0 0 8px;font-size:20px;color:#111;">You're now an Orbit admin</h2>
				<p style="margin:0 0 24px;color:#555;font-size:14px;">You've been added as an admin by ${inviterDisplay}. Click below to set your password and access the admin panel.</p>
				<a href="${url}" style="display:inline-block;padding:12px 24px;background:#111;color:#fff;text-decoration:none;border-radius:8px;font-size:14px;font-weight:500;">Set your password</a>
				<p style="margin:24px 0 0;color:#888;font-size:12px;">This link expires in 72 hours.</p>
			</div>
		`,
	});
}
