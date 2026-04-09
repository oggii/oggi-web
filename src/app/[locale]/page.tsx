import HomePage from '@/components/pages/HomePage';
import { createPageMetadata } from '@/seo/metadata';
import { getPayloadClient } from '@/lib/payload';
import type { Locale } from '@/i18n/config';

export const revalidate = 600; // ISR: revalidate every 10 minutes

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '');
}

export default async function LocalizedHomePage() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: 'posts',
    where: { _status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 3,
    depth: 1,
  });

  const latestPosts = docs.map((post: any) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || undefined,
    featuredImage: post.featuredImage?.url ? { url: post.featuredImage.url } : null,
    publishedAt: post.publishedAt || undefined,
  }));

  return <HomePage latestPosts={latestPosts} />;
}