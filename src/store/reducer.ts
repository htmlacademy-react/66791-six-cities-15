import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  renderOffers,
  changeSortType,
  sortPopular,
  sortPriceHighToLow,
  sortPriceLowToHigh,
  sortTopRatedFirst
} from './action';
import {OffersType, CityType} from '../types';
import {offersMocks} from '../mocks';

type initialStateType = {
  currentCity: string;
  currentCityWithLocation: CityType;
  offers: OffersType[];
  offersForCurrentCity: OffersType[];
  offersForCurrentCitySort: OffersType[];
  activeSortType: string;
}

const initialCurrentCityWithLocation: CityType = {
  name: '',
  location: {
    latitude: 0,
    longitude: 0,
    zoom: 0
  }
};

const initialState: initialStateType = {
  currentCity: 'Paris',
  currentCityWithLocation: initialCurrentCityWithLocation,
  offers: offersMocks,
  offersForCurrentCity: [],
  offersForCurrentCitySort: [],
  activeSortType: 'SortPopular'
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(renderOffers, (state) => {
      state.offersForCurrentCity = state.offersForCurrentCitySort = state.offers.filter(
        (offer) => offer.city.name === state.currentCity
      );
      state.currentCityWithLocation = state.offersForCurrentCity.length > 0
        ? state.offersForCurrentCity[0].city
        : initialCurrentCityWithLocation;
    })
    .addCase(changeSortType, (state, action) => {
      state.activeSortType = action.payload;
    })
    .addCase(sortPriceHighToLow, (state) => {
      state.offersForCurrentCitySort = state.offersForCurrentCitySort
        .sort((offerA, offerB) => offerB.price - offerA.price);
    })
    .addCase(sortPriceLowToHigh, (state) => {
      state.offersForCurrentCitySort = state.offersForCurrentCitySort
        .sort((offerA, offerB) => offerA.price - offerB.price);
    })
    .addCase(sortTopRatedFirst, (state) => {
      state.offersForCurrentCitySort = state.offersForCurrentCitySort
        .sort((offerA, offerB) => offerB.rating - offerA.rating);
    })
    .addCase(sortPopular, (state) => {
      state.offersForCurrentCitySort = state.offersForCurrentCity;
    });
});

export {reducer};
