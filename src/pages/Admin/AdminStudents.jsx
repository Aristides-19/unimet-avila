import React from 'react';
import styles from './AdminStudents.module.css';
import StudentsTable from '../../components/StudentsTable/StudentsTable';

const AdminStudents = () => {
  return (
    <div className={styles.contentPage}>
      <StudentsTable></StudentsTable>
    </div>
  );
};

export default AdminStudents;
