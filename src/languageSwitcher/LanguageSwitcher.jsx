import React from 'react';
import { useTranslation } from 'react-i18next';
import './styles/LanguageSwitcher.scss'

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change the language on button click
  };

  return (
    <div className="language-switcher">
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage("fr")}>Français</button>
    </div>
  );
};

export default LanguageSwitcher;
