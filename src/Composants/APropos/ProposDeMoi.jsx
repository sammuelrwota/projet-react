import React from "react";
import './ProposDeMoi.scss';

function ProposDeMoi() {
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
                        <div className="APropos-competence"><p>HTML & CSS</p><hr style={{width:"80%"}}/></div>
                        <div className="APropos-competence"><p>React JS</p><hr style={{width:"80%"}}/></div>
                        <div className="APropos-competence"><p>Javascript</p><hr style={{width:"69%"}}/></div>
                        <div className="APropos-competence"><p>SCSS</p><hr style={{width:"66%"}}/></div>
                        <div className="APropos-competence"><p>PHP</p><hr style={{width:"75%"}}/></div>
                        <div className="APropos-competence"><p>Figma</p><hr style={{width:"75%"}}/></div>
                        <div className="APropos-competence"><p>Maya</p><hr style={{width:"55%"}}/></div>
                        <div className="APropos-competence"><p>Github</p><hr style={{width:"90%"}}/></div>
                        <div className="APropos-competence"><p>Wordpress</p><hr style={{width:"68%"}}/></div>
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