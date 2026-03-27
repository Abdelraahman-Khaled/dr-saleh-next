import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ar"],

  // Used when no locale matches
  defaultLocale: "en",

  // If this is set to 'as-needed', the strategy for locale prefixes will be optimized
  localePrefix: "always",
});

export default function proxy(request) {
  const { pathname } = request.nextUrl;

  // Execute intlMiddleware to handle internationalization
  const response = intlMiddleware(request);

  /**
   * 1. Force 301 status for any redirects
   * next-intl redirects (like / -> /en) are 307/308 by default.
   * This forces them to be 301 Permanent Redirects for SEO.
   */
  if (response.status === 307 || response.status === 308) {
    const location = response.headers.get("location");
    if (location) {
      const url = new URL(location, request.url);
      return NextResponse.redirect(url, 301);
    }
  }

  /**
   * 2. Redirect any non-localized path that doesn't match standard prefixes to home with 301
   * This effectively treats mystery paths (404-candidates) as redirects to home.
   */
  const isLocalized = pathname.startsWith("/en") || pathname.startsWith("/ar");
  if (!isLocalized && pathname !== "/" && !pathname.includes(".")) {
    return NextResponse.redirect(new URL("/", request.url), 301);
  }

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar|en)/:path*", "/((?!api|_next|_vercel|.*\\..*).*)"],
};
