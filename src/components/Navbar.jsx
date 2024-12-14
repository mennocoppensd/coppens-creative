import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';
import '../styles/Navbar.css';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentLang, setCurrentLang] = useState(
    localStorage.getItem('userLanguage') || 'en'
  );

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + 100;

      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      sections.forEach(section => {
        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, sectionId) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = element.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
    
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      <div className="container nav-container">
        <a href="#home" className="logo" onClick={(e) => handleClick(e, 'home')}>
          <img src="/favicon.svg" alt="Coppens Creative Logo" className="navbar-logo" />
          CoppensCreative
        </a>
        
        <div className="nav-right">
          <LanguageSwitcher
            currentLang={currentLang}
            onLanguageChange={setCurrentLang}
          />
          <div className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
            <div className={`hamburger ${isOpen ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
          {['home', 'projects', 'services', 'values', 'about', 'contact'].map((section) => (
            <li key={section}>
              <a
                href={`#${section}`}
                className={activeSection === section ? 'active' : ''}
                onClick={(e) => handleClick(e, section)}
              >
                {t(`nav.${section}`)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar; 