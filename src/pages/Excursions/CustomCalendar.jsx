import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './CustomCalendar.module.css';

const CustomCalendar = ({ date, setDate }) => {
  return (
    <Calendar
      onChange={setDate}
      value={date}
      locale="es-ES"
      className={styles.customCalendar}
    />
  );
};

export default CustomCalendar;
