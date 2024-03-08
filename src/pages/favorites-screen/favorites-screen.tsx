import NothingFoundScreen from '../nothing-found-screen';
import Meta from '../../components/common/meta';
import FavoritesList from './components/favorites-list';
import {OffersType} from '../../types';

type FavoritesScreenProps = {
  offers: OffersType[];
}

function FavoritesScreen({offers}: FavoritesScreenProps): JSX.Element {
  if (offers.length === 0) {
    return (<NothingFoundScreen isFavoritesEmpty />);
  }

  return (
    <>
      <Meta titleText="6/Cities. Saved listing" />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList offers={offers} />
          </section>
        </div>
      </main>
    </>
  );
}

export default FavoritesScreen;
