import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './ReactJs.scss';

function ReactJs() {
    const { t } = useTranslation();

    return(
        <div className='CompetenceReactJs'>
            <div className='ReactJsTitre'>
                <h1>{t('react_js_title')}</h1> 
                <div className='paragrapheReactJs'>
                    <p className='pReactJs'>{t('react_js_paragraph')}</p> 
                </div>
            </div>
        </div>
    )
}

export default ReactJs;
