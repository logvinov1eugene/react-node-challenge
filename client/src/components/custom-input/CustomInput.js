import React from 'react';
import PropTypes from 'prop-types';

import styles from './CustomInput.module.css';

const CustomInput = ({ value, type, setValue }) => {
  return (
    <div>
      <input
        type={type}
        className={styles['custom-input']}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => setValue(e.target.value.trim())}
      />
    </div>
  )
}

CustomInput.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
};

export default CustomInput;
