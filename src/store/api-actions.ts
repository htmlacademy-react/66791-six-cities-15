import {AxiosInstance} from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {
  loadOffers,
  setOffersDataLoadingStatus,
  requireAuthorization,
  loadUser,
  redirectToRoute,
  loadOffer,
  setOfferDataLoadingStatus,
  loadNearOffers,
  setNearOffersDataLoadingStatus,
  loadOfferComments,
  setOfferCommentsDataLoadingStatus,
  loadOfferComment,
  setOfferCommentDataLoadingStatus
} from './action';
import {saveToken, dropToken} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
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

export const fetchOfferAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async (OfferId, {dispatch, extra: api}) => {
    dispatch(setOfferDataLoadingStatus(true));

    const {data} = await api.get<OfferType>(`${APIRoute.Offers}/${OfferId}`);

    dispatch(setOfferDataLoadingStatus(false));
    dispatch(loadOffer(data));
  },
);

export const fetchNearOffersAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffersAction',
  async (OfferId, {dispatch, extra: api}) => {
    dispatch(setNearOffersDataLoadingStatus(true));

    const {data} = await api.get<OffersType[]>(`${APIRoute.Offers}/${OfferId}/nearby`);

    dispatch(setNearOffersDataLoadingStatus(false));
    dispatch(loadNearOffers(data));
  },
);

export const fetchOfferCommentsAction = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchNearOffersAction',
  async (offerId, {dispatch, extra: api}) => {
    dispatch(setOfferCommentsDataLoadingStatus(true));

    const {data} = await api.get<ReviewsType>(APIRoute.Comments.replace(/{offerId}/, offerId));

    dispatch(setOfferCommentsDataLoadingStatus(false));
    dispatch(loadOfferComments(data));
  },
);

export const addRewiewAction = createAsyncThunk<void, ReviewDataType, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({offerId, comment, rating}, {dispatch, extra: api}) => {
    dispatch(setOfferCommentDataLoadingStatus(true));

    const {data} = await api.post<ReviewType>(
      APIRoute.Comments.replace(/{offerId}/, offerId),
      {comment, rating}
    );

    dispatch(setOfferCommentDataLoadingStatus(false));
    dispatch(loadOfferComment(data));
  },
);
