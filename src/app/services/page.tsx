import { Metadata } from 'next';
import ServicesListSection from '@/components/sections/ServicesListSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FooterSection from '@/components/sections/FooterSection';
import { ServicesPageHeader } from '@/components/layout/PageHeaders';

export const metadata: Metadata = {
  title: "Dienstleistungen & Skalierungs-Systeme",
  description: "Next.js Architekturen, 99er Core Web Vitals und unermüdliche n8n KI-Agenten. Entdecke meine Tech-Dienstleistungen für dein digitales Ökosystem.",
};

export default function ServicesPage() {
  return (
    <main className="pt-40 min-h-screen">
      <ServicesPageHeader />

      <ServicesListSection />
      <ProcessSection />
      <FooterSection />
    </main>
  );
}
