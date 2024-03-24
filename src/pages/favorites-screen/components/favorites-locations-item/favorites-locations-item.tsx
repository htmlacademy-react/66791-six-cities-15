import LocationsItem from '../../../../components/ui/locations-item';
import PlaceCard from '../../../../components/common/place-card';
import {OffersType} from '../../../../types';

type FavoritesLocationsItemProps = {
  offers: OffersType[];
  clickChangeCityHandle: (changedCity: string) => void;
}

function FavoritesLocationsItem({offers, clickChangeCityHandle}: FavoritesLocationsItemProps): JSX.Element {
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <LocationsItem
          city="Amsterdam"
          clickChangeCityHandle={clickChangeCityHandle}
        />
      </div>
      <div className="favorites__places">
        {offers.map((offer) => (
          <PlaceCard
            isFavorites
            key={offer.id}
            {...offer}
          />
        ))}
      </div>
    </li>
  );
}

export default FavoritesLocationsItem;
