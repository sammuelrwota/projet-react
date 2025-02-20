import React from "react";
import './Footer.scss';
import user_icon from '../../assets/user.svg'

function Footer() {
    return (
        <div className="footer">
            <div className="footer-top">
                <div className="footer-top-gauche">
                    <img src="" alt="" />
                    <p>Je suis étudiant dans le programme de Techniques d'intégrations multimédias au Collège de Maisonneuve.</p>
                </div>
                <div className="footer-top-droite">
                    <div className="footer-email-input">
                    <img 
  src={user_icon} 
  alt="" 
  style={{ width: "25px", height: "25px", filter: "invert(50%) sepia(100%) saturate(500%) hue-rotate(200deg)" }} 
/>


                        <input type="email" placeholder="Insérez votre e-mail." />
                    </div>
                    <div className="footer-subscribe">S'abonner</div>
                </div>
            </div>
            <hr style={{ width: "100%", margin: "0", border: "none", height: "2px", backgroundColor: "white" }} />
            <div className="footer-bottom">
                <p className="footer-bottom-left">
                © 2025 Sammuel Rwota. Tous droits réservés.
                </p>
                <div className="bottom-droite">
                    <p>Conditions de service</p>
                    <p>Politique de confidentialité</p>
                    <p>Connectez-vous avec moi</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;