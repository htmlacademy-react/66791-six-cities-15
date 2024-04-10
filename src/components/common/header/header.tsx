import {MouseEvent} from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../ui/logo';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {logoutAction} from '../../../store/api-actions';
import {AppRoute, AuthorizationStatus} from '../../../const';
import {getUser} from '../../../store/user-process/user-process.selectors';

type HeaderProps = {
  isRenderUser: boolean;
  isRootRoute: boolean;
  authStatus: AuthorizationStatus;
}

function Header({isRenderUser, isRootRoute, authStatus}: HeaderProps): JSX.Element {
  const user = useAppSelector(getUser);

  const dispatch = useAppDispatch();

  const isAuth = authStatus === AuthorizationStatus.Auth;

  const clickLogoutHandle = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(logoutAction());
  };

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
                    to={isAuth ? AppRoute.Favorites : AppRoute.Login}
                  >
                    <div
                      className="header__avatar-wrapper user__avatar-wrapper"
                      style={{
                        backgroundImage: `url(${user.avatarUrl})`,
                        borderRadius: '50%'
                      }}
                    />
                    {isAuth ? (
                      <>
                        <span className="header__user-name user__name">
                          {user.email}
                        </span>
                        <span className="header__favorite-count">3</span>
                      </>
                    ) : <span className="header__login">Sign in</span>}

                  </Link>
                </li>
                {isAuth && (
                  <li className="header__nav-item">
                    <Link
                      className="header__nav-link"
                      to={AppRoute.Root}
                      onClick={clickLogoutHandle}
                    >
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
