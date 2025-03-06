import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; 
import "./Profile.scss";
import timlogo from "../../assets/tim.png";
import Maisonneuvelogo from "../../assets/logo-maisonneuve.jpg";
import Feedback from "../DossierFeedback/FeedbackModal";


function Profile({ setActivePage }) {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCVClick = () => {
    window.location.href = "https://drive.google.com/uc?export=view&id=1-hE-N1nc1upYHkCXXM0RbZrkSlot-x5c";
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="principal">
      {loading ? (
        <div className="spinner"></div>
      ) : (
        <img
          className="photoDeMoi_img"
          src="images/PhotoDeMoi.jpg"
          alt="Photo de l'étudiant"
          style={{ width: "200px", height: "200px" }}
        />
      )}

      <div className="lesImages">
        <a
          href="https://www.cmaisonneuve.qc.ca/programme/integration-multimedia/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
        >
          <img
            className="timlogo_img"
            src={timlogo}
            alt="Logo TIM Maisonneuve"
            style={{ width: "50px", height: "50px" }}
          />
        </a>
        <a
          href="https://www.cmaisonneuve.qc.ca/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-link"
        >
          <img
            className="maisonneuve_img"
            src={Maisonneuvelogo}
            alt="Logo Maisonneuve"
            style={{ width: "150px", height: "50px" }}
          />
        </a>
      </div>

      <h1>
        <span>{t('student_at', { name: 'Sammuel Rwota' })}</span>
      </h1>
      <p>{t('internship_search')}</p>

      <div className="cv">
        <div className="connecte-avec-moi" onClick={() => setActivePage("connecte")}>
          {t('connect_with_me')}
        </div>
        <div className="moncv" onClick={handleCVClick}>
          {t('my_cv')}
        </div>
      </div>

      <div className="laisser-un-avis-container">
        <div className="laisser-un-avis" onClick={toggleModal} title={t('leave_review')}>
          {t('leave_review')}
        </div>
      </div>

      <Feedback isOpen={isModalOpen} closeModal={toggleModal} />
    </div>
  );
}

export default Profile;
