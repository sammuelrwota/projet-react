import React, { useState, useEffect } from "react"; 
import { useTranslation } from "react-i18next"; 
import './Contact.scss'; 
import mail_icon from '../../assets/mail_icon.svg'; 
import location_icon from '../../assets/location_icon.svg'; 
import phone_icon from '../../assets/phone_icon.svg'; 
import Notification from "../Notifications/Notification"; 

function Contact() {
    const { t } = useTranslation(); 
    const [showNotification, setShowNotification] = useState(false); 

    const faireApparaitre = () => {
        const lesSectionsAfaireApparaitre = document.querySelectorAll(".apparition");
        const hauteurVisible = window.innerHeight * 0.75;

        lesSectionsAfaireApparaitre.forEach(uneSection => {
            const hauteurDeLaSection = uneSection.getBoundingClientRect().top;
            if (hauteurDeLaSection < hauteurVisible) {
                uneSection.style.opacity = "1";
                uneSection.style.transform = "translateX(0%)";
            } else {
                uneSection.style.opacity = "0";
                uneSection.style.transform = "translateX(100%)";
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", faireApparaitre);
        faireApparaitre();

        return () => {
            window.removeEventListener("scroll", faireApparaitre);
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        setTimeout(() => {
            setShowNotification(true);
        }, 100); 
    };

    return( 
        <div className="Contact">
            {showNotification ? (
                <Notification />
            ) : (
                <div>
                    <div className="Contact-titre">
                        <h1>{t('contact_title')}</h1> 
                    </div>
                    <div className="section-contacter">
                        <div className="contact-gauche">
                            <h1>{t('communicate')}</h1> 
                            <p className="contact-message">{t('contact_message')}</p> 
                            <div className="contact-details">
                                <div className="contact-detail apparition">
                                    <img src={mail_icon} alt="Email" /> <p>{t('email')}</p> 
                                </div>
                                <div className="contact-detail apparition">
                                    <img src={phone_icon} alt="Numéro" /> <p>{t('phone')}</p> 
                                </div>
                                <div className="contact-detail apparition">
                                    <img src={location_icon} alt="Localisation" /> <p>{t('location')}</p> 
                                </div>
                            </div>
                        </div>
                        <form className="contact-droite" onSubmit={handleSubmit}>
                            <label htmlFor="nom">{t('name_label')}</label> 
                            <input type="text" id="nom" placeholder={t('name_label')} name="nom"/>

                            <label htmlFor="e-mail">{t('email_label')}</label> 
                            <input type="text" id="e-mail" placeholder={t('email_label')} name="e-mail"/>

                            <label htmlFor="message">{t('message_label')}</label> 
                            <textarea id="message" name="message" rows="8" placeholder={t('message_label')}></textarea>

                            <button type="submit" className="Contact-Envoyez">{t('send_button')}</button> 
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Contact;
