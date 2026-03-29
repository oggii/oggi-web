import Link from 'next/link';
import { Metadata } from 'next';
import { Icon } from '@iconify/react';

export const metadata: Metadata = {
  title: '404 - Not Found | 0ggi',
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#020203] text-center px-6 relative overflow-hidden" id="not-found">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="relative z-10">
        <h2 className="text-7xl md:text-9xl text-white font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10">
          404
        </h2>
        <h3 className="text-xl md:text-2xl text-white font-mono mb-8 uppercase tracking-widest text-luxota-accent">
          Node_offline
        </h3>
        <p className="text-luxota-dim mb-12 max-w-sm mx-auto font-light leading-relaxed">
          Diese Sektion existiert im aktuellen Dateisystem nicht mehr. Der Server meldet einen Broken Link.
        </p>
        <Link 
          href="/de" 
          className="group inline-flex items-center gap-3 text-white text-sm font-medium hover:text-luxota-accent transition-colors"
        >
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-luxota-accent group-hover:bg-luxota-accent/10 transition-all bg-white/5">
            <Icon icon="solar:arrow-left-linear" className="group-hover:-translate-x-0.5 transition-transform text-lg" />
          </div>
          <span className="border-b border-white/20 pb-0.5 group-hover:border-luxota-accent/50 transition-all uppercase tracking-widest text-xs">
            Return to Base
          </span>
        </Link>
      </div>
    </div>
  );
}
