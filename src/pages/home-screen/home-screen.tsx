import {useState, useEffect, useCallback, useMemo} from 'react';
import {useSearchParams, useNavigate} from 'react-router-dom';
import Meta from '../../components/common/meta';
import PlacesList from './components/places-list';
import Map from '../../components/common/map';
import Tabs from './components/tabs';
import PlacesFound from './components/places-found';
import PlacesSorting from './components/places-sorting';
import Spinner from '../../components/ui/spinner';
import OffersEmpty from './components/offers-empty';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/service-process/service-process.slice';
import {getOffersLocation, firstLetterToUppercase} from '../../utils';
import {CitiesType, CityNameType} from '../../types';
import {getCurrentCity} from '../../store/service-process/service-process.selectors';
import {getOffersDataLoadingStatus, getSortedOffers} from '../../store/service-data/service-data.selectors';

type HomeScreenProps = {
  cities: CitiesType;
}

function HomeScreen({cities}: HomeScreenProps): JSX.Element {
  const currentCity = useAppSelector(getCurrentCity);
  const isOffersDataLoading = useAppSelector(getOffersDataLoadingStatus);
  const offers = useAppSelector(getSortedOffers);

  const dispatch = useAppDispatch();

  const [activePlaceCardId, setActivePlaceCardId] = useState('');

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchParamTab = searchParams.get('tab');
  const currentTab = searchParamTab || currentCity.toLowerCase();
  const numberOffers = offers.length;
  const isOffers = numberOffers > 0;
  const currentCityWithLocation = isOffers
    ? offers[0].city
    : { name: '', location: { latitude: 0, longitude: 0, zoom: 0 } };
  const offersLocation = useMemo(() => getOffersLocation(offers), [offers]);

  const hoverPlaceCardHandle = useCallback((offerId: string): void => setActivePlaceCardId(offerId), []);
  const clickChangeCityHandle = useCallback((changedCity: CityNameType): void => {
    dispatch(changeCity(changedCity));
  }, [dispatch]);

  useEffect(() => {
    dispatch(changeCity(firstLetterToUppercase(currentTab) as CityNameType));
  }, [currentTab, dispatch]);

  useEffect(() => {
    if (!searchParamTab) {
      navigate(`?tab=${currentTab}`);
    }
  }, [currentTab, navigate, searchParamTab]);

  return (
    <>
      <Meta
        titleText={
          `6/Cities. ${isOffers
            ? `${numberOffers} places to stay in ${firstLetterToUppercase(currentTab)}`
            : 'No places to stay available'}`
        }
      />

      {isOffersDataLoading && <Spinner />}
      {!isOffersDataLoading && (
        <main className={`page__main page__main--index ${!isOffers ? 'page__main--index-empty' : ''}`}>
          <h1 className="visually-hidden">Cities</h1>
          <Tabs
            cities={cities}
            currentCity={currentTab}
            clickChangeCityHandle={clickChangeCityHandle}
          />

          <div className="cities">
            <div className={`cities__places-container ${!isOffers ? 'cities__places-container--empty' : ''} container`}>
              {isOffers && (
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <PlacesFound numberOffers={numberOffers} city={currentCity}/>
                  <PlacesSorting />
                  <PlacesList
                    offers={offers}
                    hoverPlaceCard={hoverPlaceCardHandle}
                  />
                </section>
              )}
              {!isOffers && <OffersEmpty currentCity={currentCity} />}
              <div className="cities__right-section">
                {isOffers && (
                  <Map
                    city={currentCityWithLocation}
                    points={offersLocation}
                    selectedPointId={activePlaceCardId}
                    isMainMap
                  />
                )}
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}

export default HomeScreen;
