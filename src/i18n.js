import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// --- Import Translation Files ---
import enTranslation from './locales/en/translation.json';
import knTranslation from './locales/kn/translation.json';

i18n
  // Detect user language from browser settings
  .use(LanguageDetector)
  // Pass the i18n instance to react-i18next
  .use(initReactI18next) 
  .init({
    // Define the resource bundles
    resources: {
      en: {
        translation: enTranslation,
      },
      kn: {
        translation: knTranslation,
      },
    },
    
    // Set English as the fallback language
    fallbackLng: 'en',
    
    ns: ['translation'],
    defaultNS: 'translation',
    
    interpolation: {
      escapeValue: false, // React already handles escaping
    },
    
    // Cache language selection in local storage
    detection: {
        order: ['querystring', 'cookie', 'localStorage', 'navigator'],
        caches: ['localStorage'],
    }
  });

export default i18n;