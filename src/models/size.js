const mongoose = require('mongoose')
const { Schema } = mongoose;

const size = new Schema({
  name: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  }
});

const Size = mongoose.model('Size', size);

module.exports = Size;