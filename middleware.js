import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-secret-key"
);

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  const isApiOrNextRoute = pathname.startsWith("/api") || pathname.startsWith("/_next");

  // Default locale (Catalan) at root: pass through without redirect
  // Catalan content is served from src/app/page.jsx at the root path
  // Only /es/* and /en/* have locale prefixes - they pass through as-is

  // Protect /profesionales routes
  if (pathname.startsWith("/profesionales")) {
    const token = req.cookies.get("auth_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/contact", req.url));
    }

    try {
      await jwtVerify(token, SECRET);
      const response = NextResponse.next();
      response.headers.set("x-locale-detected", "true");
      return response;
    } catch (error) {
      return NextResponse.redirect(new URL("/contact", req.url));
    }
  }

  const response = NextResponse.next();
  response.headers.set("x-locale-detected", "true");
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
