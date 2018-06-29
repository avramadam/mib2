const mongoose = require('mongoose');

// define the User model schema
const SendBottleSchema = new mongoose.Schema({
  title: String,
  message: String,
  email: String,
  reported: { type: Boolean, default: false },
  briny_deeps: { type: Boolean, default: false },
  seen_count: { type: Number, default: 0 },
  kept: { type: Boolean, default: false },
  createDate: {
    type: Date,
    default: Date.now,
    required: 'Must have start date - default value is the created date'
  }
});

module.exports = mongoose.model('Sendbottle', SendBottleSchema);
