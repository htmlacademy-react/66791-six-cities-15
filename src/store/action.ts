import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('service/changeCity');

export const renderOffers = createAction('service/renderOffers');

export const changeSortType = createAction<string>('sort/changeType');

export const sortPopular = createAction('sort/popular');

export const sortPriceLowToHigh = createAction('sort/priceLowToHigh');

export const sortPriceHighToLow = createAction('sort/priceHighToLow');

export const sortTopRatedFirst = createAction('sort/topRatedFirst');
