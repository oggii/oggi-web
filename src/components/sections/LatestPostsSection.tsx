'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/i18n/TranslationContext';
import { Icon } from '@iconify/react';

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: { url: string } | null;
  publishedAt?: string;
};

export default function LatestPostsSection({ posts }: { posts: Post[] }) {
  const { t, locale } = useTranslation();

  if (!posts.length) return null;

  return (
    <section className="py-20 lg:py-32 relative z-10 bg-[#020203]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">[ BLOG ]</span>
            <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white">
              {locale === 'de' ? 'Aktuelle Beiträge' : locale === 'fr' ? 'Articles récents' : locale === 'it' ? 'Articoli recenti' : 'Latest Posts'}
            </h2>
          </div>
          <Link
            href={`/${locale}/blog`}
            className="hidden md:flex items-center gap-2 text-sm text-luxota-accent hover:text-white transition-colors font-medium"
          >
            {locale === 'de' ? 'Alle Beiträge' : locale === 'fr' ? 'Tous les articles' : locale === 'it' ? 'Tutti gli articoli' : 'All posts'}
            <Icon icon="solar:arrow-right-linear" />
          </Link>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link
              key={post.id}
              href={`/${locale}/blog/${post.slug}`}
              className="group rounded-2xl overflow-hidden border border-white/5 hover:border-luxota-accent/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_0_30px_rgba(157,78,221,0.08)]"
            >
              {post.featuredImage?.url && (
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black/40">
                  <Image
                    src={post.featuredImage.url}
                    alt={post.title}
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
              )}
              <div className="p-6">
                {post.publishedAt && (
                  <p className="text-xs text-white/70 font-mono mb-2">
                    {new Date(post.publishedAt).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                )}
                <h3 className="text-lg font-medium text-white mb-2 group-hover:text-luxota-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="text-sm text-luxota-dim line-clamp-2">{post.excerpt}</p>
                )}
                <div className="mt-4 flex items-center gap-2 text-sm text-luxota-accent font-medium">
                  {locale === 'de' ? 'Weiterlesen' : locale === 'fr' ? 'Lire la suite' : locale === 'it' ? 'Leggi di più' : 'Read more'}
                  <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile "All posts" link */}
        <div className="mt-8 md:hidden text-center">
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-sm text-luxota-accent font-medium"
          >
            {locale === 'de' ? 'Alle Beiträge' : locale === 'fr' ? 'Tous les articles' : locale === 'it' ? 'Tutti gli articoli' : 'All posts'}
            <Icon icon="solar:arrow-right-linear" />
          </Link>
        </div>
      </div>
    </section>
  );
}
