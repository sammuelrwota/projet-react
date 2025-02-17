import './Appli.scss';
import React, { useState } from 'react';
import BarreNav from './Composants/BarreDeNavigation/BarreNav.jsx';
import Profile from './Composants/MonProfile/Profile.jsx';
import ProposDeMoi from './Composants/APropos/ProposDeMoi.jsx';
import MesTravaux from './Composants/Portfolio/MesTravaux.jsx';
import Contact from './Composants/Contacter/Contact.jsx';
import Footer from './Composants/Footer/Footer.jsx';

function Appli() {
  const [activePage, setActivePage] = useState('profile'); // Gérer la page active

  const renderPage = () => {
    switch (activePage) {
      case 'profile':
        return <Profile />;
      case 'about':
        return <ProposDeMoi />;
      case 'portfolio':
        return <MesTravaux />;
      case 'contact':
        return <Contact />;
      default:
        return <Profile />;
    }
  };

  return (
    <div>
        <BarreNav setActivePage={setActivePage}/> {/* Passer la fonction pour changer de page */}
        {renderPage()} {/* Afficher la page active */}
        <Footer />
    </div>
  );
}

export default Appli;
