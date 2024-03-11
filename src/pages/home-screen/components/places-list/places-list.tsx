import {useState} from 'react';
import PlaceCard from '../../../../components/common/place-card';
import {OffersType} from '../../../../types';

type PlacesListProps = {
  offers: OffersType[];
}

function PlacesList({offers}: PlacesListProps): JSX.Element {
  const [activePlaceCardId, setActivePlaceCardId] = useState('');

  const hoverPlaceCardHandle = (offerId: string): void => setActivePlaceCardId(offerId);

  return (
    <div className="cities__places-list places__list tabs__content">
      {activePlaceCardId}
      {offers.map((offer) => (
        <PlaceCard
          key={offer.id}
          hoverPlaceCard={hoverPlaceCardHandle}
          {...offer}
        />
      ))}
    </div>
  );
}

export default PlacesList;
