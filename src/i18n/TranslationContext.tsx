'use client';
import { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Locale, defaultLocale } from './config';
import { de, Dictionary } from './dictionaries/de';
import { en } from './dictionaries/en';
import { fr } from './dictionaries/fr';
import { it } from './dictionaries/it';

const dictionaries: Record<Locale, Dictionary> = { de, en, fr, it };

interface TranslationContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string, variables?: Record<string, string>) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export function TranslationProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(defaultLocale);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        const saved = localStorage.getItem('oggi_lang') as Locale;
        if (saved && dictionaries[saved]) {
            setLocaleState(saved);
        }
        setMounted(true);
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem('oggi_lang', newLocale);
    };

    const t = (key: string, variables?: Record<string, string>): string => {
        const keys = key.split('.');
        let value: any = dictionaries[locale];

        for (const k of keys) {
            if (value[k] === undefined) return key; // fallback to key
            value = value[k];
        }

        if (typeof value === 'string' && variables) {
            let interpolated = value;
            Object.keys(variables).forEach(vKey => {
                interpolated = interpolated.replace(`{${vKey}}`, variables[vKey]);
            });
            return interpolated;
        }
        return typeof value === 'string' ? value : key;
    };

    // Avoid hydration mismatch logic
    if (!mounted) {
        return (
            <TranslationContext.Provider value={{ locale: defaultLocale, setLocale, t: () => '' }}>
                {children}
            </TranslationContext.Provider>
        );
    }

    return (
        <TranslationContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </TranslationContext.Provider>
    );
}

export function useTranslation() {
    const context = useContext(TranslationContext);
    if (context === undefined) {
        throw new Error('useTranslation must be used within a TranslationProvider');
    }
    return context;
}
