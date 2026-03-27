import HeroSection from '@/components/sections/HeroSection';
import BentoGridSection from '@/components/sections/BentoGridSection';
import NarrativeSection from '@/components/sections/NarrativeSection';
import PricingMaturitySection from '@/components/sections/PricingMaturitySection';
import CommercialModelSection from '@/components/sections/CommercialModelSection';
import FAQSection from '@/components/sections/FAQSection';
import FooterSection from '@/components/sections/FooterSection';
import ServicesOverviewSection from '@/components/sections/ServicesOverviewSection';
import ServicesCtaSection from '@/components/sections/ServicesCtaSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BentoGridSection />
      <NarrativeSection />
      <ServicesOverviewSection />
      <ServicesCtaSection />
      <PricingMaturitySection />
      <CommercialModelSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
