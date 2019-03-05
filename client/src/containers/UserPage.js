import React, { Component } from 'react';
import * as CONSTANT from '../constant';
import { withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import UserEdit from '../components/user-edit/UserEdit';
import UserNotFound from '../components/user-not-found/UserNotFound';
import { fetchUser } from '../actions';
import PropTypes from 'prop-types';

class UserPage extends Component {

  componentDidMount() {
    const { fetchUser, match } = this.props;
    fetchUser(match.params.id);
  }

  renderUser = () => {
    const { user } = this.props;

    if (!user.name) {
      return <UserNotFound />;
    }

    return <UserEdit user={user} />
  }

  render() {
    return this.renderUser();
  }
}

UserPage.propTypes = {
  user: PropTypes.object.isRequired,
  fetchUser: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  const user = state[CONSTANT.USER];

  return (
    { user }
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: (id) => dispatch(fetchUser(id)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UserPage));
