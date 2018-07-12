var users = require("../models/user");
const store = require('store');
const usermail = store.get('email')

module.exports = {
  // this method handles finding all messages in the db
  find: function (req, res) {
    //console.log(req.params.email);
    //req.body.email="aadam@comcast.net";
    //console.log(email);
    console.log("Gathering saved messages from the db");
    users.findOne({ email: req.params.email })
      .populate('messages_received').exec(function (error, user) {
        if (error) {
          console.log(error)
        }
        //console.log(user);
        res.json(user);

      });
  },
  findKept: function (req, res) {
    //console.log(req.params.email);
    //req.body.email="aadam@comcast.net";
    //console.log(email);
    console.log("Gathering kept messages from the db");
    users.findOne({ email: req.params.email })
      .populate('messages_kept').exec(function (error, user) {
        if (error) {
          console.log(error)
        }
        //console.log(user);
        res.json(user);

      });
  },

  // this method handles adding new messages to the db
  insert: function (req, res) {
    console.log("Adding saved artice to the db");
    console.log("req.body: ", req.body);
    users.create(req.body).then(function (doc) {
      res.json(doc);
      console.log("doc: ", doc);
    }).catch(function (err) {
      res.json(err);
    });
  },
  // this method handles deleting messages from the db
  delete: function (req, res, next) {
    //let param = req.params.email
    console.log(req.params);
    console.log("Deleting an unwanted message from the db " + req.params.id);
    /*users.findOneAndUpdate({
      messages_received: req.params.id
    }).then(function(doc) {
      res.json(doc);
      //console.log("doc: ", doc);
    }).catch(function(err) {
      res.json(err);
    });*/

    users.findOneAndUpdate({ email: req.params.email }, { $pull: { messages_received: req.params.id } }, function (err) {
      if (err) {
        console.log(err);
      }

      res.send();
    });
  }
};
