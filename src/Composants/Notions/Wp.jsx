import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Wp.scss';

function Wp() {

    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 400); 
    }, []);


    return (
        <div className='CompetenceWp'>
            <div className='WpTitre'>
                <h1>{t('wp_title')}</h1> 
                <div className='paragrapheWp'>
                    <p className='pWp'>{t('wp_paragraph')}</p> 
                </div>
            </div>
        </div>
    );
}

export default Wp;
