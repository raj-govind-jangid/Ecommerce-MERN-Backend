const { check } = require('express-validator');

exports.loginValidation = [ 
    check('email').exists().withMessage("Email field is required"),
    check('password').exists().withMessage("Password field is required"),
]

exports.registerValidation = [ 
    check('fullname').exists().withMessage("Fullname field is required"),
    check('email').exists().withMessage("Name field is required"),
    check('password').exists().withMessage("Price field is required"),
]