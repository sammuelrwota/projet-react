import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './Javascript.scss';

function Javascript() {
    const { t } = useTranslation(); 

    return(
        <div className='CompetenceJavascript'>
            <div className='JavascriptTitre'>
                <h1>{t('javascript_title')}</h1>
                <div className='paragrapheJavascript'>
                    <p className='pJavascript'>{t('javascript_paragraph')}</p>
                </div>
            </div>
        </div>
    )
}

export default Javascript;
