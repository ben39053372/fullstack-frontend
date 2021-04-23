import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en.json';
import zh_hk from './zh-HK.json';

const resources = {
  en: {
    translation: en,
  },
  'zh-HK': {
    translation: zh_hk,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .init({
    ns: [],
    resources,
    lng: 'zh-HK',
    debug: false,
    keySeparator: false, // we do not use keys in form messages.welcome
    fallbackLng: 'zh-HK',
    cleanCode: true,
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
