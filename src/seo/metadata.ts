import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { defaultLocale } from '@/i18n/config';
import { PUBLIC_ROUTES, localizePath } from '@/i18n/routing';
import { getLanguageAlternates, getRouteMetadata, SITE_NAME, SITE_URL } from './site';

type RouteKey = (typeof PUBLIC_ROUTES)[number];

const localeMap: Record<Locale, string> = {
  de: 'de_CH',
  en: 'en_US',
  fr: 'fr_CH',
  it: 'it_CH',
};

export function createPageMetadata(locale: Locale, route: RouteKey): Metadata {
  const meta = getRouteMetadata(locale, route);
  const canonicalPath = localizePath(locale, route);

  return {
    title: meta.title,
    description: meta.description,
    alternates: {
      canonical: `${SITE_URL}${canonicalPath}`,
      languages: getLanguageAlternates(route),
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `${SITE_URL}${canonicalPath}`,
      siteName: SITE_NAME,
      locale: localeMap[locale],
      type: 'website',
      images: [
        {
          url: `${SITE_URL}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      images: [`${SITE_URL}/twitter-image`],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function createRootMetadata(): Metadata {
  const meta = getRouteMetadata(defaultLocale, '');

  return {
    metadataBase: new URL(SITE_URL),
    applicationName: SITE_NAME,
    title: {
      default: meta.title,
      template: `%s | ${SITE_NAME}`,
    },
    description: meta.description,
    keywords: [
      'Next.js Agentur Schweiz',
      'Webdesign Liestal',
      'SEO Schweiz',
      'KI Agenten Unternehmen',
      'n8n Automatisierung',
      'Webentwicklung Basel-Landschaft',
    ],
    authors: [{ name: '0ggi' }],
    creator: '0ggi',
    publisher: SITE_NAME,
    category: 'technology',
  };
}
