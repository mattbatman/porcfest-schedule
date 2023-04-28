import React, { useState } from 'react';
import Link from 'next/link';
import scheduleData from '../data/schedule-2023.json';
import ListRow from '../components/ListRow';
import Modal from '../components/Modal';
import { groupByTime } from '../utility/group-by-time';

const data = groupByTime(scheduleData);

const IndexPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEvent, setModalEvent] = useState(null);

  function handleTitleClick(event) {
    setModalEvent(event);
    setIsModalOpen(true);
  }

  function handleModalClose() {
    setIsModalOpen(false);
  }

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
          {data.map((d) => (
            <ListRow
              key={d.date}
              date={d.date}
              events={d.events}
              onTitleClick={handleTitleClick}
            />
          ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onModalClose={handleModalClose}
        modalEvent={modalEvent}
      />
    </main>
  );
};

export default IndexPage;
