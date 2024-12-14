//routes

import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ routeId: string }> }
) {
  const { routeId } = await params;
  const response = await fetch(`http://localhost:3000/routes/${routeId}`);
  const data = await response.json();
  return NextResponse.json(data);
}
