import {createReducer} from '@reduxjs/toolkit';
import {
  changeCity,
  changeSortType,
  loadOffers,
  setOffersDataLoadingStatus,
  requireAuthorization,
  loadUser,
  loadOffer,
  setOfferDataLoadingStatus,
  loadNearOffers,
  setNearOffersDataLoadingStatus,
  loadOfferComments,
  setOfferCommentsDataLoadingStatus
} from './action';
import {OffersType, OfferType, CityNameType, SortOffersType, UserDataType, ReviewsType} from '../types';
import {CITIES, AuthorizationStatus} from '../const';

type initialStateType = {
  currentCity: CityNameType;
  offers: OffersType[];
  user: UserDataType;
  isOffersDataLoading: boolean;
  activeSortType: SortOffersType;
  authorizationStatus: AuthorizationStatus;
  offer: OfferType;
  isOfferDataLoading: boolean;
  nearOffers: OffersType[];
  isNearOffersDataLoading: boolean;
  offerComments: ReviewsType;
  isOfferCommentsDataLoading: boolean;
}

const initialState: initialStateType = {
  currentCity: CITIES[0],
  offers: [],
  user: {
    email: '',
    token: '',
    name: '',
    avatarUrl: '',
    isPro: false
  },
  isOffersDataLoading: false,
  offer: {
    id: '',
    title: '',
    description: '',
    type: '',
    price: 0,
    images: [],
    city: {
      name: '',
      location: {
        latitude: 0,
        longitude: 0,
        zoom: 0
      }
    },
    location: {
      latitude: 0,
      longitude: 0,
      zoom: 0
    },
    goods: [],
    host: {
      isPro: false,
      name: '',
      avatarUrl: ''
    },
    isPremium: false,
    isFavorite: false,
    rating: 0,
    bedrooms: 0,
    maxAdults: 0
  },
  isOfferDataLoading: false,
  nearOffers: [],
  isNearOffersDataLoading: false,
  offerComments: [],
  isOfferCommentsDataLoading: false,
  activeSortType: 'SortPopular',
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(setOffersDataLoadingStatus, (state, action) => {
      state.isOffersDataLoading = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadUser, (state, action) => {
      state.user = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
    })
    .addCase(setOfferDataLoadingStatus, (state, action) => {
      state.isOfferDataLoading = action.payload;
    })
    .addCase(loadNearOffers, (state, action) => {
      state.nearOffers = action.payload;
    })
    .addCase(setNearOffersDataLoadingStatus, (state, action) => {
      state.isNearOffersDataLoading = action.payload;
    })
    .addCase(loadOfferComments, (state, action) => {
      state.offerComments = action.payload;
    })
    .addCase(setOfferCommentsDataLoadingStatus, (state, action) => {
      state.isOfferCommentsDataLoading = action.payload;
    });
});

export {reducer};
