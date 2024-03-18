import {NUMBER_STARS} from '../const';

export const percentageStars = function (rating: number): number {
  return rating * 100 / NUMBER_STARS;
};
