'use client';

import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { Icon } from '@iconify/react';
import { useTranslation } from '@/i18n/TranslationContext';
import { track } from '@/lib/analytics';

const WEB3FORMS_ACCESS_KEY = 'd5624671-36a5-4df2-b594-8506a2287d04';

type FormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  topic: 'website' | 'marketing' | 'ai' | '';
  message: string;
};

const INITIAL_FORM: FormState = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  topic: '',
  message: '',
};

export default function ContactSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [phoneRevealed, setPhoneRevealed] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const topics = useMemo(
    () => [
      { id: 'website', label: t('contactPage.topicWebsite') },
      { id: 'marketing', label: t('contactPage.topicMarketing') },
      { id: 'ai', label: t('contactPage.topicAi') },
    ],
    [t],
  );

  const selectedTopicLabel = topics.find((topic) => topic.id === form.topic)?.label || '';

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitState('submitting');
    setSubmitMessage(t('contactPage.formSending'));

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `${t('contactPage.mailSubjectPrefix')}${selectedTopicLabel ? ` - ${selectedTopicLabel}` : ''}`,
          from_name: `${form.firstName} ${form.lastName}`.trim(),
          email: form.email,
          phone: form.phone,
          topic: selectedTopicLabel,
          message: form.message,
          botcheck: '',
        }),
      });

      const result = await response.json();

      if (result.success) {
        track('Lead: Form Submitted', { topic: form.topic || 'unspecified' });
        setSubmitState('success');
        setSubmitMessage(t('contactPage.formSuccess'));
        setForm(INITIAL_FORM);
        return;
      }

      setSubmitState('error');
      setSubmitMessage(t('contactPage.formError'));
    } catch {
      setSubmitState('error');
      setSubmitMessage(t('contactPage.formError'));
    }
  };

  const inputClassName =
    'w-full rounded-[1.3rem] border border-white/10 bg-white/[0.03] px-5 py-4 text-base text-white outline-none transition-all placeholder:text-white/30 focus:border-luxota-accent/60 focus:bg-white/[0.05]';

  return (
    <section className="relative z-10 pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-start">
          <div className="reveal-up relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-luxota-accent/50 to-transparent"></div>

            <div className="mb-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-luxota-accent/30 bg-luxota-accent/10 text-luxota-accent">
                <Icon icon="solar:letter-bold-duotone" className="text-2xl" />
              </div>
              <div>
                <p className="text-xs font-mono uppercase tracking-[0.25em] text-luxota-accent">{t('contactPage.formTag')}</p>
                <h2 className="text-2xl md:text-3xl font-medium text-white">{t('contactPage.formTitle')}</h2>
              </div>
            </div>

            <p className="mb-10 max-w-2xl text-base md:text-lg font-light leading-relaxed text-luxota-dim">
              {t('contactPage.formIntro')}
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-sm font-medium text-white">{t('contactPage.formFirstName')} *</span>
                  <input
                    required
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder={t('contactPage.formFirstNamePlaceholder')}
                    className={inputClassName}
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-sm font-medium text-white">{t('contactPage.formLastName')} *</span>
                  <input
                    required
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder={t('contactPage.formLastNamePlaceholder')}
                    className={inputClassName}
                  />
                </label>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="mb-3 block text-sm font-medium text-white">{t('contactPage.formEmail')} *</span>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="name@unternehmen.ch"
                    className={inputClassName}
                  />
                </label>

                <label className="block">
                  <span className="mb-3 block text-sm font-medium text-white">{t('contactPage.formPhone')}</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+41 76 229 28 93"
                    className={inputClassName}
                  />
                </label>
              </div>

              <label className="block">
                <span className="mb-3 block text-sm font-medium text-white">{t('contactPage.formTopic')} *</span>
                <select
                  required
                  name="topic"
                  value={form.topic}
                  onChange={handleChange}
                  className={`${inputClassName} appearance-none`}
                >
                  <option value="" className="bg-[#09090c] text-white/50">
                    {t('contactPage.formTopicPlaceholder')}
                  </option>
                  {topics.map((topic) => (
                    <option key={topic.id} value={topic.id} className="bg-[#09090c] text-white">
                      {topic.label}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-3 block text-sm font-medium text-white">{t('contactPage.formMessage')} *</span>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder={t('contactPage.formMessagePlaceholder')}
                  rows={7}
                  className={`${inputClassName} min-h-[220px] resize-y`}
                />
              </label>

              <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={submitState === 'submitting'}
                  className="group inline-flex items-center justify-center gap-3 rounded-[1.4rem] bg-white px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-black transition-all hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(255,255,255,0.18)] disabled:cursor-wait disabled:opacity-70"
                >
                  {t('contactPage.formSubmit')}
                  <Icon icon="solar:arrow-right-linear" className="text-lg transition-transform group-hover:translate-x-1" />
                </button>

                <p
                  className={`max-w-sm text-sm leading-relaxed ${
                    submitState === 'success'
                      ? 'text-luxota-accent'
                      : submitState === 'error'
                        ? 'text-red-300'
                        : 'text-luxota-dim'
                  }`}
                >
                  {submitMessage || t('contactPage.formDisclaimer')}
                </p>
              </div>
            </form>
          </div>

          <div className="grid gap-8 content-start">
            <div className="reveal-up relative overflow-hidden rounded-[2rem] border border-white/8 bg-[radial-gradient(circle_at_top_left,rgba(157,78,221,0.22),transparent_45%),rgba(255,255,255,0.03)] p-6 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                  <Icon icon="solar:phone-calling-bold-duotone" className="text-2xl" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.25em] text-luxota-accent">{t('contactPage.detailsTag')}</p>
                  <h2 className="text-2xl md:text-3xl font-medium text-white">{t('contactPage.detailsTitle')}</h2>
                </div>
              </div>

              <p className="mb-8 text-base md:text-lg font-light leading-relaxed text-luxota-dim">
                {t('contactPage.detailsIntro')}
              </p>

              <div className="space-y-5">
                {phoneRevealed ? (
                  <a href="tel:+41762292893" className="flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-black/20 px-5 py-4 transition-colors hover:border-luxota-accent/30 hover:bg-white/[0.04]">
                    <Icon icon="solar:phone-bold-duotone" className="mt-1 text-2xl text-luxota-accent" />
                    <div>
                      <div className="text-xs font-mono uppercase tracking-[0.24em] text-white/40">{t('contactPage.phoneLabel')}</div>
                      <div className="mt-2 text-lg font-medium text-white">+41 76 229 28 93</div>
                    </div>
                  </a>
                ) : (
                  <button onClick={() => { track('CTA: Phone Reveal'); setPhoneRevealed(true); }} className="flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-black/20 px-5 py-4 transition-colors hover:border-luxota-accent/30 hover:bg-white/[0.04] w-full text-left cursor-pointer">
                    <Icon icon="solar:phone-bold-duotone" className="mt-1 text-2xl text-luxota-accent" />
                    <div>
                      <div className="text-xs font-mono uppercase tracking-[0.24em] text-white/40">{t('contactPage.phoneLabel')}</div>
                      <div className="mt-2 text-lg font-medium text-white select-none blur-[6px] transition-all duration-300">+41 76 229 28 93</div>
                    </div>
                  </button>
                )}

                <div className="flex items-start gap-4 rounded-[1.5rem] border border-white/8 bg-black/20 px-5 py-4">
                  <Icon icon="solar:map-point-bold-duotone" className="mt-1 text-2xl text-luxota-accent" />
                  <div>
                    <div className="text-xs font-mono uppercase tracking-[0.24em] text-white/40">{t('contactPage.addressLabel')}</div>
                    <div className="mt-2 text-lg font-medium text-white">Grienmattweg 4, 4410 Liestal</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="reveal-up relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03] shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-luxota-accent/40 to-transparent"></div>

              <div className="flex items-center justify-between border-b border-white/8 px-6 md:px-8 py-6">
                <div>
                  <p className="text-xs font-mono uppercase tracking-[0.25em] text-luxota-accent">{t('contactPage.mapTag')}</p>
                  <h3 className="mt-2 text-xl font-medium text-white">{t('contactPage.mapTitle')}</h3>
                </div>
                <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.22em] text-white/60">
                  Liestal
                </div>
              </div>

              <div className="relative aspect-[4/3]">
                <iframe
                  title="0ggi Standort in Liestal"
                  src="https://www.google.com/maps?q=Grienmattweg%204%2C%204410%20Liestal&z=15&output=embed"
                  className="h-full w-full grayscale-[0.2] contrast-125"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020203] to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
