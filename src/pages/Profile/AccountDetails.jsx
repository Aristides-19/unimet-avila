import React from 'react';
import EditableField from './EditableField';
import styles from './AccountDetails.module.css';
import PropTypes from 'prop-types';
function AccountDetails({ title, fields }) {
  return (
    <section className={styles.detailsContainer}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.detailsContent}>
        {fields.map((field) => (
          <EditableField
            key={field.id}
            label={field.label}
            value={field.value}
          />
        ))}
      </div>
    </section>
  );
}

AccountDetails.propTypes = {
  title: PropTypes.string.isRequired,
  fields: PropTypes.isRequired,
};
export default AccountDetails;
