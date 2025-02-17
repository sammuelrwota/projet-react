import React from "react";
import './BarreNav.scss';
import monlogo from '../../assets/logo.svg'

function BarreNav({ setActivePage }) {

    return (
        <div className="navBar">
            <img src={monlogo} alt="" style={{width: "50px", height: "50px"}} />
            <ul className="nav-menu">
                <li onClick={() => setActivePage('about')}>À propos de moi</li>
                <li onClick={() => setActivePage('portfolio')}>Portfolio</li>
                <li onClick={() => setActivePage('contact')}>Contact</li>
            </ul>
            <div className="connect">Connecte avec moi</div>
        </div>
    );
}

export default BarreNav;