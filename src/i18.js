import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "./locales/en.json";
import es from "./locales/es.json";
import fr from "./locales/fr.json";
import hi from "./locales/hi.json";
import gu from "./locales/gu.json";
import bn from "./locales/bn.json";
import mr from "./locales/mr.json";
import or from "./locales/or.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
    hi: { translation: hi },
    gu: { translation: gu },
    bn: { translation: bn },
    mr: { translation: mr },
    or: { translation: or },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
