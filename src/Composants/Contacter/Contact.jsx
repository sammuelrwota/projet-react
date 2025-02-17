import React from "react";
import './Contact.scss';
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import phone_icon from '../../assets/phone_icon.svg'

function Contact() {
    return( 
        <div className="Contact">
            <div className="Contact-titre">
                <h1>Entrer en contact</h1>
                <img src="" alt="" />
            </div>
        <div className="section-contacter">
            <div className="contact-gauche">
                <h1>Communicons</h1>
                <p>Vous pouvez me contacter ici, je réponds aussitôt que je suis disponible.</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={mail_icon} alt="Email" /> <p>rwotasamuel@outlook.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={phone_icon} alt="Numéro" /> <p>(438)-988-0463</p>
                    </div>
                    <div className="contact-detail">
                    <img src={location_icon} alt="Localisation" /> <p>Montréal, QC</p>
                    </div>
                </div>
            </div>
            <form className="contact-droite">
                <label htmlFor="">Votre nom</label>
                <input type="text" placeholder="Entrez votre nom." name="nom"/>
                <label htmlFor="">Votre adresse email</label>
                <input type="text" placeholder="Entrez votre e-mail." name="e-mail"/>
                <label htmlFor="">Écrivez votre message ici.</label>
                <textarea name="message" rows="8" placeholder="Entrez votre message."></textarea>
                <button type="submit"className="Contact-Envoyez">Envoyez</button>
            </form>
        </div>
        </div>
    )
    
}

export default Contact;