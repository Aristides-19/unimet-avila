import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import AccountDetails from './AccountDetails';
import ExcursionsContent from './ExcursionsContent';
import styles from './UserProfile.module.css';
import image from '../../assets/404-NotFound-Illustration.png';

function UserProfile() {
  const [activeTab, setActiveTab] = useState('account');

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <main className={styles.profileContainer}>
      <ProfileHeader
        avatarUrl={image}
        name='Daniel Alvarez'
        email='daniel.alvarez@correo.unimet.edu.ve'
      />
      <ProfileTabs
        tabs={[
          { id: 'account', label: 'Mi Cuenta' },
          { id: 'excursions', label: 'Mis excursiones' },
        ]}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {activeTab === 'account' && (
        <AccountDetails
          title='Datos de mi cuenta'
          fields={[
            {
              id: 'name',
              label: 'Nombre',
              value: 'Daniel Alvarez',
            },
            {
              id: 'email',
              label: 'Correo electrónico',
              value: 'daniel.alvarez@correo.unimet.edu.ve',
            },
            {
              id: 'password',
              label: 'Contraseña',
              value: '************',
            },
            {
              id: 'phone',
              label: 'Número de teléfono',
              value: '+58 4243109558',
            },
          ]}
        />
      )}

      {activeTab === 'excursions' && <ExcursionsContent />}
    </main>
  );
}

export default UserProfile;
