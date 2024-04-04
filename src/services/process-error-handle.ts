import {toast} from 'react-toastify';
import {setOffersDataLoadingStatus} from '../store/action';
import {store} from '../store';

export const processErrorHandle = (message: string): void => {
  toast.error(message, {
    toastId: 'error-server'
  });

  store.dispatch(setOffersDataLoadingStatus(false));
};
