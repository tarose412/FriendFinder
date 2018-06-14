// Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

// EXPRESS CONFIGURATION

// Create Express server
var app = express();

// Set an initial port
var PORT = process.env.PORT || 3000;

// Setup Express to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTER

// The routes below tell the server how to respond when the user requests data from certain URLs
require('./app/routes/apiRoutes')(app);
require('./app/routes/htmlRoutes')(app);

// LISTENER
app.listen(PORT, function () {
    console.log('App listening on PORT: ' + PORT);
});