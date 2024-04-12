import {Link} from 'react-router-dom';
import {CityNameType} from '../../../types';

type LocationsItemProps = {
  city: CityNameType;
  isListItem?: boolean;
  isActiveCity?: boolean;
  onChangeCity: (changedCity: CityNameType) => void;
}

function LocationsItem({isListItem = false, isActiveCity = false, city, onChangeCity}: LocationsItemProps): JSX.Element {
  return isListItem ? (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${isActiveCity && 'tabs__item tabs__item--active'}`}
        to={`/?tab=${city.toLowerCase()}`}
        onClick={() => onChangeCity(city)}
      >
        <span>{city}</span>
      </Link>
    </li>
  ) : (
    <div className="locations__item">
      <Link
        className="locations__item-link"
        to={`/?tab=${city.toLowerCase()}`}
        onClick={() => onChangeCity(city)}
      >
        <span>{city}</span>
      </Link>
    </div>
  );
}

export default LocationsItem;
