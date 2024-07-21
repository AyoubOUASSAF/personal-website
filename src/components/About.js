import React from 'react';
import './About.css';
import profilePic from '../assets/profile.jpg';
import locationIcon from '../assets/location.png';
import ageIcon from '../assets/age.png';
import experienceIcon from '../assets/experience.png';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  const tags = t('tags', { returnObjects: true });

  return (
    <section id="about" className="about-section">
      <h2>{t('about_me')}</h2>
      <div className="about-content">
        <div className="about-card">
          <img src={profilePic} alt="Ayoub Ouassaf" className="profile-pic" />
          <div className="about-details">
            <div className="about-detail-item">
              <img src={ageIcon} alt={t('age')} className="icon" />
              <span><strong>{t('age')}:</strong> 31</span>
            </div>
            <div className="about-detail-item">
              <img src={locationIcon} alt={t('based_in')} className="icon" />
              <span><strong>{t('based_in')}:</strong> {t('country')}</span>
            </div>
            <div className="about-detail-item">
              <img src={experienceIcon} alt={t('experience')} className="icon" />
              <span><strong>{t('experience')}:</strong> 5 {t('years')}</span>
            </div>
          </div>
        </div>
        <div className="about-description-card">
          <div className="about-description">
            <h1 className="logo">&lt; <strong>A.OUASSAF</strong> /&gt;</h1>
            <p>{t('description1')}</p>
            <p>{t('description2')}</p>
            <div className="tags">
              {Array.isArray(tags) && tags.map((tag, index) => (
                <span key={index} className="tag">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
