import { createPageMetadata } from '@/seo/metadata';
import type { Locale } from '@/i18n/config';
export { default } from '@/app/hermes/page';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '/hermes');
}