const mongoose = require('mongoose')
require('dotenv').config()
const db_database = process.env.DB_DATABASE;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

mongoose.connect(`mongodb+srv://${db_username}:${db_password}@cluster0.qzntjy5.mongodb.net/${db_database}?retryWrites=true&w=majority`).then((success)=>{
        console.log("Database Connected")
    }).catch((error)=>{
        console.log("Database Notconnected")
    });