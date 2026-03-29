import ContactSection from '@/components/sections/ContactSection';
import FooterSection from '@/components/sections/FooterSection';
import { ContactPageHeader } from '@/components/layout/PageHeaders';

export default function ContactPage() {
  return (
    <main className="pt-40 min-h-screen">
      <ContactPageHeader />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
