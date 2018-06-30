const express = require('express');
const validator = require('validator');
const users = require('../models/user');
const sendbottle = require('../models/sendbottle');

const router = require("express").Router();

const store = require('store');

const usermail = store.get('user')

router.get("/received", function (req, res) {
	// Find all Users
	users.find({ email: usermail })
		.then(function (dbUser) {
			// If all Users are successfully found, send them back to the client

			let ret = [];
			for (let i = 0; i < dbUser.messages_seen.length; i++) {
				if (!dbUser.thrown_back.includes(dbUser.messages_seen[i]) || !dbUser.messages_kept.includes(dbUser.messages_seen[i])) {
					ret.push(dbUser.messages_seen[i]);
				}
			}

			return ret;
		}).then(function (ret) {
			sendbottle.find({ _id{ $in: ret } })
				.then(function (messages) {
					return messages;
				})
		})
		.catch(function (err) {
			// If an error occurs, send the error back to the client
			res.json(err);
		});
});