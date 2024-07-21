import React from 'react';
import { useForm } from 'react-hook-form';
import './Contact.css';
import emailIcon from '../assets/email.png'; // Ensure this path is correct
import linkedinIcon from '../assets/linkedin.png'; // Ensure this path is correct
import startIcon from '../assets/start.png'; // Ensure this path is correct
import sendIcon from '../assets/send.png'; // Ensure this path is correct
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Add your form submission logic here
  };

  return (
    <>
      <section id="contact" className="contact-section">
        <h2>
          <img src={startIcon} alt="Start Icon" className="start-icon" /> {t('get_in_touch')}
        </h2>
        <div className="contact-container">
          <div className="contact-form">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder={t('name')} 
                  {...register('name', { required: true })} 
                />
                {errors.name && <span className="error">{t('name_required')}</span>}
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder={t('email')} 
                  {...register('email', { required: true })} 
                />
                {errors.email && <span className="error">{t('email_required')}</span>}
              </div>
              <div className="form-group">
                <textarea 
                  placeholder={t('message')} 
                  rows="4" 
                  {...register('message', { required: true })} 
                ></textarea>
                {errors.message && <span className="error">{t('message_required')}</span>}
              </div>
              <button type="submit">
                <img src={sendIcon} alt="Send" className="send-icon" /> {t('send')}
              </button>
            </form>
          </div>
          <div className="contact-details">
            <div className="contact-method email">
              <img src={emailIcon} alt="Email" className="contact-icon" />
              <div className="contact-info">Ouassaf.ayoub@gmail.com</div>
            </div>
            <div className="contact-method linkedin">
              <img src={linkedinIcon} alt="LinkedIn" className="contact-icon" />
              <div className="contact-info">{t('ouassaf_ayoub')}</div>
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
