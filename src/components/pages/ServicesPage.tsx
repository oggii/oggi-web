import ServicesListSection from '@/components/sections/ServicesListSection';
import ProcessSection from '@/components/sections/ProcessSection';
import FooterSection from '@/components/sections/FooterSection';
import { ServicesPageHeader } from '@/components/layout/PageHeaders';

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
