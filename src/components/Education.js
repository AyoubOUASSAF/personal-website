import React from 'react';
import './Education.css';
import educationIcon from '../assets/education.png';
import workIcon from '../assets/work.png';
import yearIcon from '../assets/year.png';
import companyIcon from '../assets/company.png';
import institutionIcon from '../assets/institution.png';

// Importing company/university icons
import someiIcon from '../assets/Somei.png';
import wiizIcon from '../assets/wordpress.png';
import metaIcon from '../assets/coursera.png';
import facultyIcon from '../assets/Fst.png';
import Agenzia from '../assets/AIDA.png';
import Zion from '../assets/zion.png';

import { useTranslation } from 'react-i18next';


const Education = () => {
  const { t } = useTranslation();

  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-title">
          <h2>{t('career')}</h2>
        </div>
        <div className="timeline">
          <div className="timeline-item left education">
            <div className="timeline-content">
              <div className="icons-top-right">
                <img src={educationIcon} alt="Education" className="icon" />
                <img src={metaIcon} alt="META" className="company-icon" />
              </div>
              <h4 className="education-title">{t('front_end_development')}</h4>
              <div className="timeline-detail">
                <img src={yearIcon} alt="Year" className="detail-icon" />
                <h5>07/2024</h5>
              </div>
              <div className="timeline-detail">
                <img src={institutionIcon} alt="Institution" className="detail-icon" />
                <p><em>{t('company_meta')}</em></p>
              </div>
            </div>
          </div>
          <div className="timeline-item right work">
            <div className="timeline-content wider">
              <div className="icons-top-right">
                <img src={workIcon} alt="Work" className="icon" />
                <img src={someiIcon} alt="Somei" className="company-icon somei-icon" />
              </div>
              <h4 className="education-title">{t('full_stack_developer')}</h4>
              <div className="timeline-detail">
                <img src={yearIcon} alt="Year" className="detail-icon" />
                <h5>03/2024 - Now</h5>
              </div>
              <div className="timeline-detail">
                <img src={companyIcon} alt="Company" className="detail-icon" />
                <p><em>{t('company_somei')}</em></p>
              </div>
              <ul className="tasks">
                <li>{t('application_and_corrective_maintenance')}</li>
                <li>{t('analyze_and_develop_components')}</li>
                <li>{t('work_iteratively')}</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item right work">
            <div className="timeline-content wider">
              <div className="icons-top-right">
                <img src={workIcon} alt="Work" className="icon" />
                <img src={Agenzia} alt="Agenzia Investigativa Delle Alpi" className="company-icon" />
              </div>
              <h4 className="education-title">{t('web_developer')}</h4>
              <div className="timeline-detail">
                <img src={yearIcon} alt="Year" className="detail-icon" />
                <h5>06/2021 - 02/2024</h5>
              </div>
              <div className="timeline-detail">
                <img src={companyIcon} alt="Company" className="detail-icon" />
                <p><em>{t('company_agenzia')}</em></p>
              </div>
              <ul className="tasks">
                <li>{t('creation_of_responsive_websites')}</li>
                <li>{t('openapi_integration')}</li>
                <li>{t('development_of_application_for_analysis')}</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item right work">
            <div className="timeline-content wider">
              <div className="icons-top-right">
                <img src={workIcon} alt="Work" className="icon" />
                <img src={Zion} alt="Agenzia Investigativa Delle Alpi" className="company-icon" />
              </div>
              <h4 className="education-title">{t('web_developer')}</h4>
              <div className="timeline-detail">
                <img src={yearIcon} alt="Year" className="detail-icon" />
                <h5>2021 - 2024</h5>
              </div>
              <div className="timeline-detail">
                <img src={companyIcon} alt="Company" className="detail-icon" />
                <p><em>{t('company_zion')}</em></p>
              </div>
              <ul className="tasks">
                <li>{t('using_javascript_html_css')}</li>
                <li>{t('creating_dynamic_layouts')}</li>
                <li>{t('using_php_to_interact_with_mysql')}</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item right work">
            <div className="timeline-content wider">
              <div className="icons-top-right">
                <img src={workIcon} alt="Work" className="icon" />
                <img src={wiizIcon} alt="Wiiz" className="company-icon" />
              </div>
              <h4 className="education-title">{t('web_developer')}</h4>
              <div className="timeline-detail">
                <img src={yearIcon} alt="Year" className="detail-icon" />
                <h5>2021</h5>
              </div>
              <div className="timeline-detail">
                <img src={companyIcon} alt="Company" className="detail-icon" />
                <p><em>{t('company_wiiz')}</em></p>
              </div>
              <ul className="tasks">
                <li>{t('using_angularjs_ionic')}</li>
                <li>{t('integration_of_firebase')}</li>
                <li>{t('flexible_adaptation')}</li>
              </ul>
            </div>
          </div>
          <div className="timeline-item left education">
            <div className="timeline-content">
              <div className="icons-top-right">
                <img src={educationIcon} alt="Education" className="icon" />
                <img src={facultyIcon} alt="Faculty" className="company-icon" />
              </div>
              <h4 className="education-title">{t('information_systems_engineering')}</h4>
              <div className="timeline-detail">
                <img src={yearIcon} alt="Year" className="detail-icon" />
                <h5>07/2017</h5>
              </div>
              <div className="timeline-detail">
                <img src={institutionIcon} alt="Institution" className="detail-icon" />
                <p><em>{t('company_faculty')}</em></p>
              </div>
            </div>
          </div>
          <div className="timeline-item left education">
            <div className="timeline-content">
              <div className="icons-top-right">
                <img src={educationIcon} alt="Education" className="icon" />
                <img src={facultyIcon} alt="Faculty" className="company-icon" />
              </div>
              <h4 className="education-title">{t('bachelor_degree')}</h4>
              <div className="timeline-detail">
                <img src={yearIcon} alt="Year" className="detail-icon" />
                <h5>2014</h5>
              </div>
              <div className="timeline-detail">
                <img src={institutionIcon} alt="Institution" className="detail-icon" />
                <p><em>{t('company_fst')}</em></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
