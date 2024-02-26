import apartmentImg01 from '../../markup/img/apartment-01.jpg';
import apartmentImg02 from '../../markup/img/apartment-02.jpg';
import apartmentImg03 from '../../markup/img/apartment-03.jpg';

export type placeCardMocksProps = {
  id: string;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
}

export const placeCardMocks: placeCardMocksProps[] = [
  {
    id: '02cc217d-30c0-41b3-8af9-7273953f8c23',
    title: 'The Pondhouse - A Magical Place',
    type: 'room',
    price: 101,
    previewImage: apartmentImg01,
    isFavorite: true,
    isPremium: false,
    rating: 1.6
  },
  {
    id: 'b130506e-927f-4531-aedb-940ae5d979a1',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'apartment',
    price: 460,
    previewImage: apartmentImg02,
    isFavorite: false,
    isPremium: false,
    rating: 1.9
  },
  {
    id: 'd46049d1-e273-4a23-9e80-297c339ddd8f',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'house',
    price: 255,
    previewImage: apartmentImg03,
    isFavorite: false,
    isPremium: false,
    rating: 3.1
  },
  {
    id: 'e4e6eae4-e6f7-4de6-bc0f-94b729b9fd53',
    title: 'Loft Studio in the Central Area',
    type: 'room',
    price: 210,
    previewImage: apartmentImg01,
    isFavorite: false,
    isPremium: true,
    rating: 4.3
  },
  {
    id: '69ebf2da-0aac-483a-9683-a068f55b81f1',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 151,
    previewImage: apartmentImg03,
    isFavorite: true,
    isPremium: true,
    rating: 5
  },
];
