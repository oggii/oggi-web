import { Metadata } from 'next';
import PortfolioGridSection from '@/components/sections/PortfolioGridSection';
import ClientsMarqueeSection from '@/components/sections/ClientsMarqueeSection';
import FooterSection from '@/components/sections/FooterSection';

export const metadata: Metadata = {
  title: "Portfolio & Digitale Ökosysteme",
  description: "High-End Webentwicklung und integrierte KI-Agenten in Aktion: Werfe einen Blick auf erfolgreiche Transformationen und skalierbare Systeme.",
};

export default function PortfolioPage() {
  return (
    <main className="pt-40 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10">
        <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest opacity-0 reveal-hero-fade">[ PORTFOLIO ]</span>
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-6 opacity-0 reveal-hero-fade">
          Ergebnisse,<br />
          <span className="text-luxota-dim/50">die operativ wirken.</span>
        </h1>
        <p className="text-xl text-luxota-dim max-w-2xl font-light opacity-0 reveal-hero-fade">
          Eine Auswahl an erfolgreichen Transformationen, High-End Webprojekten und integrierten KI-Agenten, die echten messbaren Mehrwert schaffen.
        </p>
      </div>

      <ClientsMarqueeSection />
      <PortfolioGridSection />
      <FooterSection />
    </main>
  );
}
