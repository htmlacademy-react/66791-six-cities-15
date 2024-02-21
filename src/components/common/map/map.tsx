type MapProps = {
  isMainMap: boolean;
}

function Map({isMainMap}: MapProps): JSX.Element {
  return <section className={`${isMainMap ? 'cities__map' : 'offer__map'} map`}></section>;
}

export default Map;
