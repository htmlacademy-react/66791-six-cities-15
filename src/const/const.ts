export const CITIES: string[] = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
];

export enum AppRoute {
  Root = '/',
  Login = '/login',
  Favorites = '/favorites',
  Offer = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const NUMBER_STARS = 5;

export enum StarsTitle {
  Stars5 = 'perfect',
  Stars4 = 'good',
  Stars3 = 'not bad',
  Stars2 = 'badly',
  Star1 = 'terribly'
}

export const URL_MARKER_DEFAULT = './img/pin.svg';

export const URL_MARKER_CURRENT = './img/pin-active.svg';

export enum SortingOption {
  SortPopular = 'Popular',
  SortPriceLowToHigh = 'Price: low to high',
  SortPriceHighToLow = 'Price: high to low',
  SortTopRatedFirst = 'Top rated first'
}
