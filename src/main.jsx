import React from 'react';  // Add this import
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { BrowserRouter } from 'react-router-dom';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import store from './redux/store.js';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <NextUIProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </NextUIProvider>
  </Provider>
);
