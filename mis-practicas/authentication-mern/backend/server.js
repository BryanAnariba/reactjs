require('dotenv').config();
const express = require('express');
const { json, urlencoded } = require('body-parser');
const cors = require('cors');

const app = express();

// Settings
app.set('port', process.env.PORT || 3600);

// Middlewares
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));

// Routes

// Starting server
app.listen(app.get('port'), (err) => {
    if ( err ) { console.log(err); }
    console.log(`Server started on port ${ app.get('port') }`);
})