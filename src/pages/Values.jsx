import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/About.css';

const Values = () => {
  const { t } = useTranslation();
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-in-element');
    elements.forEach((el) => observerRef.current.observe(el));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const values = [
    {
      title: t('values.items.quality.title'),
      description: t('values.items.quality.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22l-4-4H4V4h16v14h-4l-4 4zm-6-6h4.586L12 17.414 13.414 16H18V6H6v10z"/>
        </svg>
      )
    },
    {
      title: t('values.items.clientFocused.title'),
      description: t('values.items.clientFocused.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a5 5 0 011.473 9.795l-.834.555A1 1 0 0111 16.5v-1a1 1 0 01.445-.832l.833-.555A3 3 0 1012 7z"/>
        </svg>
      )
    },
    {
      title: t('values.items.innovation.title'),
      description: t('values.items.innovation.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
      )
    },
    {
      title: t('values.items.reliability.title'),
      description: t('values.items.reliability.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm1-8h4v2h-6V7h2v5z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="about">
      <div className="container">
        <h1 className="animate-slide-in">{t('values.title')}</h1>
        <div className="about-content">

          <div className="values">
            <div className="values-grid">
              {values.map((value, index) => (
                <div 
                  key={index} 
                  className="value-card fade-in-element"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="value-icon">
                    {value.icon}
                  </div>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Values; 