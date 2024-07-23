import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ConsentBanner from './components/ConsentBanner';
import './App.css';

function App() {
  const [showConsentBanner, setShowConsentBanner] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('consentGiven') === null) {
      setShowConsentBanner(true);
    }
  }, []);

  const acceptConsent = () => {
    localStorage.setItem('consentGiven', 'true');
    setShowConsentBanner(false);
    loadGoogleAnalytics();
  };

  const declineConsent = () => {
    localStorage.setItem('consentGiven', 'false');
    setShowConsentBanner(false);
  };

  const loadGoogleAnalytics = () => {
    // Ensure dataLayer is defined before using it
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-HJZMC0EXXG');
    
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-HJZMC0EXXG';
    script.async = true;
    document.head.appendChild(script);
  };

  useEffect(() => {
    if (localStorage.getItem('consentGiven') === 'true') {
      loadGoogleAnalytics();
    }
  }, []);

  return (
    <div className="App">
      {showConsentBanner && <ConsentBanner onAccept={acceptConsent} onDecline={declineConsent} />}
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
