import './Appli.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; // Pas besoin de BrowserRouter ici, juste Routes et Route
import BarreNav from './Composants/BarreDeNavigation/BarreNav.jsx';
import Profile from './Composants/MonProfile/Profile.jsx';
import ProposDeMoi from './Composants/APropos/ProposDeMoi.jsx';
import MesTravaux from './Composants/Portfolio/MesTravaux.jsx';
import Contact from './Composants/Contacter/Contact.jsx';
import Footer from './Composants/Footer/Footer.jsx';
import ConnecteAvecMoi from './Composants/ConnecteAvecMoi/ConnecteAvecMoi.jsx';
import DefilementVersLeHaut from './Composants/Defilement/DefilementVersLeHaut.jsx';

function Appli() {
  return (
    <div>
      <DefilementVersLeHaut />
      <BarreNav /> {/* Barre de navigation */}
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/about" element={<ProposDeMoi />} />
        <Route path="/portfolio" element={<MesTravaux />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/connecte" element={<ConnecteAvecMoi />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default Appli;
