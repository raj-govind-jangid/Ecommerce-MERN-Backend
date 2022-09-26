const { check } = require('express-validator');

exports.createProductValid = [ 
    check('name').exists().withMessage("Name field is required"),
    check('price').exists().withMessage("Price field is required")
    .isNumeric().withMessage('Price must be number'),
    check('shortDescription').exists().withMessage("Short Description field is required"),
    check('longDescription').exists().withMessage("Long Description field is required"),
    check('status').exists().withMessage("Status field is required")
    .isBoolean().withMessage('Status must be boolean'),
]