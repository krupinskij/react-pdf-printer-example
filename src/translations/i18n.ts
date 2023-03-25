import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { queryClient } from 'app/AppProviders';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: 'pl',
    fallbackLng: 'en',
    ns: ['general', 'cities', 'voivodeships'],
    supportedLngs: ['pl', 'en'],
    backend: {
      loadPath: '/src/translations/resources/{{lng}}/{{ns}}.json',
    },
    react: {
      useSuspense: true,
    },
  })
  .then((t) => {
    document.title = `React PDF Printer | ${t('title', { ns: 'general' })}`;
    document.documentElement.lang = i18n.language;
    i18n.on('languageChanged', () => {
      document.title = `React PDF Printer | ${t('title', { ns: 'general' })}`;
      document.documentElement.lang = i18n.language;
      queryClient.invalidateQueries();
    });
  });

export default i18n;
