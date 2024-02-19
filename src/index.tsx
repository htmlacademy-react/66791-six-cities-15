import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const NUMBER_OFFERS = 5;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App numberOffers={NUMBER_OFFERS} />
  </React.StrictMode>
);
