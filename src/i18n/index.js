import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { SUPPORTED_LANGUAGES, LANGUAGE_DETAILS } from '../components/i18n/constants';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: SUPPORTED_LANGUAGES.FR,
    supportedLngs: Object.values(SUPPORTED_LANGUAGES),
    interpolation: {
      escapeValue: false,
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  });

i18n.on('languageChanged', (lng) => {
  const langDetails = LANGUAGE_DETAILS[lng];
  if (langDetails) {
    document.documentElement.dir = langDetails.dir;
    document.documentElement.lang = lng;
    document.documentElement.style.fontFamily = langDetails.fontFamily;
  }
});

export default i18n;