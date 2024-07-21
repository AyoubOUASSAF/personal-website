import React from 'react';
import './Experience.css';
import companyA from '../assets/Somei.svg'; // Ensure this path is correct
import companyB from '../assets/AIDA.png'; // Ensure this path is correct
import companyC from '../assets/zion.png'; // Ensure this path is correct

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <div className="experience-cards">
        <div className="experience-card">
          <img src={companyA} alt="Company A" className="company-logo" />
          <div className="experience-details">
            <h3>Software Developer</h3>
            <p className="duration">2015 - 2017</p>
            <p className="location">Company A, Morocco</p>
            <p className="description">Worked on various projects involving web and software development using JavaScript, React, and Angular.</p>
          </div>
        </div>
        <div className="experience-card">
          <img src={companyB} alt="Company B" className="company-logo" />
          <div className="experience-details">
            <h3>Full Stack Developer</h3>
            <p className="duration">2018 - 2021</p>
            <p className="location">Company B, Italy</p>
            <p className="description">Developed full-stack applications, integrated third-party services, and optimized backend performance.</p>
          </div>
        </div>
        <div className="experience-card">
          <img src={companyC} alt="Company C" className="company-logo" />
          <div className="experience-details">
            <h3>Senior Developer</h3>
            <p className="duration">2022 - Present</p>
            <p className="location">Company C, France</p>
            <p className="description">Leading a team of developers, overseeing project management, and ensuring high-quality code delivery.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
