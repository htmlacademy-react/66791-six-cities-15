import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import NothingFoundScreen from '../nothing-found-screen';
import Meta from '../../components/common/meta';
import OfferGallery from './components/offer-gallery';
import OfferInside from './components/offer-inside';
import ReviewsList from './components/reviews-list';
import ReviewsForm from './components/reviews-form';
import NearPlaces from './components/near-places';
import Map from '../../components/common/map';
import Spinner from '../../components/ui/spinner';
import BookmarkButton from '../../components/ui/bookmark-button';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {fetchOfferAction, fetchNearOffersAction, fetchOfferCommentsAction} from '../../store/api-actions';
import {AuthorizationStatus, BookmarkButtonType} from '../../const';
import {getOffersLocation, percentageStars, firstLetterToUppercase} from '../../utils';
import {
  getOfferDataLoadingStatus,
  getNearOffersDataLoadingStatus,
  getOfferCommentsDataLoading,
  getOffer,
  getOfferComments,
  getNearOffers
} from '../../store/service-data/service-data.selectors';

type OfferScreenProps = {
  authorizationStatus: AuthorizationStatus;
  setNotFound: (flag: boolean) => void;
}

const NUMBER_OFFERS = 3;
const NUMBER_REVIEWS = 10;

function OfferScreen({authorizationStatus, setNotFound}: OfferScreenProps): JSX.Element {
  const isOfferDataLoading = useAppSelector(getOfferDataLoadingStatus);
  const isNearOffersDataLoading = useAppSelector(getNearOffersDataLoadingStatus);
  const isOfferCommentsDataLoading = useAppSelector(getOfferCommentsDataLoading);
  const currentOffer = useAppSelector(getOffer);
  const currentOfferReviews = useAppSelector(getOfferComments).slice(0, NUMBER_REVIEWS);
  const nearOffers = useAppSelector(getNearOffers).slice(0, NUMBER_OFFERS);

  const {id = ''} = useParams();
  const dispatch = useAppDispatch();

  const [isNotFindOffer, setNotFindOffer] = useState(false);

  useEffect(() => {
    dispatch(fetchOfferAction(id))
      .unwrap()
      .then(() => {
        dispatch(fetchOfferCommentsAction(id));
        dispatch(fetchNearOffersAction(id));
      })
      .catch(() => {
        setNotFindOffer(true);
      });

  }, [id, dispatch]);

  useEffect(() => {
    if (isNotFindOffer) {
      setNotFound(true);
    } else {
      setNotFound(false);
    }
  }, [isNotFindOffer, setNotFound]);

  return (
    <>
      {isOfferDataLoading && <Spinner />}
      {isNotFindOffer
        ? <NothingFoundScreen state="offer" />
        : (
          <>
            <Meta titleText={`6/Cities. ${currentOffer.title}`} />

            {!isOfferDataLoading && !isNearOffersDataLoading && !isOfferCommentsDataLoading && (
              <main className="page__main page__main--offer">
                <section className="offer">
                  <div className="offer__gallery-container container">
                    <OfferGallery images={currentOffer.images}/>
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
                        <BookmarkButton
                          offerId={id}
                          isFavorite={currentOffer.isFavorite}
                          type={BookmarkButtonType.Offer}
                        />
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
                        <OfferInside goods={currentOffer.goods}/>
                      </div>
                      <div className="offer__host">
                        <h2 className="offer__host-title">Meet the host</h2>
                        <div className="offer__host-user user">
                          <div
                            className={`offer__avatar-wrapper ${currentOffer.host.isPro
                              ? 'offer__avatar-wrapper--pro'
                              : ''} user__avatar-wrapper`}
                          >
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
                        <ReviewsList reviews={currentOfferReviews}/>
                        {authorizationStatus === AuthorizationStatus.Auth && <ReviewsForm offerId={id} />}
                      </section>
                    </div>
                  </div>
                  <Map
                    city={currentOffer.city}
                    points={getOffersLocation([...nearOffers, currentOffer])}
                    selectedPointId={id}
                  />
                </section>
                <div className="container">
                  <NearPlaces offers={nearOffers}/>
                </div>
              </main>
            )}
          </>
        )}
    </>
  );
}

export default OfferScreen;
