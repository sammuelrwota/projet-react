import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Parcours.scss';

function Parcours() {
    const [active, setActive] = useState(false);
    const [showText, setShowText] = useState(false); // Ajout du texte après 10s
    const { t } = useTranslation();
    const years = [2022, 2023, 2024, 2025, 2026, 2027];
    const currentYear = 2025;

    useEffect(() => {
        setActive(true);

        // Affichage du texte après 10s
        const timer = setTimeout(() => {
            setShowText(true);
        }, 10000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="parcours">
            <div className="parcours-title">
                <h1>{t('parcours_title')}</h1>
            </div>
            <div className="parcours-timeline">
                {years.map((year) => (
                    <div key={year} className={`parcours-timeline__year ${year === currentYear ? 'current' : ''}`}>
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
