import {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import {useAppSelector} from '../../hooks';
import Layout from '../layout';
import HomeScreen from '../../pages/home-screen';
import LoginScreen from '../../pages/login-screen';
import FavoritesScreen from '../../pages/favorites-screen';
import OfferScreen from '../../pages/offer-screen';
import NothingFoundScreen from '../../pages/nothing-found-screen';
import PrivateRoute from '../private-route';
import ScrollToTop from '../ui/scroll-to-top';
import HistoryRouter from '../history-route';
import browserHistory from '../../browser-history';
import {AppRoute} from '../../const';
import {CitiesType, OffersMocksType} from '../../types';
import {getAuthorizationStatus} from '../../store/user-process/user-process.selectors';

type AppProps = {
  cities: CitiesType;
  offers: OffersMocksType;
}

function App({cities, offers}: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  const [isNotFound, setIsNotFound] = useState(false);
  const setNotFoundFlag = (flag: boolean): void => setIsNotFound(flag);

  return (
    <HelmetProvider>
      <HistoryRouter history={browserHistory}>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <Layout
                authorizationStatus={authorizationStatus}
                isNotFound={isNotFound}
              />
            }
          >
            <Route index element={<HomeScreen cities={cities} />} />
            <Route
              path={AppRoute.Offer}
              element={
                <OfferScreen
                  authorizationStatus={authorizationStatus}
                  setNotFound={setNotFoundFlag}
                />
              }
            />
            <Route
              path={AppRoute.Login}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus} isReverse>
                  <LoginScreen />
                </PrivateRoute>
              }
            />
            <Route
              path={AppRoute.Favorites}
              element={
                <PrivateRoute authorizationStatus={authorizationStatus}>
                  <FavoritesScreen
                    offers={offers.filter((offer) => offer.isFavorite)}
                    setNotFound={setNotFoundFlag}
                  />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<NothingFoundScreen state="page" />} />
          </Route>
        </Routes>
      </HistoryRouter>
    </HelmetProvider>
  );
}

export default App;
