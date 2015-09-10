// requiring dependencies 
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	bcrypt = require('bcrypt');

// the user schema
var UserSchema = new Schema({
	email: {type: String, required: true},
	passwordDigest: {type: String, require: true},
	place: [/*create place for later */],
	createdAt: {type: Date, default: Date.now()}
});

//create a new user with a hashed password
UserSchema.statics.createSecure = function (email, password, firstName, lastName, cb){
	//references the schema
	var _this = this;
	bcrypt.genSalt(function(err, salt){
		bcrypt.hash(password, salt, function (err, hash){
			var user = {
				email: email,
				passwordDigest: hash
			};
			_this.create(user,cb);
		});
	});
};

//authentication for login
UserSchema.statics.authenticate = function(email, password, cb) {
	//finds user by email
	this.findOne({email: email}, function(err, user){
		if (user === null){
			cb("Can not find user with that email", null);
		// if found check for correct password
		} else if(user.checkPassword(password)) {
			cb(null,user);
		} else {
			cb("password incorrect", user)
		}
	});
};

// compare password user enters with hashed password (`passwordDigest`)
UserSchema.methods.checkPassword = function (password) {
  return bcrypt.compareSync(password, this.passwordDigest);
};

// user model
var User = mongoose.model('User', UserSchema);
// required for elsewhere
module.exports = User;



