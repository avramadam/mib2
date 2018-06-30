import React from 'react';
import { Button, Row, Col } from 'reactstrap'
//import { Button } from "reactstrap";
//import Row from "../components/Row";
//import Col from "../components/Col";
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import PropTypes from 'prop-types';
import { Card, CardTitle, CardText } from 'material-ui/Card';


const Saved = ({ secretData, user }) => (
	<div>
		<Card className="container" >
			<div>
				<CardTitle style={{
					backgroundColor: "rgba(22, 86, 179, .8)",
					border: "none",
					boxShadow: "none",
					paddingBottom: "2rem"
				}}
					title="Saved Bottles Go Here"
				/>

				<h3>This is a saved message.</h3>
			</div>

		</Card>
	</div>



)

export default Saved;