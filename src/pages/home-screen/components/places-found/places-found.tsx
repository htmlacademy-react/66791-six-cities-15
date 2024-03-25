type PlacesFoundProps = {
  numberOffers: number;
  city: string;
}

function PlacesFound({numberOffers, city}: PlacesFoundProps): JSX.Element {
  return <b className="places__found">{numberOffers} places to stay in {city}</b>;
}

export default PlacesFound;
