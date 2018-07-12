import React from 'react';
import { Button, Row, Col } from 'reactstrap'
//import { Button } from "reactstrap";
//import Row from "../components/Row";
//import Col from "../components/Col";
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import { withStyles } from 'material-ui/styles';
import API from "../utils/api";
/* 
const data = [


	{
		_id: "1",
		title: "stuff1",
		message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas aliquam euismod turpis a semper. Suspendisse gravida placerat nisi, id sagittis sem cursus a. Ut at mauris vel tortor scelerisque dictum. Vivamus molestie posuere justo sed pretium. Nam scelerisque risus et quam convallis blandit. Duis varius nunc nec tortor fringilla, vitae commodo turpis lobortis. Pellentesque congue feugiat leo quis semper. Proin sagittis sem turpis, id cursus dui interdum ac. Morbi elementum odio bibendum orci porttitor, a tincidunt dui eleifend. Vestibulum nec tortor lacinia, blandit nibh et, lobortis odio."
	},
	{
		_id: "2",
		title: "stuff2",
		message: "Mauris ac massa accumsan, congue nisl congue, auctor risus. Duis sit amet urna nec dui dignissim aliquet sit amet non sem. Nam dictum velit suscipit nisi euismod lacinia efficitur ut leo. Nulla rhoncus et leo sit amet imperdiet. Phasellus et sollicitudin nibh. Nam bibendum, mauris non fringilla hendrerit, mauris sem dictum ex, a rhoncus dolor erat et leo. Morbi tristique ligula ac lectus faucibus, sit amet eleifend risus vestibulum. Nulla facilisi. Proin pretium quam eget mauris tristique tincidunt. Nam ullamcorper tempus imperdiet."
	},
	{
		_id: "3",
		title: "stuff3",
		message: "Vivamus in lacinia dui, sed sollicitudin lectus. Maecenas nec ligula quis ex ullamcorper volutpat. Nunc id felis sit amet ex hendrerit congue sed ac erat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus rutrum lacus vel urna rhoncus sollicitudin. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam dignissim hendrerit augue sit amet ornare. Proin sit amet neque bibendum, euismod dui dignissim, scelerisque risus. Morbi mauris orci, luctus nec lacus id, molestie fringilla justo. Aenean dolor arcu, bibendum vitae justo ac, convallis blandit enim. Fusce id urna tempus, tristique diam nec, congue nisl. Morbi pretium nulla dui, et bibendum tortor varius in. Ut vehicula aliquet porta. Phasellus fringilla nisi vel leo aliquet, ac vulputate nibh dapibus. Curabitur ultrices neque id felis auctor, consequat feugiat augue suscipit. Nam purus nisi, porta ut placerat quis, lobortis ac augue."
	}

]
 */
class Saved extends React.Component {

	state = { user: [] }

	componentDidMount() {
		this.getMessages();
	}

	// Method for getting (all messages) from the db
	getMessages = () => {
		API.getKeptMessages(localStorage.email)
			.then((res) => {
				this.setState({ user: res.data.messages_kept });
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
					<CardText style={
						{


						}
					}>{note.message}</CardText>
				</Card>
			)
		})
	}
	render() {
		return (
			<div>
				<Hero>

					<Card className="container" style={{
						fontFamily: "'Markazi Text', serif"

					}} >


						<CardTitle style={{
							backgroundColor: "rgba(22, 86, 179, .8)",
							border: "none",
							boxShadow: "none",
							paddingBottom: "2rem",
							fontFamily: 'Markazi Text',
							fontSize: 50

						}}
							title="Saved Bottles Go Here"
						/>
					</Card>
					{this.displayMessages(this.state.user)}
				</Hero>

			</div>
		)
	}
}
export default Saved;