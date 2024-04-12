import {createSelector} from '@reduxjs/toolkit';
import {getCurrentCity, getActiveSortType} from '../service-process/service-process.selectors';
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

export const getOfferCommentDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isOfferCommentDataLoading;

export const getOffersFilterByCity = createSelector(
  [getOffers, getCurrentCity],
  (offers, currentCity) => offers.filter(
    (offer) => offer.city.name === currentCity
  )
);

export const getSortedOffers = createSelector(
  [getOffersFilterByCity, getActiveSortType],
  (offers, activeSortType) => {
    switch (activeSortType) {
      case 'SortPriceLowToHigh':
        return [...offers].sort((offerA, offerB) => offerA.price - offerB.price);
      case 'SortPriceHighToLow':
        return [...offers].sort((offerA, offerB) => offerB.price - offerA.price);
      case 'SortTopRatedFirst':
        return [...offers].sort((offerA, offerB) => offerB.rating - offerA.rating);
      default:
        return offers;
    }
  }
);
