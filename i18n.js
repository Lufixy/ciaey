import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './public/locales/en.json';
import trTranslation from './public/locales/tr.json';
import ruTranslation from './public/locales/ru.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      tr: {
        translation: trTranslation,
      },
      ru: {
        translation: ruTranslation,
      },
      
    },
    lng: 'en', // Varsayılan dil
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // HTML içeriğini güvenli bir şekilde çevirebilmek için
    },
  });

export default i18n;