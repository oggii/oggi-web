import HermesPage from '@/components/pages/HermesPage';
import { createPageMetadata } from '@/seo/metadata';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '/hermes');
}

export default function LocalizedHermesPage() {
  return <HermesPage />;
}
