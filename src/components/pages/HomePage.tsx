import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';

const BentoGridSection = dynamic(() => import('@/components/sections/BentoGridSection'), { ssr: true });
const NarrativeSection = dynamic(() => import('@/components/sections/NarrativeSection'));
const PricingMaturitySection = dynamic(() => import('@/components/sections/PricingMaturitySection'));
const CommercialModelSection = dynamic(() => import('@/components/sections/CommercialModelSection'));
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'));
const FooterSection = dynamic(() => import('@/components/sections/FooterSection'));
const ServicesOverviewSection = dynamic(() => import('@/components/sections/ServicesOverviewSection'));
const ServicesCtaSection = dynamic(() => import('@/components/sections/ServicesCtaSection'));

const deferredSectionStyle = {
  contentVisibility: 'auto',
  containIntrinsicSize: '900px',
} as const;

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <div style={deferredSectionStyle}>
        <BentoGridSection />
      </div>
      <div style={deferredSectionStyle}>
        <NarrativeSection />
      </div>
      <div style={deferredSectionStyle}>
        <ServicesOverviewSection />
      </div>
      <div style={deferredSectionStyle}>
        <ServicesCtaSection />
      </div>
      <div style={deferredSectionStyle}>
        <PricingMaturitySection />
      </div>
      <div style={deferredSectionStyle}>
        <CommercialModelSection />
      </div>
      <div style={deferredSectionStyle}>
        <FAQSection />
      </div>
      <div style={deferredSectionStyle}>
        <FooterSection />
      </div>
    </main>
  );
}
