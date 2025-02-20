import React, { useState } from 'react';
import './MesTravaux.scss';
import mestravauxData from '../../data/mestravaux.js';  // Utilisez le bon chemin relatif
import fleche_droite from '../../assets/fleche-droite.svg'

function MesTravaux() {
    const [mesTravauxData, setMesTravauxData] = useState(mestravauxData.mestravaux_data);

    return (
        <div className="mestravaux">
            <div className="mestravaux-titre">
                <h1>Mon travail récent</h1>
                <img src="" alt="" />
            </div>
            <div className="mestravaux-contenu">
                {mesTravauxData.map((travail, index) => (
                    <div key={index}>
                        <img 
                            src={travail.w_img} 
                            alt={`Travail ${index + 1}`}  // Corrigé ici
                            onError={() => console.log(`Erreur de chargement de l'image: ${travail.w_img}`)}  // Corrigé ici
                        />
                    </div>
                ))}
            </div>
            <div className="montravail-montreplus">
                <a href="https://www.behance.net/profilsammuel" target="_blank" rel="noopener noreferrer">
                    <p>Voir Plus</p>
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
