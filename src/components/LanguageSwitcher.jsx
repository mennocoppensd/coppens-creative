import { useState } from 'react';
import { useTranslation, initReactI18next } from 'react-i18next';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = ({ currentLang, onLanguageChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', name: 'EN', flag: '🇬🇧' },
    { code: 'nl', name: 'NL', flag: '🇳🇱' },
    { code: 'fr', name: 'FR', flag: '🇫🇷' }
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
        {languages.find(lang => lang.code === currentLang).flag}
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
              {lang.flag} {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 