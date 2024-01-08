import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';  // Replace with the path to your main component
import { BrowserRouter as Router } from 'react-router-dom';
import store from './app/store';
import { Provider } from 'react-redux';


const root = document.getElementById('root');

const rootElement = createRoot(root);
rootElement.render(
  <Router>
    <Provider store={store}>
    <App />
    </Provider>
  </Router>
);
