import React from 'react';
import { useTranslation } from 'react-i18next';
import './Figma.scss';

function Figma() {
    const { t } = useTranslation(); 

    return(
        <div className='CompetenceFigma'>
            <div className='FigmaTitre'>
                <h1>{t('figma_title')}</h1> 
                <div className='paragrapheFigma'>
                    <p className='pFigma'>{t('figma_paragraph')}</p> 
                </div>
            </div>
        </div>
    )
}

export default Figma;
