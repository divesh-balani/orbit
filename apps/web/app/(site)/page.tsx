import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { HomePage } from "@/components/pages/HomePage";

export default async function Home() {
	const cookieStore = await cookies();
	const sessionCookie = cookieStore.get("next-auth.session-token");

	if (sessionCookie) {
		redirect("/dashboard/orbits");
	}

	return <HomePage />;
}
