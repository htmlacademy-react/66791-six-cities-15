import {store} from '../store';
import {AuthorizationStatus} from '../const';
import {CityNameType, OffersType, OfferType, ReviewsType, SortOffersType, UserDataType} from './';

export type ServiceDataType = {
  offers: OffersType[];
  isOffersDataLoading: boolean;
  offer: OfferType;
  isOfferDataLoading: boolean;
  nearOffers: OffersType[];
  isNearOffersDataLoading: boolean;
  offerComments: ReviewsType;
  isOfferCommentsDataLoading: boolean;
  isOfferCommentDataLoading: boolean;
};

export type ServiceProcessType = {
  currentCity: CityNameType;
  activeSortType: SortOffersType;
};

export type UserProcessType = {
  authorizationStatus: AuthorizationStatus;
  user: UserDataType;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch
