import express from "express";
import Connection from "./database/db.js";  
import dotenv from 'dotenv'
import DefaultData from "./default.js";
import routes from "./routes/routes.js";
import cors from 'cors';
import bodyParser from 'body-parser';



const app = express();   // initialize of express
dotenv.config()        // initialize of  dotenv

// middlewares
app.use(cors());
app.use(bodyParser.json({ extended: true }));  // parses the request body and exposes it as a JavaScript object on req.body.
app.use(bodyParser.urlencoded({ extended: true })) // middleware parses the form data and exposes it as a JavaScript object on req.body.
//By default, it only parses key-value pairs where the value is a string or array. 
//If the extended option is set to true, it will also parse complex objects and arrays.
app.use('/', routes);


const PORT = 8000;

// .env file se username and password ko nikal rahe hai 
const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;
// console.log(USERNAME, PASSWORD);

Connection(USERNAME, PASSWORD)    //  connection of database and username and password is passed in database

// make server of express
app.listen(PORT, () => {
    console.log(`Server is running sucessfuly on PORT ${PORT}`);
})

DefaultData()  // calling the default data function