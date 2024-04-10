import {useState, useEffect, useRef} from 'react';
import {useAppSelector, useAppDispatch} from '../../../../hooks';
import {changeSortType} from '../../../../store/service-process/service-process.slice';
import {SortOffersType} from '../../../../types';
import {SortingOption} from '../../../../const';
import {getActiveSortType} from '../../../../store/service-process/service-process.selectors';

function PlacesSorting(): JSX.Element {
  const sortingTypeRef = useRef(null);
  const sortingOptionsRef = useRef(null);

  const activeSortType = useAppSelector(getActiveSortType);

  const [isPlacesOptionsOpen, setIsPlacesOptionsOpen] = useState(false);

  const dispatch = useAppDispatch();

  const clickPlacesOptionsOpenHandle = (isOpen: boolean): void => setIsPlacesOptionsOpen(isOpen);
  const clickSortingHandle = (type: SortOffersType): void => {
    dispatch(changeSortType(type));

    setIsPlacesOptionsOpen(false);
  };

  useEffect(() => {
    const clickCloseSortOptionsHandle = (evt: MouseEvent): void => {
      if (sortingTypeRef.current && sortingOptionsRef.current) {
        const withinBoundariesBtn = evt.composedPath().includes(sortingTypeRef.current);
        const withinBoundariesModal = evt.composedPath().includes(sortingOptionsRef.current);

        if (!withinBoundariesBtn && !withinBoundariesModal) {
          setIsPlacesOptionsOpen(false);
        }
      }
    };

    const keydownCloseSortOptionsHandle = (evt: KeyboardEvent): void => {
      if (evt.key === 'Escape') {
        evt.preventDefault();
        setIsPlacesOptionsOpen(false);
      }
    };

    document.addEventListener('click', clickCloseSortOptionsHandle);
    document.addEventListener('keydown', keydownCloseSortOptionsHandle);

    return () => {
      document.removeEventListener('click', clickCloseSortOptionsHandle);
      document.removeEventListener('keydown', keydownCloseSortOptionsHandle);
    };
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      &ensp;
      <span
        ref={sortingTypeRef}
        className="places__sorting-type"
        tabIndex={0}
        onClick={() => clickPlacesOptionsOpenHandle(!isPlacesOptionsOpen)}
      >
        {SortingOption[activeSortType]}
        <svg className="places__sorting-arrow" width={7} height={4}>
          <use xlinkHref="#icon-arrow-select"/>
        </svg>
      </span>
      <ul
        ref={sortingOptionsRef}
        className={`places__options places__options--custom ${isPlacesOptionsOpen ? 'places__options--opened' : ''}`}
      >
        {Object.keys(SortingOption).map((option) => (
          <li
            key={option}
            className={`places__option ${option === activeSortType ? 'places__option--active' : ''}`}
            tabIndex={0}
            onClick={() => clickSortingHandle(option as SortOffersType)}
          >
            {SortingOption[option as SortOffersType]}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default PlacesSorting;
