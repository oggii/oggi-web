import { notFound } from 'next/navigation';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/sections/FooterSection';
import { portfolioProjects } from '@/data/portfolioProjects';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale } from '@/i18n/routing';
import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) return { title: 'Project not found' };

  const dict = isLocale(locale) ? await getDictionary(locale as Locale) : await getDictionary('de');
  const getTranslation = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = dict;
    for (const k of keys) {
      if (typeof value !== 'object' || value === null || !(k in value)) return key;
      value = (value as Record<string, unknown>)[k];
    }
    return typeof value === 'string' ? value : key;
  };

  const description = getTranslation(project.descriptionKey);

  return {
    title: project.title,
    description,
    openGraph: {
      title: project.title,
      description,
      type: 'website',
      url: `https://0ggi.ch/${locale}/portfolio/${slug}`,
      ...(project.image && { images: [{ url: `https://0ggi.ch${project.image}` }] }),
    },
  };
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) notFound();

  const dict = isLocale(locale) ? await getDictionary(locale) : await getDictionary('de');

  // Helper to resolve dot-notation keys from dictionary
  const t = (key: string): string => {
    const keys = key.split('.');
    let value: unknown = dict;
    for (const k of keys) {
      if (typeof value !== 'object' || value === null || !(k in value)) return key;
      value = (value as Record<string, unknown>)[k];
    }
    return typeof value === 'string' ? value : key;
  };

  const backHref = `/${locale}/portfolio`;

  return (
    <main className="min-h-screen bg-[#020203]">

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] overflow-hidden">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top opacity-40"
            unoptimized
            priority
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-violet-950/40 to-black">
            <div className="absolute inset-0 flex items-center justify-center">
              <Icon icon="solar:cpu-bolt-bold-duotone" className="text-[200px] text-luxota-accent/10" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#020203] via-[#020203]/60 to-transparent" />

        {/* Back link */}
        <div className="absolute top-8 left-6 z-10">
          <Link href={backHref} className="inline-flex items-center gap-2 text-luxota-dim hover:text-white transition-colors text-sm group">
            <Icon icon="solar:arrow-left-linear" className="group-hover:-translate-x-1 transition-transform" />
            Portfolio
          </Link>
        </div>

        {/* Hero text */}
        <div className="absolute bottom-12 left-0 right-0 px-6 max-w-5xl mx-auto">
          <p className="text-luxota-accent text-xs font-mono tracking-widest uppercase mb-3">{t(project.categoryKey)}</p>
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight">{project.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left: description + deliverables */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="text-xs font-mono text-luxota-accent tracking-widest uppercase mb-4">{t('portfolio.pageTag')}</p>
              <p className="text-lg text-luxota-dim font-light leading-relaxed">{t(project.descriptionKey)}</p>
            </div>

          </div>

          {/* Right: meta */}
          <div className="space-y-8">
            <div className="rounded-2xl border border-white/8 bg-white/[0.02] p-6 space-y-6">
              <div>
                <p className="text-xs font-mono text-luxota-dim tracking-widest uppercase mb-1">Kunde</p>
                <p className="text-white font-medium">{project.client}</p>
              </div>
              <div>
                <p className="text-xs font-mono text-luxota-dim tracking-widest uppercase mb-1">Jahr</p>
                <p className="text-white font-medium">{project.year}</p>
              </div>
              <div>
                <p className="text-xs font-mono text-luxota-dim tracking-widest uppercase mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-luxota-dim">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-luxota-accent hover:text-white transition-colors group"
                >
                  <Icon icon="solar:global-linear" />
                  {t('portfolioCards.visitWebsite')}
                  <Icon icon="solar:arrow-right-up-linear" className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              )}
            </div>
          </div>

        </div>
      </section>

      <FooterSection />
    </main>
  );
}
