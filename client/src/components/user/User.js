import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/CustomButton';
import { deleteUser } from '../../actions';
import PropTypes from 'prop-types';

import styles from  './User.module.css';

const User = ({ item: { id, name }, history, deleteUser }) => {
  return (
    <div className={`${styles['user-container']}`}>
      <div className={`${styles['user-name']}`}>
        {name}
      </div>

      <div>
        <CustomButton
          text="Change"
          clickHandler={() => history.push(`/${id}`)}
        />

        <CustomButton
          className={`${styles['button-separator']}`}
          text="Remove"
          clickHandler={() => deleteUser(id)}
        />
      </div>
    </div>
  );
};

User.propTypes = {
  item: PropTypes.object.isRequired,
  deleteUser: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteUser: (id) => dispatch(deleteUser(id)),
  };
};

export default withRouter(connect(null, mapDispatchToProps)(User));
