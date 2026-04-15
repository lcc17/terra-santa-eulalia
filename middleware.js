import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-secret-key"
);

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // i18n: Detect locale and redirect if needed
  const localePrefixes = ["/ca", "/es", "/en"];
  const isApiOrNextRoute = pathname.startsWith("/api") || pathname.startsWith("/_next");
  const hasLocalePrefix = localePrefixes.some((prefix) => pathname.startsWith(prefix));

  // Redirect root and paths without locale prefix to /ca
  if (!hasLocalePrefix && !isApiOrNextRoute && pathname !== "/favicon.ico") {
    const url = req.nextUrl.clone();
    url.pathname = `/ca${pathname === "/" ? "" : pathname}`;
    const response = NextResponse.redirect(url);
    // Netlify Edge Functions: set locale header for downstream reads
    response.headers.set("x-next-locale", "ca");
    response.headers.set("x-locale-detected", "true");
    return response;
  }

  // Protect /profesionales routes
  if (pathname.startsWith("/profesionales")) {
    const token = req.cookies.get("auth_token")?.value;

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
      await jwtVerify(token, SECRET);
      const response = NextResponse.next();
      response.headers.set("x-next-locale", "ca");
      response.headers.set("x-locale-detected", "true");
      return response;
    } catch (error) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Successful locale detection response
  const response = NextResponse.next();
  response.headers.set("x-locale-detected", "true");
  // Also set x-next-locale based on detected prefix
  if (pathname.startsWith("/ca")) {
    response.headers.set("x-next-locale", "ca");
  } else if (pathname.startsWith("/es")) {
    response.headers.set("x-next-locale", "es");
  } else if (pathname.startsWith("/en")) {
    response.headers.set("x-next-locale", "en");
  }
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
