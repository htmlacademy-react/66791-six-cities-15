import {useRef, useEffect} from 'react';
import {Icon, Marker, layerGroup} from 'leaflet';
import {useMap} from '../../../hooks';
import {CityType, PointType, PointsType} from '../../../types';
import {URL_MARKER_DEFAULT, URL_MARKER_CURRENT} from '../../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  isMainMap?: boolean;
  city: CityType;
  points: PointsType;
  selectedPointId: string;
}

const defaultCustomIcon = new Icon({
  iconSize: [27, 39],
  iconAnchor: [13.5, 39],
  iconUrl: URL_MARKER_DEFAULT
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [13.5, 39]
});

function Map({city, points, selectedPointId, isMainMap}: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      points.forEach((point: PointType) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(
            selectedPointId !== '' && point.id === selectedPointId
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPointId]);

  useEffect(() => {
    if (map) {
      map.setView([city.location.latitude, city.location.longitude], city.location.zoom);
    }
  }, [city, map]);

  return (
    <section
      ref={mapRef}
      className={`${isMainMap ? 'cities__map' : 'offer__map'} map`}
    />
  );
}

export default Map;
