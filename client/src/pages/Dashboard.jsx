import React from 'react';
import { Button, Row, Col, Container } from 'reactstrap'
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import PropTypes from 'prop-types';
var store = require('store')

import { Card, CardTitle, CardText } from 'material-ui/Card';

const Dashboard = ({ secretData, user }) => (
  <div>
    <Hero backgroundImage="./images/miab.jpeg">
      <Card className="container" style={{
        backgroundColor: "#ffaf87",
        opacity: ".7",
        border: "none",
        boxShadow: "none",
        marginBottom: "5rem",
        paddingBottom: "1rem",
      }}>
        <div>
          <CardTitle><b>Dashboard</b></CardTitle>
          {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}

        </div>
      </Card>
      <Container>
        <Row>
          <Col sm="6">
            <Card style={{
              color: "black",
              backgroundColor: "#ffaf87",
              opacity: ".7",
              border: "none",
              boxShadow: "none",
              paddingBottom: "2rem"
            }}>
              <CardTitle><b>Send a Bottle</b></CardTitle>
              <CardText>Cast your own bottle into the wild blue.</CardText>
              <Link to="/Messages">
                <Button>Send Bottle</Button>
              </Link>
            </Card>
          </Col>
          <Col sm="6">
            <Card style={{
              backgroundColor: "#ffaf87",
              opacity: ".7",
              border: "none",
              boxShadow: "none",
              paddingBottom: "2rem"
            }}>
              <CardTitle><b>View Saved Bottles</b></CardTitle>
              <CardText>View all the bottles you've scoured from the sand.</CardText>
              <Link to="/SavedMessages">
                <Button>View Saved</Button>
              </Link>
            </Card>
          </Col>
          <Col sm="6">
            <Card style={{
              backgroundColor: "#ffaf87",
              opacity: ".7",
              border: "30px",
              boxShadow: "none",
              paddingBottom: "2rem"
            }}>
              <CardTitle><b>View New Bottles</b></CardTitle>
              <CardText>View new bottles</CardText>
              <Link to="/NewBottles">
                <Button>View New Bottles</Button>
                {/* //test */}
              </Link>
            </Card>
          </Col>
        </Row>
      </Container>
    </Hero>
  </div>
)





Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
