'use client';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useTranslation } from '@/i18n/TranslationContext';
export default function FooterSection() {
  const { t, href } = useTranslation();
  return (
    <>
      <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative overflow-hidden" id="action">
        <div className="absolute inset-0 bg-gradient-to-t from-luxota-accent/5 to-transparent pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-5xl reveal-up">
          <h2 className="text-6xl md:text-9xl font-medium tracking-tightest text-white mb-10 leading-[0.85]">
            {t('footer.title1')}<br /> {t('footer.title2')} <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/30 italic font-serif">{t('footer.title3')}</span>
          </h2>

          <p className="text-xl md:text-2xl text-luxota-dim max-w-2xl mx-auto leading-relaxed mb-16 font-light">
            {t('footer.desc')}
          </p>

          <div className="flex flex-col items-center gap-10">
            <Link href={href('/contact')} className="group relative bg-white text-black px-16 py-6 rounded-[2rem] font-bold text-xl overflow-hidden inline-flex transition-transform hover:-translate-y-1 shadow-[0_0_60px_-15px_rgba(255,255,255,0.4)] hover:shadow-[0_0_80px_-15px_rgba(157,78,221,0.5)]">
              <span className="relative z-10 flex items-center gap-3">
                {t('footer.btn')}
                <span className="iconify-container group-hover:translate-x-1 transition-transform">
                  <Icon icon="solar:arrow-right-linear" />
                </span>
              </span>
              <div className="absolute inset-0 bg-luxota-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-expo z-0"></div>
            </Link>

            <div className="text-sm text-luxota-dim tracking-wide">
              {t('footer.sub')}
              <a href="mailto:kontakt@0ggi.ch" className="text-white border-b border-white/30 pb-0.5 hover:border-white transition-all hover:text-luxota-accent ml-1">
                {t('footer.mail')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative py-16 lg:py-24 px-6 border-t border-white/5 bg-[#020203] overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] md:w-[600px] md:h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(157,78,221,0.08) 0%, transparent 70%)' }}></div>

        <div className="absolute bottom-[-5%] left-0 right-0 select-none pointer-events-none flex justify-center opacity-[0.03]">
          <h1 className="text-[18vw] font-bold text-white tracking-tighter leading-none">0GGI.CH</h1>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-24 reveal-up">

            {/* Services */}
            <div>
              <p className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">{t('footer.col1')}</p>
              <ul className="space-y-5 text-sm text-luxota-dim font-light">
                <li><Link href={href('/services')} className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>{t('footer.webdev')}</Link></li>
                <li><Link href={href('/services')} className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>{t('footer.speed')}</Link></li>
                <li><Link href={href('/services')} className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>{t('footer.branding')}</Link></li>
              </ul>
            </div>

            {/* AI */}
            <div>
              <p className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">{t('footer.col2')}</p>
              <ul className="space-y-5 text-sm text-luxota-dim font-light">
                <li><Link href={href('/services')} className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>{t('footer.n8n')}</Link></li>
                <li><Link href={href('/hermes')} className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>Hermes Agent</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <p className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">{t('footer.col3')}</p>
              <ul className="space-y-5 text-sm text-luxota-dim font-light">
                <li><Link href={href('/purpose')} className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>{t('footer.aboutMe')}</Link></li>
                <li><Link href={href('/portfolio')} className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>{t('footer.portfolioRef')}</Link></li>
                <li><a href="mailto:kontakt@0ggi.ch" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>{t('footer.contactEmail')}</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-white font-medium mb-8 text-xs uppercase tracking-[0.2em] opacity-80">{t('footer.col4')}</p>
              <ul className="space-y-5 text-sm text-luxota-dim font-light">
                <li><Link href="/impressum" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>{t('footer.impressum')}</Link></li>
                <li><Link href="/datenschutz" className="hover:text-white transition-colors duration-300 flex items-center gap-2 group"><span className="w-0 h-[1px] bg-luxota-accent transition-all duration-300 group-hover:w-3"></span>{t('footer.privacy')}</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-center text-xs text-luxota-dim/60 font-mono tracking-wider gap-4">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-luxota-accent animate-pulse"></span>
              <span className="uppercase">0ggi Web & AI Services</span>
            </div>
            <div>© {new Date().getFullYear()} 0ggi.ch | {t('footer.rights')}</div>
          </div>
        </div>
      </footer>
    </>
  );
}
