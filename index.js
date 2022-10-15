const express = require('express');
const app = express();

const route = require('./routes/routes.js');

//Route Midelwares 
app.use('/api/user', route)

app.listen(4700, ()=> console.log('project is running'))