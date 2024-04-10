import {createSlice} from '@reduxjs/toolkit';
import {NameSpace} from '../../const';
import {ServiceDataType} from '../../types';
import {
  fetchOffersAction,
  fetchOfferAction,
  fetchNearOffersAction,
  fetchOfferCommentsAction,
  addRewiewAction
} from '../api-actions';

const initialState: ServiceDataType = {
  offers: [],
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
  isOfferCommentDataLoading: false,
};

export const serviceData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isOfferDataLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.isOfferDataLoading = false;
      })
      .addCase(fetchNearOffersAction.pending, (state) => {
        state.isNearOffersDataLoading = true;
      })
      .addCase(fetchNearOffersAction.fulfilled, (state, action) => {
        state.nearOffers = action.payload;
        state.isNearOffersDataLoading = false;
      })
      .addCase(fetchOfferCommentsAction.pending, (state) => {
        state.isOfferCommentsDataLoading = true;
      })
      .addCase(fetchOfferCommentsAction.fulfilled, (state, action) => {
        state.offerComments = action.payload;
        state.isOfferCommentsDataLoading = false;
      })
      .addCase(addRewiewAction.pending, (state) => {
        state.isOfferCommentDataLoading = true;
      })
      .addCase(addRewiewAction.fulfilled, (state, action) => {
        state.offerComments.push(action.payload);
        state.isOfferCommentDataLoading = false;
      });
  }
});
