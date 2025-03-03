import React, { useEffect } from "react";
import './Contact.scss';
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import phone_icon from '../../assets/phone_icon.svg'

function Contact() {

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

    return( 
        <div className="Contact">
            <div className="Contact-titre">
                <h1>Entrer en contact</h1>
            </div>
            <div className="section-contacter">
                <div className="contact-gauche">
                    <h1>Communicons</h1>
                    <p className="contact-message">Vous pouvez me contacter ici, je réponds aussitôt que je suis disponible.</p>
                    <div className="contact-details">
                        <div className="contact-detail apparition">
                            <img src={mail_icon} alt="Email" /> <p>rwotasamuel@outlook.com</p>
                        </div>
                        <div className="contact-detail apparition">
                            <img src={phone_icon} alt="Numéro" /> <p>(438)-988-0463</p>
                        </div>
                        <div className="contact-detail apparition">
                            <img src={location_icon} alt="Localisation" /> <p>Montréal, QC</p>
                        </div>
                    </div>
                </div>
                <form className="contact-droite">
                    <label htmlFor="nom">Votre nom</label>
                    <input type="text" id="nom" placeholder="Entrez votre nom." name="nom"/>

                    <label htmlFor="e-mail">Votre adresse email</label>
                    <input type="text" id="e-mail" placeholder="Entrez votre e-mail." name="e-mail"/>

                    <label htmlFor="message">Écrivez votre message ici.</label>
                    <textarea id="message" name="message" rows="8" placeholder="Entrez votre message."></textarea>

                    <button type="submit" className="Contact-Envoyez">Envoyez</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
