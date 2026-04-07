'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { portfolioProjects } from '@/data/portfolioProjects';

const FILTERS = ['Alle', 'Webdesign', 'KI-Agenten'];

export default function PortfolioGridSection() {
  const [activeFilter, setActiveFilter] = useState('Alle');
  const [expandedSlug, setExpandedSlug] = useState<string | null>(null);

  const filtered = activeFilter === 'Alle'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.filter === activeFilter);

  const handleTap = (slug: string) => {
    setExpandedSlug((prev) => (prev === slug ? null : slug));
  };

  return (
    <section className="py-16 lg:py-24 relative z-10 bg-[#020203]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                activeFilter === f
                  ? 'bg-luxota-accent border-luxota-accent text-white'
                  : 'border-white/10 text-luxota-dim hover:border-white/30 hover:text-white bg-white/[0.02]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {filtered.map((project, idx) => {
            const isExpanded = expandedSlug === project.slug;
            return (
              <div
                key={project.slug}
                onClick={() => handleTap(project.slug)}
                className={`portfolio-item group cursor-pointer rounded-3xl overflow-hidden relative border transition-all duration-500 ${
                  isExpanded ? 'border-luxota-accent/30' : 'border-white/5'
                } ${idx % 2 !== 0 ? 'md:mt-16' : ''} ${
                  isExpanded ? 'min-h-[420px]' : 'aspect-[4/3]'
                } md:aspect-[4/3]`}
              >
                {/* Hover/active glow */}
                <div className={`absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_100%)] transition-opacity duration-700 z-0 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />

                {/* Image */}
                <div className="absolute inset-0">
                  <div className="w-full h-full bg-black relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      loading="eager"
                      className={`object-cover object-top transition-all duration-1000 group-hover:scale-105 ${
                        isExpanded
                          ? 'opacity-100 grayscale-0 mix-blend-normal scale-105'
                          : 'opacity-50 grayscale mix-blend-luminosity'
                      }`}
                    />
                    <div className={`absolute inset-0 bg-luxota-bg/40 transition-colors duration-1000 z-10 group-hover:bg-transparent ${isExpanded ? '!bg-transparent' : ''}`} />
                    <div className={`absolute inset-0 bg-gradient-to-tr from-luxota-accent/20 to-transparent transition-opacity duration-1000 mix-blend-overlay z-20 ${isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 z-30">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent -top-16 pointer-events-none" />

                  <div className="relative p-8">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-luxota-accent text-xs font-mono tracking-widest uppercase">{project.category}</p>
                      <span className="text-xs font-mono text-amber-400/80 border border-amber-400/30 bg-amber-400/10 rounded-full px-2 py-0.5">{project.year}</span>
                    </div>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className={`text-2xl font-medium text-white transition-all duration-300 ${isExpanded ? 'mb-3' : 'mb-0 group-hover:mb-3'}`}>
                          {project.title}
                        </h3>

                        {/* Expanded content — hover on desktop, tap on mobile */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96' : 'max-h-0 group-hover:max-h-48'}`}>
                          <p className="text-luxota-dim text-sm leading-relaxed mb-3">{project.description}</p>
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                              <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/20 bg-white/5 text-white/60">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-xs text-white/70 hover:text-white border border-white/20 hover:border-white/40 rounded-full px-4 py-1.5 transition-all duration-300"
                          >
                            <Icon icon="solar:global-linear" />
                            Website besuchen
                            <Icon icon="solar:arrow-right-up-linear" />
                          </a>
                        </div>
                      </div>

                      {/* Arrow button */}
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className={`w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 shadow-[0_0_30px_#9D4EDD60] shrink-0 ml-4 mt-1 ${
                          isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100'
                        }`}
                      >
                        <Icon icon="solar:arrow-right-up-linear" className="text-xl" />
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
