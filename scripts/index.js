const fs = require('fs');
const ICAL = require('ical.js');

const ICS_FILE = './scripts/PorcfestOfflineSchedule.ics';

function generateData() {
  fs.readFile(ICS_FILE, 'utf8', function (err, data) {
    if (err) {
      throw err;
    }

    const [metaString, metaMisc, eventData] = ICAL.parse(data);

    eventData.forEach(function ([string, list]) {
      const [
        uidList,
        summaryList,
        descriptionList,
        locationList,
        startDateTimeList,
        endDateTimeList,
        timestampList
      ] = list;

      console.log(summaryList);
    });
  });
}

generateData();
