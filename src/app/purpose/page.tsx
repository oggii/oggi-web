import { Metadata } from 'next';
import PurposeContentSection from '@/components/sections/PurposeContentSection';
import FooterSection from '@/components/sections/FooterSection';
import { PurposePageHeader } from '@/components/layout/PageHeaders';

export const metadata: Metadata = {
  title: "Meine Mission — Philosophie hinter den KI-Agenten",
  description: "Erfahre mehr über meine Vision: Wie ich Solopreneure und KMU durch intelligente Systeme und gnadenlosen Minimalismus bei der Skalierung ihres Unternehmens unterstütze.",
};
export default function PurposePage() {
  return (
    <main className="pt-40 min-h-screen">
      <PurposePageHeader />

      <PurposeContentSection />
      <FooterSection />
    </main>
  );
}
