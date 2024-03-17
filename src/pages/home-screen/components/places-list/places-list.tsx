import PlaceCard from '../../../../components/common/place-card';
import {OffersType} from '../../../../types';

type PlacesListProps = {
  offers: OffersType[];
  hoverPlaceCard: (offerId: string) => void;
}

function PlacesList({offers, hoverPlaceCard}: PlacesListProps): JSX.Element {
  return (
    <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => (
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
