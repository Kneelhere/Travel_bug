var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlaceSchema = new Schema({
	name: {type: String, required: true},
	description: {type: String, required: true}
});

var Place = mongoose.model('Place', PlaceSchema);
// required for elsewhere
module.exports = Place;