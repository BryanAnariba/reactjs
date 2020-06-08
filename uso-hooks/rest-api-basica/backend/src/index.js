const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

// Settings
app.set('port' , process.env.PORT || 3500);

// Middlewares
app.use(cors({ origin: 'http://localhost:3000' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes 

// Starting server
app.listen(app.get('port') , () => {
    console.log('Server started on port -> ' + app.get('port'));
});