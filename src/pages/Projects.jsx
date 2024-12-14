import { useState, useEffect, useRef } from 'react';
import ProjectModal from '../components/ProjectModal';
import '../styles/Projects.css';
import { getScrollbarWidth } from '../utils/scrollbarWidth';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const observerRef = useRef(null);
  const { t } = useTranslation();

  const projects = [
    {
      title: "Project 1",
      description: "Website redesign for a local business",
      image: "/project1.jpg",
      tags: ["Web Design", "React", "Animation"],
      client: "Local Business Name",
      duration: "3 months",
      technologies: "React, Node.js, MongoDB",
      challenges: "The main challenge was creating a responsive design that would work seamlessly across all devices while maintaining the client's brand identity.",
      results: "The new website increased mobile traffic by 45% and improved conversion rates by 25%.",
      link: "https://project1.com"
    },
    {
      title: "Project 2",
      description: "E-commerce platform development",
      image: "/project2.jpg",
      tags: ["E-commerce", "Full Stack", "UI/UX"],
      client: "Online Retailer",
      duration: "6 months",
      technologies: "Next.js, Stripe, PostgreSQL",
      challenges: "Implementing a secure payment system and optimizing the checkout process for maximum conversion.",
      results: "Successfully launched with 100+ products and achieved 95% customer satisfaction rate.",
      link: "https://project2.com"
    },
    // Add more projects...
  ];

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

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card) => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    document.documentElement.style.setProperty('--scrollbar-width', `${getScrollbarWidth()}px`);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    document.documentElement.style.removeProperty('--scrollbar-width');
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h1 className="animate-slide-in">{t('projects.title')}</h1>
        <p className="section-description animate-fade-in delay-200">
          {t('projects.subtitle')}
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="project-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <button 
                    className="view-project"
                    onClick={() => handleProjectClick(project)}
                  >
                    View Project
                  </button>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="view-project">{t('projects.viewProject')}</button>
        <a href="#" className="live-link">{t('projects.viewLive')}</a>
      </div>

      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};

export default Projects; 