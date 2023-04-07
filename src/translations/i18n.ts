import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { queryClient } from 'app/AppProviders';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    ns: ['general', 'cities', 'voivodeships'],
    supportedLngs: ['pl', 'en'],
    backend: {
      loadPath: '/src/translations/resources/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: true,
    },
    detection: {
      lookupLocalStorage: 'lng',
      order: ['localStorage', 'navigator'],
    },
  })
  .then((t) => {
    document.title = `React PDF Printer | ${t('title', { ns: 'general' })}`;
    document.documentElement.lang = i18n.language;
    i18n.on('languageChanged', (lng) => {
      document.title = `React PDF Printer | ${t('title', { ns: 'general' })}`;
      document.documentElement.lang = lng;
      localStorage.setItem('lng', lng);
      queryClient.invalidateQueries();
    });
  });

export default i18n;
