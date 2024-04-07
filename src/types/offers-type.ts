import {CityType} from './city-type';

export type LocationType = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type UserType = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type OffersType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export type OfferType = Omit<OffersType, 'previewImage'> & {
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserType;
  images: string[];
  maxAdults: number;
}

export type OffersMocksType = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  city: CityType;
  location: LocationType;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  description: string;
  bedrooms: number;
  goods: string[];
  host: UserType;
  images: string[];
  maxAdults: number;
}[]
