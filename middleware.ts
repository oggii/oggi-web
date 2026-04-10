import { NextResponse, type NextRequest } from 'next/server';
import { defaultLocale } from './src/i18n/config';
import { isLocale, localizePath } from './src/i18n/routing';

const PUBLIC_FILE = /\.(.*)$/;

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/admin') ||
    pathname.startsWith('/favicon.ico') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const firstSegment = pathname.split('/')[1];
  if (!firstSegment || !isLocale(firstSegment)) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = localizePath(defaultLocale, pathname);
    return NextResponse.redirect(redirectUrl, 308);
  }

  // No header mutation here on purpose — that would force every page into
  // dynamic rendering and defeat the per-page `revalidate` ISR config.
  // The locale is always available via the [locale] route param downstream.
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
