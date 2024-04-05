import {toast} from 'react-toastify';
import {
  setOffersDataLoadingStatus,
  setOfferDataLoadingStatus,
  setOfferCommentsDataLoadingStatus,
  setNearOffersDataLoadingStatus
} from '../store/action';
import {store} from '../store';

export const processErrorHandle = (message: string): void => {
  toast.error(message, {
    toastId: message
  });

  store.dispatch(setOffersDataLoadingStatus(false));
  store.dispatch(setOfferDataLoadingStatus(false));
  store.dispatch(setOfferCommentsDataLoadingStatus(false));
  store.dispatch(setNearOffersDataLoadingStatus(false));
};
