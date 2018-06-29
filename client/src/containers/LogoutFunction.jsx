import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
var store = require('store')


class LogoutFunction extends React.Component {

  componentWillMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    store.remove('user')
    this.props.toggleAuthenticateStatus();
    // change the current URL to / after logout
  }

  render() {
    return (
      <div>
        <p>Logging out...</p>
        <Redirect to={{
          pathname: '/login'
        }} />
      </div>
    )
  }
}

LogoutFunction.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutFunction;
