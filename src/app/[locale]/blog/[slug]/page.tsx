import type { Locale } from '@/i18n/config';
import type { Metadata } from 'next';
import { getPayloadClient } from '@/lib/payload';
import BlogPostPage from '@/components/pages/BlogPostPage';
import { notFound } from 'next/navigation';

type Args = {
  params: Promise<{ locale: Locale; slug: string }>;
};

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params;
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
  });

  if (!docs.length) return { title: 'Post not found' };

  const post = docs[0] as any;
  return {
    title: `${post.title} | 0ggi.ch`,
    description: post.excerpt || '',
  };
}

export default async function LocalizedBlogPostPage({ params }: Args) {
  const { slug } = await params;
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
  });

  if (!docs.length) notFound();

  return <BlogPostPage post={docs[0] as any} />;
}
