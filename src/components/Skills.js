import React, { useState } from 'react';
import './Skills.css';
import techIcon from '../assets/tech-icon.png';
import softIcon from '../assets/soft-icon.png';
import jsIcon from '../assets/js.png';
import reactIcon from '../assets/react.png';
import angularIcon from '../assets/angular.png';
import htmlIcon from '../assets/html.png';
import nodeIcon from '../assets/node.png';
import csharpIcon from '../assets/csharp.png';
import sqlIcon from '../assets/sql.png';
import javaIcon from '../assets/java.png';
import communicationIcon from '../assets/communication.png';
import teamworkIcon from '../assets/teamwork.png';
import problemSolvingIcon from '../assets/problem-solving.png';
import adaptabilityIcon from '../assets/adaptability.png';
import creativityIcon from '../assets/creativity.png';
import leadershipIcon from '../assets/leadership.png';
import timeManagementIcon from '../assets/time-management.png';
import criticalThinkingIcon from '../assets/critical-thinking.png';
import { useTranslation } from 'react-i18next';

const Skills = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('technical');

  const technicalSkills = [
    { name: t('javascript'), icon: jsIcon, level: '90%' },
    { name: t('react'), icon: reactIcon, level: '85%' },
    { name: t('angular'), icon: angularIcon, level: '70%' },
    { name: t('html_css'), icon: htmlIcon, level: '95%' },
    { name: t('node_js'), icon: nodeIcon, level: '75%' },
    { name: t('csharp'), icon: csharpIcon, level: '80%' },
    { name: t('sql'), icon: sqlIcon, level: '85%' },
    { name: t('java'), icon: javaIcon, level: '70%' }
  ];

  const softSkills = [
    { name: t('communication'), icon: communicationIcon, level: '90%' },
    { name: t('teamwork'), icon: teamworkIcon, level: '85%' },
    { name: t('problem_solving'), icon: problemSolvingIcon, level: '80%' },
    { name: t('adaptability'), icon: adaptabilityIcon, level: '85%' },
    { name: t('creativity'), icon: creativityIcon, level: '90%' },
    { name: t('leadership'), icon: leadershipIcon, level: '80%' },
    { name: t('time_management'), icon: timeManagementIcon, level: '75%' },
    { name: t('critical_thinking'), icon: criticalThinkingIcon, level: '75%' }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="display-4 pb-5 text-center">{t('skills')}</h2>
        <div className="skills-tabs-container">
          <button
            type="button"
            className={`skills-tab ${activeTab === 'technical' ? 'active' : ''}`}
            onClick={() => setActiveTab('technical')}
          >
            <img src={techIcon} alt={t('technical_skills')} />
            {t('technical_skills')}
          </button>
          <button
            type="button"
            className={`skills-tab ${activeTab === 'soft' ? 'active' : ''}`}
            onClick={() => setActiveTab('soft')}
          >
            <img src={softIcon} alt={t('soft_skills')} />
            {t('soft_skills')}
          </button>
        </div>
        <div className="skills-content">
          {activeTab === 'technical' && (
            <div className="skills-list">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="skills-column">
                  <div className="skill-item">
                    <div className="skill-name">
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                      <span className="lead mb-1 mt-2">{skill.name}</span>
                    </div>
                    <div className="progress-bar-animation progress">
                      <div
                        role="progressbar"
                        className="progress-bar"
                        aria-valuenow={parseInt(skill.level)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === 'soft' && (
            <div className="skills-list">
              {softSkills.map((skill, index) => (
                <div key={index} className="skills-column">
                  <div className="skill-item">
                    <div className="skill-name">
                      <img src={skill.icon} alt={skill.name} className="skill-icon" />
                      <span className="lead mb-1 mt-2">{skill.name}</span>
                    </div>
                    <div className="progress-bar-animation progress">
                      <div
                        role="progressbar"
                        className="progress-bar"
                        aria-valuenow={parseInt(skill.level)}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{ width: skill.level }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
