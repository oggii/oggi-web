import HomePage from '@/components/pages/HomePage';
import { createPageMetadata } from '@/seo/metadata';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '');
}

export default function LocalizedHomePage() {
  return <HomePage />;
}