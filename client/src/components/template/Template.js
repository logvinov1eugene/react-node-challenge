import React from 'react';
import styles from './Template.module.css';

const Template = ({ children }) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container-title']}>Users</div>
      {children}
    </div>
  );
};

export default Template;
