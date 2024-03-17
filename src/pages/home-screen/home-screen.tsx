import Meta from '../../components/common/meta';
import PlacesList from './components/places-list';
import Map from '../../components/common/map';
import Tabs from './components/tabs';
import PlacesFound from './components/places-found';
import PlacesSorting from './components/places-sorting';
import {OffersType, CityType} from '../../types';
import {useState} from 'react';

type HomeScreenProps = {
  cities: string[];
  city: CityType;
  offers: OffersType[];
}

function HomeScreen({cities, city, offers}: HomeScreenProps): JSX.Element {
  const [activePlaceCardId, setActivePlaceCardId] = useState('');

  const hoverPlaceCardHandle = (offerId: string): void => setActivePlaceCardId(offerId);
  const numberOffers = offers.length;

  return (
    <>
      <Meta titleText={`6/Cities. ${numberOffers} places to stay in Amsterdam`} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <Tabs cities={cities} />

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
                points={offers.map((offer: OffersType) => ({
                  id: offer.id,
                  location: offer.location
                }))}
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
