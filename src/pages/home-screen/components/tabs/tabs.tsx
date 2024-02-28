import {useSearchParams} from 'react-router-dom';
import LocationsItem from '../../../../components/ui/locations-item/locations-item';

type TabsProps = {
  cities: string[];
}

function Tabs({cities}: TabsProps): JSX.Element {
  const [searchParams] = useSearchParams();
  const currentTab = searchParams.get('tab') || 'amsterdam';

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <LocationsItem
              key={city}
              isActiveCity={city.toLowerCase() === currentTab}
              city={city}
              isListItem
            />
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Tabs;
