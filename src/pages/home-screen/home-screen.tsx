import Meta from '../../components/common/meta';
import PlacesList from './components/places-list';
import Map from '../../components/common/map';
import Tabs from './components/tabs';
import PlacesFound from './components/places-found';
import PlacesSorting from './components/places-sorting';
import {OffersType} from '../../types';

type HomeScreenProps = {
  cities: string[];
  offers: OffersType[];
}

function HomeScreen({cities, offers}: HomeScreenProps): JSX.Element {
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
              <PlacesList offers={offers} />
            </section>
            <div className="cities__right-section">
              <Map isMainMap />
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default HomeScreen;
