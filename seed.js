var db = require('./models');

db.User.remove({}, function(err,users){
	if(err){
		console.log(err);
	}
	else{
		console.log("deleted database");
	}
})