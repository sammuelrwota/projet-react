import React, { useEffect } from 'react';
import './Annee2022.scss';
import FaArrowLeft from '../../assets/leftarrow.svg';
import { useTranslation } from 'react-i18next';
import BarreAnnees from '../BarreAnnees/BarreAnnees';  

function Annee2022({ onBack, onYearClick }) {

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
                <h1>2022</h1>
            </div>

            <div className="cahier2022">
                <div className="page left-page">
                    <h2>{t('remark')}</h2>
                    <p className="remarqueParagraphe">
                        {t('remarkp2022')}
                    </p>
                </div>

                <div className="page right-page">
                    <h2>{t('what_i_learned')}</h2>
                    <p className="jaiApprisParagraphe">
                        {t('what_i_learned2022')}
                    </p>
                </div>
            </div>

            <BarreAnnees onYearClick={onYearClick} /> 
        </div>
    );
}

export default Annee2022;
