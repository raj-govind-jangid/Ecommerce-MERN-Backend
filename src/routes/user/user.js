const express = require('express')
const { login, register } = require('../../controllers/user/authController')
const { loginValidation, registerValidation } = require('../../validations/user/user')
const app = express()

app.post('/login',...[loginValidation],login)
app.post('/register',...[registerValidation],register)

module.exports = app