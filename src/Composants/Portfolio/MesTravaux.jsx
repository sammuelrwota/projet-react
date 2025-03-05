import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'; 
import './MesTravaux.scss';
import mestravauxData from '../../data/mestravaux.js'; 
import fleche_droite from '../../assets/fleche-droite.svg';

function MesTravaux() {
    const { t } = useTranslation(); 
    const [mesTravauxData, setMesTravauxData] = useState(mestravauxData.mestravaux_data);

    const redirectToLink = (travail) => {
        const links = {
            1: "https://www.behance.net/gallery/219427161/Projet-Maya-2024",
            2: "https://www.behance.net/gallery/219426973/Figma-Project-Akwaba-(Hiver-2024)",
            3: "https://www.behance.net/gallery/219425779/Projet-Album-des-finissants-Hiver-2024",
            4: "https://www.behance.net/gallery/219425241/Projet-2022",
            5: "https://www.behance.net/gallery/195519651/TP2B-Charge-vlo",
            6: "https://www.behance.net/gallery/170167633/Mon-jeu-3D"
        };

        window.location.href = links[travail.w_no]; 
    };

    return (
        <div className="mestravaux">
            <div className="mestravaux-titre">
                <h1>{t('recent_work')}</h1>
            </div>
            <div className="mestravaux-contenu">
                {mesTravauxData.map((travail, index) => (
                    <div key={index}>
                        <img 
                            src={travail.w_img} 
                            alt={`Travail ${index + 1}`}
                            onError={() => console.log(`Erreur de chargement de l'image: ${travail.w_img}`)}
                            onClick={() => redirectToLink(travail)} 
                        />
                    </div>
                ))}
            </div>
            <div className="montravail-montreplus">
                <a href="https://www.behance.net/profilsammuel" target="_blank" rel="noopener noreferrer">
                    <p>{t('see_more')}</p> 
                    <img 
                        src={fleche_droite} 
                        alt="Fleche Droite" 
                        style={{ filter: "invert(50%) sepia(100%) saturate(500%) hue-rotate(200deg)" }} 
                    />
                </a>
            </div>
        </div>
    );
}

export default MesTravaux;
