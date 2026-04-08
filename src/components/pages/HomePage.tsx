import dynamic from 'next/dynamic';
import HeroSection from '@/components/sections/HeroSection';

const BentoGridSection = dynamic(() => import('@/components/sections/BentoGridSection'), { ssr: true });
const NarrativeSection = dynamic(() => import('@/components/sections/NarrativeSection'));
const PricingMaturitySection = dynamic(() => import('@/components/sections/PricingMaturitySection'));
const CommercialModelSection = dynamic(() => import('@/components/sections/CommercialModelSection'));
const FAQSection = dynamic(() => import('@/components/sections/FAQSection'));
const LatestPostsSection = dynamic(() => import('@/components/sections/LatestPostsSection'));
const FooterSection = dynamic(() => import('@/components/sections/FooterSection'));
const ServicesOverviewSection = dynamic(() => import('@/components/sections/ServicesOverviewSection'));
const ServicesCtaSection = dynamic(() => import('@/components/sections/ServicesCtaSection'));

type Post = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  featuredImage?: { url: string } | null;
  publishedAt?: string;
};

export default function HomePage({ latestPosts }: { latestPosts: Post[] }) {
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
      <LatestPostsSection posts={latestPosts} />
      <FooterSection />
    </main>
  );
}
