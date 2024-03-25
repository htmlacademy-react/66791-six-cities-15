import {createReducer} from '@reduxjs/toolkit';
import {changeCity, renderOffers} from './action';
import {OffersType, CityType} from '../types';
import {offersMocks} from '../mocks';

type initialStateType = {
  currentCity: string;
  currentCityWithLocation: CityType;
  offers: OffersType[];
  offersForCurrentCity: OffersType[];
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
  offersForCurrentCity: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.currentCity = action.payload;
    })
    .addCase(renderOffers, (state) => {
      state.offersForCurrentCity = state.offers.filter(
        (offer) => offer.city.name === state.currentCity
      );
      state.currentCityWithLocation = state.offersForCurrentCity.length > 0
        ? state.offersForCurrentCity[0].city
        : initialCurrentCityWithLocation;
    });
});

export {reducer};
