import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const SendBottleForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
    <div>
      <Hero backgroundImage="./images/miab.jpeg">
        <Card className="container">
          <form action="/" onSubmit={onSubmit}>
            <h3 className="card-heading">Send Bottle</h3>

            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="field-line">
              <TextField
                floatingLabelText="Title"
                name="title"
                errorText={errors.name}
                onChange={onChange}
                value={user.name}
              />
            </div>


            <div className="field-line">
              <TextField
                floatingLabelText="Message"
                name="message"
                onChange={onChange}
                //errorText={errors.message}
                value={user.message}
              />
            </div>

            <div className="button-line">
              <RaisedButton type="submit" label="Send Bottle" primary />
            </div>

          </form>
        </Card>
      </Hero>
    </div>

  );

SendBottleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

SendBottleForm.defaultProps = {
  title: '',
  message: '',
};

export default SendBottleForm;
