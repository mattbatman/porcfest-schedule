import React from 'react';
import { useFilter } from '../contexts/filter.context';

function DayFilters() {
  const { dayFilters, toggleFilterActivity } = useFilter();

  return (
    <ul className="DayFilters">
      {dayFilters.map(function ({ day, isActive }) {
        return (
          <li
            className={isActive ? 'applied-filter' : ''}
            onClick={() => toggleFilterActivity({ day, isActive })}
            key={day}
          >
            {day}
          </li>
        );
      })}
    </ul>
  );
}

export default DayFilters;
