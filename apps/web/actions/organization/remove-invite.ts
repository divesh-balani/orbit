"use server";

export async function removeOrganizationInvite(
	_inviteId: string,
): Promise<{ success: boolean; error?: string }> {
	return { success: false, error: "Not implemented" };
}
