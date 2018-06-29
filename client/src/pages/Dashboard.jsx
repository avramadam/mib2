import React from 'react';
import { Button, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import PropTypes from 'prop-types';
var store = require('store')

import { Card, CardTitle, CardText } from 'material-ui/Card';

const Dashboard = ({ secretData, user }) => (
  <div>

    <Card className="container">
      {store.set('user', user.email)}
      <div>
        <CardTitle
          title="Dashboard"
        />
        {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>Welcome <strong>{user.name}</strong>!<br />{secretData}</CardText>}

      </div>
    </Card>
    <Row>
      <Col sm="6">
        <Card body>
          <CardTitle>Send a Bottle</CardTitle>
          <CardText>Cast your own bottle into the wild blue.</CardText>
          <Link to="/Messages">
            <Button>Send Bottle</Button>
          </Link>
        </Card>
      </Col>
      <Col sm="6">
        <Card body>
          <CardTitle>View Saved Bottles</CardTitle>
          <CardText>View all the bottles you've scoured from the sand.</CardText>
          <Link to="/SavedMessages">
            <Button>View Saved</Button>
          </Link>
        </Card>
      </Col>
    </Row>
    <Hero backgroundImage="./images/miab.jpeg"
    />
  </div>
)





Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
