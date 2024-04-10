import {useRef, FormEvent, useCallback} from 'react';
import {toast} from 'react-toastify';
import Meta from '../../components/common/meta';
import LocationsItem from '../../components/ui/locations-item';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/service-process/service-process.slice';
import {loginAction} from '../../store/api-actions';
import {CityNameType} from '../../types';
import {getCurrentCity} from '../../store/service-process/service-process.selectors';

function LoginScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const currentCity = useAppSelector(getCurrentCity);

  const dispatch = useAppDispatch();

  const clickSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      const loginValue = loginRef.current.value.trim();
      const passValue = passwordRef.current.value.trim();

      if (!!loginValue && !!passValue) {
        dispatch(loginAction({
          login: loginValue,
          password: passValue
        }));
      } else {
        toast.error('The password cannot contain spaces!', {
          toastId: 'error-spaces'
        });
      }
    }
  };

  const clickChangeCityHandle = useCallback((changedCity: CityNameType): void => {
    dispatch(changeCity(changedCity));
  }, [dispatch]);

  return (
    <>
      <Meta titleText="6/Cities. Authorization" />

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post" onSubmit={clickSubmitHandle}>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <LocationsItem
              city={currentCity}
              clickChangeCityHandle={clickChangeCityHandle}
            />
          </section>
        </div>
      </main>
    </>
  );
}

export default LoginScreen;
