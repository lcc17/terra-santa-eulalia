import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-secret-key"
);

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Protect /profesionales routes
  if (pathname.startsWith("/profesionales")) {
    const token = req.cookies.get("auth_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      await jwtVerify(token, SECRET);
      return NextResponse.next();
    } catch (error) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/profesionales/:path*"],
};
