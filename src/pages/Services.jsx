import { useTranslation } from 'react-i18next';
import '../styles/Services.css';

const Services = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.webDev.title'),
      description: t('services.webDev.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm1 2v10h14V7H5zm7 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
        </svg>
      )
    },
    {
      title: t('services.responsive.title'),
      description: t('services.responsive.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3-4h9v2h-9v-2zm0-4h9v2h-9V7z"/>
        </svg>
      )
    },
    {
      title: t('services.optimization.title'),
      description: t('services.optimization.description'),
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-6 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm12 0a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm-6-9a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services">
      <div className="container">
        <h1 className="animate-slide-in">{t('services.title')}</h1>
        <p className="section-description animate-fade-in delay-200">
          {t('services.subtitle')}
        </p>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={index}
              className="service-card fade-in-element"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 