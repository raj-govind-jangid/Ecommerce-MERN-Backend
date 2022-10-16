const { check } = require('express-validator');

exports.loginValidation = [ 
    check('email').exists().withMessage("Email field is required")
    .isEmail().withMessage("Email id is invalid"),
    check('password').exists().withMessage("Password field is required"),
]

exports.registerValidation = [ 
    check('fullname').exists().withMessage("Fullname field is required"),
    check('email').exists().withMessage("Name field is required")
    .isEmail().withMessage("Email id is invalid"),
    check('password').exists().withMessage("Password field is required"),
    check('confirmPassword').exists().withMessage("Confirm Password field is required")
    .matches('password').withMessage('Passwords must match.')
]