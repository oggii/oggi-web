import { Metadata } from 'next';
import PortfolioGridSection from '@/components/sections/PortfolioGridSection';
import ClientsMarqueeSection from '@/components/sections/ClientsMarqueeSection';
import FooterSection from '@/components/sections/FooterSection';
import { PortfolioPageHeader } from '@/components/layout/PageHeaders';

export const metadata: Metadata = {
  title: "Portfolio & Digitale Ökosysteme",
  description: "High-End Webentwicklung und integrierte KI-Agenten in Aktion: Werfe einen Blick auf erfolgreiche Transformationen und skalierbare Systeme.",
};

export default function PortfolioPage() {
  return (
    <main className="pt-40 min-h-screen">
      <PortfolioPageHeader />

      <ClientsMarqueeSection />
      <PortfolioGridSection />
      <FooterSection />
    </main>
  );
}
