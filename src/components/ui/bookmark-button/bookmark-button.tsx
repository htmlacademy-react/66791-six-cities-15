import {BookmarkButtonType} from '../../../const';

type BookmarkButtonProps = {
  isFavorite: boolean;
  type: BookmarkButtonType;
}

function BookmarkButton({isFavorite, type}: BookmarkButtonProps): JSX.Element {
  const isPlaceCard = type === BookmarkButtonType.PlaceCard;

  return (
    <button
      className={`${type}__bookmark-button ${isFavorite ? `${type}__bookmark-button--active` : ''} button`}
      type="button"
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
