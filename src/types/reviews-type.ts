import {UserType} from './offers-type';

export type ReviewType = {
  id: string;
  date: string;
  user: UserType;
  comment: string;
  rating: number;
}

export type ReviewsType = ReviewType[];

export type ReviewDataType = {
  offerId: string;
  comment: string;
  rating: number;
}
