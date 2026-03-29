import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { localizePath, PUBLIC_ROUTES } from '@/i18n/routing';
import { SITE_URL } from '@/seo/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries = locales.flatMap((locale) =>
    PUBLIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${localizePath(locale, route)}`,
      lastModified,
      changeFrequency: route === '' ? ('weekly' as const) : ('monthly' as const),
      priority: route === '' ? 1 : route === '/contact' ? 0.9 : 0.8,
      alternates: {
        languages: Object.fromEntries(locales.map((value) => [value, `${SITE_URL}${localizePath(value, route)}`])),
      },
    })),
  );

  return entries;
}
