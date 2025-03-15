import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './Animations.scss';

function Animations() {
  const { t } = useTranslation();  

  return (
    <div className="contenu">
      <div className="contenu__conteneur">
        <p className="contenu__conteneur__texte">{t('animation_title')}</p> 
        <ul className="contenu__conteneur__liste">
          <li className="contenu__conteneur__liste__element">{t('recent')}</li>  
          <li className="contenu__conteneur__liste__element">{t('practical')}</li> 
          <li className="contenu__conteneur__liste__element">{t('old')}</li> 
          <li className="contenu__conteneur__liste__element">{t('personal')}</li> 
        </ul>
      </div>
    </div>
  );
}

export default Animations;
