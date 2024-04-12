import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useAppSelector, useAppDispatch} from '../../../hooks';
import {refreshOffers} from '../../../store/service-data/service-data.slice';
import {changeFavoriteAction} from '../../../store/api-actions';
import {BookmarkButtonType, AuthorizationStatus, AppRoute} from '../../../const';
import {getAuthorizationStatus} from '../../../store/user-process/user-process.selectors';
import {getChangeFavoriteDataLoading} from '../../../store/service-data/service-data.selectors';

type BookmarkButtonProps = {
  offerId: string;
  isFavorite: boolean;
  type: BookmarkButtonType;
}

function BookmarkButton({offerId, isFavorite, type}: BookmarkButtonProps): JSX.Element {
  const [isActiveBookmarkButton, setIsActiveBookmarkButton] = useState(isFavorite);

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isChangeFavoriteDataLoading = useAppSelector(getChangeFavoriteDataLoading);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isPlaceCard = type === BookmarkButtonType.PlaceCard;

  const clickChangeFavoriteHandler = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      const favoriteData = {
        offerId,
        isFavorite: !isActiveBookmarkButton
      };

      dispatch(changeFavoriteAction(favoriteData))
        .unwrap()
        .then(() => {
          setIsActiveBookmarkButton(!isActiveBookmarkButton);
          dispatch(refreshOffers(favoriteData));
        });
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={`${type}__bookmark-button ${isActiveBookmarkButton ? `${type}__bookmark-button--active` : ''} button`}
      type="button"
      onClick={clickChangeFavoriteHandler}
      disabled={isChangeFavoriteDataLoading}
    >
      <svg
        className={`${type}__bookmark-icon`}
        width={isPlaceCard ? 18 : 31}
        height={isPlaceCard ? 19 : 33}
      >
        <use xlinkHref="#icon-bookmark"/>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>
  );
}

export default BookmarkButton;
