import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      signin: "Sign In",
      signup: "Sign Up",
      notificationsMessage_one: "You have {{count}} notification",
      notificationsMessage_other: "You have {{count}} notifications",
    },
  },
  am: {
    translation: {
      signin: "Մուտք",
      signup: "Գրանցում",
    },
  },
  ru: {
    translation: {
      signin: "Войти",
      signup: "Зарегистрироваться",
      notificationsMessage_one: "У вас {{count}} уведомление",
      notificationsMessage_other: "У вас {{count}} уведомлений",
    },
   }
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;