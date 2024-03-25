import {useState} from 'react';
import Meta from '../../components/common/meta';
import PlacesList from './components/places-list';
import Map from '../../components/common/map';
import Tabs from './components/tabs';
import PlacesFound from './components/places-found';
import PlacesSorting from './components/places-sorting';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeCity, renderOffers} from '../../store/action';
import {getOffersLocation} from '../../utils';
import {CityType} from '../../types';

type HomeScreenProps = {
  cities: string[];
  city: CityType;
}

function HomeScreen({cities, city}: HomeScreenProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);
  const offers = useAppSelector((state) => state.offersForCurrentCity);

  const dispatch = useAppDispatch();

  const [activePlaceCardId, setActivePlaceCardId] = useState('');

  const numberOffers = offers.length;
  const isOffers = numberOffers > 0;

  const hoverPlaceCardHandle = (offerId: string): void => setActivePlaceCardId(offerId);
  const clickChangeCityHandle = (changedCity: string): void => {
    dispatch(changeCity(changedCity));
    dispatch(renderOffers());
  };

  return (
    <>
      <Meta titleText={`6/Cities. ${numberOffers} places to stay in Amsterdam`} />

      <main className={`page__main page__main--index ${!isOffers ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <Tabs
          cities={cities}
          currentCity={currentCity}
          clickChangeCityHandle={clickChangeCityHandle}
        />

        <div className="cities">
          <div className={`cities__places-container ${!isOffers ? 'cities__places-container--empty' : ''} container`}>
            {isOffers && (
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <PlacesFound numberOffers={numberOffers}/>
                <PlacesSorting/>
                <PlacesList
                  offers={offers}
                  hoverPlaceCard={hoverPlaceCardHandle}
                />
              </section>
            )}
            {!isOffers && (
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">
                    We could not find any property available at the moment in {currentCity}
                  </p>
                </div>
              </section>
            )}
            <div className="cities__right-section">
              {isOffers && (
                <Map
                  city={city}
                  points={getOffersLocation(offers)}
                  selectedPointId={activePlaceCardId}
                  isMainMap
                />
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomeScreen;
