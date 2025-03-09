import React from 'react';
import styles from './LogIn.module.css';
import FormPage from '../../components/FormPage/FormPage';

function LogIn() {
  return (
    <div className={styles.LogIn}>
      <FormPage
        title='Log In'
        imagePath='/src/pages/LogIn/login.jpg'
        fields={[
          {
            type: 'email',
            name: 'email',
            placeholder: 'Email',
            required: true,
          },
          {
            type: 'password',
            name: 'password',
            placeholder: 'Password',
            required: true,
          },
        ]}
        submitText='Log In'
      />
    </div>
  );
}

export default LogIn;
