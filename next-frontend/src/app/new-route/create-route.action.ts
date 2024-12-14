"use server";

import { revalidateTag } from "next/cache";

export async function createRouteAction(_: any, formData: FormData) {
  const { origin, destination } = Object.fromEntries(formData);
  const directionsResponse = await fetch(
    `http://localhost:3000/directions?origin=${origin}&destination=${destination}`
  );

  if (!directionsResponse.ok) {
    return { error: "Failed to fetch directions" };
  }

  const directionsData = await directionsResponse.json();
  const startAddress = directionsData.routes[0].legs[0].start_address;
  const endAddress = directionsData.routes[0].legs[0].end_address;

  const response = await fetch(`http://localhost:3000/routes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: `${startAddress} - ${endAddress}`,
      origin,
      destination
    }),
  });

  if (!response.ok) {
    return { error: "Failed to create route" };
  }

  revalidateTag("routes");

  return { success: true };
}
