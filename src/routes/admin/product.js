const express = require('express')
const { listProduct, createProduct, showProduct } = require('../../controllers/admin/productController')
const { createProductValid } = require('../../validations/admin/product')
const app = express()

app.get('/list',listProduct)
app.post('/create', ...createProductValid, createProduct)
app.get('/show/:id', showProduct)

module.exports = app