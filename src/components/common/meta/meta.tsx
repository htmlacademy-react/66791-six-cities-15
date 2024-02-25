import {Helmet} from 'react-helmet-async';

type MetaProps = {
  titleText: string;
}

function Meta({titleText}: MetaProps): JSX.Element {
  return (
    <Helmet>
      <title>{titleText}</title>
    </Helmet>
  );
}

export default Meta;
