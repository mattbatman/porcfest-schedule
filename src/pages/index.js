import React from 'react';
import { findIndex } from 'ramda';
import Link from 'next/link';
import scheduleData from '../data/schedule-2023.json';
import ListRow from '../components/ListRow';

const IndexPage = () => {
  console.log('schedule data ----');
  console.log(scheduleData);
  return (
    <main className="list-page">
      <title>PorcFest Schedule 2023</title>
      <h1>PorcFest Schedule 2023</h1>
      <p>
        This is an attempt to replicate the events from the main{' '}
        <a href="https://porcfest.com/schedule/">PorcFest schedule</a> by
        downloading the `.ics` and rebuilding as a static website. It does not
        sync in real time.
      </p>
      <p>
        <Link href="/grid">Grid View</Link>
      </p>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Event</th>
            <th>Location</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {/* {scheduleData.map((d) => (
            <ListRow key={d.date} date={d.date} events={d.events} />
          ))} */}
        </tbody>
      </table>
    </main>
  );
};

export default IndexPage;
