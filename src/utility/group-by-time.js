import { findIndex, sortBy, prop } from 'ramda';

function groupByTime(fullData) {
  const grouped = fullData.reduce((acc, cv) => {
    const date = new Date(cv.startDatetime);

    const eventIndex = findIndex(function (existingGroup) {
      return existingGroup.date.getTime() === date.getTime();
    }, acc);

    if (eventIndex < 0) {
      const events = [];
      events.push(cv);

      acc.push({
        date,
        events
      });

      return acc;
    }

    acc[eventIndex].events.push(cv);

    return acc;
  }, []);

  const sortByDate = sortBy(prop('date'));

  return sortByDate(grouped);
}

export { groupByTime };
