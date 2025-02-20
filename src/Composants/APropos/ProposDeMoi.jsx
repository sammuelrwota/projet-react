import React, { useEffect } from "react";
import './ProposDeMoi.scss';

function ProposDeMoi() {
    useEffect(() => {
        function faireApparaitre() {
            let lesSectionsAfaireApparaitre = document.querySelectorAll(".apparition");
            for (let uneSection of lesSectionsAfaireApparaitre) {
                let hauteurVisible = window.innerHeight * 0.75;
                let hauteurDeLaSection = uneSection.getBoundingClientRect().top;
                if (hauteurDeLaSection < hauteurVisible) {
                    uneSection.style.opacity = "1";
                    uneSection.style.transform = "translateX(0%)";
                } else {
                    uneSection.style.opacity = "0";
                    uneSection.style.transform = "translateX(-100%)";
                }
            }
        }

        window.addEventListener("scroll", faireApparaitre);
        faireApparaitre(); // Vérifie au chargement initial

        return () => {
            window.removeEventListener("scroll", faireApparaitre);
        };
    }, []);

    return (
        <div className="AProposDeMoi">
            <div className="AProposDeMoi-titre">
                <h1>À Propos de moi</h1>
                <img src="" alt="" />
            </div>
            <div className="sections-AProposDeMoi">
                <div className="APropos-gauche">
                    <img src="/images/PhotoDeMoi.jpg" alt="Photo de l'étudiant" style={{ width: '150px', height: '150px' }} />
                </div>
                <div className="APropos-droit">
                    <div className="APropos-paragraphe">
                        <p>Je suis étudiant dans le programme de Techniques d'intégrations multimédias au Collège de Maisonneuve.</p>
                        <p>À la recherche d'emploi.</p>
                    </div>
                    <div className="APropos-mescompetences">
                        <div className="APropos-competence apparition"><p>HTML & CSS</p><hr style={{width:"85%"}}/></div>
                        <div className="APropos-competence apparition"><p>React JS</p><hr style={{width:"85%"}}/></div>
                        <div className="APropos-competence apparition"><p>Javascript</p><hr style={{width:"70%"}}/></div>
                        <div className="APropos-competence apparition"><p>SCSS</p><hr style={{width:"90%"}}/></div>
                        <div className="APropos-competence apparition"><p>PHP</p><hr style={{width:"70%"}}/></div>
                        <div className="APropos-competence apparition"><p>Figma</p><hr style={{width:"85%"}}/></div>
                        <div className="APropos-competence apparition"><p>Maya</p><hr style={{width:"67%"}}/></div>
                        <div className="APropos-competence apparition"><p>Github</p><hr style={{width:"90%"}}/></div>
                        <div className="APropos-competence apparition"><p>Wordpress</p><hr style={{width:"70%"}}/></div>
                    </div>
                </div>
            </div>
            <div className="accomplissements">
                <div className="mon-accomplissement">
                    <h1>2+</h1>
                    <p>Années d'expérience au cégep!</p>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ProposDeMoi;
