const mongoose = require('mongoose');

// define the User model schema
const SendBottleSchema = new mongoose.Schema({
    title: String,
    message: String,
    email: String,
    reported: Boolean,
    briny_deeps: Boolean,
    seen_count: Number,
    createDate: {
      type: Date,
      default: Date.now,
      required: 'Must have start date - default value is the created date'
    }
});

module.exports = mongoose.model('Sendbottle', SendBottleSchema);
