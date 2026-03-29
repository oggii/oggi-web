import PortfolioGridSection from '@/components/sections/PortfolioGridSection';
import ClientsMarqueeSection from '@/components/sections/ClientsMarqueeSection';
import FooterSection from '@/components/sections/FooterSection';
import { PortfolioPageHeader } from '@/components/layout/PageHeaders';

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
