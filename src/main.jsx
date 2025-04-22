// src/main.jsx or src/index.js (adjust filename as needed)

import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. Import HashRouter instead of BrowserRouter
import { HashRouter } from 'react-router-dom';
import App from './App';

// Import Bootstrap CSS (if not already done in App.jsx)
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Bootstrap Icons CSS (if you're using them)
import 'bootstrap-icons/font/bootstrap-icons.css';
// Import your custom CSS AFTER Bootstrap
import './assets/styles/custom.css'; // Adjust path if needed

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* 2. Use HashRouter here */}
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

