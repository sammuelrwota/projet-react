import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './Php.scss';

function Php() {
    const { t } = useTranslation(); 

    return(
        <div className='CompetencePhp'>
            <div className='PhpTitre'>
                <h1>{t('php_title')}</h1> 
                <div className='paragraphePhp'>
                    <p className='pPhp'>{t('php_paragraph')}</p> 
                </div>
            </div>
        </div>
    )
}

export default Php;
