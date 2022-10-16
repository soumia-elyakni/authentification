const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dataBase = require('./database/db.js');

mongoose.connect(dataBase, () => console.log('connected'));


const route = require('./routes/routes.js');

//Route Midelwares 
app.use('/api/user', route)

app.listen(4700, ()=> console.log('project is running'))