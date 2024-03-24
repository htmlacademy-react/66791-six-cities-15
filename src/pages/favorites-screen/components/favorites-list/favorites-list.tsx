import FavoritesLocationsItem from '../favorites-locations-item';
import {OffersType} from '../../../../types';

type FavoritesListProps = {
  offers: OffersType[];
  clickChangeCityHandle: (changedCity: string) => void;
}

function FavoritesList({offers, clickChangeCityHandle}: FavoritesListProps): JSX.Element {
  return (
    <ul className="favorites__list">
      <FavoritesLocationsItem
        offers={offers}
        clickChangeCityHandle={clickChangeCityHandle}
      />
    </ul>
  );
}

export default FavoritesList;
