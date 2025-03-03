import React from "react";
import './BarreNav.scss';
import monlogo from '../../assets/logo.svg'

function BarreNav({ setActivePage }) {

    return (
        <div className="navBar">
            <img className="divtest" src={monlogo} alt="Mon Logo" style={{ width: "75px", height: "75px", cursor: "pointer" }} onClick={() => setActivePage('profile')} />
            <ul className="nav-menu">
            <li onClick={() => setActivePage('profile')}>Accueil</li>
                <li onClick={() => setActivePage('about')}>À propos de moi</li>
                <li onClick={() => setActivePage('portfolio')}>Portfolio</li>
                <li onClick={() => setActivePage('contact')}>Contact</li>
            </ul>
            <div className="connect"onClick={() => setActivePage('connecte')}> Connecte avec moi</div>
        </div>
    );
}

export default BarreNav;