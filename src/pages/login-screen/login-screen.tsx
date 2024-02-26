import Meta from '../../components/common/meta';
import Header from '../../components/common/header';
import LocationsItem from '../../components/ui/locations-item';

function LoginScreen(): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Meta titleText="6/Cities. Authorization" />
      <Header isLoginHeader />
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form" action="#" method="post">
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
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
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button className="login__submit form__submit button" type="submit">
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <LocationsItem city="Amsterdam" />
          </section>
        </div>
      </main>
    </div>
  );
}

export default LoginScreen;
