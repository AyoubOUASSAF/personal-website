import React from 'react';
import './Contact.css';
import emailIcon from '../assets/email.png';
import linkedinIcon from '../assets/linkedin.png';
import startIcon from '../assets/start.png';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <>
      <section id="contact" className="contact-section">
        <h2>
          <img src={startIcon} alt="Start Icon" className="start-icon" /> {t('get_in_touch')}
        </h2>
        <div className="contact-container">
          <div className="contact-details">
            <div className="contact-method email">
              <img src={emailIcon} alt="Email" className="contact-icon" />
              <div className="contact-info">Ouassaf.ayoub@gmail.com</div>
            </div>
            <div className="contact-method linkedin">
              <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
              <div className="contact-info">
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                  {t('ouassaf_ayoub')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <p dangerouslySetInnerHTML={{ __html: t('footer_text') }} />
      </footer>
    </>
  );
};

export default Contact;
