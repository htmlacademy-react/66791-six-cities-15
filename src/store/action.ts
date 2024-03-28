import {createAction} from '@reduxjs/toolkit';

export const changeCity = createAction<string>('service/changeCity');

export const changeSortType = createAction<string>('sort/changeType');
