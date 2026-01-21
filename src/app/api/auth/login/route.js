import { SignJWT } from "jose";
import { NextResponse } from "next/server";

export async function POST(req) {
  // Simple mock login logic
  const body = await req.json();
  const { password } = body;

  // In production, verify against DB hash
  if (password === "terra2025") {
    const secret = new TextEncoder().encode(
      process.env.JWT_SECRET || "fallback-secret-key"
    );
    const token = await new SignJWT({ role: "pro" })
      .setProtectedHeader({ alg: "HS256" })
      .setExpirationTime("2h")
      .sign(secret);
 
    const response = NextResponse.json({ success: true });

    // Set cookie
    response.cookies.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 2,
      path: "/",
    });

    return response;
  }

  return NextResponse.json({ success: false }, { status: 401 });
}
