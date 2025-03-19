import React, { Fragment } from 'react';
import styles from './ProfileTabs.module.css';
import PropTypes from 'prop-types';

function ProfileTabs({ tabs, activeTab, onTabChange }) {
  const activeIndex = tabs.findIndex((tab) => tab.id === activeTab);
  const tabWidth = 100 / tabs.length;

  return (
    <nav className={styles.tabsContainer} role='tablist'>
      {tabs.map((tab, index) => (
        <Fragment key={tab.id}>
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
        </Fragment>
      ))}
      <div
        className={styles.activeIndicator}
        style={{
          left: `${activeIndex * tabWidth}%`,
          width: `calc(${tabWidth}% - 1%)`,
        }}
      />
    </nav>
  );
}

ProfileTabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeTab: PropTypes.string.isRequired,
  onTabChange: PropTypes.func.isRequired,
};
export default ProfileTabs;
