'use client';

import { ChangeEvent, FormEvent, useMemo, useState } from 'react';
import { useTranslation } from '@/i18n/TranslationContext';
import { submitContact } from '@/app/actions/submitContact';

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

const LetterIcon = () => (
  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7Z" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg className="w-[1.125rem] h-[1.125rem] transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function ContactSection() {
  const { t } = useTranslation();
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
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
      const result = await submitContact({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        topic: selectedTopicLabel,
        subject: `${t('contactPage.mailSubjectPrefix')}${selectedTopicLabel ? ` - ${selectedTopicLabel}` : ''}`,
        message: form.message,
      });

      if (result.success) {
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
    <div className="reveal-up relative overflow-hidden rounded-[2rem] border border-white/8 bg-white/[0.03] p-6 md:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-luxota-accent/50 to-transparent"></div>

      <div className="mb-10 flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-luxota-accent/30 bg-luxota-accent/10 text-luxota-accent">
          <LetterIcon />
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
            <ArrowRightIcon />
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
  );
}
