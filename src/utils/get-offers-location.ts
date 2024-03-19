import {OffersType, PointType, PointsType} from '../types';

export const getOffersLocation = function (offers: OffersType[]): PointsType {
  return offers.map((offer: OffersType): PointType => ({
    id: offer.id,
    location: offer.location
  }));
};
