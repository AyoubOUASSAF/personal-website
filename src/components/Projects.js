import React from 'react';
import './Projects.css';
import aeroSchoolLogo from '../assets/Aeroschool.png'; // Ensure this path is correct
import adasAppLogo from '../assets/ADAS.png'; // Ensure this path is correct
import wordpressIcon from '../assets/wordpress.png';
import html5Icon from '../assets/html.png';
import cssIcon from '../assets/sql.png';
import javascriptIcon from '../assets/js.png';
import reactNativeIcon from '../assets/react.png';
import bootstrapIcon from '../assets/bootstrap.png';
import { useTranslation } from 'react-i18next';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className="projects-section">
      <h2>{t('projects')}</h2>
      <div className="projects-container">
        <a href="https://aeroschoolkhouribga.ma/" target="_blank" rel="noopener noreferrer" className="project-card aeroschool-card">
          <div className="project-logo-wrapper">
            <img src={aeroSchoolLogo} alt="Aero School Khouribga" className="project-logo aeroschool-logo" />
          </div>
          <div className="project-info">
            <h3>{t('aero_school_khouribga')}</h3>
            <p>{t('aero_school_description')}</p>
            <div className="project-icons">
              <img src={wordpressIcon} alt="WordPress" />
              <img src={html5Icon} alt="HTML5" />
              <img src={cssIcon} alt="CSS" />
              <img src={javascriptIcon} alt="JavaScript" />
            </div>
          </div>
        </a>
        <a href="https://adas.app/en/" target="_blank" rel="noopener noreferrer" className="project-card">
          <div className="project-logo-wrapper adas-logo-wrapper">
            <img src={adasAppLogo} alt="ADAS App" className="project-logo" />
          </div>
          <div className="project-info">
            <h3>{t('adas_app')}</h3>
            <p>{t('adas_app_description1')}</p>
            <p>{t('adas_app_description2')}</p>
            <div className="project-icons">
              <img src={reactNativeIcon} alt="React Native" />
              <img src={bootstrapIcon} alt="Bootstrap" />
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
