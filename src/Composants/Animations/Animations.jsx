import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './Animations.scss';

function Animations() {
  const { t } = useTranslation();  

  return (
    <div className="content">
      <div className="content__container">
        <p className="content__container__text">{t('animation_title')}</p> 
        <ul className="content__container__list">
          <li className="content__container__list__item">{t('recent')}</li>  
          <li className="content__container__list__item">{t('practical')}</li> 
          <li className="content__container__list__item">{t('old')}</li> 
          <li className="content__container__list__item">{t('personal')}</li> 
        </ul>
      </div>
    </div>
  );
}

export default Animations;
