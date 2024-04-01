import {createAction} from '@reduxjs/toolkit';
import {CityNameType, OffersType, SortOffersType} from '../types';
import {AuthorizationStatus} from '../const';

export const changeCity = createAction<CityNameType>('service/changeCity');

export const changeSortType = createAction<SortOffersType>('sort/changeType');

export const loadOffers = createAction<OffersType[]>('data/loadOffers');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const setError = createAction<string | null>('service/setError');
