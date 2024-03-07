import {Link} from 'react-router-dom';
import {OffersType} from '../../../types';

type PlaceCardProps = {
  isNearPlace?: boolean;
  hoverPlaceCard?: (offerId: string) => void;
}

const NUMBER_STARS = 5;

function PlaceCard(props: OffersType & PlaceCardProps): JSX.Element {
  const {
    id,
    isNearPlace,
    title,
    type,
    price,
    previewImage,
    isFavorite,
    isPremium,
    rating,
    hoverPlaceCard
  } = props;

  return (
    <article
      className={`${isNearPlace ? 'near-places__card' : 'cities__card'} place-card`}
      onMouseEnter={() => hoverPlaceCard && hoverPlaceCard(id)}
      onMouseLeave={() => hoverPlaceCard && hoverPlaceCard('')}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${isNearPlace ? 'near-places__image-wrapper' : 'cities__image-wrapper'} place-card__image-wrapper`}>
        <Link to={`/offer/${id}`}>
          <img
            className="place-card__image"
            src={previewImage}
            width={260}
            height={200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`}
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width={18}
              height={19}
            >
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 100 / NUMBER_STARS}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{type.charAt(0).toUpperCase() + type.slice(1)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
