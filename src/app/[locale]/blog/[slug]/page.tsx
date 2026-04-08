import type { Locale } from '@/i18n/config';
import type { Metadata } from 'next';
import { cache } from 'react';
import { getPayloadClient } from '@/lib/payload';
import BlogPostPage from '@/components/pages/BlogPostPage';
import { BlogPostSchema } from '@/components/seo/BlogPostSchema';
import { notFound } from 'next/navigation';

export const revalidate = 600; // ISR: revalidate every 10 minutes

type Args = {
  params: Promise<{ locale: Locale; slug: string }>;
};

const getPost = cache(async (slug: string) => {
  const payload = await getPayloadClient();
  const { docs } = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug }, status: { equals: 'published' } },
    limit: 1,
  });
  return docs[0] as any | undefined;
});

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) return { title: 'Post not found' };

  return {
    title: post.title,
    description: post.excerpt || '',
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Oggi Arifi'],
      ...(post.featuredImage?.url && { images: [{ url: post.featuredImage.url }] }),
    },
  };
}

export default async function LocalizedBlogPostPage({ params }: Args) {
  const { locale, slug } = await params;
  const post = await getPost(slug);

  if (!post) notFound();

  return (
    <>
      <BlogPostSchema
        title={post.title}
        slug={post.slug}
        locale={locale}
        excerpt={post.excerpt}
        publishedAt={post.publishedAt}
        updatedAt={post.updatedAt}
        featuredImage={post.featuredImage}
      />
      <BlogPostPage post={post} />
    </>
  );
}
