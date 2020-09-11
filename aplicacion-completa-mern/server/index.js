require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const authR = require('./routes/auth-router');
const tasksR = require('./routes/tasks-router');
const app = express();

// Settings
app.set('port' , process.env.PORT || 3500);
require('./config/db-connection');

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/auth' , authR);
app.use('/tasks' , tasksR);

// Static Files

// Starting Server
app.listen(app.get('port') , () => {
    console.log('Server started successfully on port -> ' + app.get('port'));
});