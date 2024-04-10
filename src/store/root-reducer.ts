import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../const';
import {serviceData} from './service-data/service-data.slice';
import {serviceProcess} from './service-process/service-process.slice';
import {userProcess} from './user-process/user-process.slice';

export const rootReducer = combineReducers({
  [NameSpace.Data]: serviceData.reducer,
  [NameSpace.Service]: serviceProcess.reducer,
  [NameSpace.User]: userProcess.reducer,
});
