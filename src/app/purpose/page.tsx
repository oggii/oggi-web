import { Metadata } from 'next';
import PurposeContentSection from '@/components/sections/PurposeContentSection';
import FooterSection from '@/components/sections/FooterSection';

export const metadata: Metadata = {
  title: "Meine Mission — Philosophie hinter den KI-Agenten",
  description: "Erfahre mehr über meine Vision als Tech-Solopreneur: Wie ich durch intelligente Systeme und gnadenlosen Minimalismus echte Lösungen entwickle.",
};
export default function PurposePage() {
  return (
    <main className="pt-40 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 mb-10 relative z-10">
        <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest opacity-0 reveal-hero-fade uppercase">[ Philosophie ]</span>
        <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-6 opacity-0 reveal-hero-fade">
          Purpose.
        </h1>
      </div>

      <PurposeContentSection />
      <FooterSection />
    </main>
  );
}
