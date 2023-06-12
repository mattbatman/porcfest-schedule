import React, { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

function FilterProvider({ children }) {
  const [dayFilters, setDayFilters] = useState([
    {
      day: 'monday',
      isActive: false,
      ofWeek: 1
    },
    {
      day: 'tuesday',
      isActive: false,
      ofWeek: 2
    },
    {
      day: 'wednesday',
      isActive: false,
      ofWeek: 3
    },
    {
      day: 'thursday',
      isActive: false,
      ofWeek: 4
    },
    {
      day: 'friday',
      isActive: false,
      ofWeek: 5
    },
    {
      day: 'saturday',
      isActive: false,
      ofWeek: 6
    },
    {
      day: 'sunday',
      isActive: false,
      ofWeek: 0
    }
  ]);
  const [search, setSearch] = useState('');

  function toggleFilterActivity({ day, isActive }) {
    setDayFilters(
      dayFilters.map(function (d) {
        if (day === d.day) {
          return {
            ...d,
            day,
            isActive: !d.isActive
          };
        }

        return d;
      })
    );
  }

  const value = {
    dayFilters,
    toggleFilterActivity,
    search,
    setSearch
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

function useFilter() {
  const context = useContext(FilterContext);

  if (context === undefined) {
    throw new Error('useFilter must be used within a CountProvider');
  }
  return context;
}

export { FilterProvider, useFilter };
