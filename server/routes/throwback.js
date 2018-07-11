const express = require('express');
const validator = require('validator');
const users = require('../models/user');
const sendbottle = require('../models/sendbottle');
const router = require("express").Router();
const store = require('store');


router.post('/', function (req, res) {
  let message = req.body.message;

  sendbottle.findById(message._id, function (err, message) {

    if (message.seen_count < 3) {

      console.log('else dunt work');

      sendbottle.updateOne({ _id: message._id }, { seen_count: message.seen_count += 1 }, function (err) {
        let email = req.body.email.replace("%40", "@");



        getRandomUser(function (err, randomUser) {
          users.findOne({ email: randomUser }, function (err, user) {

            user.update({ $push: { messages_received: message._id } }, { new: true }, function (err) {
              if (err) {
                console.log(err);
              }

              res.send("success");
            })
          });
        })

        function getRandomUser(callback) {
          // Get the count of all users
          /* console.log("1"); */

          users.count({}).exec(function (err, count) {
            /* console.log('2'); */

            // Get a random entry
            var random = Math.floor(Math.random() * count)
            /* console.log('3'); */

            // Again query all users but only fetch one offset by our random #
            users.findOne().skip(random).exec(
              function (err, result) {
                // Tada! random user
                console.log("1st" + result);

                if (result.email === email || result.messages_received.includes(message._id)) {
                  getRandomUser(callback);
                } else {

                  console.log(result.email + " " + email);
                  //return result.email;
                  callback(null, result.email);
                }

              })
          })

        };
      }

      )
    } else {
      console.log('briny');
      console.log(message._id);

      sendbottle.updateOne({ _id: message._id }, { $set: { briny_deeps: true } }, function () {
        res.send('success');
      });

    }
  })
});



module.exports = router;
