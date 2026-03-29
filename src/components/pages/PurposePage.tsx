import PurposeContentSection from '@/components/sections/PurposeContentSection';
import FooterSection from '@/components/sections/FooterSection';
import { PurposePageHeader } from '@/components/layout/PageHeaders';

export default function PurposePage() {
  return (
    <main className="pt-40 min-h-screen">
      <PurposePageHeader />
      <PurposeContentSection />
      <FooterSection />
    </main>
  );
}
