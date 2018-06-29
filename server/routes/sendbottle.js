const express = require('express');
const validator = require('validator');
const users = require('../models/user');
const sendbottle = require('../models/sendbottle');

const router = new express.Router();
const store = require('store');





/**
 * Validate the sign up form
 *
 * @param {object} payload - the HTTP body message
 * @returns {object} The result of validation. Object contains a boolean validation result,
 *                   errors tips, and a global message for the whole form.
 */
function validateMessageForm(payload) {
  const errors = {};
  let isFormValid = true;
  let message = '';

  if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
    isFormValid = false;
    errors.email = 'Please provide a correct email address.';
  }

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide your name.';
  }

  if (!isFormValid) {
    message = 'Check the form for errors.';
  }

  return {
    success: isFormValid,
    message,
    errors
  };
}

/*router.get('/messages', (req, res) => {
  Comment.find((err, comments) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: comments });
  });
});*/
router.get('/messages', function (req, res) {
  res.send('My funky form');
});

/*router.post('/messages', (req, res) => {
  const validationResult = validateMessageForm(req.body);
  console.log(req.body);
  if (!validationResult.success) {
    return res.status(400).json({
      success: false,
      message: validationResult.message,
      errors: validationResult.errors
    });
  }
  
});*/
router.post('/messages', function (req, res) {
  console.log(req.body.email);

  new sendbottle(
    {
      name: req.body.name,
      title: req.body.title,
      email: req.body.email,
      message: req.body.message
    })
    .save(function (err, message) {
      // console.log(message)

    }).then(function (message) {
      // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return users.findOneAndUpdate({ email: req.body.email }, { $push: { messages_authored: message._id } }, { new: true });
    })
    .then(function (dbUser) {
      // If the User was updated successfully, send it back to the client
      res.json(dbUser);
    });
  // Get the count of all users
  users.count().exec(function (err, count) {

    // Get a random entry
    var random = Math.floor(Math.random() * count)

    // Again query all users but only fetch one offset by our random #
    users.findOne().skip(random).exec(
      function (err, result) {
        // Tada! random user
        console.log(result)
      })
  })
});

module.exports = router;
