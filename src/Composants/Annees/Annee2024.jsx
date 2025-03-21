import React, { useEffect } from 'react';
import './Annee2024.scss';
import FaArrowLeft from '../../assets/leftarrow.svg'; 
import { useTranslation } from 'react-i18next';
import BarreAnnees from '../BarreAnnees/BarreAnnees';

function Annee2024({ onBack, onYearClick }) {

    const { t } = useTranslation();

    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    return (
        <div className="annee-page">
            <div className="back-arrow" onClick={onBack}>
                <img src={FaArrowLeft} alt="Flèche gauche" />
            </div>

            <div className="annee-title">
                <h1>2024</h1>
            </div>

            <div className="cahier2024">
                <div className="page left-page">
                    <h2>{t('remark')}</h2>
                    <p className="remarqueParagraphe">
                        {t('remarkp2024')}
                    </p>
                </div>

                <div className="page right-page">
                    <h2>{t('what_i_learned')}</h2>
                    <p className="jaiApprisParagraphe">
                        {t('what_i_learned2024')}
                    </p>
                </div>
            </div>

            <BarreAnnees onYearClick={onYearClick} /> 
        </div>
    );
}

export default Annee2024;
