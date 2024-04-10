import LocationsItem from '../../../../components/ui/locations-item';
import PlaceCard from '../../../../components/common/place-card';
import {CityNameType, OffersType} from '../../../../types';
import {CITIES} from '../../../../const';

type FavoritesLocationsItemProps = {
  offers: OffersType[];
  clickChangeCityHandle: (changedCity: CityNameType) => void;
}

function FavoritesLocationsItem({offers, clickChangeCityHandle}: FavoritesLocationsItemProps): JSX.Element {

  return (
    <>
      {CITIES.map((city: CityNameType) => {
        const isOffersForCity = offers.some((offer) => offer.city.name === city);

        return (
          isOffersForCity && (
            <li className="favorites__locations-items">
              <div className="favorites__locations locations locations--current">
                <LocationsItem
                  city={city}
                  clickChangeCityHandle={clickChangeCityHandle}
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
