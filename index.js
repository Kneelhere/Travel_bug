//REQUIRED APPS
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");
var views = path.join(process.cwd(), "views/");
var db = require("./models");

app.use(bodyParser.urlencoded({extended: true}));

//serving js file
app.use("/vendor", express.static("public"));
app.use("/static", express.static("bower_components"));
//ROUTES
//home page
app.get("/", function(req,res){
	res.sendFile(path.join(views + 'index.html'));
})

//login page
app.get("/login", function (req,res){
	res.sendFile(path.join(views + 'login.html'));
})

//signup page
app.get("/signup", function (req,res){
	res.sendFile(path.join(views + 'signup.html'));
})

//where the user submits signup form
// app.post("/signup", function (req,res){
// 	// grabs the user from the params
// 	var user = req.body.user;
// 	// gets email and password
// 	var email = user.email;
// 	var password = user.password;
// 	// creates new user
// 	db.User.createSecure(email, password, function(){
// 		db.User.authenticate(email, password, function (err, user){
// 			if(err){
// 				console.log(err);
// 				return res.sendStatus(401);
// 			}
// 			req.login(user);
// 			res.redirect("/");
// 		});
// 	});
// });

var listener = app.listen(3000, function(){
	console.log("Listening on port " + listener.address().port);
});