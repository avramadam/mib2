const express = require('express');
const validator = require('validator');
const users = require('../models/user');
const sendbottle = require('../models/sendbottle');
const router = require("express").Router();
const store = require('store');


router.post('/messages', function (req, res) {
  let message = req.body.message;
  sendbottle.findByIdAndUpdate(message._id, function (err, message) {
    if (message.seen_count <= 3) {
      message.set({ seen_count: seen_count += 1 })
      let email = req.body.email.replace("%40", "@");


      getRandomUser(function (err, randomUser) {
        users.findOneAndUpdate({ email: randomUser }, { $push: { messages_received: message._id } }, { new: true }, function (err) {
          if (err) {
            console.log(err);
          }

          res.send();
        });
      });

      function getRandomUser(callback) {
        // Get the count of all users
        users.count().exec(function (err, count) {

          // Get a random entry
          var random = Math.floor(Math.random() * count)

          // Again query all users but only fetch one offset by our random #
          users.findOne().skip(random).exec(
            function (err, result) {
              // Tada! random user
              //console.log(result);

              if (result.email === email) {
                getRandomUser(callback);
              } else {

                console.log(result.email + " " + email);
                //return result.email;
                callback(null, result.email);
              }

            })
        })

      };
    } else {
      message.set({ briny_deeps: true })
    }
  })
});



module.exports = router;
