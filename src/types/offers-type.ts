export type UserType = {
  isPro: boolean;
  name: string;
  avatarUrl: string;
}

export type OffersType = {
  id: string;
  title: string;
  description: string;
  type: string;
  price: number;
  previewImage: string;
  images: string[];
  goods: string[];
  host: UserType;
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  bedrooms: number;
  maxAdults: number;
}
