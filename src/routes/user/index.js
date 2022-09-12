const express = require('express')
const app = express()
const user = require('../user/user')

app.use('/',user)

module.exports = app