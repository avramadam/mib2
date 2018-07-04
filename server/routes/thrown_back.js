const express = require('express');
const validator = require('validator');
const users = require('../models/user');
const sendbottle = require('../models/sendbottle');

const router = require("express").Router();

const store = require('store');

const usermail = store.get('user')

router.get("/", function (req, res) {
	// Find all Users
	console.log(req.params.user)
	users.findOne({ _id: req.params.user })
		.then(function (dbUser) {
			console.log(dbUser);
			// If all Users are successfully found, send them back to the client
			// console.log(dbUser)
			let ret = [];
			for (let i = 0; i < dbUser.messages_seen.length; i++) {
				if (!dbUser.thrown_back.includes(dbUser.messages_seen[i]) && !dbUser.messages_kept.includes(dbUser.messages_seen[i])) {
					ret.push(dbUser.messages_seen[i]);
				}
			}
			console.log("test" + ret);
			sendbottle.find({ _id: { $in: ret } })
				.then(function (messages) {

					res.json(messages);
				})
		})
		.catch(function (err) {
			// If an error occurs, send the error back to the client
			res.json(err);
		});
});

module.exports = router;