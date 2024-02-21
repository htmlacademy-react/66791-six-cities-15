type LocationsItemProps = {
  city: string;
  isListItem: boolean;
  isActiveCity: boolean;
}

function LocationsItem({isListItem = false, isActiveCity = false, city}: LocationsItemProps): JSX.Element {
  return isListItem ? (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${isActiveCity && 'tabs__item tabs__item--active'}`}
        href="#"
      >
        <span>{city}</span>
      </a>
    </li>
  ) : (
    <div className="locations__item">
      <a className="locations__item-link" href="#">
        <span>{city}</span>
      </a>
    </div>
  );
}

export default LocationsItem;
