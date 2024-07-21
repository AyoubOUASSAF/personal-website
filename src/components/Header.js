import React, { useState, useEffect } from 'react';
import './Header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
      const id = section.getAttribute('id');
      if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
        setSelectedItem(id);
        window.history.replaceState(null, null, `#${id}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsMenuOpen(false);
    window.location.hash = `#${item}`;
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <header className="header">
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <div className="header-logo">
        <a href="#home" className="home-link" onClick={() => handleItemClick('home')}>
          <span className="logo-text">&lt; A.OUASSAF /&gt;</span>
        </a>
      </div>
      <nav className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu-list">
          <li
            className={`menu-item about ${selectedItem === 'about' ? 'selected' : ''}`}
            onClick={() => handleItemClick('about')}
          >
            <a href="#about">{t('about')}</a>
          </li>
          <li
            className={`menu-item resume ${selectedItem === 'resume' ? 'selected' : ''}`}
            onClick={() => handleItemClick('resume')}
          >
            <a href="#resume">{t('career')}</a>
          </li>
          <li
            className={`menu-item skills ${selectedItem === 'skills' ? 'selected' : ''}`}
            onClick={() => handleItemClick('skills')}
          >
            <a href="#skills">{t('skills')}</a>
          </li>
          <li
            className={`menu-item projects ${selectedItem === 'projects' ? 'selected' : ''}`}
            onClick={() => handleItemClick('projects')}
          >
            <a href="#projects">{t('projects')}</a>
          </li>
          <li
            className={`menu-item contact ${selectedItem === 'contact' ? 'selected' : ''}`}
            onClick={() => handleItemClick('contact')}
          >
            <a href="#contact">{t('contact')}</a>
          </li>
        </ul>
        {isMenuOpen && (
          <div className="mobile-languages">
            <div>
              <img src="/flags/france.png" alt="FR" onClick={() => changeLanguage('fr')} />
              <span>FR</span>
            </div>
            <div>
              <img src="/flags/usa.png" alt="US" onClick={() => changeLanguage('en')} />
              <span>EN</span>
            </div>
            <div>
              <img src="/flags/italy.png" alt="ITA" onClick={() => changeLanguage('it')} />
              <span>IT</span>
            </div>
          </div>
        )}
      </nav>
      <div className="languages">
        <img src="/flags/france.png" alt="FR" onClick={() => changeLanguage('fr')} />
        <img src="/flags/usa.png" alt="US" onClick={() => changeLanguage('en')} />
        <img src="/flags/italy.png" alt="ITA" onClick={() => changeLanguage('it')} />
      </div>
    </header>
  );
};

export default Header;
