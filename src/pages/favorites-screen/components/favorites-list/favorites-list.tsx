import FavoritesLocationsItem from '../favorites-locations-item';
import {OffersType} from '../../../../types';

type FavoritesListProps = {
  offers: OffersType[];
}

function FavoritesList({offers}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoritesLocationsItem offers={offers} />
    </ul>
  );
}

export default FavoritesList;
