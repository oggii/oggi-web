'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/i18n/TranslationContext';
import { portfolioProjects } from '@/data/portfolioProjects';

export default function PortfolioGridSection() {
  const { href } = useTranslation();

  return (
    <section className="py-16 lg:py-24 relative z-10 bg-[#020203]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {portfolioProjects.map((project, idx) => (
            <Link
              key={project.slug}
              href={href(`/portfolio/${project.slug}`)}
              className={`reveal-up portfolio-item group aspect-[4/3] rounded-3xl overflow-hidden relative border border-white/5 bg-gradient-to-br ${project.color} ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="absolute inset-0 flex items-center justify-center p-0">
                <div className="w-full h-full flex items-center justify-center bg-black relative overflow-hidden">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-top opacity-50 grayscale mix-blend-luminosity group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-1000"
                      unoptimized
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Icon icon="solar:cpu-bolt-bold-duotone" className="text-[120px] text-luxota-accent/20 group-hover:text-luxota-accent/40 transition-colors duration-700" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-luxota-bg/40 group-hover:bg-transparent transition-colors duration-1000 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-luxota-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay z-20" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div>
                  <p className="text-luxota-accent text-xs font-mono tracking-widest mb-2 uppercase">{project.category}</p>
                  <h3 className="text-2xl font-medium text-white mb-1">{project.title}</h3>
                  <p className="text-luxota-dim text-sm">{project.year}</p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-[0_0_30px_#9D4EDD60] shrink-0">
                  <Icon icon="solar:arrow-right-up-linear" className="text-xl" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
