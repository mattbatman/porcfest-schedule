import React, { useState } from 'react';
import { uniq } from 'ramda';
import Link from 'next/link';
import GridRow from '../components/GridRow';
import Modal from '../components/Modal';
import DayFilters from '../components/DayFilters';
import Search from '../components/Search';
import { useFilteredEvents } from '../hooks/use-filtered-events';
import scheduleData from '../data/schedule-2023.json';

const locations = scheduleData.map(({ location }) => location);
const allUniqueLocations = uniq(locations);

const GridPage = () => {
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
    <main className="grid-page">
      <title>PorcFest Schedule 2023 | Grid</title>
      <h1>PorcFest Schedule 2023</h1>
      <p>
        Last updated June 20, 2023. This site does not sync in real time with
        the official{' '}
        <a href="https://porcfest.com/schedule/">PorcFest schedule</a>. PorcFest
        offers a Google Sheet of their schedule{' '}
        <a href="https://docs.google.com/spreadsheets/d/1UuR36CxvXnDQ14NAk2plr9V_3jpKp4VQKYJVygAr0cA/edit#gid=0">
          here
        </a>
        .
      </p>

      <p>
        <Link href="/">List View</Link>
      </p>
      <DayFilters />
      <Search />
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
          {filteredEvents.map((d) => (
            <GridRow
              data={d}
              key={d.date}
              allLocations={allUniqueLocations}
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

export default GridPage;
