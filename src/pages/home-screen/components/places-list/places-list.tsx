import {useAppSelector} from '../../../../hooks';
import PlaceCard from '../../../../components/common/place-card';
import {OffersType} from '../../../../types';
import {getActiveSortType} from '../../../../store/service-process/service-process.selectors';

type PlacesListProps = {
  offers: OffersType[];
  hoverPlaceCard: (offerId: string) => void;
}

function PlacesList({offers, hoverPlaceCard}: PlacesListProps): JSX.Element {
  const activeSortType = useAppSelector(getActiveSortType);

  const sortingOffers = (offersSort: OffersType[], type: string): OffersType[] => {
    switch (type) {
      case 'SortPriceLowToHigh':
        return [...offersSort].sort((offerA, offerB) => offerA.price - offerB.price);
      case 'SortPriceHighToLow':
        return [...offersSort].sort((offerA, offerB) => offerB.price - offerA.price);
      case 'SortTopRatedFirst':
        return [...offersSort].sort((offerA, offerB) => offerB.rating - offerA.rating);
      default:
        return offers;
    }
  };

  return (
    <div className="cities__places-list places__list tabs__content">
      {sortingOffers(offers, activeSortType).map((offer) => (
        <PlaceCard
          key={offer.id}
          hoverPlaceCard={hoverPlaceCard}
          {...offer}
        />
      ))}
    </div>
  );
}

export default PlacesList;
