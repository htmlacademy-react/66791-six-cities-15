import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {CITIES, NUMBER_OFFERS} from './const';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App cities={CITIES} numberOffers={NUMBER_OFFERS} />
  </React.StrictMode>
);
