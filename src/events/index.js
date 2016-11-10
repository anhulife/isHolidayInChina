import eventsIn2016 from './2016';

const events = [].concat(eventsIn2016);

events.forEach(event => {
  event.range = [
    new Date(`${event.range[0]} 00:00:00`).getTime(),
    new Date(`${event.range[1] || event.range[0]} 23:59:59`).getTime(),
  ];
});

export default events;
