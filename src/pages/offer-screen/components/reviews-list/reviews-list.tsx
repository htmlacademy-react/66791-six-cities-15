import ReviewsItem from '../reviews-item';
import {ReviewsType} from '../../../../types';

type ReviewsListProps = {
  reviews: ReviewsType;
}

function ReviewsList({reviews}: ReviewsListProps): JSX.Element {
  return (
    <ul className="reviews__list">
      {reviews.map((review) => (
        <ReviewsItem
          key={review.id}
          review={review}
        />
      ))}
    </ul>
  );
}

export default ReviewsList;
