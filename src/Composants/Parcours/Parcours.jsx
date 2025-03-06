import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Parcours.scss';
import Annee2022 from '../Annees/Annee2022';
import Annee2023 from '../Annees/Annee2023';
import Annee2024 from '../Annees/Annee2024';
import Annee2025 from '../Annees/Annee2025';
import Annee2026 from '../Annees/Annee2026';
import Annee2027 from '../Annees/Annee2027';
import FaArrowLeft from '../../assets/leftarrow.svg'; 

function Parcours({ onBack = () => console.log("onBack non défini") }) {
    const [active, setActive] = useState(false);
    const [showText, setShowText] = useState(false);
    const [selectedYear, setSelectedYear] = useState(null); 
    const { t } = useTranslation();
    const years = [2022, 2023, 2024, 2025, 2026, 2027];
    const currentYear = 2025;

    useEffect(() => {
        window.scrollTo(0, 0); 
        setActive(true);
        const timer = setTimeout(() => setShowText(true), 5000);
        return () => clearTimeout(timer);
    }, []); 

    const handleYearClick = (year) => {
        console.log(`Année cliquée: ${year}`);
        setSelectedYear(year);
    };

    const handleBackToParcours = () => {
        setSelectedYear(null); 
    };

    
    if (selectedYear) {
        switch (selectedYear) {
            case 2022: return <Annee2022 onBack={handleBackToParcours} />;
            case 2023: return <Annee2023 onBack={handleBackToParcours} />;
            case 2024: return <Annee2024 onBack={handleBackToParcours} />;
            case 2025: return <Annee2025 onBack={handleBackToParcours} />;
            case 2026: return <Annee2026 onBack={handleBackToParcours} />;
            case 2027: return <Annee2027 onBack={handleBackToParcours} />;
            default: return <Parcours />;
        }
    }

    return (
        <div className="parcours">
            <div className="back-arrow" onClick={() => { 
                if (typeof onBack === 'function') {
                    onBack();
                } else {
                    console.warn("onBack n'est pas défini !");
                }
            }}>
                <img src={FaArrowLeft} alt="Flèche gauche" />
            </div>

            <div className="parcours-title">
                <h1>{t('parcours_title')}</h1>
            </div>

            <div className="parcours-subtitle">
                <p>{t('parcours_subtitle')}</p>  
            </div>

            <div className="parcours-timeline">
                {years.map((year) => (
                    <div 
                        key={year} 
                        className={`parcours-timeline__year ${year === currentYear ? 'current' : ''}`} 
                        onClick={() => handleYearClick(year)}
                    >
                        <span>{year}</span>
                    </div>
                ))}
            </div>
            <div className="timeline-container">
                <hr className={`timeline-bar ${active ? 'active' : ''}`} />
            </div>
            {showText && <div className="timeline-text visible">{t('présentement')}</div>}
        </div>
    );
}

export default Parcours;
