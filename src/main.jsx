import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'; // Import the Tailwind CSS styles
import App from './App.jsx'; // Import the main App component

// Create the root and render the App component
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
