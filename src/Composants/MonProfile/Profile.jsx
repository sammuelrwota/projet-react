import React from "react";
import './Profile.scss';

function Profile({ setActivePage }) {
    return (
        <div className="principal">
            <img src="images/PhotoDeMoi.jpg" alt="Photo de l'étudiant" style={{ width: '150px', height: '150px' }} />
            <h1><span>Je suis Sammuel Rwota </span>étudiant à Maisonneuve.</h1>
            <p>En recherche d'emploi d'été.</p>
            <div className="cv">
                <div className="connecte-avec-moi" onClick={() => setActivePage('connecte')}>Connecte avec moi</div>
                <div className="moncv">Mon CV</div>
            </div>
        </div>
    );
}

export default Profile;
