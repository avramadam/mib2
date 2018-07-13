import React from 'react';
import New from '../pages/NewBottlePage.jsx';


class NewBottles extends React.Component {


	constructor(props, context) {
		super(props, context);
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
