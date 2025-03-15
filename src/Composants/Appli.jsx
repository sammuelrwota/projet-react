import './Appli.scss';
import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import BarreNav from './BarreDeNavigation/BarreNav.jsx';
import Profile from './MonProfile/Profile.jsx';
import ProposDeMoi from './APropos/ProposDeMoi.jsx';
import MesTravaux from './Portfolio/MesTravaux.jsx';
import Contact from './Contacter/Contact.jsx';
import Footer from './Footer/Footer.jsx';
import ConnecteAvecMoi from './ConnecteAvecMoi/ConnecteAvecMoi.jsx'; 
import DefilementVersLeHaut from './Defilement/DefilementVersLeHaut.jsx';

function Appli() {
  return (
    <div>
      <DefilementVersLeHaut />
      <BarreNav /> 
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
