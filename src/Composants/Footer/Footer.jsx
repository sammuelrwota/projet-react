import React from "react";
import { useTranslation } from "react-i18next"; 
import './Footer.scss';
import user_icon from '../../assets/user.svg';

function Footer() {
    const { t } = useTranslation();

    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-gauche">
                    <p>{t('student_program')}</p>
                </div>
                <div className="footer-top-droite">
                    <div className="footer-email-input">
                        <img 
                            src={user_icon} 
                            alt="" 
                            style={{ width: "25px", height: "25px", filter: "invert(50%) sepia(100%) saturate(500%) hue-rotate(200deg)" }} 
                        />
                        <input type="email" placeholder={t('insert_email')} />
                    </div>
                    <div className="footer-subscribe">{t('subscribe')}</div>
                </div>
            </div>
            <hr style={{ width: "100%", margin: "0", border: "none", height: "2px", backgroundColor: "white" }} />
            <div className="footer-bottom">
                <p className="footer-bottom-left">{t('copyright')}</p>
                <div className="bottom-droite">
                    <p>{t('terms_of_service')}</p>
                    <p>{t('privacy_policy')}</p>
                    <p>{t('connect_with_me')}</p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
