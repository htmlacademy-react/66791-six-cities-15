import {createReducer} from '@reduxjs/toolkit';
import {changeCity, changeSortType} from './action';
import {OffersType} from '../types';
import {CITIES} from '../const';
import {offersMocks} from '../mocks';

type initialStateType = {
  currentCity: string;
  offers: OffersType[];
  activeSortType: string;
}

const initialState: initialStateType = {
  currentCity: CITIES[0],
  offers: offersMocks,
  activeSortType: 'SortPopular'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(changeSortType, (state, action) => {
      state.activeSortType = action.payload;
    });
});

export {reducer};
