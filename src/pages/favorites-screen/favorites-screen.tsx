import {useCallback} from 'react';
import NothingFoundScreen from '../nothing-found-screen';
import Meta from '../../components/common/meta';
import FavoritesList from './components/favorites-list';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {CityNameType} from '../../types';
import {changeCity} from '../../store/service-process/service-process.slice';
import {getFavoriteOffers} from '../../store/service-data/service-data.selectors';

type FavoritesScreenProps = {
  setNotFound: (flag: boolean) => void;
}

function FavoritesScreen({setNotFound}: FavoritesScreenProps): JSX.Element {
  const favoriteOffers = useAppSelector(getFavoriteOffers);

  const dispatch = useAppDispatch();

  const clickChangeCityHandle = useCallback((changedCity: CityNameType): void => {
    dispatch(changeCity(changedCity));
  }, [dispatch]);

  if (favoriteOffers.length === 0) {
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
              offers={favoriteOffers}
              clickChangeCityHandle={clickChangeCityHandle}
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default FavoritesScreen;
