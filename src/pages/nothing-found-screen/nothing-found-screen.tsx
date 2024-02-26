import Meta from '../../components/common/meta';
import Footer from '../../components/common/footer';

function NothingFoundScreen(): JSX.Element {
  return (
    <div className="page page--favorites-empty">
      <Meta titleText="6/Cities. 404 Not Found" />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">404 Not Found</h1>
            <div
              className="favorites__status-wrapper"
              style={{
                backgroundImage: 'url("../../../public/img/ico-404.svg")'
              }}
            >
              <b className="favorites__status">404 Not Found</b>
              <p className="favorites__status-description">
                The resource requested could not be found on this server!
              </p>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NothingFoundScreen;
