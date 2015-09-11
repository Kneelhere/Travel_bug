var db = require('./models');

db.Place.create({name: "Piers", description: "Able to see seals that come from the bay."}, function(err,place){
	if(err){
		console.log(err);
	}
	else{
		console.log(place);
	}
});