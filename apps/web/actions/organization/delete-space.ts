"use server";

export async function deleteSpace(
	_spaceId: string,
): Promise<{ success: boolean; error?: string }> {
	return { success: false, error: "Not implemented" };
}
