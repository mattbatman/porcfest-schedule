# PorcFest Schedule 2023

This is a static site of the PorcFest 2023 schedule.

It was built with Node `v18.15.0`.

## Getting started

First, download the PorcFest 2023 ical file [here](https://porcfest.com/schedule/) to `./scripts/PorcfestOfflineSchedule.ics`.

```
# Generate JSON data for site
npm run generate-schedule

# Install the project dependencies
npm install

# Start Next.js in development mode
npm run develop
```