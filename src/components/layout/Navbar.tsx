'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { useTranslation } from '@/i18n/TranslationContext';
import { locales, localeNames } from '@/i18n/config';
import { localizePath, stripLocaleFromPathname } from '@/i18n/routing';
import { useTheme } from '@/components/ThemeContext';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale, href } = useTranslation();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    let lastY = window.scrollY;
    const threshold = 12;

    const handleScroll = () => {
      if (menuOpen) return;
      const currentY = window.scrollY;
      const diff = currentY - lastY;

      if (Math.abs(diff) < threshold) return;

      if (currentY > lastY && currentY > 150) {
        setIsVisible(false);
      } else if (currentY < lastY) {
        setIsVisible(true);
      }
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const currentRoute = stripLocaleFromPathname(pathname ?? '');
  const navLinks = [
    { num: '01', title: t('nav.home'), href: href('/') },
    { num: '02', title: t('nav.services'), href: href('/services') },
    { num: '03', title: t('nav.projects'), href: href('/portfolio') },
    { num: '04', title: t('nav.about'), href: href('/purpose') },
    { num: '05', title: t('nav.blog'), href: href('/blog') },
  ];
  const contactLink = { num: '06', title: t('nav.contact'), href: href('/contact') };
  const mobileNavLinks = [...navLinks, contactLink];
  const isContactActive = pathname === contactLink.href || pathname?.startsWith(`${contactLink.href}/`);

  const getFlag = (value: (typeof locales)[number]) =>
    value === 'de' ? 'https://flagcdn.com/w20/ch.png' : `https://flagcdn.com/w20/${value === 'en' ? 'us' : value}.png`;

  const renderFlag = (value: (typeof locales)[number]) => (
    <Image
      src={getFlag(value)}
      alt=""
      width={20}
      height={15}
      className="rounded-sm brightness-90 saturate-150"
      style={{ width: '14px', height: 'auto' }}
      unoptimized
    />
  );

  const renderLogo = (width: number, _height: number, fontScale = 0.48) => (
    <span className="flex items-center gap-3">
      <Image
        src="/oggi-logo.webp"
        alt="oggi logo"
        width={width}
        height={width}
        className="rounded-full"
        loading="eager"
        style={{ width: `${width * 0.48}px`, height: 'auto' }}
      />
      <span className="font-[family-name:var(--font-dongle)] text-white font-medium leading-none mt-[2px]" style={{ fontSize: `${width * fontScale}px`, letterSpacing: '-0.05em' }}>
        oggi
      </span>
    </span>
  );

  return (
    <>
      <header
        style={{ transform: isVisible || menuOpen ? 'translateY(0)' : 'translateY(-180%)' }}
        className="fixed top-4 md:top-8 left-0 right-0 z-[100] transition-transform duration-[1200ms] ease-[cubic-bezier(0.19,1,0.22,1)] reveal-nav pointer-events-none px-4 md:px-8"
      >
        <div className="hidden md:flex justify-center items-center pointer-events-auto relative">
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-50">
            <div
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="bg-[#1A1A1A]/95 backdrop-blur-md border border-white/5 rounded-full px-4 py-2 flex items-center shadow-lg cursor-pointer transition-all hover:bg-white/10"
            >
              <button className="flex items-center gap-2" aria-label="Sprache wechseln">
                <span className="text-[10px] font-bold text-white tracking-widest mt-[1px]">{localeNames[locale]}</span>
                {renderFlag(locale)}
                <Icon icon="mdi:chevron-down" className={`text-xs text-white/60 transition-transform duration-500 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className={`absolute top-[calc(100%+8px)] left-0 bg-[#1A1A1A]/95 backdrop-blur-md border border-white/5 rounded-2xl p-2 w-max shadow-2xl transition-all duration-300 origin-top flex flex-col gap-1 ${langDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              {locales.map((value) => (
                <Link
                  key={value}
                  href={localizePath(value, currentRoute)}
                  onClick={() => setLangDropdownOpen(false)}
                  className={`flex items-center gap-3 text-[10px] font-bold tracking-widest px-4 py-2.5 rounded-xl text-left transition-colors ${locale === value ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
                >
                  <span>{localeNames[value]}</span>
                  {renderFlag(value)}
                </Link>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 z-40 flex items-center gap-3">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="bg-[#1A1A1A]/95 backdrop-blur-md border border-white/5 rounded-full w-10 h-10 flex items-center justify-center shadow-lg transition-all hover:bg-white/10"
            >
              <Icon
                icon={theme === 'dark' ? 'solar:sun-bold' : 'solar:moon-bold'}
                className="text-lg text-white/80 transition-transform duration-500"
              />
            </button>
            <Link
              href={contactLink.href}
              className={`rounded-full px-5 py-3 text-xs font-semibold shadow-2xl transition-all ${
                isContactActive
                  ? 'bg-white text-luxota-bg border border-white'
                  : 'bg-[#1A1A1A]/95 backdrop-blur-md border border-white/10 text-white hover:bg-white hover:text-luxota-bg hover:shadow-[0_0_20px_rgba(255,255,255,0.18)]'
              }`}
            >
              {contactLink.title}
            </Link>
          </div>

          <div className="bg-[#1A1A1A]/95 backdrop-blur-md border border-white/5 rounded-full p-1.5 pl-6 flex items-center shadow-2xl h-14">
            <Link href={href('/')} className="flex items-center mr-6 hover:opacity-80 transition-opacity shrink-0">
              {renderLogo(74, 20, 0.44)}
            </Link>

            <div className="w-px h-6 bg-white/10 mx-2 shrink-0"></div>

            <div className="flex items-center gap-1 ml-4 mr-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== href('/') && pathname?.startsWith(link.href));
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-5 py-2.5 text-xs rounded-full transition-all ${isActive ? 'font-bold text-luxota-bg bg-white shadow-[0_0_15px_rgba(255,255,255,0.15)]' : 'font-medium text-white/70 hover:text-white hover:bg-white/5'}`}
                  >
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {!menuOpen && (
          <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto w-max mt-2">
            <div className="bg-[#1A1A1A]/95 backdrop-blur-md border border-white/5 rounded-full px-6 py-2.5 flex items-center gap-8 shadow-2xl">
              <Link href={href('/')} className="flex items-center">
                {renderLogo(89, 24)}
              </Link>

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Menü öffnen"
                className="text-white/80 hover:text-white flex items-center justify-center -mr-1"
              >
                <Icon icon="solar:hamburger-menu-linear" className="text-2xl" />
              </button>
            </div>
          </div>
        )}
      </header>

      <div className={`fixed inset-0 z-[110] md:hidden dark-keep ${menuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(157,78,221,0.18),transparent_42%),rgba(4,1,10,0.82)] backdrop-blur-sm transition-opacity duration-300 ease-out ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`absolute inset-x-0 top-0 bottom-0 flex flex-col overflow-y-auto border-b border-white/10 bg-[#0a0216]/[0.96] shadow-[0_30px_80px_rgba(0,0,0,0.45)] transform-gpu will-change-transform will-change-opacity [backface-visibility:hidden] transition-[transform,opacity] duration-[520ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            menuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-4 opacity-0'
          }`}
        >
          <div
            className={`px-6 py-6 flex items-center justify-between border-b border-white/10 transform-gpu transition-[transform,opacity] duration-300 ease-out ${
              menuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '60ms' : '0ms' }}
          >
            <Link onClick={() => setMenuOpen(false)} href={href('/')} className="flex items-center">
              {renderLogo(118, 32)}
            </Link>

            <div className="flex items-center gap-2 ml-auto">
              {/* Language dropdown */}
              <div className="relative">
                <button
                  onClick={() => setMobileLangOpen(!mobileLangOpen)}
                  className="flex items-center gap-2 bg-white/5 rounded-full px-3 py-2 border border-white/10 transition-colors hover:bg-white/10"
                >
                  {renderFlag(locale)}
                  <span className="text-[9px] font-bold tracking-widest text-white">{localeNames[locale]}</span>
                  <Icon icon="mdi:chevron-down" className={`text-xs text-white/60 transition-transform duration-300 ${mobileLangOpen ? 'rotate-180' : ''}`} />
                </button>

                <div className={`absolute top-[calc(100%+6px)] right-0 bg-[#1a1a2e]/95 backdrop-blur-md border border-white/10 rounded-xl p-1.5 w-max shadow-2xl transition-all duration-200 origin-top-right z-50 ${mobileLangOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                  {locales.map((value) => (
                    <Link
                      key={value}
                      href={localizePath(value, currentRoute)}
                      onClick={() => { setMobileLangOpen(false); setMenuOpen(false); }}
                      className={`flex items-center gap-2.5 text-[9px] font-bold tracking-widest px-3 py-2 rounded-lg transition-colors ${locale === value ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}
                    >
                      {renderFlag(value)}
                      <span>{localeNames[value]}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Theme toggle */}
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors shrink-0 shadow-[0_12px_32px_rgba(0,0,0,0.28)]"
              >
                <Icon icon={theme === 'dark' ? 'solar:sun-bold' : 'solar:moon-bold'} className="text-lg" />
              </button>

              {/* Close menu */}
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Menü schließen"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors shrink-0 shadow-[0_12px_32px_rgba(0,0,0,0.28)]"
              >
                <Icon icon="mdi:close" className={`text-xl transition-transform duration-500 ${menuOpen ? 'rotate-0 scale-100' : 'rotate-90 scale-75'}`} />
              </button>
            </div>
          </div>

          <div className="relative flex-1 px-6 py-10 flex flex-col justify-center gap-8">
            <div className="absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-white/12 to-transparent" />
            {mobileNavLinks.map((link, index) => {
              const isActive = pathname === link.href || (link.href !== href('/') && pathname?.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`flex items-center gap-6 group transform-gpu transition-[transform,opacity] duration-[420ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}
                  style={{ transitionDelay: menuOpen ? `${110 + index * 38}ms` : '0ms' }}
                >
                  <span className={`text-sm border-b font-medium w-6 tabular-nums ${isActive ? 'text-luxota-accent border-luxota-accent' : 'text-white/50 border-transparent'}`}>{link.num}</span>
                  <div className={`h-px transition-all duration-300 ${isActive ? 'w-16 bg-luxota-accent' : 'w-8 bg-white/30 group-hover:w-16'}`}></div>
                  <span className={`text-4xl font-sans font-bold transition-all duration-300 tracking-tight ${isActive ? 'text-luxota-accent pl-2' : 'text-white group-hover:pl-2'}`}>{link.title}</span>
                </Link>
              );
            })}
          </div>

          <div
            className={`px-6 py-8 border-t border-white/10 flex justify-between items-end mt-auto transform-gpu transition-[transform,opacity] duration-[360ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
              menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'
            }`}
            style={{ transitionDelay: menuOpen ? '220ms' : '0ms' }}
          >
            <div className="flex flex-col gap-2">
              <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">{t('nav.contactUs')}</span>
              <a href="mailto:info@0ggi.ch" className="text-white text-sm font-medium hover:opacity-80 tracking-wide">info@0ggi.ch</a>
            </div>

            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors shadow-[0_12px_24px_rgba(0,0,0,0.22)]"
              >
                <Icon icon="mdi:instagram" className="text-lg" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
