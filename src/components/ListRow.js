import React from 'react';

function formatSlotFromString(datetime) {
  return new Date(datetime).toLocaleDateString('en-US', {
    weekday: 'short',
    hour: 'numeric',
    minute: 'numeric'
  });
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
            <td>end-start</td>
          </tr>
        );
      })}
    </>
  );
};

export default ListRow;
