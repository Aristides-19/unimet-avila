import React from 'react';
import styles from './EditableField.module.css';
import { FaRegEdit } from 'react-icons/fa';
import PropTypes from 'prop-types';

function EditableField({ label, value }) {
  return (
    <div className={styles.fieldContainer}>
      <div className={styles.fieldInfo}>
        <label className={styles.fieldLabel}>{label}</label>
        <p className={styles.fieldValue}>{value}</p>
      </div>
      <button className={styles.editButton}>
        <div className={styles.buttonContent}>
          <FaRegEdit className={styles.editIcon} />
          <span className={styles.buttonText}>Cambiar</span>
        </div>
      </button>
    </div>
  );
}
EditableField.propTypes = {
  label: PropTypes.isRequired,
  value: PropTypes.isRequired,
};
export default EditableField;
