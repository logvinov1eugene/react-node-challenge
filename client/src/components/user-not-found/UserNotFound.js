import React from 'react';

import styles from  './UserNotFound.module.css';

const UserNotFound = () => {
  return (
    <div className={`${styles['user-not-found']}`}>
      User Not Found
    </div>
  );
};

export default UserNotFound;
