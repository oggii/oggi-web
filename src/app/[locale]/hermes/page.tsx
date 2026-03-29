import { createPageMetadata } from '@/seo/metadata';
import type { Locale } from '@/i18n/config';
export { default } from '@/components/pages/HermesPage';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '/hermes');
}
