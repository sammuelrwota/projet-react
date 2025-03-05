import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './Scss.scss';

function Scss() {
    const { t } = useTranslation(); 

    return(
        <div className='CompetenceScss'>
            <div className='ScssTitre'>
                <h1>{t('scss_title')}</h1> 
                <div className='paragrapheScss'>
                    <p className='pScss'>{t('scss_paragraph')}</p> 
                </div>
            </div>
        </div>
    )
}

export default Scss;
