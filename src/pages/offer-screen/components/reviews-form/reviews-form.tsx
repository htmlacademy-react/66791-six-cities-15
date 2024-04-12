import {useState, ChangeEvent, FormEvent} from 'react';
import {useAppSelector, useAppDispatch} from '../../../../hooks';
import {addRewiewAction} from '../../../../store/api-actions';
import {getOfferCommentDataLoadingStatus} from '../../../../store/service-data/service-data.selectors';
import RatingForm from '../rating-form';
import {CharacterLimitReview} from '../../../../const';

type ChangeFieldHandleType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

type ReviewsFormProps = {
  offerId: string;
}

function ReviewsForm({offerId}: ReviewsFormProps): JSX.Element {
  const isOfferCommentDataLoading = useAppSelector(getOfferCommentDataLoadingStatus);

  const dispatch = useAppDispatch();

  const [reviewsFormData, setReviewsFormData] = useState({
    rating: 0,
    review: ''
  });
  const [checkedStar, setCheckedStar] = useState(0);
  const {rating, review} = reviewsFormData;

  const clickSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(addRewiewAction({
      offerId,
      comment: reviewsFormData.review,
      rating: Number(reviewsFormData.rating)
    }))
      .unwrap()
      .then(() => {
        setReviewsFormData({
          rating: 0,
          review: ''
        });
        setCheckedStar(0);
      });
  };

  const changeFieldHandle = (evt: ChangeFieldHandleType): void => {
    const {name, value} = evt.target;
    setReviewsFormData({...reviewsFormData, [name]: value});

    if (name === 'rating') {
      setCheckedStar(Number(value));
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={clickSubmitHandle}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingForm
        onChange={changeFieldHandle}
        checkedStar={checkedStar}
        isDisabled={isOfferCommentDataLoading}
      />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewsFormData.review}
        onChange={changeFieldHandle}
        disabled={isOfferCommentDataLoading}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe
          your stay with at least{' '}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={
            isOfferCommentDataLoading
              || !rating
              || review.length < CharacterLimitReview.MinChar
              || review.length > CharacterLimitReview.MaxChar
          }
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
