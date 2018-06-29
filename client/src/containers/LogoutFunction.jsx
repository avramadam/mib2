import React from 'react';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';
var store = require('store')


class LogoutFunction extends React.Component {

  componentDidMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    store.remove('user')
    // change the current URL to / after logout
    this.props.history.push('/login');
  }

  render() {
    return (
      <div>
        <p>Logging out...</p>
      </div>
    )
  }
}

LogoutFunction.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutFunction;
