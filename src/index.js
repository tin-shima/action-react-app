import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import './assets/styles/global.scss'
import "@arco-design/web-react/dist/css/arco.css";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
