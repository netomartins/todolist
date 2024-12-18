import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Você pode usar um arquivo CSS ou qualquer biblioteca de estilização como Styled Components ou MUI
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
