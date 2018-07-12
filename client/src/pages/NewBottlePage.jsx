import React from 'react';
import { Button, Row, Col } from 'reactstrap'
//import { Button } from "reactstrap";
//import Row from "../components/Row";
//import Col from "../components/Col";
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
//import { withStyles } from 'material-ui/styles';
import API from "../utils/api";


class New extends React.Component {

	state = { user: [] }

	componentDidMount() {
		this.getMessages();
	}

	// Method for getting (all messages) from the db
	getMessages = () => {
		API.getMessages(localStorage.email)
			.then((res) => {
				this.setState({ user: res.data.messages_received });
			});
	}

	displayMessages(data) {
		return data.map((note) => {
			return (
				<Card
					key={note._id}
					className="container"
					style={{
						backgroundColor: "rgba(255, 255, 255, .8)",
						border: "none",
						boxShadow: "none",
						paddingBottom: "2rem"
					}}>
					<CardTitle
						style={
							{
								fontWeight: "bold",
								backgroundColor: "rgba(0, 0, 0, .8)",
								color: "#ffffff"
							}
						}
					>{note.title}</CardTitle>
					<CardText>{note.message}</CardText>
					<div >
						<Button style={{ backgroundColor: "#4578C2" }}>Save</Button>
						<Button raised color="accent" >Toss Back</Button>
						<Button raised color="red" >Report</Button>

					</div>
				</Card>
			)
		})
	}


	render() {
		return (
			<div>
				<Hero backgroundImage="./images/miab.jpeg">

					<Card className="container" >


						<CardTitle style={{
							backgroundColor: "rgba(22, 86, 179, .8)",
							border: "none",
							boxShadow: "none",
							paddingBottom: "2rem"
						}}
							title="These are your new bottles."
						/>
					</Card>
					{this.displayMessages(this.state.user)}
				</Hero>

			</div>
		)
	}
}
export default New;

