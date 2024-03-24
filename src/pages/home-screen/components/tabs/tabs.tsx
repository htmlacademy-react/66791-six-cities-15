import {useEffect} from 'react';
import {useSearchParams, useNavigate} from 'react-router-dom';
import LocationsItem from '../../../../components/ui/locations-item/locations-item';

type TabsProps = {
  currentCity: string;
  cities: string[];
  clickChangeCityHandle: (changedCity: string) => void;
}

function Tabs({currentCity, cities, clickChangeCityHandle}: TabsProps): JSX.Element {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchParamTab = searchParams.get('tab');
  const currentTab = searchParamTab || currentCity.toLowerCase();

  useEffect(() => {
    if (!searchParamTab) {
      navigate(`?tab=${currentTab}`);
    }
  }, [currentTab, navigate, searchParamTab]);

  return (
    <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {cities.map((city) => (
            <LocationsItem
              key={city}
              isActiveCity={city.toLowerCase() === currentTab}
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
