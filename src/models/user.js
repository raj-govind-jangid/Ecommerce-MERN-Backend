const mongoose = require('mongoose')
const { Schema } = mongoose;

const user = new Schema({
  email:  String, 
  password: String,
});

const User = mongoose.model('User', user);

module.exports = User;