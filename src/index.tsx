import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app';
import {CITIES} from './const';
import {getAuthorizationStatus, offersMocks, reviewsMocks, cityMocks} from './mocks';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      authStatus={getAuthorizationStatus()}
      cities={CITIES}
      offers={offersMocks}
      reviews={reviewsMocks}
      city={cityMocks}
    />
  </React.StrictMode>
);
