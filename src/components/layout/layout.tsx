import {Outlet, useLocation} from 'react-router-dom';
import Header from '../common/header';
import Footer from '../common/footer';
import {getClassNameLayout, isRenderFooter} from '../../utils';
import {AppRoute} from '../../const';
import {AuthorizationStatus} from '../../const';
import {OffersType} from '../../types';

type LayoutProp = {
  authorizationStatus: AuthorizationStatus;
  offers: OffersType[];
}

function Layout({authorizationStatus, offers}: LayoutProp): JSX.Element {
  const {pathname } = useLocation();
  const currentRoute = pathname as AppRoute;

  return (
    <div className={getClassNameLayout(currentRoute, offers)}>
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
