import events from './events';

const isHoliday = date => {
  const time = date.getTime();
  const event = events.find(({ range }) => time >= range[0] && time <= range[1]);

  if (event) {
    return event.holiday;
  }

  const day = date.getDay();

  return day === 6 || day === 0;
};

export default isHoliday;
