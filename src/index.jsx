import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app.jsx';

import "./index.module.scss";
import "./fonts/fonts.module.scss";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
