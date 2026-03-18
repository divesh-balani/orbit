import { redirect } from "next/navigation";
import { getRootAdminUser, listDesktopAccessUsers } from "@/lib/desktop-access";
import AccessAdmin from "./AccessAdmin";

export default async function DesktopAccessPage() {
	const currentUser = await getRootAdminUser();
	if (!currentUser) redirect("/dashboard");

	const users = await listDesktopAccessUsers();

	return (
		<div className="px-5 py-6 lg:px-8 lg:py-8">
			<AccessAdmin users={users} />
		</div>
	);
}
