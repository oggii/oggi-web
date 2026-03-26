'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Icon } from '@iconify/react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Main Navigation Pill */}
      <nav className="fixed top-6 md:top-8 left-0 right-0 z-[100] flex justify-end md:justify-center px-6 md:px-6 pointer-events-none opacity-0 reveal-nav">
        <div className="pointer-events-auto bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-full p-2 flex items-center gap-1 shadow-2xl transition-all duration-500 hover:border-white/20 hover:bg-white/[0.08]">
          <div className="hidden md:flex items-center gap-1">
            <Link href="/services" className="px-6 py-2.5 text-xs font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all">
              Dienstleistungen
            </Link>
            <Link href="/portfolio" className="px-6 py-2.5 text-xs font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all">
              Portfolio
            </Link>
            <Link href="/purpose" className="px-6 py-2.5 text-xs font-medium text-white/70 hover:text-white rounded-full hover:bg-white/5 transition-all">
              Mission
            </Link>
            <div className="w-px h-4 bg-white/10 mx-2"></div>
          </div>
          
          <Link href="/#action" className="group px-6 py-2.5 text-xs font-bold text-luxota-bg bg-white rounded-full hover:bg-luxota-accent transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Kontakt <span className="hidden group-hover:inline-block ml-1 transition-all">→</span>
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors ml-1 text-white">
             <Icon icon={menuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} className="text-xl" />
          </button>
        </div>
      </nav>

      {/* 0ggi Logo in Header */}
      <div className="fixed top-8 md:top-9 left-6 md:left-8 z-[100] mix-blend-difference pointer-events-none opacity-0 reveal-nav">
        <Link href="/" className="pointer-events-auto text-sm font-semibold tracking-tight text-white flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-luxota-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-luxota-accent shadow-[0_0_15px_#9D4EDD]"></span>
          </div>
          <span className="tracking-[0.2em] text-xs">0ggi</span>
        </Link>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[90] bg-[#020203]/95 backdrop-blur-3xl flex flex-col items-center justify-center gap-8 md:hidden px-6" style={{ animation: 'fadeIn 0.3s ease-out' }}>
          <Link onClick={() => setMenuOpen(false)} href="/" className="text-3xl font-medium tracking-tight text-white/50 hover:text-white transition-colors uppercase font-mono text-sm tracking-widest mb-4">Startseite</Link>
          <Link onClick={() => setMenuOpen(false)} href="/services" className="text-4xl font-medium tracking-tight text-white hover:text-luxota-accent transition-colors">Dienstleistungen</Link>
          <Link onClick={() => setMenuOpen(false)} href="/portfolio" className="text-4xl font-medium tracking-tight text-white hover:text-luxota-accent transition-colors">Portfolio</Link>
          <Link onClick={() => setMenuOpen(false)} href="/purpose" className="text-4xl font-medium tracking-tight text-white hover:text-luxota-accent transition-colors">Mission</Link>
          <Link onClick={() => setMenuOpen(false)} href="/#action" className="px-10 py-4 rounded-full bg-luxota-accent text-luxota-bg font-bold mt-12 shadow-[0_0_30px_#9D4EDD40]">Projekt anfragen</Link>

          <style jsx>{`
            @keyframes fadeIn {
              from { opacity: 0; backdrop-filter: blur(0px); }
              to { opacity: 1; backdrop-filter: blur(24px); }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
