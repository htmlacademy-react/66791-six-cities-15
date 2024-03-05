import Meta from '../../components/common/meta';
import PlaceCard from '../../components/common/place-card';
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
              <div className="cities__places-list places__list tabs__content">
                {offers.map((offer) => (
                  <PlaceCard
                    key={offer.id}
                    {...offer}
                  />
                ))}
              </div>
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
