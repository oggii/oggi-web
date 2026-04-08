import { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { localizePath, PUBLIC_ROUTES } from '@/i18n/routing';
import { SITE_URL } from '@/seo/site';
import { getPayloadClient } from '@/lib/payload';
import { portfolioProjects } from '@/data/portfolioProjects';

// Priority map: higher = more important for crawlers
const routePriority: Record<string, number> = {
  '': 1.0,
  '/services': 0.9,
  '/portfolio': 0.85,
  '/blog': 0.85,
  '/contact': 0.8,
  '/hermes': 0.75,
  '/purpose': 0.6,
  '/impressum': 0.2,
  '/datenschutz': 0.2,
};

const routeFrequency: Record<string, 'daily' | 'weekly' | 'monthly' | 'yearly'> = {
  '': 'weekly',
  '/services': 'monthly',
  '/portfolio': 'monthly',
  '/blog': 'daily',
  '/contact': 'monthly',
  '/hermes': 'monthly',
  '/purpose': 'yearly',
  '/impressum': 'yearly',
  '/datenschutz': 'yearly',
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // 1. Static routes (all locales)
  const staticEntries = locales.flatMap((locale) =>
    PUBLIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${localizePath(locale, route)}`,
      lastModified: now,
      changeFrequency: (routeFrequency[route] || 'monthly') as 'daily' | 'weekly' | 'monthly' | 'yearly',
      priority: routePriority[route] ?? 0.5,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}${localizePath(l, route)}`])),
      },
    })),
  );

  // 2. Blog posts (from Payload CMS)
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const payload = await getPayloadClient();
    const { docs } = await payload.find({
      collection: 'posts',
      where: { status: { equals: 'published' } },
      sort: '-publishedAt',
      limit: 100,
      depth: 0,
    });

    blogEntries = docs.flatMap((post: any) =>
      locales.map((locale) => ({
        url: `${SITE_URL}/${locale}/blog/${post.slug}`,
        lastModified: post.updatedAt ? new Date(post.updatedAt) : now,
        changeFrequency: 'weekly' as const,
        priority: 0.7,
        alternates: {
          languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}/blog/${post.slug}`])),
        },
      })),
    );
  } catch {
    // Payload not available during build — skip blog entries
  }

  // 3. Portfolio detail pages
  const portfolioEntries = portfolioProjects.flatMap((project) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}/portfolio/${project.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.6,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}/portfolio/${project.slug}`])),
      },
    })),
  );

  return [...staticEntries, ...blogEntries, ...portfolioEntries];
}
