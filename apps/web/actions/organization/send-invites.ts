"use server";

export async function sendOrganizationInvites(
	_data: unknown,
): Promise<{ success: boolean; error?: string }> {
	return { success: false, error: "Not implemented" };
}
