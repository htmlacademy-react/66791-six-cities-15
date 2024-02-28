import {Route, Routes, BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import Layout from '../layout';
import HomeScreen from '../../pages/home-screen';
import LoginScreen from '../../pages/login-screen';
import FavoritesScreen from '../../pages/favorites-screen';
import OfferScreen from '../../pages/offer-screen';
import NothingFoundScreen from '../../pages/nothing-found-screen';
import PrivateRoute from '../private-route';
import ScrollToTop from '../ui/scroll-to-top';
import {AppRoute} from '../../const';
import {getAuthorizationStatus} from '../../mocks';

type AppProps = {
  cities: string[];
}

function App({cities}: AppProps): JSX.Element {
  const authStatus = getAuthorizationStatus();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={AppRoute.Root} element={<Layout />}>
            <Route index element={<HomeScreen cities={cities} />} />
            <Route path={AppRoute.Offer} element={<OfferScreen authorizationStatus={authStatus} />} />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute authorizationStatus={authStatus} isReverse>
                  <LoginScreen />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authStatus}>
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
