import {Link} from 'react-router-dom';
import BookmarkButton from '../../ui/bookmark-button';
import {OffersType} from '../../../types';
import {AppRoute, BookmarkButtonType} from '../../../const';
import {firstLetterToUppercase, percentageStars} from '../../../utils';

type PlaceCardProps = {
  isNearPlace?: boolean;
  isFavorites?: boolean;
  hoverPlaceCard?: (offerId: string) => void;
}

function PlaceCard(props: OffersType & PlaceCardProps): JSX.Element {
  const {
    id,
    isFavorites,
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

  const placeCardDefineClassName = (): {articleClassName: string; wrapperClassName: string} => {
    const names = {
      articleClassName: '',
      wrapperClassName: ''
    };

    if (isNearPlace) {
      names.articleClassName += 'near-places__card';
      names.wrapperClassName += 'near-places__image-wrapper';
    } else if (isFavorites) {
      names.articleClassName += 'favorites__card';
      names.wrapperClassName += 'favorites__image-wrapper';
    } else {
      names.articleClassName += 'cities__card';
      names.wrapperClassName += 'cities__image-wrapper';
    }

    return names;
  };
  const {articleClassName, wrapperClassName} = placeCardDefineClassName();

  return (
    <article
      className={`${articleClassName} place-card`}
      onMouseEnter={() => hoverPlaceCard && hoverPlaceCard(id)}
      onMouseLeave={() => hoverPlaceCard && hoverPlaceCard('')}
    >
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${wrapperClassName} place-card__image-wrapper`}>
        <Link to={AppRoute.Offer.replace(/:id/, id)}>
          <img
            className="place-card__image"
            src={previewImage}
            width={isFavorites ? 150 : 260}
            height={isFavorites ? 110 : 200}
            alt="Place image"
          />
        </Link>
      </div>
      <div className={`${isFavorites ? 'favorites__card-info ' : ''}place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">€{price}</b>
            <span className="place-card__price-text">/&nbsp;night</span>
          </div>
          <BookmarkButton
            offerId={id}
            isFavorite={isFavorite}
            type={BookmarkButtonType.PlaceCard}
          />
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${percentageStars(rating)}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer.replace(/:id/, id)}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">{firstLetterToUppercase(type)}</p>
      </div>
    </article>
  );
}

export default PlaceCard;
