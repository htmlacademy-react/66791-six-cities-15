import {Outlet, useLocation} from 'react-router-dom';
import Header from '../common/header';
import Footer from '../common/footer';
import {getClassNameLayout, isRenderFooter} from '../../utils';
import {AppRoute} from '../../const';

function Layout(): JSX.Element {
  const {pathname } = useLocation();
  const currentRoute = pathname as AppRoute;

  return (
    <div className={getClassNameLayout(currentRoute)}>
      <Header
        isLoginRoute={currentRoute === AppRoute.Root}
        isRenderUser={!(currentRoute === AppRoute.Login)}
      />
      <Outlet />
      {isRenderFooter(currentRoute) && <Footer />}
    </div>
  );
}

export default Layout;
