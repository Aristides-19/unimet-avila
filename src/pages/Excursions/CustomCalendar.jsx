import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './CustomCalendar.module.css';
import PropTypes from 'prop-types';

const CustomCalendar = ({ date, setDate }) => {
  return (
    <Calendar
      onChange={setDate}
      value={date}
      locale='es-ES'
      className={styles.customCalendar}
    />
  );
};

CustomCalendar.propTypes = {
  date: PropTypes.isRequired,
  setDate: PropTypes.isRequired,
};

export default CustomCalendar;
