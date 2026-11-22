import { City, Offer } from '@/types/offer.type';
import { createReducer } from '@reduxjs/toolkit';
import { changeCityName, setOffers } from './action';

type AppState = {
  cityName: string;
  offers: Offer[];
};

const initialState: AppState = {
  cityName: 'Paris',
  offers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeCityName, (state, action) => {
    state.cityName = action.payload;
  });
  builder.addCase(setOffers, (state, action) => {
    state.offers = action.payload;
  });
});
