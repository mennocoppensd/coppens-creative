import { useEffect, useState, useRef } from 'react';
import '../styles/ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const handleTab = (e) => {
      if (e.key === 'Tab') {
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('keydown', handleTab);
    closeButtonRef.current.focus();

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('keydown', handleTab);
    };
  }, [onClose]);

  return (
    <div 
      className="modal-overlay" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="modal-content" 
        onClick={e => e.stopPropagation()}
        ref={modalRef}
      >
        <button 
          className="modal-close" 
          onClick={onClose}
          ref={closeButtonRef}
          aria-label="Close modal"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
          </svg>
        </button>
        
        <div className={`modal-image ${!imageLoaded ? 'loading' : ''}`}>
          {!imageLoaded && (
            <div className="image-loader" role="status" aria-label="Loading image">
              <div className="spinner"></div>
            </div>
          )}
          <img 
            src={project.image} 
            alt={project.title} 
            onLoad={() => setImageLoaded(true)}
          />
        </div>
        
        <div className="modal-body">
          <h2 id="modal-title">{project.title}</h2>
          <div className="project-tags" aria-label="Project tags">
            {project.tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
          <p className="project-description">{project.description}</p>
          
          <div className="project-details">
            <h3>Project Details</h3>
            <ul>
              <li><strong>Client:</strong> {project.client}</li>
              <li><strong>Duration:</strong> {project.duration}</li>
              <li><strong>Technologies:</strong> {project.technologies}</li>
            </ul>
          </div>

          <div className="project-challenges">
            <h3>Challenges & Solutions</h3>
            <p>{project.challenges}</p>
          </div>

          <div className="project-results">
            <h3>Results</h3>
            <p>{project.results}</p>
          </div>

          <a 
            href={project.link} 
            className="visit-site" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label={`Visit ${project.title} website`}
          >
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal; 