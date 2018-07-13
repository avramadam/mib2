import React from 'react';
import { Button } from 'reactstrap'
import Hero from "../components/Hero";
import { Card, CardTitle, CardText } from 'material-ui/Card';
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

	throwBack = (note) => {


		API.throwBack(note._id, localStorage.email)
			.then(res => {
				this.getMessages();


				//this.setState({ user: res.data.messages_received });
			})
			.catch(err => console.log(err));
	};

	reportIt = (note) => {




		API.reportIt(note._id, localStorage.email)
			.then(res => {
				this.getMessages();


				//this.setState({ user: res.data.messages_received });
			})
			.catch(err => console.log(err));
	};

	keepIt = (note) => {




		API.keepIt(note._id, localStorage.email)
			.then(res => {
				this.getMessages();


				//this.setState({ user: res.data.messages_received });
			})
			.catch(err => console.log(err));
	};

	displayMessages(data) {





		return data.map((note) => {


			return (
				<Card
					key={note._id}
					className="container"
					style={{
						backgroundColor: "#ffaf87",
						opacity: ".8",
						border: "none",
						boxShadow: "none",
						paddingBottom: "1em",
						marginBottom: "2rem"
					}}>
					<CardTitle
						style={
							{

								fontWeight: "bold",
								backgroundColor: "#54838a",
								opacity: ".9",
								color: "#ffffff"
							}
						}
					>{note.title}</CardTitle>
					<CardText>{note.message}</CardText>
					<div >
						<Button style={{ backgroundColor: "#4578C2" }} onClick={() =>
							this.keepIt(note)}>Save</Button>
						<Button raised color="accent" onClick={() =>
							this.throwBack(note)} >Toss Back</Button>
						<Button raised color="red" onClick={() =>
							this.reportIt(note)}>Report</Button>

					</div>
				</Card >
			)
		})
	}

	render() {
		return (
			<div>
				<Hero backgroundImage="./images/miab.jpeg">


					<h4>Here Is What Washed Up On Your Shore</h4>

					{this.displayMessages(this.state.user)}
				</Hero>

			</div>
		)
	}
}
export default New;

