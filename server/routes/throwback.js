const express = require('express');
const validator = require('validator');
const users = require('../models/user');
const sendbottle = require('../models/sendbottle');
const router = require("express").Router();
const store = require('store');


router.post('/:id/users/:email', function (req, res) {
  let id = req.params.id;
  console.log(req.params.email + " thing");

  /* users.update({ email: req.params.email }, { $pull: { messages_received: { $in: [id] } } }) */

  /* users.findOneAndUpdate({ email: req.params.email }, {
    $pull: { messages_received: { _id: req.params.id } }
  }, function (err, user) {
    console.log(user.messages_received); */



  users.update({ email: req.params.email }, {
    $pull: { messages_received: req.params.id }
  }, function (err, req) {
    console.log(req);

    if (err) {
      console.log(err);

    }
    res.send("success")
  });
  sendbottle.findById(req.params.id, function (err, message) {

    if (message.seen_count < 3) {

      console.log('else dunt work');

      sendbottle.updateOne({ _id: req.params.id }, { seen_count: message.seen_count += 1 }, function (err) {
        let email = req.params.email.replace("%40", "@");



        getRandomUser(function (err, randomUser) {
          users.findOne({ email: randomUser }, function (err, user) {

            user.update({ $push: { messages_received: req.params.id } }, { new: true }, function (err) {
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

                if (result.email === email || result.messages_received.includes(req.params.id) || result.messages_authored.includes(req.params.id)) {
                  getRandomUser(callback);
                } else {

                  console.log(result.email + " " + email);
                  //return result.email;

                }

              })
          })

        };
      }

      )
    } else {
      console.log('briny');
      console.log(message._id);

      sendbottle.updateOne({ _id: req.params.id }, { $set: { briny_deeps: true } }, function () {
        res.send('success');
      });

    }
  })


  /* user.deleteOne({}, { $pull: { messages_received: message._id } }, function (err) {
    if (err) {
      console.log(err);
    }

    res.send("success");
  }) */


});




module.exports = router;
