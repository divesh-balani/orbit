"use server";

export async function removeOrganizationMember(
	_memberId: string,
): Promise<{ success: boolean; error?: string }> {
	return { success: false, error: "Not implemented" };
}
