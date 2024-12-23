import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      signin: "Sign In",
      signup: "Sign Up",
      arl: "All rights reserved",
      password: "Password",
      email: "Email",
    },
  },
  am: {
    translation: {
      signin: "Մուտք",
      signup: "Գրանցում",
      arl: "բոլոր իրավունքները պաշտպանված են",
      password: "Գաղտնաբառ",
      email: "Էլ. փոստ",
    },
  },
  ru: {
    translation: {
      signin: "Войти",
      signup: "Зарегистрироваться",
      arl: "Все права защищены",
      password: "Пароль",
      email: "Эл. почта",
    },
  },
  fr: {
      translation: {
        signin: "Se connecter",
        signup: "S'inscrire",
        arl: "Tous droits réservés",
        password: "Mot de passe",
        email: "Email",
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