'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Icon } from '@iconify/react';
import { useTranslation } from '@/i18n/TranslationContext';
import { locales, localeNames } from '@/i18n/config';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { t, locale, setLocale } = useTranslation();

  // Reset header to visible on every page navigation
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsVisible(true);
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setLastScrollY(0);
  }, [pathname]);

  // Handle Scroll behavior to hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) return; // don't hide navbar if menu is open
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  const navLinks = [
    { num: '01', title: t('nav.home'), href: '/' },
    { num: '02', title: t('nav.services'), href: '/services' },
    { num: '03', title: t('nav.projects'), href: '/portfolio' },
    { num: '04', title: t('nav.about'), href: '/purpose' },
    { num: '05', title: t('nav.contact'), href: '/#action' },
  ];

  return (
    <>
      <header
        style={{ top: isVisible || menuOpen ? '' : '-150px' }}
        className={`fixed top-4 md:top-8 left-0 right-0 z-[100] transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] reveal-nav pointer-events-none px-4 md:px-8`}
      >
        {/* DESKTOP NAV */}
        <div className="hidden md:flex justify-center items-center pointer-events-auto relative">
          {/* Language Dropdown (Top Left) */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 z-50">
            <div
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="bg-[#1A1A1A]/95 backdrop-blur-md border border-white/5 rounded-full px-4 py-2 flex items-center shadow-lg cursor-pointer transition-all hover:bg-white/10"
            >
              <button className="flex items-center gap-2">
                <span className="text-[10px] font-bold text-white tracking-widest mt-[1px]">{localeNames[locale]}</span>
                <img src={locale === 'de' ? 'https://flagcdn.com/w20/ch.png' : `https://flagcdn.com/w20/${locale === 'en' ? 'us' : locale}.png`} alt="" className="w-3.5 h-auto rounded-sm brightness-90 saturate-150" />
                <Icon icon="mdi:chevron-down" className={`text-xs text-white/60 transition-transform duration-500 ${langDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            {/* Dropdown Options */}
            <div className={`absolute top-[calc(100%+8px)] left-0 bg-[#1A1A1A]/95 backdrop-blur-md border border-white/5 rounded-2xl p-2 w-max shadow-2xl transition-all duration-300 origin-top flex flex-col gap-1 ${langDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
              {locales.map(l => (
                <button
                  key={l}
                  onClick={() => { setLocale(l); setLangDropdownOpen(false); }}
                  className={`flex items-center gap-3 text-[10px] font-bold tracking-widest px-4 py-2.5 rounded-xl text-left transition-colors ${locale === l ? 'bg-white/10 text-white' : 'text-white/50 hover:bg-white/5 hover:text-white'}`}>
                  <span>{localeNames[l]}</span>
                  <img src={l === 'de' ? 'https://flagcdn.com/w20/ch.png' : `https://flagcdn.com/w20/${l === 'en' ? 'us' : l}.png`} alt="" className="w-3.5 h-auto rounded-sm brightness-90 saturate-150" />
                </button>
              ))}
            </div>
          </div>

          {/* Center Unified Pill */}
          <div className="bg-[#1A1A1A]/95 backdrop-blur-md border border-white/5 rounded-full p-1.5 pl-6 flex items-center shadow-2xl h-14">

            {/* Logo */}
            <Link href="/" className="flex items-center mr-6 hover:opacity-80 transition-opacity shrink-0">
              <img src="/oggi_logo_n.svg" alt="0GGI Logo" className="h-5 w-auto invert" />
            </Link>

            {/* Divider */}
            <div className="w-px h-6 bg-white/10 mx-2 shrink-0"></div>

            {/* Links */}
            <div className="flex items-center gap-1 ml-4 mr-1">
              {navLinks.map((link) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
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

        {/* MOBILE NAV PILL (Matches Graffico Style) */}
        {!menuOpen && (
          <div className="md:hidden absolute top-0 left-1/2 -translate-x-1/2 pointer-events-auto w-max mt-2">
            <div className="bg-[#1A1A1A]/95 backdrop-blur-md border border-white/5 rounded-full px-6 py-2.5 flex items-center gap-8 shadow-2xl">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <img src="/oggi_logo_n.svg" alt="0GGI Logo" className="h-6 w-auto invert" />
              </Link>

              {/* Hamburger */}
              <button onClick={() => setMenuOpen(true)} className="text-white/80 hover:text-white flex items-center justify-center -mr-1">
                <Icon icon="solar:hamburger-menu-linear" className="text-2xl" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* FULL SCREEN MOBILE OVERLAY MENU */}
      <div
        className={`fixed inset-0 z-[110] bg-luxota-accent flex flex-col md:hidden transition-all duration-500 origin-top overflow-y-auto ${menuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}
      >
        <div className="px-6 py-6 flex items-center justify-between border-b border-white/10">
          {/* Top Left Logo in Overlay */}
          <Link onClick={() => setMenuOpen(false)} href="/" className="flex items-center">
            <img src="/oggi_logo_n.svg" alt="0GGI Logo" className="h-8 w-auto invert" />
          </Link>

          {/* Mobile Locales Selector */}
          <div className="flex bg-white/5 rounded-full p-1 ml-auto mr-4">
            {locales.map(l => (
              <button
                key={l}
                onClick={() => setLocale(l)}
                className={`text-[9px] font-bold tracking-widest px-3 py-1.5 rounded-full transition-colors ${locale === l ? 'bg-white text-luxota-bg' : 'text-white/50 hover:text-white'}`}>
                {localeNames[l]}
              </button>
            ))}
          </div>

          {/* Top Right Close Button */}
          <button onClick={() => setMenuOpen(false)} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors shrink-0">
            <Icon icon="mdi:close" className="text-xl" />
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 px-6 py-10 flex flex-col justify-center gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname?.startsWith(link.href));
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-6 group"
              >
                <span className={`text-sm border-b font-medium w-6 tabular-nums ${isActive ? 'text-luxota-accent border-luxota-accent' : 'text-white/50 border-transparent'}`}>{link.num}</span>
                <div className={`h-px transition-all duration-300 ${isActive ? 'w-16 bg-luxota-accent' : 'w-8 bg-white/30 group-hover:w-16'}`}></div>
                <span className={`text-4xl font-sans font-bold transition-all duration-300 tracking-tight ${isActive ? 'text-luxota-accent pl-2' : 'text-white group-hover:pl-2'}`}>{link.title}</span>
              </Link>
            );
          })}
        </div>

        {/* Bottom Contact / Socials */}
        <div className="px-6 py-8 border-t border-white/10 flex justify-between items-end mt-auto">
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-widest text-white/50 uppercase">{t('nav.contactUs')}</span>
            <a href="mailto:info@0ggi.ch" className="text-white text-sm font-medium hover:opacity-80 tracking-wide">info@0ggi.ch</a>
          </div>

          <div className="flex gap-3">
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <Icon icon="mdi:instagram" className="text-lg" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
              <Icon icon="mdi:linkedin" className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
