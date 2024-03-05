import {Outlet, useLocation} from 'react-router-dom';
import Header from '../common/header';
import Footer from '../common/footer';
import {getClassNameLayout, isRenderFooter} from '../../utils';
import {AppRoute} from '../../const';
import {AuthorizationStatus} from '../../const';

type LayoutProp = {
  authorizationStatus: AuthorizationStatus;
}

function Layout({authorizationStatus}: LayoutProp): JSX.Element {
  const {pathname } = useLocation();
  const currentRoute = pathname as AppRoute;

  return (
    <div className={getClassNameLayout(currentRoute)}>
      <Header
        isRootRoute={currentRoute === AppRoute.Root}
        isRenderUser={!(currentRoute === AppRoute.Login)}
        authStatus={authorizationStatus}
      />
      <Outlet />
      {isRenderFooter(currentRoute) && <Footer />}
    </div>
  );
}

export default Layout;
