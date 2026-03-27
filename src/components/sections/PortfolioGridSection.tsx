'use client';

import { Icon } from '@iconify/react';
import Image from 'next/image';
import { useTranslation } from '@/i18n/TranslationContext';

function getProjects(t: (key: string) => string) {
  return [
    {
      title: t('portfolio.p1t'),
      category: t('portfolio.p1c'),
      color: "from-[#9D4EDD]/20 to-black",
      image: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: t('portfolio.p2t'),
      category: t('portfolio.p2c'),
      color: "from-blue-600/10 to-black",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: t('portfolio.p3t'),
      category: t('portfolio.p3c'),
      color: "from-zinc-800/20 to-transparent",
      image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: t('portfolio.p4t'),
      category: t('portfolio.p4c'),
      color: "from-emerald-900/10 to-black",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop"
    }
  ];
}

export default function PortfolioGridSection() {
  const { t } = useTranslation();
  const projects = getProjects(t);

  return (
    <section className="py-16 lg:py-24 relative z-10 bg-[#020203]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`reveal-up portfolio-item group cursor-pointer aspect-[4/3] rounded-3xl overflow-hidden relative border border-white/5 bg-gradient-to-br ${project.color} ${idx % 2 !== 0 ? 'md:mt-16' : ''}`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02),transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="absolute inset-0 flex items-center justify-center p-0">
                <div className="w-full h-full flex items-center justify-center group-hover:scale-105 transition-transform duration-1000 ease-out bg-black relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover opacity-50 grayscale mix-blend-luminosity group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-luxota-bg/40 group-hover:bg-transparent transition-colors duration-1000 z-10"></div>
                  <div className="absolute inset-0 bg-gradient-to-tr from-luxota-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mix-blend-overlay z-20"></div>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 flex justify-between items-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-expo">
                <div>
                  <h3 className="text-2xl font-medium text-white mb-2">{project.title}</h3>
                  <p className="text-luxota-dim text-sm tracking-wide">{project.category}</p>
                </div>

                <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-[0_0_30px_#9D4EDD60]">
                  <Icon icon="solar:arrow-right-up-linear" className="text-xl" />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
