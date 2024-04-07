import FavoritesLocationsItem from '../favorites-locations-item';
import {OffersMocksType, CityNameType} from '../../../../types';

type FavoritesListProps = {
  offers: OffersMocksType;
  clickChangeCityHandle: (changedCity: CityNameType) => void;
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
