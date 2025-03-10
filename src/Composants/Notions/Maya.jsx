import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Maya.scss';

function Maya() {

    const { t } = useTranslation(); 

    useEffect(() => {
        window.scrollTo(0, 400); 
    }, []);



    return(
        <div className='CompetenceMaya'>
            <div className='MayaTitre'>
                <h1>{t('maya_title')}</h1> 
                <div className='paragrapheMaya'>
                    <p className='pMaya'>{t('maya_paragraph')}</p> 
                </div>
            </div>
        </div>
    )
}

export default Maya;
