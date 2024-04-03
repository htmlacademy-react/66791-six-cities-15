import {createAction} from '@reduxjs/toolkit';
import {CityNameType, OffersType, SortOffersType, UserDataType} from '../types';
import {AuthorizationStatus, AppRoute} from '../const';

export const changeCity = createAction<CityNameType>('service/changeCity');

export const changeSortType = createAction<SortOffersType>('sort/changeType');

export const loadOffers = createAction<OffersType[]>('data/loadOffers');

export const setOffersDataLoadingStatus = createAction<boolean>('data/setOffersDataLoadingStatus');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const loadUser = createAction<UserDataType>('user/loadUser');

export const setError = createAction<string | null>('service/setError');

export const redirectToRoute = createAction<AppRoute>('service/redirectToRoute');
