type OfferInsideProps = {
  goods: string[];
}

function OfferInside({goods}: OfferInsideProps): JSX.Element {
  return (
    <ul className="offer__inside-list">
      {goods.map((good) => (
        <li className="offer__inside-item" key={`${good}`}>{good}</li>
      ))}
    </ul>
  );
}

export default OfferInside;
