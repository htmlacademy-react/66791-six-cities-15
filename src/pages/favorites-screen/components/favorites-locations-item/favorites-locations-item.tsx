import LocationsItem from '../../../../components/ui/locations-item';
import PlaceCard from '../../../../components/common/place-card';
import {CityNameType, OffersType} from '../../../../types';
import {CITIES} from '../../../../const';

type FavoritesLocationsItemProps = {
  offers: OffersType[];
  onChangeCity: (changedCity: CityNameType) => void;
}

function FavoritesLocationsItem({offers, onChangeCity}: FavoritesLocationsItemProps): JSX.Element {

  return (
    <>
      {CITIES.map((city: CityNameType) => {
        const isOffersForCity = offers.some((offer) => offer.city.name === city);

        return (
          isOffersForCity && (
            <li className="favorites__locations-items" key={`${city}`}>
              <div className="favorites__locations locations locations--current">
                <LocationsItem
                  city={city}
                  onChangeCity={onChangeCity}
                />
              </div>
              <div className="favorites__places">
                {offers.filter((offer) => offer.city.name === city).map((offer) => (
                  <PlaceCard
                    isFavorites
                    key={offer.id}
                    {...offer}
                  />
                ))}
              </div>
            </li>
          )
        );
      })}
    </>
  );
}

export default FavoritesLocationsItem;
