import {useCallback} from 'react';
import NothingFoundScreen from '../nothing-found-screen';
import Meta from '../../components/common/meta';
import FavoritesList from './components/favorites-list';
import {useAppDispatch} from '../../hooks';
import {CityNameType, OffersMocksType} from '../../types';
import {changeCity} from '../../store/service-process/service-process.slice';

type FavoritesScreenProps = {
  offers: OffersMocksType;
  setNotFound: (flag: boolean) => void;
}

function FavoritesScreen({offers, setNotFound}: FavoritesScreenProps): JSX.Element {
  const dispatch = useAppDispatch();

  const clickChangeCityHandle = useCallback((changedCity: CityNameType): void => {
    dispatch(changeCity(changedCity));
  }, [dispatch]);

  if (offers.length === 0) {
    setNotFound(true);
    return <NothingFoundScreen state="favorites" />;
  } else {
    setNotFound(false);
  }

  return (
    <>
      <Meta titleText="6/Cities. Saved listing" />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoritesList
              offers={offers}
              clickChangeCityHandle={clickChangeCityHandle}
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default FavoritesScreen;
