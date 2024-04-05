import {createAction} from '@reduxjs/toolkit';
import {CityNameType, OffersType, OfferType, SortOffersType, UserDataType, ReviewType, ReviewsType} from '../types';
import {AuthorizationStatus, AppRoute} from '../const';

export const changeCity = createAction<CityNameType>('service/changeCity');

export const changeSortType = createAction<SortOffersType>('sort/changeType');

export const loadOffers = createAction<OffersType[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const loadUser = createAction<UserDataType>('user/loadUser');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoute = createAction<AppRoute>('service/redirectToRoute');

export const loadOffer = createAction<OfferType>('data/loadOffer');

export const setOfferDataLoadingStatus = createAction<boolean>('data/setOfferDataLoadingStatus');

export const loadNearOffers = createAction<OffersType[]>('data/loadNearOffers');

export const setNearOffersDataLoadingStatus = createAction<boolean>('data/setNearOffersDataLoadingStatus');

export const loadOfferComments = createAction<ReviewsType>('data/loadOfferComments');

export const setOfferCommentsDataLoadingStatus = createAction<boolean>('data/setOfferCommentsDataLoadingStatus');

export const loadOfferComment = createAction<ReviewType>('data/loadOfferComment');

export const setOfferCommentDataLoadingStatus = createAction<boolean>('data/setOfferCommentDataLoadingStatus');
