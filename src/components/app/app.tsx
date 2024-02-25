import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../const';
import HomeScreen from '../../pages/home-screen/home-screen';
import LoginScreen from '../../pages/login-screen/login-screen';
import FavoritesScreen from '../../pages/favorites-screen/favorites-screen';
import OfferScreen from '../../pages/offer-screen/offer-screen';
import NothingFoundScreen from '../../pages/nothing-found-screen/nothing-found-screen';
import PrivateRoute from '../private-route/private-route';

type AppProps = {
  cities: string[];
}

function App({cities}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={AppRoute.Home}>
            <Route index element={<HomeScreen cities={cities} />} />
            <Route path={AppRoute.Offer} element={<OfferScreen />} />
            <Route path={AppRoute.Login} element={<LoginScreen />} />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
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
