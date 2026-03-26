import HeroSection from '@/components/sections/HeroSection';
import BentoGridSection from '@/components/sections/BentoGridSection';
import NarrativeSection from '@/components/sections/NarrativeSection';
import HorizontalArchitectureSection from '@/components/sections/HorizontalArchitectureSection';
import PricingMaturitySection from '@/components/sections/PricingMaturitySection';
import CommercialModelSection from '@/components/sections/CommercialModelSection';
import FAQSection from '@/components/sections/FAQSection';
import FooterSection from '@/components/sections/FooterSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <BentoGridSection />
      <NarrativeSection />
      <HorizontalArchitectureSection />
      <PricingMaturitySection />
      <CommercialModelSection />
      <FAQSection />
      <FooterSection />
    </main>
  );
}
