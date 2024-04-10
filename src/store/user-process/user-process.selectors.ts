import {NameSpace} from '../../const';
import {State, UserDataType} from '../../types';
import {AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;

export const getUser = (state: State): UserDataType => state[NameSpace.User].user;
