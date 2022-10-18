const mongoose = require('mongoose')

const enviroment = process.env.DB_ENVIRONMENT;
const db_database = process.env.DB_DATABASE;
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

let URL = enviroment == "PRODUCTION" ? `mongodb+srv://${db_username}:${db_password}@cluster0.qzntjy5.mongodb.net/${db_database}?retryWrites=true&w=majority`
    : `mongodb://localhost:27017/${db_database}`

console.log(URL)

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true}).then((success)=>{
        console.log("Database Connected")
    }).catch((error)=>{
        console.log("Database Notconnected")
    });