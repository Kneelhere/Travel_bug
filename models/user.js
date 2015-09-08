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

// user model, so it can be required else where
var User = mongoose.model('User', UserSchema);
module.exports = User;