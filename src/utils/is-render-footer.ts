import {matchPath} from 'react-router-dom';
import {AppRoute} from '../const';

export const isRenderFooter = function (pathname: AppRoute): boolean {
  let isRender = true;

  if (matchPath(AppRoute.Login, pathname)
      || matchPath(AppRoute.Root, pathname)
      || matchPath(AppRoute.Offer, pathname)) {
    isRender = false;
  }

  return isRender;
};
