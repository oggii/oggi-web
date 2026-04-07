'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/i18n/TranslationContext';
import FooterSection from '@/components/sections/FooterSection';
import { Icon } from '@iconify/react';
import { RichText } from '@payloadcms/richtext-lexical/react';

type Post = {
  title: string;
  slug: string;
  excerpt?: string;
  content: any;
  featuredImage?: { url: string } | null;
  publishedAt?: string;
};

export default function BlogPostPage({ post }: { post: Post }) {
  const { t, locale } = useTranslation();

  return (
    <main className="pt-40 min-h-screen">
      <article className="max-w-3xl mx-auto px-6 relative z-10">
        {/* Back link */}
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-sm text-luxota-dim hover:text-white transition-colors mb-10"
        >
          <Icon icon="solar:arrow-left-linear" />
          {t('blog.backToBlog')}
        </Link>

        {/* Meta */}
        {post.publishedAt && (
          <p className="text-xs text-luxota-dim/60 font-mono mb-4">
            {t('blog.publishedAt')} {new Date(post.publishedAt).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        )}

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-8 leading-tight">
          {post.title}
        </h1>

        {/* Featured Image */}
        {post.featuredImage?.url && (
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl mb-12">
            <Image src={post.featuredImage.url} alt={post.title} fill className="object-cover" />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-invert prose-lg max-w-none mb-20
          prose-headings:font-medium prose-headings:tracking-tight
          prose-p:text-luxota-dim prose-p:leading-relaxed
          prose-a:text-luxota-accent prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white
          prose-img:rounded-xl
        ">
          <RichText data={post.content} />
        </div>
      </article>

      <FooterSection />
    </main>
  );
}
