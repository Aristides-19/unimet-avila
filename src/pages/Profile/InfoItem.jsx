import React from "react";
import styles from "./InfoItem.module.css";

function InfoItem({ icon, label, value }) {
  return (
    <div className={styles.infoItem}>
      <div className={styles.iconContainer}>{icon}</div>
      <div className={styles.textContainer}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
      </div>
    </div>
  );
}

export default InfoItem;
