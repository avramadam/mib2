import React from 'react';
import Auth from '../modules/Auth';
import Saved from '../pages/SavedPage.jsx';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap'

import LoginForm from '../pages/LoginForm.jsx';
import { Card, CardTitle, CardText } from 'material-ui/Card';
var store = require('store')
import SavedPage from '../pages/SavedPage.jsx';


class SavedMessages extends React.Component {


	constructor(props, context) {
		super(props, context);

		//test2
		// set the initial component state
		this.state = {
			errors: {}

		}
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
		xhr.open('post', '/sendbottle/savedmessages');
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




	render() {
		return (
			<SavedPage />

		);
	}
}






export default SavedMessages;



