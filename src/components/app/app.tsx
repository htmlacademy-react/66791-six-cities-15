import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Layout from '../layout';
import HomeScreen from '../../pages/home-screen';
import LoginScreen from '../../pages/login-screen';
import FavoritesScreen from '../../pages/favorites-screen';
import OfferScreen from '../../pages/offer-screen';
import NothingFoundScreen from '../../pages/nothing-found-screen';
import PrivateRoute from '../private-route';
import {AppRoute} from '../../const';
import {getAuthorizationStatus} from '../../mocks';

type AppProps = {
  cities: string[];
}

function App({cities}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<HomeScreen cities={cities} />} />
            <Route path={AppRoute.Offer} element={<OfferScreen />} />
            <Route path={AppRoute.Login} element={<LoginScreen />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={getAuthorizationStatus()}>
                  <FavoritesScreen />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NothingFoundScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
