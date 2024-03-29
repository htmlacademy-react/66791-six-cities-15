import {Link} from 'react-router-dom';

type LocationsItemProps = {
  city: string;
  isListItem?: boolean;
  isActiveCity?: boolean;
  clickChangeCityHandle: (changedCity: string) => void;
}

function LocationsItem({isListItem = false, isActiveCity = false, city, clickChangeCityHandle}: LocationsItemProps): JSX.Element {
  return isListItem ? (
    <li className="locations__item">
      <Link
        className={`locations__item-link tabs__item ${isActiveCity && 'tabs__item tabs__item--active'}`}
        to={`/?tab=${city.toLowerCase()}`}
        onClick={() => clickChangeCityHandle(city)}
      >
        <span>{city}</span>
      </Link>
    </li>
  ) : (
    <div className="locations__item">
      <Link
        className="locations__item-link"
        to={`/?tab=${city.toLowerCase()}`}
        onClick={() => clickChangeCityHandle(city)}
      >
        <span>{city}</span>
      </Link>
    </div>
  );
}

export default LocationsItem;
