import React from 'react';  // Add this import
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';

createRoot(document.getElementById('root')).render(
  <NextUIProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </NextUIProvider>
);