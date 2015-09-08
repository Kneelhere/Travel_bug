// requiring dependencies 
var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	bcrypt = require('bcrypt');

// the user schema
var UserSchema = new Schema({
	email: {type: String, required: true},
	passwordDigest: {type: String, require: true},
	createdAt: {type: Date, default: Date.now()}
});

//create a new user with a hashed password
UserSchema.statics.createSecure = function (email, password, cb){
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

// user model
var User = mongoose.model('User', UserSchema);
// required for elsewhere
module.exports = User;