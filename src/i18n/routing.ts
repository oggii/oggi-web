import { defaultLocale, locales, type Locale } from './config';

export const PUBLIC_ROUTES = ['', '/services', '/portfolio', '/purpose', '/contact', '/hermes', '/impressum', '/datenschutz'] as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function normalizePathname(pathname: string) {
  if (!pathname || pathname === '/') {
    return '';
  }

  const trimmed = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return trimmed.endsWith('/') ? trimmed.slice(0, -1) : trimmed;
}

export function stripLocaleFromPathname(pathname: string) {
  const normalized = normalizePathname(pathname);

  if (!normalized) {
    return '';
  }

  const [, maybeLocale, ...rest] = normalized.split('/');
  if (maybeLocale && isLocale(maybeLocale)) {
    return rest.length > 0 ? `/${rest.join('/')}` : '';
  }

  return normalized;
}

export function localizePath(locale: Locale, pathname = '') {
  const normalized = stripLocaleFromPathname(pathname);
  return normalized ? `/${locale}${normalized}` : `/${locale}`;
}

export function getPathnameLocale(pathname: string) {
  const normalized = normalizePathname(pathname);
  const maybeLocale = normalized.split('/')[1];

  return maybeLocale && isLocale(maybeLocale) ? maybeLocale : defaultLocale;
}

