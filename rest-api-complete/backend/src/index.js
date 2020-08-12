require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
require('./config/mongoDB-connection');

// Settings
const app = express();
app.set('port' , process.env.PORT || 3600);

// Middlewares
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

// Routes
app.use('/users' ,require('./routes/auth-routes'));
app.use('/rest-api' , require('./routes/rest-api-routes'));

// Static Files

// Starting Server
app.listen(app.get('port') , () => {
    console.log('Server started on port -> ' + app.get('port'));
});

