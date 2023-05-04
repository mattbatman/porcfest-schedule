import React, { useState } from 'react';

function DayFilters() {
  const [dayFilters, setDayFilters] = useState([
    {
      day: 'monday',
      isActive: false
    },
    {
      day: 'tuesday',
      isActive: false
    },
    {
      day: 'wednesday',
      isActive: false
    },
    {
      day: 'thursday',
      isActive: false
    },
    {
      day: 'friday',
      isActive: false
    },
    {
      day: 'saturday',
      isActive: false
    },
    {
      day: 'sunday',
      isActive: false
    }
  ]);

  function toggleFilterActivity({ day, isActive }) {
    setDayFilters(
      dayFilters.map(function (d) {
        if (day === d.day) {
          return {
            day,
            isActive: !d.isActive
          };
        }

        return d;
      })
    );
  }

  return (
    <ul className="DayFilters">
      {dayFilters.map(function ({ day, isActive }) {
        return (
          <li
            className={isActive ? 'applied-filter' : ''}
            onClick={() => toggleFilterActivity({ day, isActive })}
          >
            {day}
          </li>
        );
      })}
    </ul>
  );
}

export default DayFilters;
