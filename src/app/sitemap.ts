import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://0ggi.ch';
  const lastModified = new Date();

  const routes = [
    '',
    '/services',
    '/portfolio',
    '/purpose',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
