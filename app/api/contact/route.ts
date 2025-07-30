import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const data = await req.json();
  // Handle contact form submission (e.g., send email, save to DB)
  return NextResponse.json({ success: true, data });
}
