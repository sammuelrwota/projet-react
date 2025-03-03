import React, { useRef } from 'react';
import './BarreNav.scss';
import monlogo from '../../assets/logo.svg'
import menuicon from '../../assets/menuicon.png'
import menuiconclose from '../../assets/menuicon-close.png'
import reacticon from  '../../assets/react-icon.png'

function BarreNav({ setActivePage }) {
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }
    
    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className="navBar">
            <img
                className="divtest"
                src={monlogo}
                alt="Mon Logo"
                style={{ width: "100px", height: "100px", cursor: "pointer" }}
                onClick={() => setActivePage('profile')}
            />
            <img
                src={menuicon}
                onClick={openMenu}
                alt="menu ouvert"
                className="nav-open"
            />
            <ul ref={menuRef} className="nav-menu">
                <img
                    src={menuiconclose}
                    onClick={closeMenu}
                    alt=""
                    className="nav-close"
                    style={{ width: "50px", height: "50px"}}
                />
                <li onClick={() => setActivePage('profile')}>Accueil</li>
                <li onClick={() => setActivePage('about')}>À propos de moi</li>
                <li onClick={() => setActivePage('portfolio')}>Portfolio</li>
                <li onClick={() => setActivePage('contact')}>Contact</li>
            </ul>
            <img src={reacticon} alt="Icône de React"  style={{ width: "35px", height: "35px"}} />
            <div className="connect" onClick={() => setActivePage('connecte')}>
                Connecte avec moi
            </div>
        </div>
    );
}

export default BarreNav;
