import ContactSection from '@/components/sections/ContactSection';
import ContactDetails from '@/components/sections/ContactDetails';
import FooterSection from '@/components/sections/FooterSection';
import { ContactPageHeader } from '@/components/layout/PageHeaders';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';

type Props = {
  dict: Dictionary;
  locale: Locale;
};

export default function ContactPage({ dict, locale: _locale }: Props) {
  return (
    <main className="pt-40 min-h-screen">
      <ContactPageHeader />
      <section className="relative z-10 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
            <ContactSection />
            <ContactDetails t={dict} />
          </div>
        </div>
      </section>
      <FooterSection />
    </main>
  );
}
