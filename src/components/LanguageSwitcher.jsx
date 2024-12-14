import { useState } from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import ukFlag from '../assets/flags/uk-flag.svg';
import belgianFlag from '../assets/flags/belgian-flag.svg';
import frenchFlag from '../assets/flags/french-flag.svg';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'EN', flag: ukFlag },
    { code: 'nl', name: 'NL', flag: belgianFlag },
    { code: 'fr', name: 'FR', flag: frenchFlag }
  ];

  const handleLanguageChange = (langCode) => {
    i18n.changeLanguage(langCode);
    localStorage.setItem('userLanguage', langCode);
    onLanguageChange(langCode);
    setIsOpen(false);
  };

  return (
    <div className="language-switcher">
      <button 
        className="language-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img 
          src={languages.find(lang => lang.code === currentLang).flag} 
          alt={`${languages.find(lang => lang.code === currentLang).name} flag`}
          className="flag-icon"
        />
        {languages.find(lang => lang.code === currentLang).name}
      </button>
      
      {isOpen && (
        <div className="language-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-option ${currentLang === lang.code ? 'active' : ''}`}
              onClick={() => {
                handleLanguageChange(lang.code);
              }}
            >
              <img src={lang.flag} alt={`${lang.name} flag`} className="flag-icon" />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 