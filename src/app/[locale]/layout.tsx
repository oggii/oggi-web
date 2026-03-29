import { notFound } from 'next/navigation';
import { ClientWrapper } from '@/components/layout/ClientWrapper';
import { LocalBusinessSchema } from '@/components/seo/LocalBusinessSchema';
import { getDictionary } from '@/i18n/dictionaries';
import { locales, type Locale } from '@/i18n/config';
import { isLocale } from '@/i18n/routing';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale as Locale);

  return (
    <ClientWrapper locale={locale as Locale} dictionary={dictionary}>
      <LocalBusinessSchema />
      {children}
    </ClientWrapper>
  );
}