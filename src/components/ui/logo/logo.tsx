import {Link} from 'react-router-dom';
import {useAppSelector} from '../../../hooks';
import {AppRoute} from '../../../const';

type LogoProps = {
  isRootRoute?: boolean;
  isFooterLogo?: boolean;
}

type LogoLinkProps = LogoProps & {
  children: JSX.Element;
}

function LogoLink ({isRootRoute, isFooterLogo, children}: LogoLinkProps): JSX.Element {
  const currentCity = useAppSelector((state) => state.currentCity);

  const logoLinkClassName = isFooterLogo ? 'footer__logo-link' : 'header__logo-link';

  return (
    isRootRoute ? (
      <a className={`${logoLinkClassName} header__logo-link--active`}>{children}</a>
    ) : (
      <Link className={logoLinkClassName} to={`${AppRoute.Root}?tab=${currentCity.toLowerCase()}`}>{children}</Link>
    )
  );
}

function Logo({isRootRoute, isFooterLogo}: LogoProps): JSX.Element {
  return (
    <LogoLink
      isRootRoute={isRootRoute}
      isFooterLogo={isFooterLogo}
    >
      <img
        className={isFooterLogo ? 'footer__logo' : 'header__logo'}
        src="../../../../markup/img/logo.svg"
        alt="6 cities logo"
        width={isFooterLogo ? 64 : 81}
        height={isFooterLogo ? 33 : 41}
      />
    </LogoLink>
  );
}

export default Logo;
