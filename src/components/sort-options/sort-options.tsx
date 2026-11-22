import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { SORT_TYPES, type SortType } from './sort-options.types';

type SortOptionsProps = {
  sortType: SortType;
  onSortTypeChange: (sortType: SortType) => void;
};

export const SortOptions = ({
  sortType,
  onSortTypeChange,
}: SortOptionsProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOptions = () => setIsOpen((opened) => !opened);

  const handleTriggerKeyDown = (
    event: KeyboardEvent<HTMLSpanElement>,
  ) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleOptions();
    }
  };

  const selectSortType = (option: SortType) => {
    onSortTypeChange(option);
    setIsOpen(false);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={toggleOptions}
        onKeyDown={handleTriggerKeyDown}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom${isOpen ? ' places__options--opened' : ''}`}
        role="listbox"
        aria-label="Sort offers"
      >
        {SORT_TYPES.map((option) => (
          <li
            key={option}
            className={`places__option${sortType === option ? ' places__option--active' : ''}`}
            tabIndex={0}
            role="option"
            aria-selected={sortType === option}
            onClick={() => selectSortType(option)}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                selectSortType(option);
              }
            }}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
};
