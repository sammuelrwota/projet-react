import './Appli.scss';
import React, { useState } from 'react';
import BarreNav from './Composants/BarreDeNavigation/BarreNav.jsx';
import Profile from './Composants/MonProfile/Profile.jsx';
import ProposDeMoi from './Composants/APropos/ProposDeMoi.jsx';
import MesTravaux from './Composants/Portfolio/MesTravaux.jsx';
import Contact from './Composants/Contacter/Contact.jsx';
import Footer from './Composants/Footer/Footer.jsx';
import ConnecteAvecMoi from './Composants/ConnecteAvecMoi/ConnecteAvecMoi.jsx';

function Appli() {
  const [activePage, setActivePage] = useState('profile'); 

  const handleSetActivePage = (page) => {
    console.log(`Composant cliqué: ${page}`);
    setActivePage(page);
  };

  const renderPage = () => {
    switch (activePage) {
      case 'profile':
        return <Profile setActivePage={handleSetActivePage} />;
      case 'about':
        return <ProposDeMoi />;
      case 'portfolio':
        return <MesTravaux />;
      case 'contact':
        return <Contact />;
      case 'connecte':
        return <ConnecteAvecMoi />;
      default:

    }
  };

  return (
    <div>
      <BarreNav setActivePage={handleSetActivePage} /> 
      {renderPage()}
      <Footer />
    </div>
  );
}

export default Appli;
