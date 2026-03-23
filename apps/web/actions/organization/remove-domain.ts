"use server";

export async function removeOrganizationDomain(
	_orgId: string,
): Promise<{ success: boolean; error?: string }> {
	return { success: false, error: "Not implemented" };
}
