import { createPageMetadata } from '@/seo/metadata';
import type { Locale } from '@/i18n/config';
import { getPayloadClient } from '@/lib/payload';
import BlogListPage from '@/components/pages/BlogListPage';

export const revalidate = 600; // ISR: revalidate every 10 minutes

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '/blog');
}

export default async function LocalizedBlogPage() {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: 'posts',
    where: { _status: { equals: 'published' } },
    sort: '-publishedAt',
    limit: 50,
    depth: 1,
  });

  const posts = docs.map((post: any) => ({
    id: post.id,
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt || undefined,
    featuredImage: post.featuredImage?.url ? { url: post.featuredImage.url } : null,
    publishedAt: post.publishedAt || undefined,
  }));

  return <BlogListPage posts={posts} />;
}
