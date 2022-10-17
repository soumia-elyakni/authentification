const express = require('express');
const app = express();
const mongoose = require('mongoose');
const route = require('./routes/routes.js');
const dataBase = require('./database/db');
const dotenv = require('dotenv');

// dotenv.config();

mongoose.connect(dataBase,() => console.log('connected'));



//Middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));



//Route Midelwares 
app.use('/api/user', route)

app.listen(4700, ()=> console.log('project is running'))