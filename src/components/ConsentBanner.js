import React from 'react';
import { useTranslation } from 'react-i18next';
import './ConsentBanner.css';

const ConsentBanner = ({ onAccept, onDecline }) => {
  const { t } = useTranslation();

  return (
    <div id="consent-banner" className="consent-banner">
      <span>{t('consent_text')}</span>
      <button onClick={onAccept}>{t('accept')}</button>
      <button className="decline-button" onClick={onDecline}>{t('decline')}</button>
    </div>
  );
};

export default ConsentBanner;
