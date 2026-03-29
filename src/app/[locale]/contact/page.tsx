import ContactPage from '@/components/pages/ContactPage';
import { createPageMetadata } from '@/seo/metadata';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '/contact');
}

export default function LocalizedContactPage() {
  return <ContactPage />;
}