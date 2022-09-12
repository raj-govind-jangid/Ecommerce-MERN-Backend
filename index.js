const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()
const port = process.env.PORT || 5000

// create express app
const app = express();
require('./src/db/db')

const mainRouter = require('./src/routes/index')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use(mainRouter);

app.listen(port,()=>{
    console.log(`listening ${port}`)
})