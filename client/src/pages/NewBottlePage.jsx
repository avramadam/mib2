import React from 'react';
import { Button, Row, Col } from 'reactstrap'
//import { Button } from "reactstrap";
//import Row from "../components/Row";
//import Col from "../components/Col";
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';


// const New = ({ secretData, user }) => (
// 	<div>
// 		<Hero backgroundImage="./images/miab.jpeg">

// 			<Card className="container" >


// 				<CardTitle style={{
// 					backgroundColor: "rgba(22, 86, 179, .8)",
// 					border: "none",
// 					boxShadow: "none",
// 					paddingBottom: "2rem"
// 				}}
// 					title="These are your new Bottles"
// 				/>

// 				<h3>unordered list of generated bottles? -avram</h3>
// 				<h3>This is another.</h3>
// 				<h3>There could be a whole bunch if you haven't checked them for a while.</h3>
// 			</Card>
// 			<Link to="/NewBottles">
// 				<Button style={{ backgroundColor: "#44014C", width: "200px", minHeight: "100px" }}>save this message</Button>
// 			</Link>
// 			<Link to="/NewBottles">
// 				<Button style={{ backgroundColor: "	#FFA500", width: "200px", minHeight: "100px" }} > toss it back</Button>
// 			</Link>
// 		</Hero>

// 	</div>



// )

// export default New;

const data = [


	{
		_id: "1",
		title: "sup",
		message: "words and such"
	},
	{
		_id: "2",
		title: "readme",
		message: "Mauris ac massa accumsan, congue nisl congue, auctor risus. Duis sit amet urna nec dui dignissim aliquet sit amet non sem. Nam dictum velit suscipit nisi euismod lacinia efficitur ut leo. "
	},
	{
		_id: "3",
		title: "bienvenidos",
		message: "Vivamus in lacinia dui, sed sollicitudin lectus. "
	}

]

class New extends React.Component {

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
					{this.displayMessages(data)}
				</Hero>

			</div>
		)
	}
}
export default New;