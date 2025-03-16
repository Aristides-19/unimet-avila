import React from 'react';
import PropTypes from 'prop-types';
import styles from './InputField.module.css';

const InputField = ({
  type,
  name,
  placeholder,
  value,
  onChange,
  required,
  className = '',
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      className={`${styles.inputField} ${className}`}
    />
  );
};

InputField.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  className: PropTypes.string,
};

export default InputField;
