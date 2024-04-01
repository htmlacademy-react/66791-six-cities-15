import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType, loadOffers, requireAuthorization, setError} from './action';
import {OffersType, CityNameType, SortOffersType} from '../types';
import {CITIES, AuthorizationStatus} from '../const';

type initialStateType = {
  currentCity: CityNameType;
  offers: OffersType[];
  activeSortType: SortOffersType;
  authorizationStatus: AuthorizationStatus;
  error: string | null;
}

const initialState: initialStateType = {
  currentCity: CITIES[0],
  offers: [],
  activeSortType: 'SortPopular',
  authorizationStatus: AuthorizationStatus.Unknown,
  error: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.activeSortType = action.payload;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(setError, (state, action) => {
      state.error = action.payload;
    });
});

export {reducer};
