import { Offer } from '@/types/offer.type';
import { createAction } from '@reduxjs/toolkit';

export const changeCityName = createAction<string>('city/change');
export const setOffers = createAction<Offer[]>('offers/set');
