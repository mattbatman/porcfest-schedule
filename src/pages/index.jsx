import React, { useState } from 'react';
import Link from 'next/link';
import ListRow from '../components/ListRow';
import Modal from '../components/Modal';
import DayFilters from '../components/DayFilters';
import { useFilteredEvents } from '../hooks/use-filtered-events';

const IndexPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalEvent, setModalEvent] = useState(null);
  const { filteredEvents } = useFilteredEvents();

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
        Last updated May 27, 2023. This site does not sync in real time with the
        official <a href="https://porcfest.com/schedule/">PorcFest schedule</a>.
      </p>
      <p>
        <Link href="/grid">Grid View</Link>
      </p>
      <DayFilters />
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
          {filteredEvents.map((d) => (
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
