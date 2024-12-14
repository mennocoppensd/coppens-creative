import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import '../styles/Home.css';
import '../styles/animations.css';

const Home = () => {
  const { t } = useTranslation();
  const circlesRef = useRef(null);

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const targetPosition = contactSection.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!circlesRef.current) return;
      
      const circles = circlesRef.current.children;
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      Array.from(circles).forEach((circle, index) => {
        const speed = (3 - index) * 0.03;
        const x = (window.innerWidth / 2 - mouseX) * speed;
        const y = (window.innerHeight / 2 - mouseY) * speed;
        circle.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="home">
      <div className="container">
        <div className="hero">
          <h1 className="animate-slide-in">{t('home.welcome')}</h1>
          <p className="animate-slide-in delay-200">{t('home.subtitle')}</p>
          <div className="decorative-circles" ref={circlesRef}>
            <div className="circle animate-fade-in delay-300"></div>
            <div className="circle animate-fade-in delay-400"></div>
            <div className="circle animate-fade-in delay-500"></div>
          </div>
          <br />
          <button className="cta-button" onClick={handleContactClick}>{t('home.cta.contact')}</button>
        </div>
        

        <div className="featured-section animate-fade-in delay-300">
          <h2>Creating Websites That Stand Out</h2>
          <p>Modern, responsive, and tailored to your needs</p>
          <div className="cta-buttons">
            <button className="primary-btn animate-scale-in delay-400">{t('home.cta.projects')}</button>
            <button className="secondary-btn animate-scale-in delay-500">Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 