import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App  from './App.jsx'
import { BrowserRouter } from 'react-router'

const rootElement = document.getElementById('root');
if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <BrowserRouter basename="/portfolio_marina">
        <App />
      </BrowserRouter>
    </StrictMode>
  );
} else {
  console.error('Root element not found');
}
