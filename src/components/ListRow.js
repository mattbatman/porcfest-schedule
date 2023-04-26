import React from 'react';
import { formatSlotFromString } from '../utility/format-slot';

function getDuration({ start, end }) {
  const endTime = new Date(end).getTime();
  const startTime = new Date(start).getTime();
  const diff = endTime - startTime;
  return diff / 1000 / 60;
}

const ListRow = ({ date, events }) => {
  return (
    <>
      {events.map((event, i) => {
        const {
          description,
          endDatetime,
          startDatetime,
          summary,
          timestamp,
          location
        } = event;
        return (
          <tr key={i}>
            {i === 0 ? (
              <td rowSpan={events.length}>
                {formatSlotFromString(startDatetime)}
              </td>
            ) : null}
            <td>
              <div dangerouslySetInnerHTML={{ __html: summary }} />
            </td>
            <td>{location}</td>
            <td>
              {getDuration({
                start: startDatetime,
                end: endDatetime
              })}
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default ListRow;
