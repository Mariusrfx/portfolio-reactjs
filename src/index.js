import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Cookies from 'js-cookie';
import resources from './languages/translator';


i18n
  .use(initReactI18next) 
  .init({
    resources,
    lng: Cookies.get("language") || window.navigator.language ||  "en",
    fallbackLng: "en",

    interpolation: {
      escapeValue: false
    },
  });

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
