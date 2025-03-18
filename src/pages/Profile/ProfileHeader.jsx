import React from 'react';
import styles from './ProfileHeader.module.css';
import { MdEdit } from 'react-icons/md';
import PropTypes from 'prop-types';

function ProfileHeader({ avatarUrl, name, email }) {
  return (
    <section className={styles.headerContainer}>
      <div className={styles.profileWrapper}>
        <div className={styles.avatarContainer}>
          <img
            src={avatarUrl}
            alt={`${name}'s profile picture`}
            className={styles.avatarImage}
          />
          <div className={styles.userInfo}>
            <h1 className={styles.userName}>{name}</h1>
            <p className={styles.userEmail}>{email}</p>
          </div>
          <button className={styles.editButton} aria-label='Edit profile'>
            <MdEdit className={styles.editIcon} />
          </button>
        </div>
      </div>
    </section>
  );
}
ProfileHeader.propTypes = {
  avatarUrl: PropTypes.isRequired,
  name: PropTypes.isRequired,
  email: PropTypes.isRequired,
};
export default ProfileHeader;
