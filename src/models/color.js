const mongoose = require('mongoose')
const { Schema } = mongoose;

const color = new Schema({
  name: {
    type: String,
    required: true,
  },
  colorCode: {
    type: String,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
    required: true,
  }
});

const Color = mongoose.model('Color', color);

module.exports = Color;