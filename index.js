//REQUIRED APPS
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");
var views = path.join(process.cwd(), "views/");

//serving js file
app.use("vendor", express.static("public"));

//ROUTES
app.get("/", function(req,res){
	res.sendFile(path.join(views + 'index.html'));
})

app.get("/login", function (req,res){
	res.sendFile(path.join(views + 'login.html'));
})

var listener = app.listen(3000, function(){
	console.log("Listening on port " + listener.address().port);
});