import React, { useState } from 'react';
import styles from './AccountDetails.module.css';
import PropTypes from 'prop-types';
import Button from '../../components/Button/Button.jsx';
import { MdEdit } from 'react-icons/md';
import { IoSaveSharp } from 'react-icons/io5';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';
import { useSaveUser } from '../../hooks/useUsers.js';
import { useAuth } from '../../context/AuthContext.jsx';

function AccountDetails({ fields }) {
  const [editMode, setEditMode] = useState(false);
  const [formData, setFormData] = useState(fields);
  const { currentUser } = useAuth();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) =>
      prevData.map((field) =>
        field.id === id ? { ...field, value: value } : field
      )
    );
  };
  const [phoneError, setPhoneError] = useState('');
  const handlePhone = (phone) => {
    const phoneRegex = /^\+\d{1,3}\d{6,14}$/;
    if (!phone.trim()) {
      setPhoneError('El teléfono es obligatorio.');
      return true;
    } else if (!phoneRegex.test(phone)) {
      setPhoneError('El teléfono debe tener el formato +581234567');
      return true;
    } else {
      setPhoneError('');
    }
  };
  const [nameError, setNameError] = useState('');
  const handleName = (name) => {
    if (!name.trim()) {
      setNameError('El nombre es obligatorio.');
      return true;
    } else {
      setNameError('');
    }
  };
  const { saveUserData, error: error } = useSaveUser();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const phone = formData.find((field) => field.id === 'phone').value;
    const name = formData.find((field) => field.id === 'name').value;
    if (handlePhone(phone) || handleName(name)) {
      return;
    }
    await saveUserData({
      userId: currentUser?.uid,
      name,
      phone,
    });
    if (!error) {
      setEditMode(false);
    }
  };
  return (
    <section className={styles.detailsContainer}>
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Datos de mi Cuenta</h2>
        <Button
          color='var(--forest)'
          backgroundColor='var(--earth-sky)'
          icon={<MdEdit />}
          borderRadius='45px'
          className={styles.button}
          onClick={() => setEditMode(true)}
        />
      </div>
      {error && <ErrorMessage message='Error inesperado, intente más tarde' />}
      <form
        className={styles.detailsContent}
        onSubmit={handleSubmit}
        noValidate
      >
        {formData.map((field) => (
          <div key={field.id}>
            <label htmlFor={field.id}>{field.label}</label>
            {!editMode && (
              <input type='text' id={field.id} value={field.value} readOnly />
            )}
            {editMode && field.id === 'phone' && phoneError && (
              <ErrorMessage message={phoneError} />
            )}
            {editMode && field.id === 'name' && nameError && (
              <ErrorMessage message={nameError} />
            )}
            {editMode && ['name', 'phone'].includes(field.id) && (
              <input
                type='tel'
                id={field.id}
                value={field.value}
                onChange={handleChange}
              />
            )}
            {editMode && ['email', 'password', 'role'].includes(field.id) && (
              <input type='text' id={field.id} value={field.value} readOnly />
            )}
          </div>
        ))}
        {editMode && (
          <Button
            color='var(--forest)'
            backgroundColor='var(--earth-sky)'
            type='submit'
            className={styles.submit}
            icon={<IoSaveSharp size={15} />}
          />
        )}
      </form>
    </section>
  );
}

AccountDetails.propTypes = {
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ),
};
export default AccountDetails;
