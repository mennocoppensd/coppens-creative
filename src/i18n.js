import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import enTranslations from './translations/en.json';
import nlTranslations from './translations/nl.json';
import frTranslations from './translations/fr.json';

// Get saved language or detect browser language
const savedLanguage = localStorage.getItem('userLanguage');
const browserLanguage = navigator.language.split('-')[0];
const defaultLanguage = savedLanguage || browserLanguage || 'en';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      nl: { translation: nlTranslations },
      fr: { translation: frTranslations }
    },
    fallbackLng: defaultLanguage,
    lng: defaultLanguage,
    interpolation: {
      escapeValue: false
    },
    detection: {
      order: ['localStorage', 'navigator'],
      lookupLocalStorage: 'userLanguage',
      caches: ['localStorage']
    }
  });

export default i18n; 