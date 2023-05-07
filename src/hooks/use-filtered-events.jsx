import React, { useState, useEffect } from 'react';
import scheduleData from '../data/schedule-2023.json';
import { useFilter } from '../contexts/filter.context';
import { groupByTime } from '../utility/group-by-time';
import { getShouldIncludeDay } from '../utility/get-should-include-day';

const data = groupByTime(scheduleData);

function useFilteredEvents() {
  const [filteredEvents, setFilteredEvents] = useState(data);
  const { dayFilters } = useFilter();

  useEffect(() => {
    const areNoFilters = dayFilters.every(function ({ isActive }) {
      return !isActive;
    });

    if (areNoFilters) {
      setFilteredEvents(data);
      return;
    }

    const remainingDates = data.filter(function ({ date }) {
      return getShouldIncludeDay({ eventDate: date, dayFilters });
    });

    setFilteredEvents(remainingDates);
  }, [data, dayFilters]);

  return { filteredEvents };
}

export { useFilteredEvents };
