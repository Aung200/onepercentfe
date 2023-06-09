import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter as Router } from "react-router-dom";
import './index.css';
import App from './App';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <Router forceRefresh={true}>
    <App />
  </Router>
);
