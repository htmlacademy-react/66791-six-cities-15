import {percentageStars} from '../../../../utils';
import {ReviewType} from '../../../../types';

type ReviewsItemProps = {
  review: ReviewType;
}

function ReviewsItem({review}: ReviewsItemProps): JSX.Element {
  const {comment, date, rating, user} = review;
  const reviewDate = new Date(date);

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={user.avatarUrl}
            width={54}
            height={54}
            alt={`Reviews avatar ${user.name}`}
          />
        </div>
        <span className="reviews__user-name">{user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${percentageStars(rating)}%`}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment}</p>
        <time className="reviews__time" dateTime={reviewDate.toLocaleDateString('en-CA')}>
          {reviewDate.toLocaleString('en-CA',{ month:'long', year:'numeric' })}
        </time>
      </div>
    </li>
  );
}

export default ReviewsItem;
