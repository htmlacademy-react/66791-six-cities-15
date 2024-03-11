import {matchPath} from 'react-router-dom';
import {AppRoute} from '../const';

export const isRenderFooter = function (pathname: AppRoute, isNotFound: boolean): boolean {
  let isRender = true;

  if (matchPath(AppRoute.Login, pathname)
      || matchPath(AppRoute.Root, pathname)
      || matchPath(AppRoute.Offer, pathname) && !isNotFound) {
    isRender = false;
  }

  return isRender;
};
