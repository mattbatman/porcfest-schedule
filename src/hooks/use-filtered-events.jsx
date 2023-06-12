import React, { useState, useEffect } from 'react';
import scheduleData from '../data/schedule-2023.json';
import { useFilter } from '../contexts/filter.context';
import { groupByTime } from '../utility/group-by-time';
import { getShouldIncludeDay } from '../utility/get-should-include-day';

const data = groupByTime(scheduleData);

function useFilteredEvents() {
  const [filteredEvents, setFilteredEvents] = useState(data);
  const { dayFilters, search } = useFilter();

  useEffect(() => {
    const areNoFilters = dayFilters.every(function ({ isActive }) {
      return !isActive;
    });

    const withMatchText = data.map(function (d) {
      const { events } = d;

      const matchingEvents = events.filter(function (event) {
        const { description, location, summary } = event;
        const matchText = `${location} ${summary} ${description}`.toLowerCase();
        const regex = new RegExp(search.toLowerCase());

        return regex.test(matchText)
      });

      return {
        ...d,
        events: matchingEvents
      };
    })
      .filter(function ({ events }) {
        return events.length > 0;
      }) ;

    if (areNoFilters) {
      setFilteredEvents(withMatchText);
      return;
    }

    const remainingDates = withMatchText.filter(function ({ date }) {
      return getShouldIncludeDay({ eventDate: date, dayFilters });
    });

    setFilteredEvents(remainingDates);
  }, [data, dayFilters, search]);

  return { filteredEvents };
}

export { useFilteredEvents };
