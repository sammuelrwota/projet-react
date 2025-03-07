import React from 'react';
import './BarreAnnees.scss'; // Import du fichier CSS

function BarreAnnees({ onYearClick }) {
    return (
        <div className="conteneur-barre-annees">
            <div className="barre-annees">
                <div onClick={() => onYearClick(2022)} className="year-cube">2022</div>
                <div onClick={() => onYearClick(2023)} className="year-cube">2023</div>
                <div onClick={() => onYearClick(2024)} className="year-cube">2024</div>
                <div onClick={() => onYearClick(2025)} className="year-cube">2025</div>
                <div onClick={() => onYearClick(2026)} className="year-cube">2026</div>
                <div onClick={() => onYearClick(2027)} className="year-cube">2027</div>
            </div>
        </div>
    );
}

export default BarreAnnees;
