type PlacesFoundProps = {
  numberOffers: number;
}

function PlacesFound({numberOffers}: PlacesFoundProps): JSX.Element {
  return <b className="places__found">{numberOffers} places to stay in Amsterdam</b>;
}

export default PlacesFound;
