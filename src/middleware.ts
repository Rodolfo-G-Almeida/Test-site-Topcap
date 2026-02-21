import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const intlMiddleware = createMiddleware({
  // A list of all locales that are supported
  locales: ['pt', 'en'],
 
  // Used when no locale matches
  defaultLocale: 'pt'
});

export function middleware(request: NextRequest) {
  // Check if the path is /pascoa
  if (request.nextUrl.pathname === '/pascoa') {
    return NextResponse.redirect(new URL('/', request.url), { status: 302 });
  }

  // Otherwise, use the internationalization middleware
  return intlMiddleware(request);
}
 
export const config = {
  // Match only internationalized pathnames and /pascoa
  matcher: ['/', '/(pt|en)/:path*', '/pascoa']
};