import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {redirectToRoute} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AppRoute} from '../const';
import {
  AppDispatch,
  State,
  OffersType,
  OfferType,
  AuthDataType,
  UserDataType,
  ReviewDataType,
  ReviewType,
  ReviewsType
} from '../types';

export const fetchOffersAction = createAsyncThunk<OffersType[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<OffersType[]>(APIRoute.Offers);

    return data;
  },
);

export const checkAuthAction = createAsyncThunk<UserDataType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<UserDataType>(APIRoute.Login);

    return data;
  },
);

export const loginAction = createAsyncThunk<UserDataType, AuthDataType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserDataType>(APIRoute.Login, {email, password});
    const {token} = data;

    saveToken(token);
    dispatch(redirectToRoute(AppRoute.Root));

    return data;
  },
);

export const logoutAction = createAsyncThunk<UserDataType, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {extra: api}) => {
    await api.delete(APIRoute.Logout);

    dropToken();

    return {
      email: '',
      token: '',
      name: '',
      avatarUrl: '',
      isPro: false
    };
  },
);

export const fetchOfferAction = createAsyncThunk<OfferType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (OfferId, {extra: api}) => {
    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${OfferId}`);

    return data;
  },
);

export const fetchNearOffersAction = createAsyncThunk<OffersType[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffers',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<OffersType[]>(APIRoute.OffersNearby.replace(/{offerId}/, offerId));

    return data;
  },
);

export const fetchOfferCommentsAction = createAsyncThunk<ReviewsType, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOfferComments',
  async (offerId, {extra: api}) => {
    const {data} = await api.get<ReviewsType>(APIRoute.Comments.replace(/{offerId}/, offerId));

    return data;
  },
);

export const addRewiewAction = createAsyncThunk<ReviewType, ReviewDataType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/addRewiew',
  async ({offerId, comment, rating}, {extra: api}) => {
    const {data} = await api.post<ReviewType>(
      APIRoute.Comments.replace(/{offerId}/, offerId),
      {comment, rating}
    );

    return data;
  },
);
