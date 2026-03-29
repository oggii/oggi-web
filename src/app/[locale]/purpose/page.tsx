import PurposePage from '@/components/pages/PurposePage';
import { createPageMetadata } from '@/seo/metadata';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '/purpose');
}

export default function LocalizedPurposePage() {
  return <PurposePage />;
}