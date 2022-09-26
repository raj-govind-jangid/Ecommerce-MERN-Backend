const express = require('express')
const app = express()
const categoryRoute = require('../admin/category')
const productRoute = require('../admin/product')

app.use('/category',categoryRoute)
app.use('/product',productRoute)

module.exports = app