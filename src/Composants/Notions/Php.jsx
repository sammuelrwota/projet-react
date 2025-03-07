import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 
import './Php.scss';

function Php() {

    const { t } = useTranslation(); 

    useEffect(() => {
        window.scrollTo(0, 400); 
    }, []);



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
