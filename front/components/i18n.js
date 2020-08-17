import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { en, fr, it } from '../lang/';

const resources = {
  en: {
    translation: en,
  },
  fr: {
    translation: fr,
  },
  it: {
    translation: it,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    resources,
    lng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
