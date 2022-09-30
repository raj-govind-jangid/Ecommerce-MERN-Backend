const express = require('express')
const app = express()
const categoryRoute = require('../admin/category')
const productRoute = require('../admin/product')
const colorRoute = require('../admin/color')
const sizeRoute = require('../admin/size')

app.use('/category',categoryRoute)
app.use('/color',colorRoute)
app.use('/size',sizeRoute)
app.use('/product',productRoute)

module.exports = app