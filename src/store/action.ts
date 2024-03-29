import {createAction} from '@reduxjs/toolkit';
import {CityNameType} from '../types';

export const changeCity = createAction<CityNameType>('service/changeCity');

export const changeSortType = createAction<string>('sort/changeType');
