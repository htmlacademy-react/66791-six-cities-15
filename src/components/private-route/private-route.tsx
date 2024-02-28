import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';

type PrivateRouteProps = {
  authorizationStatus: AuthorizationStatus;
  isReverse?: boolean;
  children: JSX.Element;
}

function PrivateRoute({authorizationStatus, isReverse, children}: PrivateRouteProps): JSX.Element {
  const isReverseAuthStatus = isReverse ? AuthorizationStatus.NoAuth : AuthorizationStatus.Auth;

  return (
    authorizationStatus === isReverseAuthStatus
      ? children
      : <Navigate to={isReverse ? AppRoute.Root : AppRoute.Login} />
  );
}

export default PrivateRoute;
