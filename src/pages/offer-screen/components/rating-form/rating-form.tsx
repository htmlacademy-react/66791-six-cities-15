import {Fragment} from 'react';
import {NUMBER_STARS, StarsTitle} from '../../../../const';
import {firstLetterToUppercase} from '../../../../utils';

function RatingForm(): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {Array(NUMBER_STARS).fill('star').map((item, index, stars) => {
        const starIndex = stars.length - index;
        const declension = (starIndex === 1) ? 'star' : 'stars';
        const starTitle = StarsTitle[
          `${firstLetterToUppercase(declension)}${starIndex}` as keyof typeof StarsTitle
        ];

        return (
          <Fragment key={`${item}-${starTitle}`}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              defaultValue={starIndex}
              id={`${starIndex}-${declension}`}
              type="radio"
            />
            <label
              htmlFor={`${starIndex}-${declension}`}
              className="reviews__rating-label form__rating-label"
              title={starTitle}
            >
              <svg className="form__star-image" width={37} height={33}>
                <use xlinkHref="#icon-star"/>
              </svg>
            </label>
          </Fragment>
        );
      })}
    </div>
  );
}

export default RatingForm;
