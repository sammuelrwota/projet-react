import React, { useEffect } from "react";
import './ConnecteAvecMoi.scss';
import logo_linkedin from '../../assets/logo_reseaux/linkedin.svg';
import logo_github from '../../assets/logo_reseaux/github.svg'
import logo_behance from '../../assets/logo_reseaux/behance.svg';

function ConnecteAvecMoi() {
    useEffect(() => {
        // Fonction pour faire apparaître les éléments avec l'effet de défilement
        function faireApparaitre() {
            let lesSectionsAfaireApparaitre = document.querySelectorAll(".apparition");
            for (let uneSection of lesSectionsAfaireApparaitre) {
                let hauteurVisible = window.innerHeight * 0.75;
                let hauteurDeLaSection = uneSection.getBoundingClientRect().top;
                if (hauteurDeLaSection < hauteurVisible) {
                    uneSection.style.opacity = "1";
                    uneSection.style.transform = "translateX(0%)"; // Animation vers la position d'origine
                } else {
                    uneSection.style.opacity = "0";
                    uneSection.style.transform = "translateX(-100%)"; // Cache l'élément à gauche
                }
            }
        }

        // Attacher l'événement de scroll
        window.addEventListener("scroll", faireApparaitre);

        // Vérifier au chargement initial
        faireApparaitre();

        // Nettoyer l'événement lors du démontage du composant
        return () => {
            window.removeEventListener("scroll", faireApparaitre);
        };
    }, []); // [] pour ne s'exécuter qu'une seule fois au montage du composant

    return (
        <div className="ConnecteAvecMoi">
            <div className="ConnecteAvecMoi_titre">
                <h1>Connecte Avec moi</h1>
            </div>
            <div className="ConnecteAvecMoi_section">
                <div className="medias ">
                    <h2>Mes comptes</h2>
                    <div className="media apparition">
                        <p>LinkedIn :</p> 
                        <h3 className="liens">
                            <a href="https://www.linkedin.com/in/sammuel-rwota-6baa9234b/" target="_blank" rel="noopener noreferrer">
                                https://www.linkedin.com/in/sammuel-rwota-6baa9234b/
                            </a>
                        </h3>
                    </div>
                    <div className="media apparition">
                        <p>GitHub : </p> 
                        <h3 className="liens">
                            <a href="https://github.com/sammuelrwota" target="_blank" rel="noopener noreferrer">
                                https://github.com/sammuelrwota
                            </a>
                        </h3>
                    </div>
                    <div className="media apparition">
                         <p>Behance :</p> 
                         <h3 className="liens">
                            <a href="https://www.behance.net/profilsammuel" target="_blank" rel="noopener noreferrer">
                                https://www.behance.net/profilsammuel
                            </a>
                        </h3>
                    </div>
                </div>
                <div className="icones">
                    <div className="icone apparition">
                        <h3>
                            <a href="https://www.linkedin.com/in/sammuel-rwota-6baa9234b/" target="_blank" rel="noopener noreferrer">
                                <img className="positionImage" src={logo_linkedin} alt="LOGO LINKEDIN" style={{width: "25px", height: "25px"}}/>
                            </a>
                            <a href="https://www.linkedin.com/in/sammuel-rwota-6baa9234b/" target="_blank" rel="noopener noreferrer"> @sammuelrwota</a> 
                        </h3>
                    </div>
                    <div className="icone apparition">
                        <h3>
                            <a href="https://github.com/sammuelrwota" target="_blank" rel="noopener noreferrer">
                                <img src={logo_github} alt="LOGO GITHUB" style={{width: "25px", height: "25px"}}/>
                            </a>
                            <a href="https://github.com/sammuelrwota" target="_blank" rel="noopener noreferrer"> @sammuelrwota</a>
                        </h3>
                    </div>
                    <div className="icone apparition">
                        <h3>
                            <a href="https://www.behance.net/profilsammuel" target="_blank" rel="noopener noreferrer">
                                <img src={logo_behance} alt="LOGO BEHANCE" style={{width: "25px", height: "25px"}}/>
                            </a> 
                            <a href="https://www.behance.net/profilsammuel" target="_blank" rel="noopener noreferrer"> @sammuelrwota </a>
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConnecteAvecMoi;
