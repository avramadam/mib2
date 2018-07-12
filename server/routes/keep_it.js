const express = require('express');
const validator = require('validator');
const users = require('../models/user');
const sendbottle = require('../models/sendbottle');
const router = require("express").Router();
const store = require('store');


router.post('/:id/users/:email', function (req, res) {
  let message = req.body.message;
  console.log(message);


  users.update({ email: req.params.email }, {
    $pull: { messages_received: req.params.id }
  }, function (err, req) {
    console.log(req);

    if (err) {
      console.log(err);

    }
    res.send("success")
  });

  sendbottle.findByIdAndUpdate(req.params.id, { $set: { kept: true } }, function (err) {
    if (err) {
      console.log(err);
    }

    res.send();
  });

  users.findOneAndUpdate({ email: req.params.email }, { $push: { messages_kept: req.params.id } }, { new: true }, function (err) {
    if (err) {
      console.log(err);
    }

    res.send();
  });

});

module.exports = router;
