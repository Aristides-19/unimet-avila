import React from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import PropTypes from 'prop-types';
import styles from './SliderRange.module.css';

export const SliderRange = ({ min, max, value, className, type, setValue }) => {
  const handleStyle = {
    backgroundColor: 'var(--earth-sky)',
    borderColor: 'var(--earth-sky)',
    height: '16px',
    width: '16px',
    cursor: 'pointer',
  };

  const trackStyle = {
    backgroundColor: 'var(--forest)',
    height: '2px',
    borderRadius: '4px',
    marginTop: '2px',
  };

  const railStyle = {
    backgroundColor: 'lightgrey',
    height: '2px',
    borderRadius: '4px',
    marginTop: '2px',
  };

  return (
    <div className={styles.container}>
      <span>
        {value[0]}
        {type}
      </span>
      <Slider
        range
        min={min}
        max={max}
        value={value}
        className={className}
        onChange={(value) => setValue(value)}
        handleStyle={[handleStyle, handleStyle]}
        trackStyle={trackStyle}
        railStyle={railStyle}
      />
      <span>
        {value[1]}
        {type}
      </span>
    </div>
  );
};

SliderRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  className: PropTypes.object,
  type: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};
