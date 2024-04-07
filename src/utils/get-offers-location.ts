import {OffersType, OfferType, PointType, PointsType} from '../types';

export const getOffersLocation = function (offers: (OffersType | OfferType)[]): PointsType {
  return offers.map((offer: OffersType | OfferType): PointType => ({
    id: offer.id,
    location: offer.location
  }));
};
