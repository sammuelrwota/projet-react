import React from "react";
import './Profile.scss';
import timlogo from '../../assets/tim.png';
import Maisonneuvelogo from '../../assets/logo-maisonneuve.jpg';

function Profile({ setActivePage }) {
    const handleCVClick = () => {
        window.location.href = "https://drive.google.com/uc?export=view&id=1-hE-N1nc1upYHkCXXM0RbZrkSlot-x5c"; 
    };

    return (
        <div className="principal">
            <img className="photoDeMoi_img" src="images/PhotoDeMoi.jpg" alt="Photo de l'étudiant" style={{ width: '200px', height: '200px' }} />

            <div className="lesImages">
                <a href="https://www.cmaisonneuve.qc.ca/programme/integration-multimedia/" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img className="timlogo_img" src={timlogo} alt="Logo TIM Maisonneuve" style={{ width: "50px", height: "50px" }} />
                </a>
                <a href="https://www.cmaisonneuve.qc.ca/" target="_blank" rel="noopener noreferrer" className="logo-link">
                    <img className="maisonneuve_img" src={Maisonneuvelogo} alt="Logo Maisonneuve" style={{ width: "150px", height: "50px" }} />
                </a>
            </div>

            <h1><span>Je suis Sammuel Rwota </span>étudiant à Maisonneuve.</h1>
            <p>En recherche de stage d'été.</p>

            <div className="cv">
                <div className="connecte-avec-moi" onClick={() => setActivePage('connecte')}>Connecte avec moi</div>
                <div className="moncv" onClick={handleCVClick}>Mon CV</div>
            </div>
        </div>
    );
}

export default Profile;
