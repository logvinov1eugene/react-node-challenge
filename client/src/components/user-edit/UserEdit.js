import React, { Component } from 'react'
import CustomButton from '../custom-button/CustomButton';
import CustomInput from '../custom-input/CustomInput';
import { connect } from 'react-redux';
import { saveUser } from '../../actions';
import PropTypes from 'prop-types';

import styles from  './UserEdit.module.css';

class UserEdit extends Component {
  constructor(props) {
    super();
    this.state = {
      value: props.user.name,
    };
  }

  inputHandler = (value) => {
    this.setState({ value });
  }

  saveHandler = () => {
    const { value } =  this.state;
    const { saveUser, user } = this.props;

    const data = {
      name: value,
      id: user.id
    };

    saveUser(data);
  }

  render() {
    const { value } = this.state;
    return (
      <div className={`${styles['user-edit-container']}`}>
        <CustomInput
          type="text"
          value={value}
          setValue={this.inputHandler}
        />

        <CustomButton
          text="Save"
          clickHandler={this.saveHandler}
        />
      </div>
    )
  }
}

UserEdit.propTypes = {
  user: PropTypes.object.isRequired,
  saveUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveUser: (data) => dispatch(saveUser(data)),
  };
};

export default connect(null, mapDispatchToProps)(UserEdit);
