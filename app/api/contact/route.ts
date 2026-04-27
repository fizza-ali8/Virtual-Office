import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body?.fullName || !body?.email || !body?.subject || !body?.message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
