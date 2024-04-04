import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {loadOffers, setOffersDataLoadingStatus, requireAuthorization, loadUser, redirectToRoute} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {
  AppDispatch,
  State,
  OffersType,
  AuthDataType,
  UserDataType
} from '../types';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setOffersDataLoadingStatus(true));

    const {data} = await api.get<OffersType[]>(APIRoute.Offers);

    dispatch(setOffersDataLoadingStatus(false));
    dispatch(loadOffers(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<UserDataType>(APIRoute.Login);

      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(loadUser(data));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthDataType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserDataType>(APIRoute.Login, {email, password});
    const {token} = data;

    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(loadUser(data));
    dispatch(redirectToRoute(AppRoute.Root));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);

    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(loadUser({
      email: '',
      token: '',
      name: '',
      avatarUrl: '',
      isPro: false
    }));
  },
);
