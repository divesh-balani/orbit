import "@/app/globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import type { PropsWithChildren } from "react";
import { SonnerToaster } from "@/components/SonnerToastProvider";
import { ReactQueryProvider, SessionProvider } from "./Layout/providers";

const defaultFont = localFont({
	src: [
		{
			path: "../public/fonts/NeueMontreal-Bold.otf",
			weight: "700",
			style: "normal",
		},
		{
			path: "../public/fonts/NeueMontreal-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/NeueMontreal-Medium.otf",
			weight: "500",
			style: "normal",
		},
		{
			path: "../public/fonts/NeueMontreal-MediumItalic.otf",
			weight: "500",
			style: "italic",
		},
		{
			path: "../public/fonts/NeueMontreal-Italic.otf",
			weight: "400",
			style: "italic",
		},
		{
			path: "../public/fonts/NeueMontreal-BoldItalic.otf",
			weight: "700",
			style: "italic",
		},
	],
});

export const metadata: Metadata = {
	title: "Orbit",
	description: "A personal screen recorder.",
};

export const dynamic = "force-dynamic";

export default function RootLayout({ children }: PropsWithChildren) {
	return (
		<html className={defaultFont.className} lang="en">
			<body suppressHydrationWarning>
				<SessionProvider>
					<ReactQueryProvider>
						<SonnerToaster />
						<main className="w-full">{children}</main>
					</ReactQueryProvider>
				</SessionProvider>
			</body>
		</html>
	);
}
