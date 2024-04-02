import {store} from '../store';
import {setError, setOffersDataLoadingStatus} from '../store/action';
import {clearErrorAction} from '../store/api-actions';

export const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearErrorAction());
  store.dispatch(setOffersDataLoadingStatus(false));
};
