import React, { useRef, useState, useContext } from 'react';
import { useTranslation } from 'react-i18next'; 
import i18n from '../../i18n'; 
import './BarreNav.scss';
import monlogo from '../../assets/logo.svg';
import menuicon from '../../assets/menuicon.png';
import menuiconclose from '../../assets/menuicon-close.png';
import reacticon from '../../assets/react-icon.png'; 
import { ThemeContext } from '../ChangementDeTheme/ThemeContext.jsx';

function BarreNav({ setActivePage }) {
    const menuRef = useRef();
    const { t } = useTranslation(); 
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [showTooltip, setShowTooltip] = useState(false);

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

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
                    alt="Fermer le menu"
                    className="nav-close"
                    style={{ width: "50px", height: "50px" }}
                />
                <li onClick={() => setActivePage('profile')}>{t('home')}</li>
                <li onClick={() => setActivePage('about')}>{t('about_me')}</li>
                <li onClick={() => setActivePage('portfolio')}>{t('portfolio')}</li>
                <li onClick={() => setActivePage('contact')}>{t('contact')}</li>
            </ul>

            <div className="language-switcher">
                <button onClick={() => changeLanguage('fr')}>Fr</button>
                <button onClick={() => changeLanguage('en')}>En</button>
            </div>

            {reacticon && (
                <div 
                    className="react-tooltip-container"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                >
                    <img
                        className="logoReact"
                        src={reacticon}
                        alt="Icône de React"
                        style={{ width: "45px", height: "40px" }}
                    />
                    {showTooltip && (
                        <div className="tooltip">
                            {t('react_tooltip')} 
                        </div>
                    )}
                </div>
            )}

            <div className="theme-toggle" onClick={toggleTheme}>
                {theme === 'light' ? '🌙 ' + t('dark_theme') : '☀️ ' + t('light_theme')}
            </div>

            <div className="connect" onClick={() => setActivePage('connecte')}>
                {t('connect_with_me')}
            </div>
        </div>
    );
}

export default BarreNav;
