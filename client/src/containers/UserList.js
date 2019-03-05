import React, { Component } from 'react';
import * as CONSTANT from '../constant';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import User from '../components/user/User';
import PropTypes from 'prop-types';

class UserList extends Component {

  componentDidMount() {
    const { isLoaded, fetchUsers } = this.props;
    if (isLoaded) return;

    fetchUsers();
  }

  renderUsers = () => {
    const { users } = this.props;

    const result = users.map(item => {
      return (
        <User key={item.id} item={item} />
      );
    });

    return result;
  }

  render() {
    return (
      <div>
        {this.renderUsers()}
      </div>
    )
  }
}

UserList.propTypes = {
  users: PropTypes.array.isRequired,
  isLoaded: PropTypes.bool.isRequired,
  fetchUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  const users = state[CONSTANT.USERS];
  const isLoaded = state[CONSTANT.IS_LOADED];

  return (
    { users, isLoaded }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
