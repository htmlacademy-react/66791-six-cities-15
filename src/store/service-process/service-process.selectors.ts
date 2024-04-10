import {NameSpace} from '../../const';
import {CityNameType, SortOffersType, State} from '../../types';

export const getCurrentCity = (state: State): CityNameType => state[NameSpace.Service].currentCity;

export const getActiveSortType = (state: State): SortOffersType => state[NameSpace.Service].activeSortType;
