const express = require('express')
const app = express()
const user = require('../user/user')
const product = require('../user/product')
const cart = require('../user/cart')

app.use('/user',user)
app.use('/',product)
app.use('/',cart)

module.exports = app