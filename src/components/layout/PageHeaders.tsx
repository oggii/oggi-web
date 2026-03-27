'use client';

import { useTranslation } from '@/i18n/TranslationContext';

export function ServicesPageHeader() {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10 reveal-up">
            <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">{t('servicesPage.tag')}</span>
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-medium tracking-tight text-white mb-6 leading-[1.1]">
                {t('servicesPage.title1')}<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-luxota-accent to-white/40">{t('servicesPage.title2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-luxota-dim max-w-2xl font-light leading-relaxed mt-4 md:mt-0">
                {t('servicesPage.desc')}
            </p>
        </div>
    );
}

export function PortfolioPageHeader() {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-6 mb-20 relative z-10 reveal-up">
            <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest">{t('portfolio.pageTag')}</span>
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-6 leading-tight">
                {t('portfolio.pageTitle1')}<br />
                <span className="text-luxota-dim/50">{t('portfolio.pageTitle2')}</span>
            </h1>
            <p className="text-xl text-luxota-dim max-w-2xl font-light">
                {t('portfolio.pageDesc')}
            </p>
        </div>
    );
}

export function PurposePageHeader() {
    const { t } = useTranslation();

    return (
        <div className="max-w-7xl mx-auto px-6 mb-10 relative z-10 reveal-up">
            <span className="text-xs text-luxota-accent font-mono mb-4 block tracking-widest uppercase">{t('purpose.pageTag')}</span>
            <h1 className="text-5xl md:text-8xl font-medium tracking-tight text-white mb-6">
                {t('purpose.pageTitle')}
            </h1>
        </div>
    );
}
