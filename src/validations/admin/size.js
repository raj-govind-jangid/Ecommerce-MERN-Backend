const { check } = require('express-validator');

exports.createSizeValid = [ 
    check('productId').exists().withMessage("Product Id field is required"),
    check('name').exists().withMessage("Name field is required"),
    check('colorCode').exists().withMessage("Color Code field is required"),
]

exports.editSizeValid = [ 
    check('id').exists().withMessage("Product Id field is required"),
    check('name').exists().withMessage("Name field is required"),
    check('colorCode').exists().withMessage("Color Code field is required"),
    check('status').exists().withMessage("Status field is required"),
]

exports.deleteSizeValid = [ 
    check('id').exists().withMessage("Color Id field is required"),
    check('productId').exists().withMessage("Product Id field is required"),
]