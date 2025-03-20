import React, { useState } from 'react';
import ProfileHeader from './ProfileHeader';
import ProfileTabs from './ProfileTabs';
import AccountDetails from './AccountDetails';
import styles from './UserProfile.module.css';
import { useUser } from '../../hooks/useUsers.js';
import { useAuth } from '../../context/AuthContext.jsx';
import ExcursionDashboard from './ExcursionDashboard.jsx';

function UserProfile() {
  const [activeTab, setActiveTab] = useState('account');
  const { currentUser } = useAuth();
  const { user, loading } = useUser(currentUser?.uid);
  if (loading) return <></>;

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className={styles.profileContainer}>
      <ProfileHeader
        image={user?.profilePicture}
        name={user?.name}
        email={user?.email}
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
          fields={[
            {
              id: 'name',
              label: 'Nombre',
              value: user?.name,
            },
            {
              id: 'email',
              label: 'Correo Electrónico',
              value: user?.email,
            },
            {
              id: 'password',
              label: 'Contraseña',
              value: '•••••••••••••••••••',
            },
            {
              id: 'phone',
              label: 'Número de Teléfono',
              value: user?.phone,
            },
            {
              id: 'role',
              label: 'Tipo de Usuario',
              value: user?.role,
            },
          ]}
        />
      )}
      {activeTab === 'excursions' && (
        <ExcursionDashboard
          excursionsHistory={user?.excursionsHistory}
          role={user?.role}
        />
      )}
    </div>
  );
}

export default UserProfile;
