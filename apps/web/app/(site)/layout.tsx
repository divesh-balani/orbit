import { buildEnv } from "@orbit/env";
import type { PropsWithChildren } from "react";
import { MessengerWidget } from "../Layout/MessengerWidget";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export default async function Layout(props: PropsWithChildren) {
	return (
		<>
			<Navbar />
			{props.children}
			<Footer />
			{buildEnv.NEXT_PUBLIC_IS_ORBIT === "true" && <MessengerWidget />}
		</>
	);
}
