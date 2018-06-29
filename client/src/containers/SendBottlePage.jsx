import React from 'react';
import PropTypes from 'prop-types';
import SendBottleForm from '../pages/SendBottleForm.jsx';
var store = require('store')



class SendBottlePage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props, context) {
    super(props, context);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        title: '',
        email: '',
        name: '',
        message: ''
      }
    };
    if (store.get('bottle')) {
      let bottle = store.get('bottle')
      this.setState({
        user: {
          title: bottle.title,
          message: bottle.message
        }
      });
    }

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();
    store.set('bottle', {
      title: this.state.user.title,
      message: this.state.user.message
    });
    // create a string for an HTTP body message
    const name = encodeURIComponent(this.state.user.name);
    const title = encodeURIComponent(this.state.user.title);
    const email = encodeURIComponent(store.get('user'));
    const message = encodeURIComponent(this.state.user.message);
    const formData = `name=${name}&email=${email}&message=${message}&title=${title}`;
    console.log(formData);
    // create an AJAX request
    const xhr = new XMLHttpRequest();
    xhr.open('post', '/sendbottle/messages');
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.responseType = 'json';
    xhr.addEventListener('load', () => {
      if (xhr.status === 200) {
        // success

        // change the component-container state
        this.setState({
          errors: {}
        });

        // set a message
        localStorage.setItem('successMessage', xhr.response.message);

        // redirect user after sign up to login page
        //this.props.history.push('/login');
      } else {
        // failure

        const errors = xhr.response.errors ? xhr.response.errors : {};
        errors.summary = xhr.response.message;

        this.setState({
          errors
        });
      }
    });
    xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <SendBottleForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

SendBottlePage.contextTypes = {
  router: PropTypes.object.isRequired
};

export default SendBottlePage;
