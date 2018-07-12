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
		//this.getMessages = this.getMessages.bind(this);
		//test2
		// set the initial component state
		this.state = {
			errors: {}
		}
	}


	render() {
		return (
			<SavedPage />
		);
	}
}

export default SavedMessages;
/*  */



