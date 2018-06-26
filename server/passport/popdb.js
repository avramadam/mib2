const Message = require('mongoose').model('Sendbottle');

/**
 * Return the Passport Local Strategy object.
 */
module.exports = (req, name, email, message, done) => {
  const userMessage = {
    name: name.trim(),
    email: email.trim(),
    message: message.trim()
  };

  const newMessage = new Message(userMessage);
  newMessage.save((err) => {
    if (err) { return done(err); }

    return done(null);
  });
};
