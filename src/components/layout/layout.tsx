import {Outlet, useLocation} from 'react-router-dom';
import Header from '../common/header';
// import Footer from '../common/footer';
import {AppRoute} from '../../const';

function getClassNameLayout(isRootRoute: boolean, isLoginRoute: boolean): string {
  let classNameLayout = 'page';

  if (isRootRoute) {
    classNameLayout += ' page--gray page--main';
  }

  if (isLoginRoute) {
    classNameLayout += ' page--gray page--login';
  }

  return classNameLayout;
}

function Layout(): JSX.Element {
  const {pathname } = useLocation();
  const currentRoute = pathname as AppRoute;
  const isRootRoute = currentRoute === AppRoute.Root;
  const isLoginRoute = currentRoute === AppRoute.Login;

  return (
    <div className={getClassNameLayout(isRootRoute, isLoginRoute)}>
      <Header
        isLoginRoute={isRootRoute}
        isRenderUser={!isLoginRoute}
      />
      <Outlet />
      {/*<Footer />*/}
    </div>
  );
}

export default Layout;
