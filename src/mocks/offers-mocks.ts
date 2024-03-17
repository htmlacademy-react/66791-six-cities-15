import {cityMocks} from './city-mocks';
import {OffersType} from '../types';

export const offersMocks: OffersType[] = [
  {
    id: 'b23206da-0873-4b14-87c2-cd5f47cb7cdb',
    title: 'The Pondhouse - A Magical Place',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'house',
    price: 470,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
    city: cityMocks,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/12.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg'
    ],
    goods: [
      'Heating',
      'Dishwasher',
      'Washing machine',
      'Washer',
      'Breakfast'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 1.3,
    bedrooms: 2,
    maxAdults: 3
  },
  {
    id: 'e04f38a0-f4f7-4c3e-8242-76395180dfb8',
    title: 'The Pondhouse - A Magical Place',
    description: 'I am happy to welcome you to my apartment in the city center! Three words: location, cosy and chic!',
    type: 'hotel',
    price: 236,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
    city: cityMocks,
    location: {
      latitude: 52.3609553943508,
      longitude: 4.85309666406198,
      zoom: 16
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/10.jpg'
    ],
    goods: [
      'Washer',
      'Laptop friendly workspace',
      'Dishwasher',
      'Coffee machine',
      'Washing machine',
      'Towels',
      'Breakfast',
      'Baby seat'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: false,
    isFavorite: true,
    rating: 3.3,
    bedrooms: 4,
    maxAdults: 6
  },
  {
    id: 'e0a09a7e-1a94-4a59-8991-a1213fe98dd5',
    title: 'The Pondhouse - A Magical Place',
    description: 'I rent out a very sunny and bright apartment only 7 minutes walking distance to the metro station. The apartment has a spacious living room with a kitchen, one bedroom and a bathroom with mit bath. A terrace can be used in summer.',
    type: 'house',
    price: 801,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
    city: cityMocks,
    location: {
      latitude: 52.3909553943508,
      longitude: 4.929309666406198,
      zoom: 16
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/15.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/9.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg'
    ],
    goods: [
      'Wi-Fi',
      'Breakfast',
      'Heating',
      'Cable TV',
      'Air conditioning'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 2.1,
    bedrooms: 4,
    maxAdults: 4
  },
  {
    id: '50c59f5f-d95b-4525-98bd-9f3707453367',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    type: 'room',
    price: 293,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
    city: cityMocks,
    location: {
      latitude: 52.3809553943508,
      longitude: 4.939309666406198,
      zoom: 16
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/19.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/7.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg'
    ],
    goods: [
      'Fridge',
      'Towels',
      'Baby seat',
      'Kitchen',
      'Washing machine',
      'Dishwasher',
      'Laptop friendly workspace',
      'Heating'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 3,
    bedrooms: 1,
    maxAdults: 2
  },
  {
    id: '63967efb-6880-4820-9027-1a4407439bb7',
    title: 'Tile House',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    type: 'hotel',
    price: 147,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
    city: cityMocks,
    location: {
      latitude: 52.37454,
      longitude: 4.881976,
      zoom: 16
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/14.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/13.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/5.jpg'
    ],
    goods: [
      'Dishwasher',
      'Air conditioning',
      'Wi-Fi',
      'Washer',
      'Coffee machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 3.8,
    bedrooms: 5,
    maxAdults: 10
  },
  {
    id: 'd1bb71dd-dd5b-4ac9-84dd-c7b8b64fd66a',
    title: 'Loft Studio in the Central Area',
    description: 'Peaceful studio in the most wanted area in town. Quiet house Near of everything. Completely renovated. Lovely neighbourhood, lot of trendy shops, restaurants and bars in a walking distance.',
    type: 'room',
    price: 285,
    previewImage: 'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
    city: cityMocks,
    location: {
      latitude: 52.367540000000005,
      longitude: 4.883976,
      zoom: 16
    },
    images: [
      'https://15.design.htmlacademy.pro/static/hotel/16.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/6.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/4.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://15.design.htmlacademy.pro/static/hotel/2.jpg'
    ],
    goods: [
      'Breakfast',
      'Dishwasher',
      'Coffee machine',
      'Baby seat',
      'Towels',
      'Heating',
      'Air conditioning',
      'Washing machine',
      'Washer',
      'Kitchen'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://15.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.5,
    bedrooms: 1,
    maxAdults: 2
  }
];
