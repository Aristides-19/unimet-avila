import React from 'react';
import styles from './ProfileTabs.module.css';
import PropTypes from 'prop-types';

function ProfileTabs({ tabs, activeTab, onTabChange }) {
  return (
    <nav className={styles.tabsContainer}>
      {tabs.map((tab, index) => (
        <React.Fragment key={tab.id}>
          <button
            type='button'
            className={styles.tabItem}
            onClick={() => onTabChange(tab.id)}
            aria-selected={activeTab === tab.id}
            aria-controls={`${tab.id}-panel`}
            role='tab'
          >
            {tab.label}
          </button>
          {index < tabs.length - 1 && <div className={styles.tabDivider} />}
        </React.Fragment>
      ))}
      <div
        className={styles.activeIndicator}
        style={{
          left: activeTab === 'account' ? '0' : '50%',
          width: activeTab === 'account' ? '280px' : '280px',
        }}
      />
    </nav>
  );
}
ProfileTabs.propTypes = {
  tabs: PropTypes.isRequired,
  activeTab: PropTypes.isRequired,
  onTabChange: PropTypes.isRequired,
};
export default ProfileTabs;
