const express = require('express');
const app = express();
const cors = require('cors')
const route = require('./routes/routes.js');
const dotenv = require('dotenv').config();
const dbInit = require("./database/initDb");

const Port = process.env.PORT


dbInit();

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Route Midelwares
app.use('/api/user', route)

app.listen(Port, ()=> console.log('project is running'))