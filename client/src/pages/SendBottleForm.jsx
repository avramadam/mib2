import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


const SendBottleForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
<<<<<<< HEAD
    <Card className="container">
      <form action="/" onSubmit={onSubmit}>
        <h2 className="card-heading">Send Message</h2>

        {errors.summary && <p className="error-message">{errors.summary}</p>}

        <div className="field-line">
          <TextField
            floatingLabelText="Title"
            name="Title"
            onChange={onChange}
            value={user.title}
          />
        </div>

        <div className="textarea">
          <TextField
            floatingLabelText="Message"
            name="message"
            onChange={onChange}
            value={user.message}
          />
        </div>

        <div className="button-line">
          <RaisedButton type="submit" label="Send New Message" primary />
        </div>

      </form>
    </Card>
  );
=======
  <Card className="container">
    <form action="/" onSubmit={onSubmit}>
      <h2 className="card-heading">Send Message</h2>

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
          floatingLabelText="Email"
          name="email"
          errorText={errors.email}
          onChange={onChange}
          value={user.email}
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
);
>>>>>>> dfe05d688dda988871d3de709eef7593b44d0716

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
