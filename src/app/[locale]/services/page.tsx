import ServicesPage from '@/components/pages/ServicesPage';
import { createPageMetadata } from '@/seo/metadata';
import type { Locale } from '@/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return createPageMetadata(locale, '/services');
}

export default function LocalizedServicesPage() {
  return <ServicesPage />;
}