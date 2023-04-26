const fs = require('fs');
const ICAL = require('ical.js');

const ICS_FILE = './scripts/PorcfestOfflineSchedule.ics';
const OUTPUT_FILE = './src/data/schedule-2023.json';

function generateData() {
  fs.readFile(ICS_FILE, 'utf8', function (err, data) {
    if (err) {
      throw err;
    }

    const [metaString, metaMisc, eventData] = ICAL.parse(data);

    const jsonData = eventData.map(function ([string, list]) {
      const [
        uidList,
        summaryList,
        descriptionList,
        locationList,
        startDatetimeList,
        endDatetimeList,
        timestampList
      ] = list;

      return {
        summary: summaryList[3],
        description: descriptionList[3],
        location: locationList[3],
        startDatetime: startDatetimeList[3],
        endDatetime: endDatetimeList[3],
        timestamp: timestampList[3]
      };
    });

    writeJson(jsonData);
  });
}

function writeJson(data) {
  fs.writeFile(OUTPUT_FILE, JSON.stringify(data), function (err) {
    if (err) {
      console.log('Failed to write!');
      console.log(err);
      return;
    }

    console.log('Done writing schedule JSON.');
  });
}

generateData();
