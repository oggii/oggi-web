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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <div key={project.slug} className="reveal-up group rounded-2xl overflow-hidden border border-white/8 bg-white/[0.02] flex flex-col">

              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <p className="text-luxota-accent text-xs font-mono tracking-widest uppercase mb-2">{project.category}</p>
                <h3 className="text-white font-medium text-lg mb-2">{project.title}</h3>
                <p className="text-luxota-dim text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-luxota-dim">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-4 py-2 transition-all duration-300 w-fit"
                >
                  <Icon icon="solar:global-linear" className="text-base" />
                  Website besuchen
                  <Icon icon="solar:arrow-right-up-linear" className="text-base" />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
