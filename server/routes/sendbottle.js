const express = require('express');
const validator = require('validator');
const users = require('../models/user');
const sendbottle = require('../models/sendbottle');
const router = new express.Router();
const store = require('store');

router.get('/messages', (req, res) => {
  console.log("In the get route");
  //Comment.find((err, comments) => {
  //  if (err) return res.json({ success: false, error: err });
  //  return res.json({ success: true, data: comments });
  //});
});

//router.get('/messages', function (req, res) {
//  res.send('My funky form');
//});

router.post('/messages', function (req, res) {
  let email = req.body.email.replace("%40", "@");

  new sendbottle(
    {
      title: req.body.title,
      email: email,
      message: req.body.message
    })
    .save(function (err, message) {


    }).then(function (message) {
      // If a Note was created successfully, find one User (there's only one) and push the new Note's _id to the User's `notes` array
      // { new: true } tells the query that we want it to return the updated User -- it returns the original by default
      // Since our mongoose query returns a promise, we can chain another `.then` which receives the result of the query
      return users.findOneAndUpdate({ email: email }, { $push: { messages_authored: message._id } }, { new: true });
    }).then(function (message) {

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
<<<<<<< HEAD

            })
        })

      }
    });
=======

          })
      })

    }
>>>>>>> 39fa71cdcf9783e15244e9baf38ddabec47deb47
});

module.exports = router;
