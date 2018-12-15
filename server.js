// dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var cors = require("cors");

var app = express();
var PORT = process.env.PORT || 8080;


var apiRoutes = require("");
var htmlRoutes = require("");


// set up express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// cors
app.use(cors());

// router
apiRoutes(app);
htmlRoutes(app);

// set listener on PORT
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
