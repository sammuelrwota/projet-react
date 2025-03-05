import React from 'react';
import { useTranslation } from 'react-i18next'; 
import './Adobe.scss';
import ProposDeMoi from '../APropos/ProposDeMoi';

function Adobe() {
    const { t } = useTranslation(); 

    return(
        <div className='CompetenceAdobe'>
            <div className='AdobeTitre'>
                <h1>{t('adobe_title')}</h1> 
                <div className='paragrapheAdobe'>
                    <p className='pAdobe'>{t('adobe_paragraph')}</p> 
                </div>
            </div>
        </div>
    )
}

export default Adobe;
