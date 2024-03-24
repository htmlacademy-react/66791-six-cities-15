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
import {OffersType, CityType} from '../../types';

type HomeScreenProps = {
  cities: string[];
  city: CityType;
  offers: OffersType[];
}

function HomeScreen({cities, city, offers}: HomeScreenProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);

  const dispatch = useAppDispatch();

  const [activePlaceCardId, setActivePlaceCardId] = useState('');

  const numberOffers = offers.length;

  const hoverPlaceCardHandle = (offerId: string): void => setActivePlaceCardId(offerId);
  const clickChangeCityHandle = (changedCity: string): void => {
    dispatch(changeCity(changedCity));
    dispatch(renderOffers());
  };

  return (
    <>
      <Meta titleText={`6/Cities. ${numberOffers} places to stay in Amsterdam`} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs
          cities={cities}
          currentCity={currentCity}
          clickChangeCityHandle={clickChangeCityHandle}
        />

        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <PlacesFound numberOffers={numberOffers} />
              <PlacesSorting />
              <PlacesList
                offers={offers}
                hoverPlaceCard={hoverPlaceCardHandle}
              />
            </section>
            <div className="cities__right-section">
              <Map
                city={city}
                points={getOffersLocation(offers)}
                selectedPointId={activePlaceCardId}
                isMainMap
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomeScreen;
