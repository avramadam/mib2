const express = require('express');
const validator = require('validator');
const users = require('../models/user');
const sendbottle = require('../models/sendbottle');
const router = require("express").Router();
const store = require('store');


router.post('/', function (req, res) {
  let message = req.body.message;

  sendbottle.findByIdAndUpdate(message._id, { $set: { kept: true } }, function (err) {
    if (err) {
      console.log(err);
    }

    res.send();
  });

  users.findOneAndUpdate({ email: req.body.email }, { $push: { messages_kept: message._id } }, { new: true }, function (err) {
    if (err) {
      console.log(err);
    }

    res.send();
  });

});

module.exports = router;
