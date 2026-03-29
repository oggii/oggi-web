'use client';

import { createContext, useContext, type ReactNode } from 'react';
import type { Locale } from './config';
import type { Dictionary } from './dictionaries';
import { localizePath } from './routing';

interface TranslationContextType {
  locale: Locale;
  dictionary: Dictionary;
  t: (key: string, variables?: Record<string, string>) => string;
  href: (path: string) => string;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

type TranslationProviderProps = {
  children: ReactNode;
  locale: Locale;
  dictionary: Dictionary;
};

export function TranslationProvider({ children, locale, dictionary }: TranslationProviderProps) {
  const t = (key: string, variables?: Record<string, string>): string => {
    const keys = key.split('.');
    let value: unknown = dictionary;

    for (const currentKey of keys) {
      if (typeof value !== 'object' || value === null || !(currentKey in value)) {
        return key;
      }

      value = (value as Record<string, unknown>)[currentKey];
    }

    if (typeof value === 'string' && variables) {
      return Object.entries(variables).reduce(
        (result, [variableKey, variableValue]) => result.replace(`{${variableKey}}`, variableValue),
        value,
      );
    }

    return typeof value === 'string' ? value : key;
  };

  return (
    <TranslationContext.Provider
      value={{
        locale,
        dictionary,
        t,
        href: (path: string) => localizePath(locale, path),
      }}
    >
      {children}
    </TranslationContext.Provider>
  );
}

export function useTranslation() {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }

  return context;
}
