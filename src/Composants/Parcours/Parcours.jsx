import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Parcours.scss';
// import Annee2022 from '../Annees/Annee2022.jsx';
// import Annee2023 from '../Annees/Annee2022.jsx';
// import Annee2024 from '../Annees/Annee2022.jsx';
// import Annee2025 from '../Annees/Annee2022.jsx';
// import Annee2026 from '../Annees/Annee2022.jsx';
// import Annee2027 from '../Annees/Annee2022.jsx';

function Parcours() {
    const [active, setActive] = useState(false);
    const [showText, setShowText] = useState(false); 
    const { t } = useTranslation();
    const years = [2022, 2023, 2024, 2025, 2026, 2027];
    const currentYear = 2025;

    useEffect(() => {
        setActive(true);

        const timer = setTimeout(() => {
            setShowText(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    const handleYearClick = (year) => {
        console.log(`Année cliquée: ${year}`);
    };

    return (
        <div className="parcours">
            <div className="parcours-title">
                <h1>{t('parcours_title')}</h1>
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
