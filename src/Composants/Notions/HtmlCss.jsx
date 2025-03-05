import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './HtmlCss.scss';

function HtmlCss() {
    const { t } = useTranslation(); 

    return(
        <div className='CompetenceHtmlCss'>
            <div className='HtmlCssTitre'>
                <h1>{t('html_css_title')}</h1> 
                <div className='paragrapheHtmlCss'>
                    <p className='pHtmlCss'>{t('html_css_paragraph')}</p>
                </div>
            </div>
        </div>
    )
}

export default HtmlCss;
