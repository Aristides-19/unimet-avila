import React from 'react';
import PropTypes from 'prop-types';
import styles from './SuccessMessage.module.css';

const SuccessMessage = ({ message }) => {
  return <p className={styles.success}>{message}</p>;
};

SuccessMessage.propTypes = {
  message: PropTypes.string.isRequired,
};

export default SuccessMessage;