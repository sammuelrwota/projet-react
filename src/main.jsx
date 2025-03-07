import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; 
import './main.scss';
import Appli from './Appli.jsx';
import { ThemeProvider } from './Composants/ChangementDeTheme/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>  
      <BrowserRouter>  
        <Appli />
      </BrowserRouter>  
    </ThemeProvider>
  </StrictMode>,
);
