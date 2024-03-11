import {UserType} from './offers-type';

export type ReviewType = {
  id: string;
  comment: string;
  date: string;
  rating: number;
  user: UserType;
}

export type ReviewsType = {
  [key: string]: ReviewType[];
}
