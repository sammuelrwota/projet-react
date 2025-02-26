import React, { useEffect, useState } from "react";
import './ProposDeMoi.scss';
import Figma from "../Notions/Figma";
import Github from "../Notions/Github";
import HtmlCss from "../Notions/HtmlCss";
import Javascript from "../Notions/Javascipt";
import Maya from "../Notions/Maya";
import Php from "../Notions/Php";
import ReactJs from "../Notions/ReactJs";
import Scss from "../Notions/Scss";
import Wp from "../Notions/Wp";

function ProposDeMoi() {
    const [competenceActive, setCompetenceActive] = useState(null);

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

    const handleCompetenceClick = (competence) => {
        if (competenceActive === competence) {
            // Si la compétence est déjà active, la désactiver
            setCompetenceActive(null);
        } else {
            // Sinon, l'activer
            setCompetenceActive(competence);
        }
    };

    return (
        <div className="AProposDeMoi">
            <div className="AProposDeMoi-titre">
                <h1>À Propos de moi</h1>
                <img src="" alt="" />
            </div>
            <div className="sections-AProposDeMoi">
                <div className="APropos-gauche">
                    <img src="images/PhotoDeMoi.jpg" alt="Photo de l'étudiant" style={{ width: '150px', height: '150px' }} />
                </div>
                <div className="APropos-droit">
                    <div className="APropos-paragraphe">
                        <p>Je suis étudiant dans le programme de Techniques d'intégrations multimédias au Collège de Maisonneuve.</p>
                        <p>À la recherche d'emploi.</p>
                    </div>
                    <div className="APropos-mescompetences">
                        <div className="APropos-competence apparition" onClick={() => handleCompetenceClick("HtmlCss")}>
                            <p className="underlineClick">HTML & CSS</p>
                            <hr style={{ width: "85%" }} />
                        </div>
                        <div className="APropos-competence apparition" onClick={() => handleCompetenceClick("ReactJs")}>
                            <p className="underlineClick">React JS</p>
                            <hr style={{ width: "85%" }} />
                        </div>
                        <div className="APropos-competence apparition" onClick={() => handleCompetenceClick("Javascript")}>
                            <p className="underlineClick">Javascript</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="APropos-competence apparition" onClick={() => handleCompetenceClick("Scss")}>
                             <p className="underlineClick">SCSS</p>
                            <hr style={{ width: "90%" }} />
                        </div>
                        <div className="APropos-competence apparition" onClick={() => handleCompetenceClick("Php")}>
                            <p className="underlineClick">PHP</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                        <div className="APropos-competence apparition" onClick={() => handleCompetenceClick("Figma")}>
                            <p className="underlineClick">Figma</p>
                            <hr style={{ width: "85%" }} />
                        </div>
                        <div className="APropos-competence apparition" onClick={() => handleCompetenceClick("Maya")}>
                             <p className="underlineClick">Maya</p>
                            <hr style={{ width: "67%" }} />
                        </div>
                        <div className="APropos-competence apparition" onClick={() => handleCompetenceClick("Github")}>
                            <p className="underlineClick">Github</p>
                            <hr style={{ width: "90%" }} />
                        </div>
                        <div className="APropos-competence apparition" onClick={() => handleCompetenceClick("Wp")}>
                            <p className="underlineClick">Wordpress</p>
                            <hr style={{ width: "70%" }} />
                        </div>
                    </div>
                </div>
            </div>
            {/* 🔥 Affichage dynamique du composant sélectionné */}
            <div className={`competence-detail ${competenceActive === "Figma" ? "showCompetenceFigma" :
                competenceActive === "HtmlCss" ? "showCompetenceHtmlCss" :
                competenceActive === "ReactJs" ? "showCompetenceReactJs" :
                competenceActive === "Javascript" ? "showCompetenceJavascript" :
                competenceActive === "Scss" ? "showCompetenceScss" :
                competenceActive === "Php" ? "showCompetencePhp" :
                competenceActive === "Maya" ? "showCompetenceMaya" :
                competenceActive === "Github" ? "showCompetenceGithub" :
                competenceActive === "Wp" ? "showCompetenceWp" : ""}`}>
                {competenceActive === "Figma" && <Figma />}
                {competenceActive === "HtmlCss" && <HtmlCss />}
                {competenceActive === "ReactJs" && <ReactJs />}
                {competenceActive === "Javascript" && <Javascript />}
                {competenceActive === "Scss" && <Scss />}
                {competenceActive === "Php" && <Php />}
                {competenceActive === "Maya" && <Maya />}
                {competenceActive === "Github" && <Github />}
                {competenceActive === "Wp" && <Wp />}
            </div>


            <div className="accomplissements">
                <div className="mon-accomplissement">
                    <h1>2+</h1>
                    <p>Années d'expérience au cégep!</p>
                </div>
                <hr />
            </div>
        </div>
    );
}

export default ProposDeMoi;
