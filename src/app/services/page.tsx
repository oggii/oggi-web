import { Metadata } from 'next';
import ServicesListSection from '@/components/sections/ServicesListSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FooterSection from '@/components/sections/FooterSection';

export const metadata: Metadata = {
  title: "Dienstleistungen & Skalierungs-Systeme",
  description: "Next.js Architekturen, 99er Core Web Vitals und unermüdliche n8n KI-Agenten. Entdecke meine Tech-Dienstleistungen für dein digitales Ökosystem.",
};

export default function ServicesPage() {
  return (
    <main className="pt-40 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest opacity-0 reveal-hero-fade">[ SERVICES ]</span>
        <h1 className="text-4xl sm:text-5xl md:text-8xl font-medium tracking-tight text-white mb-6 opacity-0 reveal-hero-fade leading-[1.1]">
          Systeme für<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxota-accent to-white/40">Skalierung.</span>
        </h1>
        <p className="text-lg md:text-xl text-luxota-dim max-w-2xl font-light opacity-0 reveal-hero-fade leading-relaxed mt-4 md:mt-0">
          Ich entwickle nicht nur schöne Websites. Ich baue hochgradig performante digitale Ökosysteme, die durch Next.js Frontend-Architekturen und intelligente n8n-Automatisierungen (OpenClaw) Zeit sparen und Wachstum garantieren.
        </p>
      </div>

      <ServicesListSection />
      <ProcessSection />
      <FooterSection />
    </main>
  );
}
