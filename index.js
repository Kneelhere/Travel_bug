//REQUIRED APPS
var express = require('express');
var bodyParser = require('body-parser');
var app = express();


//ROUTES
app.get("/", function(req,res){
	res.send("Hello World");
})

var listener = app.listen(3000, function(){
	console.log("Listening on port " + listener.address().port);
});