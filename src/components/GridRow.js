import React from 'react';
import { find } from 'ramda';
import { formatSlotFromString } from '../utility/format-slot';

const GridRow = ({ data, allLocations }) => {
  const { date, events } = data;

  return (
    <tr>
      <td>{formatSlotFromString(date)}</td>
      {allLocations.map((d, i) => {
        const event = find((e) => e.location === d)(events);

        return (
          <td key={i}>
            {event && event.summary ? (
              <div dangerouslySetInnerHTML={{ __html: event.summary }} />
            ) : null}
          </td>
        );
      })}
    </tr>
  );
};

export default GridRow;
