import { createPageMetadata } from '@/seo/metadata';
import type { Locale } from '@/i18n/config';
export { default } from '@/app/openclaw/page';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '/openclaw');
}