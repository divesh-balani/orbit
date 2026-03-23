"use server";

export async function getOrganizationSSOData(
	_organizationId: unknown,
): Promise<never> {
	throw new Error("SSO is not supported");
}
