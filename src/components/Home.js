import React, { useEffect, useState } from 'react';
import { ReactTyped } from "react-typed";
import './Home.css';
import linkedInIcon from '../assets/linkedin.png'; 
import githubIcon from '../assets/github.png'; 
import emailIcon from '../assets/mail.png'; 
import reactIcon from '../assets/react.png'; 
import angularIcon from '../assets/angular.png'; 
import javaIcon from '../assets/java.png'; 
import phpIcon from '../assets/php.png'; 
import wordpressIcon from '../assets/wordpress.png'; 
import vscodeIcon from '../assets/vscode.png'; 
import jsIcon from '../assets/js.png'; 
import htmlIcon from '../assets/html.png'; 
import scrollIcon from '../assets/scroll.png';

const icons = [reactIcon, angularIcon, javaIcon, phpIcon, wordpressIcon, vscodeIcon, jsIcon, htmlIcon];

const generateRandomIcons = () => {
  const iconElements = [];
  for (let i = 0; i < 50; i++) {
    const icon = icons[Math.floor(Math.random() * icons.length)];
    const top = Math.random() * 100; // Random top position
    const left = Math.random() * 100; // Random left position
    const delay = Math.random() * 5; // Random delay for animation

    iconElements.push(
      <img
        key={i}
        src={icon}
        alt="Tech Icon"
        style={{ top: `${top}vh`, left: `${left}vw`, animationDelay: `${delay}s` }}
      />
    );
  }
  return iconElements;
};

const Home = () => {
  const [randomIcons, setRandomIcons] = useState([]);

  useEffect(() => {
    setRandomIcons(generateRandomIcons());
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <section id="home" className="home-section">
        <div className="technology-icons">
          {randomIcons}
        </div>
        <div className="intro-box">
          <div className="intro-text">
            <h1>AYOUB OUASSAF</h1>
            <p>
              <ReactTyped
                strings={["Web Developer", "Développeur Web", "Sviluppatore Web","مطور ويب"]}
                typeSpeed={40}
                backSpeed={50}
                loop
              />
            </p>
            <div className="social-icons">
              <a href="mailto:ouassaf.ayoub@gmail.com" target="_blank" rel="noopener noreferrer">
                <img src={emailIcon} alt="Email" />
              </a>
              <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                <img src={linkedInIcon} alt="LinkedIn" />
              </a>
              <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                <img src={githubIcon} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
        <div className="scroll-down" onClick={handleScrollDown}>
          <img src={scrollIcon} alt="Scroll Down" className="scroll-icon" />
        </div>
      </section>
    </>
  );
};

export default Home;
