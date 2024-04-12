import FavoritesLocationsItem from '../favorites-locations-item';
import {CityNameType, OffersType} from '../../../../types';

type FavoritesListProps = {
  offers: OffersType[];
  onChangeCity: (changedCity: CityNameType) => void;
}

function FavoritesList({offers, onChangeCity}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoritesLocationsItem
        offers={offers}
        onChangeCity={onChangeCity}
      />
    </ul>
  );
}

export default FavoritesList;
