import React, { useRef, useState } from 'react';
import styles from './ProfileHeader.module.css';
import { MdEdit } from 'react-icons/md';
import PropTypes from 'prop-types';
import { useAuth } from '../../context/AuthContext.jsx';
import { useUpdateUserProfileImage } from '../../hooks/useUsers.js';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage.jsx';

function ProfileHeader({ image, name, email }) {
  const fileInputRef = useRef(null);
  const { currentUser } = useAuth();
  const { updateProfileImage, error: error } = useUpdateUserProfileImage();
  const [imageState, setImageState] = useState(image);

  const handleEditButtonClick = () => {
    fileInputRef.current.click();
  };

  // Maneja la selección de archivos
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      const publicUrl = await updateProfileImage(currentUser?.uid, file);
      if (!error) {
        setImageState(publicUrl);
      }
    }
  };
  return (
    <section className={styles.headerContainer}>
      <div className={styles.profileWrapper}>
        <div className={styles.avatarContainer}>
          {error && <ErrorMessage message='Error al subir la imagen' />}
          <img src={imageState} alt={name} className={styles.avatarImage} />
          <div className={styles.userInfo}>
            <h1 className={styles.userName}>{name}</h1>
            <p className={styles.userEmail}>{email}</p>
          </div>
          <button
            className={styles.editButton}
            aria-label='Edit image'
            onClick={handleEditButtonClick}
          >
            <input
              type='file'
              ref={fileInputRef}
              style={{ display: 'none' }}
              onChange={handleFileChange}
              accept='.jpg, .jpeg, .png'
              multiple={false}
            />
            <MdEdit /> {/* Editar Imagen */}
          </button>
        </div>
      </div>
    </section>
  );
}

ProfileHeader.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
export default ProfileHeader;
