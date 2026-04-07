'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/i18n/TranslationContext';
import FooterSection from '@/components/sections/FooterSection';
import { Icon } from '@iconify/react';

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: { url: string } | null;
  publishedAt?: string;
};

export default function BlogListPage() {
  const { t, locale } = useTranslation();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/posts?where[status][equals]=published&sort=-publishedAt&limit=50')
      .then((res) => res.json())
      .then((data) => {
        setPosts(data.docs || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  return (
    <main className="pt-40 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10 reveal-up">
        <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">{t('blog.pageTag')}</span>
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-6 leading-tight">
          {t('blog.pageTitle1')}<br />
          <span className="text-luxota-dim/50">{t('blog.pageTitle2')}</span>
        </h1>
        <p className="text-xl text-luxota-dim max-w-2xl font-light">
          {t('blog.pageDesc')}
        </p>
      </div>

      {/* Posts Grid */}
      <section className="py-16 lg:py-24 relative z-10 bg-[#020203]">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="w-8 h-8 border-2 border-luxota-accent/30 border-t-luxota-accent rounded-full animate-spin" />
            </div>
          ) : posts.length === 0 ? (
            <p className="text-luxota-dim text-center py-20 text-lg">{t('blog.noPosts')}</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.id}
                  href={`/${locale}/blog/${post.slug}`}
                  className="group rounded-2xl overflow-hidden border border-white/5 hover:border-luxota-accent/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 hover:shadow-[0_0_30px_rgba(157,78,221,0.08)]"
                >
                  {/* Thumbnail */}
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

                  {/* Content */}
                  <div className="p-6">
                    {post.publishedAt && (
                      <p className="text-xs text-luxota-dim/60 font-mono mb-2">
                        {t('blog.publishedAt')} {new Date(post.publishedAt).toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' })}
                      </p>
                    )}
                    <h2 className="text-xl font-medium text-white mb-2 group-hover:text-luxota-accent transition-colors">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-sm text-luxota-dim line-clamp-3">{post.excerpt}</p>
                    )}
                    <div className="mt-4 flex items-center gap-2 text-sm text-luxota-accent font-medium">
                      {t('blog.readMore')}
                      <Icon icon="solar:arrow-right-linear" className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
