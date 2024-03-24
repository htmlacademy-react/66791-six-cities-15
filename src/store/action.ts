import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('service/changeCity');

export const renderOffers = createAction('service/renderOffers');
