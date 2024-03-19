import {useParams} from 'react-router-dom';
import NothingFoundScreen from '../nothing-found-screen';
import Meta from '../../components/common/meta';
import OfferGallery from './components/offer-gallery';
import OfferInside from './components/offer-inside';
import ReviewsList from './components/reviews-list';
import ReviewsForm from './components/reviews-form';
import NearPlaces from './components/near-places';
import Map from '../../components/common/map';
import {AuthorizationStatus} from '../../const';
import {getOffersLocation, percentageStars, firstLetterToUppercase} from '../../utils';
import {OffersType, ReviewsType, CityType} from '../../types';

type OfferScreenProps = {
  authorizationStatus: AuthorizationStatus;
  city: CityType;
  offers: OffersType[];
  reviews: ReviewsType;
  setNotFound: (flag: boolean) => void;
}

const NUMBER_OFFERS = 3;

function OfferScreen({authorizationStatus, city, offers, reviews, setNotFound}: OfferScreenProps): JSX.Element {
  const {id = ''} = useParams();
  const currentOffer = offers.find((offer: OffersType) => offer.id === id);
  const currentOfferReviews = id ? reviews[id] : [];
  const nearOffers = offers.slice(0, NUMBER_OFFERS);
  let nearOffersWithCurrentOffer: OffersType[] = [];

  if (!currentOffer) {
    setNotFound(true);

    return <NothingFoundScreen state="offer" />;
  } else {
    setNotFound(false);

    nearOffersWithCurrentOffer = [...nearOffers, currentOffer];
  }

  return (
    <>
      <Meta titleText="6/Cities. Beautiful &amp; luxurious studio at great location" />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <OfferGallery images={currentOffer.images} />
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {currentOffer.isPremium && (
                <div className="offer__mark">
                  <span>Premium</span>
                </div>
              )}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">{currentOffer.title}</h1>
                <button
                  className={`offer__bookmark-button ${
                    currentOffer.isFavorite ? 'offer__bookmark-button--active' : ''
                  } button`}
                  type="button"
                >
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: `${percentageStars(currentOffer.rating)}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{currentOffer.rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {firstLetterToUppercase(currentOffer.type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {`${currentOffer.bedrooms} Bedroom${currentOffer.bedrooms !== 1 ? 's' : ''}`}
                </li>
                <li className="offer__feature offer__feature--adults">
                  {`Max ${currentOffer.maxAdults} adult${currentOffer.maxAdults !== 1 ? 's' : ''}`}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€{currentOffer.price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&#8216;s inside</h2>
                <OfferInside goods={currentOffer.goods} />
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${currentOffer.host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img
                      className="offer__avatar user__avatar"
                      src={currentOffer.host.avatarUrl}
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">{currentOffer.host.name}</span>
                  {currentOffer.host.isPro && <span className="offer__user-status">Pro</span>}
                </div>
                <div className="offer__description">
                  <p className="offer__text">{currentOffer.description}</p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">
                  Reviews · <span className="reviews__amount">{currentOfferReviews.length}</span>
                </h2>
                <ReviewsList reviews={currentOfferReviews} />
                {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm />}
              </section>
            </div>
          </div>
          <Map
            city={city}
            points={getOffersLocation(nearOffersWithCurrentOffer)}
            selectedPointId={id}
          />
        </section>
        <div className="container">
          <NearPlaces offers={nearOffers} />
        </div>
      </main>
    </>
  );
}

export default OfferScreen;
