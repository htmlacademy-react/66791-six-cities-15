import Meta from '../../components/common/meta';

const nothingFoundStates = {
  page: {
    metaTitle: '6/Cities. 404 Page Not Found',
    title: '404 Page Not Found',
    status: '404 Page Not Found',
    statusDescription: 'The resource requested could not be found on this server!',
    icon: '../../../public/img/ico-404.svg'
  },
  offer: {
    metaTitle: '6/Cities. 404 Offer Not Found',
    title: '404 Offer Not Found',
    status: '404 Offer Not Found',
    statusDescription: 'Ooops! We have no offers with that ID!',
    icon: '../../../public/img/ico-offer-404.svg'
  },
  favorites: {
    metaTitle: '6/Cities. Nothing yet saved.',
    title: 'Favorites (empty)',
    status: 'Nothing yet saved.',
    statusDescription: 'Save properties to narrow down search or plan your future trips.',
    icon: ''
  }
};

type NothingFoundScreenProps = {
  state: keyof typeof nothingFoundStates;
}

function NothingFoundScreen({state}: NothingFoundScreenProps): JSX.Element {
  const {
    metaTitle,
    title,
    status,
    statusDescription,
    icon
  } = nothingFoundStates[state];

  return (
    <>
      <Meta titleText={metaTitle} />

      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">{title}</h1>
            <div
              className="favorites__status-wrapper"
              style={icon ? {
                backgroundImage: `url(${icon})`
              } : {}}
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
