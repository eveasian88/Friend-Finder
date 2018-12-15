// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 8080;


var apiRoutes = require("./app/routing/apiRoute");
var htmlRoutes = require("./app/routing/htmlRoutes");


// set up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());


// router
apiRoutes(app);
htmlRoutes(app);

// set listener on PORT
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
