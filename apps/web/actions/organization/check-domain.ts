"use server";

export async function checkOrganizationDomain(
	_domain: string,
): Promise<{ success: boolean; error?: string }> {
	return { success: false, error: "Not implemented" };
}
