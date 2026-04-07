import ContactPage from '@/components/pages/ContactPage';
import { createPageMetadata } from '@/seo/metadata';
import { getDictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '/contact');
}

export default async function LocalizedContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = await getDictionary(locale);
  return <ContactPage dict={dict} locale={locale} />;
}
