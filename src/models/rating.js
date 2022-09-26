const mongoose = require('mongoose')
const { Schema } = mongoose;

const rating = new Schema({
  message: {
    type: String,
    required: true,
  },
  star: {
    type: Number,
    required: true,
  }
});

const Rating = mongoose.model('Rating', rating);

module.exports = Rating;