//REQUIRED APPS
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//serving js file
app.use("vendor", express.static("public"));

//ROUTES
app.get("/", function(req,res){
	res.send("Hello World");
})

var listener = app.listen(3000, function(){
	console.log("Listening on port " + listener.address().port);
});