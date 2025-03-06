import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Bien mettre BrowserRouter ici
import './main.scss';
import Appli from './Appli.jsx';
import { ThemeProvider } from './Composants/ChangementDeTheme/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>  
      <BrowserRouter>  {/* Le BrowserRouter englobe toute l'application */}
        <Appli />
      </BrowserRouter>  
    </ThemeProvider>
  </StrictMode>,
);
