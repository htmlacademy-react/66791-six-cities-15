import LocationsItem from '../../../../components/ui/locations-item/locations-item';
import {CitiesType, CityNameType} from '../../../../types';

type TabsProps = {
  currentCity: string;
  cities: CitiesType;
  onChangeCity: (changedCity: CityNameType) => void;
}

function Tabs({currentCity, cities, onChangeCity}: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <LocationsItem
              key={city}
              isActiveCity={city.toLowerCase() === currentCity}
              city={city}
              onChangeCity={onChangeCity}
              isListItem
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
