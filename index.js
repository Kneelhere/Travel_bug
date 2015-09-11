//REQUIRED APPS
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var path = require("path");
var views = path.join(process.cwd(), "views/");
var db = require("./models");
var session = require("express-session");
var _ = require("underscore");
var ejs = require('ejs');

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

//serving js file
app.use("/vendor", express.static("public"));
app.use("/static", express.static("bower_components"));

// create a session
app.use(
	session({
		secret: 'impossible-to-crack-key',
		resave: false,
		saveUninitialized: true
	})
);

app.use(function(req, res, next){
	req.login = function(user){
		req.session.userId = user._id;
	};
	// find current user
	req.currentUser = function(cb) {
		db.User.findOne({_id: req.session.userId},
			function(err,user){
				req.user = user;
				cb(null,user);
			})
	};
	// logout
	req.logout = function(){
		req.session.userId = null;
		req.user = null;
	}
	next();
});

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

app.get("/profile", function(req,res){
	// db.User.authenticate(email, password, function (err, user){
	// 	if(err){
	// 		console.log(err);
	// 		return res.sendStatus(401);
	// 	}
	// 	req.login(user);
	// 	res.redirect("/profile");
	// });
	res.sendFile(path.join(views + 'profile.html'));
})

app.get("/sf", function(req,res){
	res.render('SF.ejs', {name: name, description: description});
})

//where the user submits signup form
app.post("/signup", function signup(req,res){
	// grabs user from the params
	var user = req.body.user;
	// gets email and password
	var email = user.email;
	var password = user.password;
	// creates new user
	db.User.createSecure(email, password, function(err, user){
		// if(password.length < 6){
		// 	alert("Password needs to have a min of 6 characters");
		// }
		if(err) console.log(err);
		req.login(user);
		res.redirect("/profile");
		// db.User.authenticate(email, password, function (err, user){
		// 	if(err){
		// 		console.log(err);
		// 		return res.sendStatus(401);
		// 	}
		// 	req.login(user);
		// 	res.redirect("/profile");
		// });
	});
});

app.post("/login", function login(req,res){
	var user = req.body.user;
	var email = user.email;
	var password = user.password;
	db.User.authenticate(email, password, function(err,user){
		req.login(user);
		res.redirect("/profile");
	});
});

app.post("/sf", function create(req,res){
	var name = req.body.place.name;
	var description = req.body.place.description;
	var newPlace = {name: name, description: description};

	db.Place.create(newPlace, function(err, place){
		if (err) {
			console.log(err);
			return res.sendStatus(400);
		}
	res.send(place);
	console.log(place);
	// res.redirect("/sf");
	})
});

var listener = app.listen(process.env.PORT || 3000, function(){
	console.log("Listening on port " + listener.address().port);
});











