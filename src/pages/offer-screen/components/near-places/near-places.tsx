import PlaceCard from '../../../../components/common/place-card/place-card';
import {OffersType} from '../../../../types';

type NearPlacesProps = {
  offers: OffersType[];
}

function NearPlaces({offers}: NearPlacesProps): JSX.Element {
  return (
    <section className="near-places places">
      <h2 className="near-places__title">
        Other places in the neighbourhood
      </h2>
      <div className="near-places__list places__list">
        {offers.map((offer) => (
          <PlaceCard
            isNearPlace
            key={offer.id}
            {...offer}
          />
        ))}
      </div>
    </section>
  );
}

export default NearPlaces;
