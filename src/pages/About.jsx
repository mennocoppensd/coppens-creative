import { useEffect, useRef } from 'react';
import '../styles/About.css';

const About = () => {
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
      title: "Quality First",
      description: "We never compromise on quality, ensuring every project meets the highest standards.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 22l-4-4H4V4h16v14h-4l-4 4zm-6-6h4.586L12 17.414 13.414 16H18V6H6v10z"/>
        </svg>
      )
    },
    {
      title: "Client-Focused",
      description: "Your success is our priority. We work closely with you to achieve your goals.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2zm0 2a8 8 0 100 16 8 8 0 000-16zm0 3a5 5 0 011.473 9.795l-.834.555A1 1 0 0111 16.5v-1a1 1 0 01.445-.832l.833-.555A3 3 0 1012 7z"/>
        </svg>
      )
    },
    {
      title: "Innovation",
      description: "We stay ahead of the curve, implementing the latest technologies and trends.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12zm0-2a4 4 0 110-8 4 4 0 010 8zm0-2a2 2 0 100-4 2 2 0 000 4z"/>
        </svg>
      )
    },
    {
      title: "Reliability",
      description: "Count on us to deliver your projects on time and within budget.",
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
        <h1 className="animate-slide-in">About CoppensCreative</h1>
        <div className="about-content">
          <div className="about-text fade-in-element">
            <p>
              We are a creative web development studio focused on delivering 
              exceptional digital experiences. With years of experience in the field,
              we bring your vision to life through modern web technologies and 
              innovative design solutions.
            </p>
            <p>
              Our approach combines creativity with technical expertise to create
              websites that not only look stunning but also perform flawlessly.
            </p>
          </div>

          <div className="values">
            <h2 className="animate-slide-in delay-200">Our Values</h2>
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

export default About; 