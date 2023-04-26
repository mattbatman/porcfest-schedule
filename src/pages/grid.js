import React from 'react';
import { findIndex, uniq } from 'ramda';
import Link from 'next/link';
import GridRow from '../components/GridRow';
import { groupByTime } from '../utility/group-by-time';
import scheduleData from '../data/schedule-2023.json';

const data = groupByTime(scheduleData);

const locations = scheduleData.map(({ location }) => location);
const allUniqueLocations = uniq(locations);

const GridPage = () => {
  return (
    <main className="grid-page">
      <title>PorcFest Schedule 2023 | Grid</title>
      <h1>PorcFest Schedule 2023</h1>
      <p>
        This is an attempt to replicate the events from the main{' '}
        <a href="https://porcfest.com/schedule/">PorcFest schedule</a>.
      </p>
      <p>
        <Link href="/">List View</Link>
      </p>
      <table>
        <thead>
          <tr>
            <th key="time"></th>
            {allUniqueLocations.map((d) => (
              <th key={d}>{d}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((d) => (
            <GridRow data={d} key={d.date} allLocations={allUniqueLocations} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default GridPage;
