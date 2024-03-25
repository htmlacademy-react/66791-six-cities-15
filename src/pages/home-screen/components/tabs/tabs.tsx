import LocationsItem from '../../../../components/ui/locations-item/locations-item';

type TabsProps = {
  currentCity: string;
  cities: string[];
  clickChangeCityHandle: (changedCity: string) => void;
}

function Tabs({currentCity, cities, clickChangeCityHandle}: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <LocationsItem
              key={city}
              isActiveCity={city.toLowerCase() === currentCity}
              city={city}
              clickChangeCityHandle={clickChangeCityHandle}
              isListItem
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
