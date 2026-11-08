import type { Review } from '@/types';

export const reviews: Review[] = [
  {
    id: 'b67ddfd5-b953-4a30-8c8d-bd083cd6b62a',
    comment:
      'A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.',
    date: '2019-04-24',
    rating: 4,
    user: {
      name: 'Max',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false,
    },
  },
  {
    id: 'c5a3a1e4-1b7a-4f8b-9a2d-6e1f3c9d8a4b',
    comment:
      'An independent House, strategically located between Rembrand Square and National Opera, but where the bustle of the city comes to rest in this alley flowery and colorful.',
    date: '2019-05-12',
    rating: 5,
    user: {
      name: 'Angelina',
      avatarUrl: '/img/avatar-angelina.jpg',
      isPro: true,
    },
  },
  {
    id: 'f7b4d2c8-9a5e-4d1b-8c6a-3e9f0b2a4c7d',
    comment:
      'A spacious and bright apartment. The host was very welcoming and gave us great tips about the neighbourhood.',
    date: '2019-06-01',
    rating: 3,
    user: {
      name: 'Max',
      avatarUrl: '/img/avatar-max.jpg',
      isPro: false,
    },
  },
];
