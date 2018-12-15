// set required files
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");

var app = express()
var PORT = process.env.PORT || 8080;


// set express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));


// require modules from other files
require('./app/routing/apiRoutes.js')(app);
require('./app/routing/htmlRoutes.js')(app);

// set listener on PORT
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
