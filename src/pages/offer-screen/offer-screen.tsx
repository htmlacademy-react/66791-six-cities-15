import {useParams} from 'react-router-dom';
import NothingFoundScreen from '../nothing-found-screen';
import Meta from '../../components/common/meta';
import ReviewsList from './components/reviews-list';
import ReviewsForm from './components/reviews-form';
import NearPlaces from './components/near-places';
import Map from '../../components/common/map';
import {AuthorizationStatus} from '../../const';
import {getOffersLocation} from '../../utils';
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
            <div className="offer__gallery">
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="../../../markup/img/room.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="../../../markup/img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="../../../markup/img/apartment-02.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="../../../markup/img/apartment-03.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="../../../markup/img/studio-01.jpg"
                  alt="Photo studio"
                />
              </div>
              <div className="offer__image-wrapper">
                <img
                  className="offer__image"
                  src="../../../markup/img/apartment-01.jpg"
                  alt="Photo studio"
                />
              </div>
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              <div className="offer__mark">
                <span>Premium</span>
              </div>
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button className="offer__bookmark-button button" type="button">
                  <svg className="offer__bookmark-icon" width={31} height={33}>
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: '80%'}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">4.8</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">Apartment</li>
                <li className="offer__feature offer__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">€120</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&#8216;s inside</h2>
                <ul className="offer__inside-list">
                  <li className="offer__inside-item">Wi-Fi</li>
                  <li className="offer__inside-item">Washing machine</li>
                  <li className="offer__inside-item">Towels</li>
                  <li className="offer__inside-item">Heating</li>
                  <li className="offer__inside-item">Coffee machine</li>
                  <li className="offer__inside-item">Baby seat</li>
                  <li className="offer__inside-item">Kitchen</li>
                  <li className="offer__inside-item">Dishwasher</li>
                  <li className="offer__inside-item">Cabel TV</li>
                  <li className="offer__inside-item">Fridge</li>
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className="offer__avatar-wrapper offer__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="offer__avatar user__avatar"
                      src="../../../markup/img/avatar-angelina.jpg"
                      width={74}
                      height={74}
                      alt="Host avatar"
                    />
                  </div>
                  <span className="offer__user-name">Angelina</span>
                  <span className="offer__user-status">Pro</span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    A quiet cozy and picturesque that hides behind a a river by the
                    unique lightness of Amsterdam. The building is green and from
                    18th century.
                  </p>
                  <p className="offer__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
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
