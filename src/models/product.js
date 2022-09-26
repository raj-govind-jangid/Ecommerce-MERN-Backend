const mongoose = require('mongoose')
const { Schema } = mongoose;

const product = new Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: mongoose.Types.Decimal128,
        required: true,
    },
    shortDescription: {
        type: String,
        required: true,
    },
    longDescription: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    size:[
        {
            type: Schema.Types.ObjectId,
            ref: "Size"
        }
    ],
    color:[
        {
            type: Schema.Types.ObjectId,
            ref: "Color"
        }
    ],
    rating:[
        {
            type: Schema.Types.ObjectId,
            ref: "Rating"
        }
    ],
});

const Product = mongoose.model('Product', product);

module.exports = Product;