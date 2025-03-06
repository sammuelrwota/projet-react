import React, { useEffect } from 'react';
import './Annee2026.scss';
import FaArrowLeft from '../../assets/leftarrow.svg'; 
import { useTranslation } from 'react-i18next';

function Annee2026({ onBack }) {

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
                <h1>2026</h1>
            </div>

            <div className="cahier">
                <div className="page left-page">
                    <h2>{t('remark')}</h2>
                    <p className="remarqueParagraphe2026">
                       (vide)
                    </p>
                </div>


                <div className="page right-page">
                    <h2>{t('what_i_learned')}</h2>
                    <p className="jaiApprisParagraphe2026">
                        (vide)
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Annee2026;
