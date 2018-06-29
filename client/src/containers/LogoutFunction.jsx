import React from 'react';
import {Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';
import Auth from '../modules/Auth';


class LogoutFunction extends React.Component {

  componentWillMount() {
    // deauthenticate user
    Auth.deauthenticateUser();
    this.props.toggleAuthenticateStatus();
    // change the current URL to / after logout
  }

  render() {
    return (
      <div>
        <p>Logging out...</p>
        <Redirect to={{
        pathname: '/login'
      }}/>
      </div>
    )
  }
}

LogoutFunction.contextTypes = {
  router: PropTypes.object.isRequired
};

export default LogoutFunction;
