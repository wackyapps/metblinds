import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Cookies from "js-cookie";

export function middleware(request: NextRequest) {
  // Get the token from cookies
  const token = request.cookies.get("token");

  const isAuthenticated = request.cookies.get("isAuthenticated");

  // Check if user is trying to access protected route and is not authenticated
  if (!token || isAuthenticated?.value !== "true") {
    // Redirect to login page with the original URL as return_to parameter
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("return_to", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }
  if (request.nextUrl.pathname === "/admin") {
    return NextResponse.redirect(new URL("/admin/blogs", request.url));
  }

  return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
  // Add any other protected paths here
  matcher: ["/admin/:path*"],
};
