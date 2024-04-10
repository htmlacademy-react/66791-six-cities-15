import {NameSpace} from '../../const';
import {OffersType, OfferType, ReviewsType, State} from '../../types';

export const getOffers = (state: State): OffersType[] => state[NameSpace.Data].offers;

export const getOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOffersDataLoading;

export const getOffer = (state: State): OfferType => state[NameSpace.Data].offer;

export const getOfferDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOfferDataLoading;

export const getNearOffers = (state: State): OffersType[] => state[NameSpace.Data].nearOffers;

export const getNearOffersDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isNearOffersDataLoading;

export const getOfferComments = (state: State): ReviewsType => state[NameSpace.Data].offerComments;

export const getOfferCommentsDataLoading = (state: State) => state[NameSpace.Data].isOfferCommentsDataLoading;

export const getChangeFavoriteDataLoading = (state: State) => state[NameSpace.Data].isChangeFavoriteDataLoading;

export const getFavoriteOffers = (state: State) => state[NameSpace.Data].favoriteOffers;
