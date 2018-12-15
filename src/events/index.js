import eventsIn2016 from './2016';
import eventsIn2017 from './2017';
import eventsIn2018 from './2018';
import eventsIn2019 from './2019';

const events = [].concat(eventsIn2016, eventsIn2017, eventsIn2018, eventsIn2019);

events.forEach(event => {
  event.range = [
    new Date(`${event.range[0]} 00:00:00`).getTime(),
    new Date(`${event.range[1] || event.range[0]} 23:59:59`).getTime(),
  ];
});

export default events;
