import React from 'react';
import PropTypes from 'prop-types';

const SelectField = ({ name, value, onChange, required, options }) => {
  return (
    <select name={name} value={value} onChange={onChange} required={required}>
      <option value=''>Selecciona tu género</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SelectField;
