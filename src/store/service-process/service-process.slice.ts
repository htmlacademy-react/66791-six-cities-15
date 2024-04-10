import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {NameSpace, CITIES} from '../../const';
import {CityNameType, ServiceProcessType, SortOffersType} from '../../types';

const initialState: ServiceProcessType = {
  currentCity: CITIES[0],
  activeSortType: 'SortPopular',
};

export const serviceProcess = createSlice({
  name: NameSpace.Service,
  initialState,
  reducers: {
    changeCity: (state, action: PayloadAction<CityNameType>) => {
      state.currentCity = action.payload;
    },
    changeSortType: (state, action: PayloadAction<SortOffersType>) => {
      state.activeSortType = action.payload;
    },
  }
});

export const {changeCity, changeSortType} = serviceProcess.actions;
