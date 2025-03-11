import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextArea.module.css';

const TextArea = ({ name, placeholder, value, onChange, required }) => {
  return (
    <textarea
      className={styles.textarea}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
    />
  );
};

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

TextArea.defaultProps = {
  placeholder: '',
  required: false,
};

export default TextArea;
