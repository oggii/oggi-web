import { notFound } from 'next/navigation';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import FooterSection from '@/components/sections/FooterSection';
import { portfolioProjects } from '@/data/portfolioProjects';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  return portfolioProjects.map((p) => ({ slug: p.slug }));
}

export default async function PortfolioDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const project = portfolioProjects.find((p) => p.slug === slug);
  if (!project) notFound();

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
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color}`}>
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
          <p className="text-luxota-accent text-xs font-mono tracking-widest uppercase mb-3">{project.category}</p>
          <h1 className="text-4xl md:text-6xl font-medium text-white tracking-tight">{project.title}</h1>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left: description + deliverables */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <p className="text-xs font-mono text-luxota-accent tracking-widest uppercase mb-4">Über das Projekt</p>
              <p className="text-lg text-luxota-dim font-light leading-relaxed">{project.description}</p>
            </div>

            <div>
              <p className="text-xs font-mono text-luxota-accent tracking-widest uppercase mb-6">Leistungen</p>
              <ul className="space-y-4">
                {project.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-4 text-white/80">
                    <span className="mt-1 w-5 h-5 rounded-full bg-luxota-accent/10 border border-luxota-accent/30 flex items-center justify-center shrink-0">
                      <Icon icon="solar:check-read-linear" className="text-luxota-accent text-xs" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
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
                  Website besuchen
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
