import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Replace with the path to your main component
import { BrowserRouter as Router } from 'react-router-dom';

const root = document.getElementById('root');

const rootElement = createRoot(root);
rootElement.render(
  <Router>
    <App />
  </Router>
);
