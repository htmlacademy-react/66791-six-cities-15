import {Link} from 'react-router-dom';
import Logo from '../../ui/logo';
import {AuthorizationStatus, AppRoute} from '../../../const';

type HeaderProps = {
  isRenderUser: boolean;
  isRootRoute: boolean;
  authStatus: AuthorizationStatus;
}

function Header({isRenderUser, isRootRoute, authStatus}: HeaderProps): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Logo isRootRoute={isRootRoute} />
          </div>
          {isRenderUser && (
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <Link
                    className="header__nav-link header__nav-link--profile"
                    to={AppRoute.Favorites}
                  >
                    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                    {authStatus === AuthorizationStatus.Auth ? (
                      <>
                        <span className="header__user-name user__name">
                          Oliver.conner@gmail.com
                        </span>
                        <span className="header__favorite-count">3</span>
                      </>
                    ) : <span className="header__login">Sign in</span>}

                  </Link>
                </li>
                {authStatus === AuthorizationStatus.Auth && (
                  <li className="header__nav-item">
                    <Link className="header__nav-link" to={AppRoute.Root}>
                      <span className="header__signout">Sign out</span>
                    </Link>
                  </li>
                )}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
