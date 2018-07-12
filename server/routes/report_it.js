const express = require('express');
const validator = require('validator');
const users = require('../models/user');
const sendbottle = require('../models/sendbottle');
const router = require("express").Router();
const store = require('store');


router.post('/:id/users/:email', function (req, res) {
  let message = req.body.message;
  console.log('route working');

  users.update({ email: req.params.email }, {
    $pull: { messages_received: req.params.id }
  }, function (err, req) {
    console.log(req);

    if (err) {
      console.log(err);

    }
    res.send("success")
  });

  sendbottle.findByIdAndUpdate(req.params.id, { $set: { reported: true } }, function (err) {
    if (err) {
      console.log(err);
    }

    res.send();
  });

  /* users.findOneAndUpdate({ email: req.body.email }, { $push: { thrown_back: message._id } }, { new: true }, function (err) {
    if (err) {
      console.log(err);
    }

    res.send();
  }); */

});

module.exports = router;
