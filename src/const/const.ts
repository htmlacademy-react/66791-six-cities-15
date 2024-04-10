export const CITIES = [
  'Paris',
  'Cologne',
  'Brussels',
  'Amsterdam',
  'Hamburg',
  'Dusseldorf'
] as const;

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

export enum APIRoute {
  Offers = '/offers',
  OffersNearby = '/offers/{offerId}/nearby',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments/{offerId}'
}

export enum NameSpace {
  Data = 'DATA',
  Service = 'SERVICE',
  User = 'USER',
}

export enum BookmarkButtonType {
  PlaceCard = 'place-card',
  Offer = 'offer',
}
