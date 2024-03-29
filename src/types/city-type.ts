import {CITIES} from '../const';

export type CitiesType = typeof CITIES;

export type CityNameType = (typeof CITIES)[number];

export type CityLocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type CityType = {
  name: string;
  location: CityLocationType;
}
