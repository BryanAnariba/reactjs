require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
require('./DB.connection');
const userRoutes = require('./routes/User.routes');
const taskRoutes = require('./routes/Task.routes');

// Settings
app.set('port' , process.env.PORT || 3500);

// Middlewares
app.use(cors({ origin:'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use('/users' , userRoutes);
app.use('/tasks' , taskRoutes);

// Starting server
app.listen(app.get('port') , () => {
    console.log('Server started on port -> ' + app.get('port'));
})
