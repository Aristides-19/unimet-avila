import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styles from './CustomCalendar.module.css';
import PropTypes from 'prop-types';

const CustomCalendar = ({ date, setDate }) => {
  const handleDateChange = (newDate) => {
    if (date && newDate.getTime() === date.getTime()) {
      setDate(null);
    } else {
      setDate(newDate);
    }
  };
  return (
    <Calendar
      onChange={handleDateChange}
      value={date}
      locale='es-ES'
      className={styles.customCalendar}
    />
  );
};

CustomCalendar.propTypes = {
  date: PropTypes.objectOf(Date).isRequired,
  setDate: PropTypes.func.isRequired,
};

export default CustomCalendar;
