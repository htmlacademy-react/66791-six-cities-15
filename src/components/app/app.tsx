import {useState} from 'react';
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
import {AppRoute, AuthorizationStatus} from '../../const';
import {OffersType, ReviewsType, CityType} from '../../types';

type AppProps = {
  authStatus: AuthorizationStatus;
  cities: string[];
  offers: OffersType[];
  reviews: ReviewsType;
  city: CityType;
}

function App({authStatus, cities, offers, reviews, city}: AppProps): JSX.Element {
  const [isNotFound, setIsNotFound] = useState(false);
  const setNotFoundFlag = (flag: boolean): void => setIsNotFound(flag);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={
              <Layout
                authorizationStatus={authStatus}
                isNotFound={isNotFound}
              />
            }
          >
            <Route
              index
              element={
                <HomeScreen
                  cities={cities}
                  city={city}
                />
              }
            />
            <Route
              path={AppRoute.Offer}
              element={
                <OfferScreen
                  authorizationStatus={authStatus}
                  city={city}
                  offers={offers}
                  reviews={reviews}
                  setNotFound={setNotFoundFlag}
                />
              }
            />
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
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
