import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './components/app';
import ErrorMessage from './components/common/error-message';
import {CITIES} from './const';
import {offersMocks, reviewsMocks, cityMocks} from './mocks';
import {store} from './store';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorMessage />
      <App
        cities={CITIES}
        offers={offersMocks}
        reviews={reviewsMocks}
        city={cityMocks}
      />
    </Provider>
  </React.StrictMode>
);
