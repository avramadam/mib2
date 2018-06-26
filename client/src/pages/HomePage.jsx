import React from 'react';
import Hero from "../components/Hero";
//import Container from "../components/Container";
//import Row from "../components/Row";
//import Col from "../components/Col";
import PropTypes from 'prop-types';
import { Card } from 'material-ui/Card';

const Dashboard = () => (
  <Card className="container">
 <div>
    <Hero backgroundImage="./images/miab.jpeg">
      <h1>Message in a Bottle</h1>
      <h2>What message might make your day?</h2>
      <div className="test">
          <p>
         We encourage communication by reaching out and sending a message without an intended recipient.  Share your thoughts, feeling, moods, links, suggestions, complaints, worries, fears, secrets, etc.  
         
            Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed malesuada
            molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi ac mi
            hendrerit semper. Nulla tincidunt accumsan lobortis.
      
            Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
            tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit
            amet odio lobortis ullamcorper. 
          </p>
      </div>
    </Hero>
  </div>
  </Card>
);

export default Dashboard;
