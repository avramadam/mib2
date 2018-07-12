import React from 'react';
import Auth from '../modules/Auth';
import Saved from '../pages/SavedPage.jsx';
import PropTypes from 'prop-types';
import { Button, Row, Col } from 'reactstrap'

import LoginForm from '../pages/LoginForm.jsx';
import { Card, CardTitle, CardText } from 'material-ui/Card';
var store = require('store')
import New from '../pages/NewBottlePage.jsx';


class NewBottles extends React.Component {


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
			<New />
		);
	}
}

export default NewBottles;
