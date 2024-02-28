import {matchPath} from 'react-router-dom';
import {AppRoute} from '../const';

export const getClassNameLayout = function (pathname: AppRoute):string {
  const isRootRoute = pathname === AppRoute.Root;
  const isLoginRoute = pathname === AppRoute.Login;
  const isNotRoute = !Object.keys(AppRoute).some((route) => matchPath(
    AppRoute[route as keyof typeof AppRoute], pathname
  ));
  let classNameLayout = 'page';

  if (isRootRoute) {
    classNameLayout += ' page--gray page--main';
  }

  if (isLoginRoute) {
    classNameLayout += ' page--gray page--login';
  }

  if (isNotRoute) {
    classNameLayout += ' page--favorites-empty';
  }

  return classNameLayout;
};
