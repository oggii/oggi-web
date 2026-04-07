'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Icon } from '@iconify/react';
import Image from 'next/image';
import { portfolioProjects, type PortfolioProject } from '@/data/portfolioProjects';

const FILTERS = ['Alle', 'Webdesign', 'KI-Agenten'];

function BottomSheet({ project, onClose }: { project: PortfolioProject; onClose: () => void }) {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    requestAnimationFrame(() => setVisible(true));
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && handleClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = () => {
    setVisible(false);
    setTimeout(onClose, 350);
  };

  if (!mounted) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9998] flex items-end md:items-center md:justify-center">
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Sheet */}
      <div
        className={`relative w-full md:max-w-lg md:mx-4 md:rounded-3xl rounded-t-3xl bg-[#0e0e10] border border-white/10 overflow-hidden transition-transform duration-350 ease-out will-change-transform ${
          visible ? 'translate-y-0' : 'translate-y-full md:translate-y-8 md:opacity-0'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.32, 0.72, 0, 1)' }}
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 md:hidden">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image src={project.image} alt={project.title} fill className="object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e10] via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="px-6 pb-8 pt-2">
          <div className="flex items-center gap-3 mb-2">
            <p className="text-luxota-accent text-xs font-mono tracking-widest uppercase">{project.category}</p>
            <span className="text-xs font-mono text-amber-400/80 border border-amber-400/30 bg-amber-400/10 rounded-full px-2 py-0.5">{project.year}</span>
          </div>
          <h3 className="text-2xl font-medium text-white mb-3">{project.title}</h3>
          <p className="text-luxota-dim text-sm leading-relaxed mb-5">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span key={tag} className="text-xs px-3 py-1 rounded-full border border-white/10 bg-white/5 text-white/60">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex gap-3">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 text-sm font-medium text-white bg-luxota-accent hover:bg-luxota-accent/90 rounded-full px-6 py-3 transition-colors"
            >
              <Icon icon="solar:global-linear" />
              Website besuchen
              <Icon icon="solar:arrow-right-up-linear" />
            </a>
            <button
              onClick={handleClose}
              className="w-12 h-12 rounded-full border border-white/20 bg-white/15 flex items-center justify-center text-white hover:bg-white/25 transition-colors shrink-0"
            >
              <Icon icon="solar:close-circle-bold-duotone" className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function PortfolioGridSection() {
  const [activeFilter, setActiveFilter] = useState('Alle');
  const [openProject, setOpenProject] = useState<PortfolioProject | null>(null);

  const filtered = activeFilter === 'Alle'
    ? portfolioProjects
    : portfolioProjects.filter((p) => p.filter === activeFilter);

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
          {filtered.map((project, idx) => (
            <div
              key={project.slug}
              onClick={() => setOpenProject(project)}
              className={`portfolio-item group cursor-pointer aspect-[4/3] rounded-3xl overflow-hidden relative border border-white/5 hover:border-white/10 transition-all duration-500 ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              {/* Image */}
              <div className="absolute inset-0">
                <div className="w-full h-full bg-black relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading={idx < 2 ? 'eager' : 'lazy'}
                    priority={idx < 2}
                    className="object-cover object-top opacity-50 grayscale mix-blend-luminosity group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-luxota-bg/40 group-hover:bg-transparent transition-colors duration-1000 z-10" />
                  <div className="absolute inset-0 bg-gradient-to-tr from-luxota-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay z-20" />
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
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-medium text-white">{project.title}</h3>
                    <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shrink-0 ml-4">
                      <Icon icon="solar:arrow-right-up-linear" className="text-white text-lg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Sheet */}
      {openProject && (
        <BottomSheet project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </section>
  );
}
