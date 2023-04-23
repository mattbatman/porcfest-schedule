const fs = require('fs');
const ICAL = require('ical.js');

function generateData() {
  fs.readFile(
    './scripts/PorcfestOfflineSchedule.ics',
    'utf8',
    function (err, data) {
      if (err) {
        throw err;
      }

      const jcalData = ICAL.parse(data);
      console.log(jcalData);
    }
  );
}

generateData();
