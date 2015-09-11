var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/Travel_bug_3");
module.exports.User = require("./user");
module.exports.Place = require("./place");

//process.env.MONGOLAB_URI ||
                 // process.env.MONGOHQ_URL || 
                 // "gentle-lake-1414.herokuapp.com"