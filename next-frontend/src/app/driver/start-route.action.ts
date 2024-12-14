"use server";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function startRouteAction(state: any, formData: FormData) {
  const { route_id } = Object.fromEntries(formData);

  if(!route_id){
    return { error: "Route ID is required" };
  }

  const response = await fetch(
    `http://localhost:3000/routes/${route_id}/start`,
    {
      method: "POST",
    }
  );

  if (!response.ok) {
    console.error(await response.text());
    return { error: "Failed to start route" };
  }

  return { success: true };
}
