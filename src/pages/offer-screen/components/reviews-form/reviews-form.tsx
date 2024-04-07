import {useState, ChangeEvent, FormEvent} from 'react';
import {useAppDispatch} from '../../../../hooks';
import {addRewiewAction} from '../../../../store/api-actions';
import RatingForm from '../rating-form';

type ChangeFieldHandleType = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>

type ReviewsFormProps = {
  offerId: string;
}

function ReviewsForm({offerId}: ReviewsFormProps): JSX.Element {
  const dispatch = useAppDispatch();

  const [reviewsFormData, setReviewsFormData] = useState({
    rating: 0,
    review: ''
  });
  const {rating, review} = reviewsFormData;

  const clickSubmitHandle = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(addRewiewAction({
      offerId,
      comment: reviewsFormData.review,
      rating: +reviewsFormData.rating
    }));

    setReviewsFormData({
      rating: 0,
      review: ''
    });
  };

  const changeFieldHandle = (evt: ChangeFieldHandleType): void => {
    const {name, value} = evt.target;
    setReviewsFormData({...reviewsFormData, [name]: value});
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={clickSubmitHandle}>
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <RatingForm onChange={changeFieldHandle} />
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={reviewsFormData.review}
        onChange={changeFieldHandle}
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
          disabled={rating === 0 || review.length < 50 || review.length > 300}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default ReviewsForm;
