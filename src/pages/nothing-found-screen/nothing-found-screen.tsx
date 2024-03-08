import Meta from '../../components/common/meta';

type NothingFoundScreenProps = {
  isFavoritesEmpty?: boolean;
}

function NothingFoundScreen({isFavoritesEmpty}: NothingFoundScreenProps): JSX.Element {
  const nothingFoundState = () => {
    const state = {
      metaTitle: '',
      title: '',
      status: '',
      statusDescription: ''
    };

    if (isFavoritesEmpty) {
      state.metaTitle = '6/Cities. Nothing yet saved.';
      state.title = 'Favorites (empty)';
      state.status = 'Nothing yet saved.';
      state.statusDescription = 'Save properties to narrow down search or plan your future trips.';
    } else {
      state.metaTitle = '6/Cities. 404 Not Found';
      state.title = state.status = '404 Not Found';
      state.statusDescription = 'The resource requested could not be found on this server!';
    }

    return state;
  };

  const {metaTitle, title, status, statusDescription} = nothingFoundState();

  return (
    <>
      <Meta titleText={metaTitle} />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">{title}</h1>
            <div
              className="favorites__status-wrapper"
              style={isFavoritesEmpty ? {} : {
                backgroundImage: 'url("../../../public/img/ico-404.svg")'
              }}
            >
              <b className="favorites__status">{status}</b>
              <p className="favorites__status-description">{statusDescription}</p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default NothingFoundScreen;
