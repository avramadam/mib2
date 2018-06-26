const mongoose = require('mongoose');

// define the User model schema
const SendBottleSchema = new mongoose.Schema({
  email: String,
  message: String,
  name: String
});

module.exports = mongoose.model('Sendbottle', SendBottleSchema);
