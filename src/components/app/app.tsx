import {useState} from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
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
import {AppRoute} from '../../const';
import {ReviewsType, CityType, CitiesType, OfferType} from '../../types';

type AppProps = {
  cities: CitiesType;
  offers: OfferType[];
  reviews: ReviewsType;
  city: CityType;
}

function App({cities, offers, reviews, city}: AppProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const [isNotFound, setIsNotFound] = useState(false);
  const setNotFoundFlag = (flag: boolean): void => setIsNotFound(flag);

  /*if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }*/

  return (
    <HelmetProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
