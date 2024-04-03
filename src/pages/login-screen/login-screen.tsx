import {useRef, FormEvent} from 'react';
import Meta from '../../components/common/meta';
import LocationsItem from '../../components/ui/locations-item';
import {useAppSelector, useAppDispatch} from '../../hooks';
import {changeCity} from '../../store/action';
import {loginAction} from '../../store/api-actions';
import {CityNameType} from '../../types';

function LoginScreen(): JSX.Element {
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const currentCity = useAppSelector((state) => state.currentCity);

  const dispatch = useAppDispatch();

  const clickSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      dispatch(loginAction({
        login: loginRef.current.value,
        password: passwordRef.current.value
      }));
    }
  };

  const clickChangeCityHandle = (changedCity: CityNameType): void => {
    dispatch(changeCity(changedCity));
  };

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
