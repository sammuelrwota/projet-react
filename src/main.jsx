import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './main.scss';
import Appli from './Appli.jsx';
import { ThemeProvider } from './Composants/ChangementDeTheme/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>  
      <Appli />
    </ThemeProvider>
  </StrictMode>,
);
