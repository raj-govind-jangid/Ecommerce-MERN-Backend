const express = require('express')
const { listCategory, createCategory, showCategory, editCategory, deleteCategory } = require('../../controllers/admin/categoryController')
const app = express()

app.get('/list',listCategory)
app.post('/create',createCategory)
app.get('/show/:id',showCategory)
app.put('/edit/:id',editCategory)
app.delete('/delete/:id',deleteCategory)

module.exports = app