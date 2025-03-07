import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next'; 
import './Unity.scss';

function Unity() {

    const { t } = useTranslation(); 

    useEffect(() => {
        window.scrollTo(0, 400); 
    }, []);

    return(
        <div className='CompetenceUnity'>
            <div className='UnityTitre'>
                <h1>{t('unity_title')}</h1> 
                <div className='paragrapheUnity'>
                    <p className='pUnity'>{t('unity_paragraph')}</p> 
                </div>
            </div>
        </div>
    );
}

export default Unity;
