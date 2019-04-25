// Load Package
var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

// Load Custom Configure
require("./config/mongoose");
require("./config/chatScript")(io);

// Configure app to use body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride());

// Configure Server Port
var port = process.env.PORT || 3000;

// Configure Routes
require("./routes/userRoutes")(app);

// Run Server
var server = app.listen(port, function() {
	console.log("Express server has started on port " + port);
});