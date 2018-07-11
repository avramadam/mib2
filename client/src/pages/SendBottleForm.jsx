import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Hero from "../components/Hero";
import { Card, CardText } from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

//trying to add a modal component
// import Modal from 'material-ui/Modal';
// import Typography from 'material-ui/Typography';













const SendBottleForm = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => {
  console.log(user);
  return (
    <div>
      <Hero >
        <Card className="container" style={{ width: 500 }}>
          <form action="/" onSubmit={onSubmit}>
            <h3 className="card-heading">Send</h3>

            {errors.summary && <p className="error-message">{errors.summary}</p>}

            <div className="field-line">
              <TextField
                floatingLabelText="Title"
                style={{ textAlign: 'left' }}
                multiLine={true}
                name="title"
                errorText={errors.name}
                onChange={onChange}
                value={user.title}
              />
            </div>


            <div className="field-line">
              <TextField
                floatingLabelText="Message"
                style={{ textAlign: 'left' }}
                multiLine={true}
                name="message"
                onChange={onChange}
                value={user.message}
              />
            </div>

            <div className="button-line" style={{
              paddingTop: "5rem",
              paddingBottom: "3rem"
            }}>
              <RaisedButton type="submit" label="Send Bottle" primary />
            </div>

            {/* <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
            >
              <div  >
                <Typography variant="title" id="modal-title">
                  Text in a modal
            </Typography>
                <Typography variant="subheading" id="simple-modal-description">
                  Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>

              </div>
            </Modal> */}







          </form>
        </Card>
      </Hero>
    </div>

  )
}
  ;

SendBottleForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  email: PropTypes.object.isRequired
};

SendBottleForm.defaultProps = {
  title: '',
  message: '',
};

export default SendBottleForm;
