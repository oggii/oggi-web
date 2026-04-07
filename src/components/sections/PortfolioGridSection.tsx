'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { portfolioProjects } from '@/data/portfolioProjects';

const FILTERS = ['Alle', 'Webdesign', 'KI-Agenten'];

export default function PortfolioGridSection() {
  const [active, setActive] = useState('Alle');

  const filtered = active === 'Alle'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.filter === active);

  return (
    <section className="py-16 lg:py-24 relative z-10 bg-[#020203]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-3 mb-12">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                active === f
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
          {filtered.map((project, idx) => (
            <div
              key={project.slug}
              className={`portfolio-item group cursor-default aspect-[4/3] rounded-3xl overflow-hidden relative border border-white/5 ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-0" />

              {/* Image */}
              <div className="absolute inset-0">
                <div className="w-full h-full bg-black relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="eager"
                    className="object-cover object-top opacity-50 grayscale mix-blend-luminosity group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-luxota-bg/40 group-hover:bg-transparent transition-colors duration-1000 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-luxota-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay z-20" />
                </div>
              </div>

              {/* Bottom info — slides up on hover */}
              <div className="absolute bottom-0 left-0 right-0 z-30">
                {/* Gradient fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent -top-16 pointer-events-none" />

                <div className="relative p-8">
                  {/* Always visible: category + title */}
                  <p className="text-luxota-accent text-xs font-mono tracking-widest uppercase mb-2">{project.category}</p>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-2xl font-medium text-white mb-0 group-hover:mb-3 transition-all duration-300">{project.title}</h3>

                      {/* Revealed on hover */}
                      <div className="overflow-hidden max-h-0 group-hover:max-h-40 transition-all duration-500 ease-in-out">
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
                      className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-[0_0_30px_#9D4EDD60] shrink-0 ml-4 mt-1"
                    >
                      <Icon icon="solar:arrow-right-up-linear" className="text-xl" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
