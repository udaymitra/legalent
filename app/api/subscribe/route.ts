import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

function isValidEmail(email: string): boolean {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// POST /api/subscribe
// Adds an email to the subscribers table. Email is normalized (trimmed, lowercased).
// Duplicate emails are silently ignored (ON CONFLICT DO NOTHING) — the user sees
// a success response regardless, so re-subscribing is a no-op.
// Returns: { success: true, data: { email } } on success (200)
//          { success: false, error: string } on validation failure (400) or server error (500)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
    // TODO: Validate source against an allowed list (e.g., "legal", "blog") to prevent
    // arbitrary values. Currently passed through as a free-form string.
    const source = typeof body.source === "string" ? body.source.trim() : "";

    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 }
      );
    }

    await sql`
      INSERT INTO subscribers (email, source)
      VALUES (${email}, ${source})
      ON CONFLICT (email) DO NOTHING
    `;

    return NextResponse.json({ success: true, data: { email } });
  } catch {
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
