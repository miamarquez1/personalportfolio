// src/main.jsx or src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap Icons CSS
import 'bootstrap-icons/font/bootstrap-icons.css';
// Import Bootstrap JS Bundle (includes Popper)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // <-- ADD THIS LINE
// Import your custom CSS AFTER Bootstrap
import './assets/styles/custom.css'; // Adjust path if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
