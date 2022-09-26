const mongoose = require('mongoose')
const { Schema } = mongoose;

const contactForm = new Schema({
  fullname: String,
  email: {
    type: String,
    unique: true,
    required: true
  }, 
  password: String,
});

const ContactForm = mongoose.model('ContactForm', contactForm);

module.exports = ContactForm;