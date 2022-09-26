const express = require('express')
const { login, register } = require('../../controllers/user/authController')
const app = express()

app.post('/login',login)
app.post('/register',register)

module.exports = app